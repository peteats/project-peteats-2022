import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

// import L from 'leaflet';

import apiHelper from '../utils/helpers';
// const IMAGE = 'https://picsum.photos/seed/picsum/200/300';

const IMAGE = 'https://fakeimg.pl/400x300/';

function HistoryOrderItem({ item, fakeId }) {
  const {
    OrderInformationId,
    ShopName,
    OrderStatusName,
    ProductName,
    imageUrl,
    CreatDate,
    PaymentName,
  } = item;

  const [orderState, setOrderState] = useState(null);

  return (
    <>
      {/* <div id="map" /> */}
      <li className="flex flex-col gap-6  md:grid md:grid-flow-row md:grid-cols-12">
        <div className="md:col-span-4">
          <picture className="relative block w-full pt-[70%]">
            <img
              src={imageUrl || IMAGE}
              alt={ShopName}
              className="absolute left-0 top-0 h-full w-full rounded-2xl object-cover object-center"
            />
          </picture>
        </div>

        <section className="font-bold  md:col-span-5">
          <h3 className="mb-4 text-center  md:text-left">
            {/* <code>{OrderInformationId}</code> */}
            {ShopName}
          </h3>

          <ul className="flex flex-col gap-4">
            <li>
              <p className="flex items-center gap-4">
                訂單編號
                <span className="">
                  {fakeId.length < 5 ? fakeId : fakeId.substring(0, 5)}
                </span>
                {/* <span className="">{fakeId}</span> */}
                {/* <span className="">{OrderInformationId}</span> */}
              </p>
            </li>

            <li>
              <p className="flex items-center gap-4">
                訂單狀態
                {/* <span>{OrderStatusName}</span> */}
                <button
                  type="button"
                  className="block py-2 text-[#DB8C8C] transition delay-150 duration-300
                  ease-in-out hover:-translate-y-1
                  hover:scale-105
                  focus:outline-none"
                  onClick={() => {
                    apiHelper.getOrderStatus(OrderInformationId).then((res) => {
                      // console.log('API-getOrderStatus:::', res);

                      if (res?.data?.Status) {
                        // console.log('getHistoryOrders:::', res?.data);

                        const { data } = res.data;
                        const { OrderStatusName: nowOrderStatus } = data[0];
                        // console.log('OrderStatusName', nowOrderStatus);
                        setOrderState(nowOrderStatus);
                      }
                      /* end of IF(Status) */
                    });
                  }}
                >
                  {/* CHECK */}
                  {/* {orderState && orderState} */}
                  {orderState || OrderStatusName}
                </button>
              </p>
            </li>
            <li>
              <p className="flex items-center gap-4">
                訂單時間
                <span>{CreatDate.split('T')[0]}</span>
                <span>{CreatDate.split('T')[1].substring(0, 8)}</span>
                {/* <span>{CreatDate}</span> */}
              </p>
            </li>
            <li>
              <p className="flex items-center gap-4">
                付款方式
                <span>{PaymentName}</span>
              </p>
            </li>
          </ul>
        </section>

        <div className="flex flex-col items-end justify-center gap-7  md:col-span-3">
          {/* <button
            type="button"
            className="block w-full rounded-sm border py-2 text-black md:w-2/3"
          >
            查看詳細訂單
          </button> */}

          <Link
            to={`/me/orders/${OrderInformationId}`}
            className="block w-full rounded-sm border py-2 text-center text-[#343A40]"
          >
            {/* /orders/:id */}
            查看詳細訂單
          </Link>

          <Link
            to={`/me/orders/${OrderInformationId}/review`}
            className="hover:scale-103 block w-full rounded bg-[#343A40]
            py-2.5 text-center font-normal text-white transition delay-150
            duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-[#DB8C8C]
            focus:outline-none active:bg-[#DB8C8C]/80"
          >
            {/* '/me/orders/:orderId/review', */}
            給予訂單評價
          </Link>
        </div>
      </li>
      {/* end of Grid */}
    </>
  );
}
/* end of HistoryOrderItem() */

function PageHistoryOrder() {
  const [historyOrders, setHistoryOrders] = useState([]);
  // getHistoryOrder

  useEffect(() => {
    apiHelper.getHistoryOrders().then((res) => {
      // console.log(res);

      if (res?.data?.Status) {
        // console.log('getHistoryOrders:::', res?.data);

        const { Message } = res.data;
        // console.log(DetailList[0]);
        // console.log(Data[0]);
        setHistoryOrders(Message);
        // const tmp = { ...Message };
        // const tmpReverse = tmp.reverse();
        // setHistoryOrders(tmpReverse);
      }
    });
  }, []);

  return (
    <>
      <div className="pe-container mx-auto my-20 ">
        <div className="items-center  md:grid md:grid-flow-row md:grid-cols-12">
          <div className="pb-6  md:col-span-8 md:pb-2">
            <h2 className="text-center text-2xl font-bold  md:text-left">
              訂單資訊
            </h2>

            <button
              type="button"
              className="m-2 hidden rounded bg-[#6AF] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
              onClick={() => apiHelper.getHistoryOrders().then((res) => {
                // console.log(res);

                if (res?.data?.Status) {
                  // console.log('getHistoryOrders:::', res?.data);
                  // const { Data, DetailList } = res.data;
                  // console.log(DetailList[0]);
                  // console.log(Data[0]);
                  // setCateData(Data);
                }
              })}
            >
              4-5_getHistoryOrder
            </button>
          </div>

          <div className="md:col-span-4">
            <button
              type="button"
              className="block hidden w-full rounded-sm border py-2 text-black"
            >
              CLICK
            </button>
          </div>
        </div>

        <ul className="flex flex-col gap-20 pt-20  md:gap-10 md:pt-10">
          {historyOrders.map((item, i) => {
            // console.log('item-');
            const fakeId = `0${i}0${item.OrderInformationId}`;

            return (
              <HistoryOrderItem key={fakeId} item={item} fakeId={fakeId} />
              // <HistoryOrderItem key={item.OrderInformationId} item={item} />
            );
          })}
          {/* <HistoryOrderItem /> */}
          {/* <HistoryOrderItem /> */}
        </ul>
      </div>
      {/* end of container */}
    </>
  );
}
/* end of PageHistoryOrder() */

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

function Draft7() {
  return (
    <>
      <PageHistoryOrder />
      <hr />
    </>
  );
}
/* end of Draft7() */

export default Draft7;
