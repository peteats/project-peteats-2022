import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import apiHelper from '../utils/helpers';

const FAKE_IMAGE = 'https://fakeimg.pl/400x300/';

function PrintResponse(data) {
  return (
    <article className="rounded-lg bg-slate-200 text-sm font-normal">
      <div className="flex flex-wrap p-4">
        <pre className="">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </article>
  );
}
/* end of PrintResponse(data) */

function CardWithBorderAndCol({ children }) {
  return (
    <section className="flex flex-col justify-center rounded-[20px] border-4 border-[#DB8C8C] p-10">
      {children}
    </section>
  );
}
/* end of CardWithBorderAndCol({ children }) */

CardWithBorderAndCol.propTypes = {
  children: PropTypes.node.isRequired,
};

function HistoryOrderFormItem({ restInfos }) {
  const {
    OrderStatusName,
    PaymentName,
    ProductDeliveryName,
    CreatDate,
    Ordersum,
    Name,
    MobilePhone,
    ShopName,
  } = restInfos;

  if (!restInfos) {
    return <h3>LOADING...</h3>;
  }

  return (
    <>
      {/* <PrintResponse data={restInfos} /> */}

      <li>
        <p className="flex items-center gap-4">
          訂購店家
          <span className="font-normal">{ShopName}</span>
        </p>
      </li>

      <li>
        <p className="flex items-center gap-4">
          訂單狀態
          <span className="font-normal">{OrderStatusName}</span>
        </p>
      </li>

      <li>
        <p className="flex items-center gap-4">
          訂單時間
          <span className="font-normal">{CreatDate}</span>
        </p>
      </li>

      <li>
        <p className="flex items-center gap-4">
          付款方式
          <span className="font-normal">{PaymentName}</span>
        </p>
      </li>

      <li>
        <p className="flex items-center gap-4">
          付款金額
          <span className="font-normal">{Ordersum}</span>
        </p>
      </li>

      <li>
        <p className="flex items-center gap-4">
          提貨姓名
          <span className="font-normal">{Name}</span>
        </p>
      </li>

      <li>
        <p className="flex items-center gap-4">
          聯絡電話
          <span className="font-normal">{MobilePhone}</span>
        </p>
      </li>
    </>
  );
}
/* end of HistoryOrderFormItem() */

function SectionOrderForm({ data }) {
  const { Message, ...restInfos } = data;
  // Message === Array

  if (!data) {
    return <h3>LOADING...</h3>;
  }

  return (
    <>
      {/* <PrintResponse data={data} /> */}
      {/* <PrintResponse data={restInfos} /> */}

      <ul className="flex flex-col gap-4">
        {/* #TODO: inject data from Server */}
        <HistoryOrderFormItem restInfos={restInfos} />
      </ul>

      <div>
        <p>送餐地址</p>
        <p>{restInfos.Address}</p>

        {/* <picture className="relative block w-full pt-[100%] md:h-64 md:pt-[50%]">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="random_image"
            className="absolute left-0 top-0 h-full w-full object-cover object-center"
          />
        </picture> */}
      </div>

      <div>
        <p>備註</p>
        {/* <p>{Memo}</p> */}
        <ul>
          {/* #TODO: inject data from Server */}
          {Message.map((item, i) => {
            const fakeId = `${i}123`;
            // console.log('Summary');
            // return (<li key={fakeId}> </li>);
          })}
        </ul>
      </div>
    </>
  );
}

function SummaryItem({ item }) {
  const { ProductName, Amount, Price } = item;

  return (
    <li className="mb-6  md:mb-6">
      <section className="flex items-center justify-between">
        <h4 className="w-3/5">{ProductName}</h4>

        <div className="flex w-2/5 items-center justify-between">
          <p className="">{Amount}</p>
          <p className="justify-end">{Price * Amount}</p>
        </div>
      </section>
    </li>
  );
}
/* end of SummaryItem */

function SummaryList({ data }) {
  const { Message, ...restInfos } = data;
  const { Ordersum } = restInfos;

  return (
    <>
      <h3 className="text-center  md:text-left">訂單內容</h3>
      {/* <PrintResponse data={Message} /> */}

      <div className="hidden  md:mb-2 md:flex md:items-center md:justify-between md:border-b-2 md:pt-4 md:pb-3 md:font-normal">
        <p className="w-3/5">品項</p>

        <div className="flex w-2/5 items-center justify-between">
          <p className="">數量</p>
          <p className="justify-end">金額</p>
        </div>
      </div>
      {/* end of RWD-PC-title */}

      <ul className="md:border-b-2 md:pt-4">
        {/* #TODO: inject data from Server */}
        {Message.map((item, i) => {
          const fakeKey = `${i}123`;
          const fakeId = `0${i}0${item.OrderInformationId}`;

          // console.log('Summary');
          return <SummaryItem key={fakeKey} item={item} fakeId={fakeId} />;
          // return <SummaryItem key={item.Id} item={item} />;
        })}
      </ul>

      <div className="flex items-center justify-end gap-6  md:py-4 md:font-normal">
        <p className="w-[36%] text-center">運費</p>

        <p className="">{Message[0]?.Freight}</p>
      </div>

      <div className="flex items-center justify-end gap-6  md:py-2 md:font-normal">
        <p className="w-[36%] text-center">總金額</p>

        <p className="">{Ordersum}</p>
      </div>
    </>
  );
}
/* end of SummaryList() */

function PageHistoryDetail() {
  const { orderId } = useParams();
  const [orderRes, setOrderRes] = useState(null);

  // getOrderDetail
  useEffect(() => {
    apiHelper.getOrderDetail(orderId).then((res) => {
      // console.log(res);

      if (res?.data?.Status) {
        // console.log('getHistoryOrders:::', res?.data);

        const { Message, OrderStatus, Ordersum } = res.data;

        /**
         * #NOTE: the nested <Object> have to use Spread syntax, or getting undefined
         */
        setOrderRes({ Message, ...OrderStatus, Ordersum });
      }
    });
  }, [orderId]);

  if (!orderRes) {
    return <h3>LOADING...</h3>;
  }

  return (
    <>
      <div className="pe-container mx-auto my-20 font-bold">
        <h2 className="pb-6 text-center text-3xl">詳細訂單</h2>

        {/* <PrintResponse data={orderRes} /> */}

        <div className="gap-6  md:grid md:grid-flow-row md:grid-cols-12">
          <div className="md:col-span-8">
            <CardWithBorderAndCol>
              <div className="flex items-center justify-center gap-4">
                <h3>訂單編號</h3>

                <span className="text-[#DB8C8C]">{orderId}</span>
              </div>
              {/* #TODO: */}
              <SectionOrderForm data={orderRes} />
            </CardWithBorderAndCol>
          </div>

          <div className="md:col-span-4">
            <CardWithBorderAndCol>
              <SummaryList data={orderRes} />
            </CardWithBorderAndCol>
          </div>
        </div>
        {/* end of Grid */}
      </div>
      {/* end of container */}
    </>
  );
}
/* end of PageHistoryDetail() */

// function PageShops() {
//   return (
//     <>
//       <SectionAreaSmall />
//       <StoreList />
//       <hr />
//     </>
//   );
// }
/* end of PageShops() */

// export default PageShops;

function Draft8() {
  return (
    <>
      <PageHistoryDetail />
      <hr />
    </>
  );
}
/* end of Draft8() */

export default Draft8;
