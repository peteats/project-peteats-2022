import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

import LoadingContext from '../contexts/LoadingContext';

import apiHelper from '../utils/helpers';

function PageCheckoutResult() {
  // const location = useLocation();

  // const [orderData, setOrderData] = useState([]);
  // const { isLoading, setLoading } = LoadingContext.useLoading();

  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    // console.log('useEffect()');
    // apiHelper.getHistoryOrder().then((res) => {
    //   console.log(res);
    //   if (res?.data?.Status)1 {
    //     console.log('getHistoryOrder:::', res?.data);
    //     const { Message } = res.data;
    //     setOrderData(Message);
    //   }
    // });
  }, [orderData]);

  // const [cateData, setCateData] = useState([]);

  // useEffect(() => {
  //   if (!cateData.length) {
  //     apiHelper.getShopTag().then((res) => {
  //       console.log(res);

  //       if (res?.data?.Status) {
  //         console.log('getShopTag:::', res?.data?.Data);

  //         const { Data } = res.data;
  //         setCateData(Data);
  //       }
  //     });
  //   }
  // }, [cateData]);

  // useEffect(() => {
  //   let isFetch = false;
  //   apiHelper.getHistoryOrder().then((res) => {
  //     console.log(res);

  //     if (res?.data?.Status) {
  //       console.log('getHistoryOrder:::', res?.data);

  //       const { Message } = res.data;
  //       console.log(Message[0]);

  //       if (!isFetch) {
  //         console.log('!isFetch');
  //         setOrderData(Message);
  //       }
  //     }
  //   });
  //   return () => {
  //     isFetch = true;
  //   };
  // }, []);
  // }, [null]);

  // if (!orderData) {
  // if (orderData.length < 1) {
  //   return <h2 className="py-40">LOADING...</h2>;
  // }

  return (
    <div className="container mx-auto  px-1 pt-40 pb-20  lg:pt-24 lg:pb-10">
      <div className="grid grid-cols-12 items-center justify-center text-black">
        <section className="col-span-8 col-start-3">
          <h2 className="mb-6 text-center font-bold">目前訂單進度</h2>

          <button
            type="button"
            className="m-2 rounded bg-[#6AF] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
            onClick={() => apiHelper.getHistoryOrder().then((res) => {
              // console.log(res);

              if (res?.data?.Status) {
                // console.log('getHistoryOrder:::', res?.data);

                const { Message } = res.data;
                // console.log(Message[0].ShopName);

                setOrderData(Message[0]);
              }
            })}
          >
            4-5_getHistoryOrder
          </button>

          <div className="flex flex-col gap-10 rounded-2xl border-4 border-[#DB8C8C] p-10">
            <ul className="flex flex-col gap-4">
              <li>
                <p>
                  {orderData.ShopName}
                  {/* <span className="pl-4">{orderData.Id}</span> */}
                </p>
              </li>

              <li>
                <p>
                  目前訂單進度
                  {/* <span className="pl-4">{orderData.OrderStatusName}</span> */}
                </p>
              </li>

              <li>
                <p>
                  訂購品項
                  {/* <span className="pl-4">{orderData.ProductName}</span> */}
                </p>
              </li>

              <li>
                <p>
                  title
                  <span className="pl-4">string</span>
                </p>
              </li>

              <li>
                <p>
                  title
                  <span className="pl-4">string</span>
                </p>
              </li>
            </ul>

            <div className="flex gap-10">
              <button type="button" className="w-full border py-2">
                CLICK
              </button>

              <button type="button" className="w-full bg-black py-2 text-white">
                CLICK
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
/* end of PageCheckoutResult() */

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

function Draft6() {
  return (
    <>
      <PageCheckoutResult />
      <hr />
    </>
  );
}
/* end of Draft6() */

export default Draft6;
