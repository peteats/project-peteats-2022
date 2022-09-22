import React, { useEffect, useState } from 'react';

import apiHelper from '../utils/helpers';

const IMAGE = 'https://fakeimg.pl/400x300/';
// const IMAGE = 'https://picsum.photos/seed/picsum/200/300';

function HistoryOrderItem({ item }) {
  const {
    OrderInformationId, ShopName, OrderStatusName, ProductName,
  } = item;

  return (
    <>
      <li className="flex flex-col gap-6  md:grid md:grid-flow-row md:grid-cols-12">
        <div className="md:col-span-4">
          <picture className="relative block w-full pt-[70%]">
            <img
              src={IMAGE}
              alt={ShopName}
              className="absolute left-0 top-0 h-full w-full rounded-2xl object-cover object-center"
            />
          </picture>
        </div>

        <section className="font-bold  md:col-span-5">
          <h3 className="mb-4 text-center  md:text-left">
            <code>{OrderInformationId}</code>
            {ShopName}
          </h3>

          <ul className="flex flex-col gap-4">
            <li>
              <p className="flex items-center gap-4">
                訂單編號
                <span className="">{OrderStatusName}</span>
              </p>
            </li>

            <li>
              <p className="flex items-center gap-4">
                訂單狀態
                <span>{ProductName}</span>
              </p>
            </li>
            <li>
              <p className="flex items-center gap-4">
                訂單時間
                <span>STRING</span>
              </p>
            </li>
            <li>
              <p className="flex items-center gap-4">
                付款方式
                <span>STRING</span>
              </p>
            </li>
          </ul>
        </section>

        <div className="flex flex-col items-end justify-center gap-7  md:col-span-3">
          <button
            type="button"
            className="block w-full rounded-sm border py-2 text-black md:w-2/3"
          >
            查看詳細訂單
          </button>

          <button
            type="button"
            className="block w-full rounded-sm border py-2 text-black md:w-2/3"
          >
            給予訂單評價
          </button>
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
    apiHelper.getHistoryOrder().then((res) => {
      console.log(res);

      if (res?.data?.Status) {
        console.log('getHistoryOrder:::', res?.data);

        const { Message } = res.data;
        // console.log(DetailList[0]);
        // console.log(Data[0]);
        setHistoryOrders(Message);
      }
    });
  }, []);

  return (
    <>
      <div className="container mx-auto  px-1 pt-40 pb-20  md:pt-20">
        <div className="items-center  md:grid md:grid-flow-row md:grid-cols-12">
          <div className="pb-6  md:col-span-8 md:pb-2">
            <h2 className="text-center text-2xl font-bold  md:text-left">
              訂單資訊
            </h2>

            <button
              type="button"
              className="m-2 rounded bg-[#6AF] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
              onClick={() => apiHelper.getHistoryOrder().then((res) => {
                console.log(res);

                if (res?.data?.Status) {
                  console.log('getHistoryOrder:::', res?.data);

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
              className="block w-full rounded-sm border py-2 text-black"
            >
              CLICK
            </button>
          </div>
        </div>

        <ul className="flex flex-col gap-20 pt-20  md:gap-10 md:pt-10">
          {historyOrders.map((item) => {
            console.log('item-');
            return (
              <HistoryOrderItem key={item.OrderInformationId} item={item} />
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
