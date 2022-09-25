import React from 'react';
// import React, { useState } from 'react';

import apiHelper from '../utils/helpers';

import HomeHero from '../components/HomeHero';
import HomeCategory from '../components/HomeCategory';
import HomeArea from '../components/HomeArea';
import HomeIntro from '../components/HomeIntro';
import HomeShops from '../components/HomeShops';

function DevBtns() {
  return (
    <div
      className=" container
        mx-auto flex min-h-screen flex-wrap items-center justify-center px-4"
    >
      <div className="flex items-center justify-center gap-4">
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

        <button
          type="button"
          className="m-2 rounded bg-[#6AF] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => apiHelper.getCart().then((res) => {
            console.log(res);

            if (res?.data?.Status) {
              console.log('getCart:::', res?.data);

              const { Message } = res.data;
              console.log('cart:', Message[0].ProductDetailId);
              // console.log(Data[0]);
              // setCateData(Data);
            }
          })}
        >
          1-getCart
        </button>

        <button
          type="button"
          className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            const optionId = 8;
            const msg = 'hi';
            const amount = 11;
            return apiHelper
              .addItemToCart({ optionId, msg, amount })
              .then((res) => {
                console.log(res);

                if (res?.data?.Status) {
                  console.log('addItemToCart:::', res?.data);

                  // const { Data, DetailList } = res.data;
                  // console.log(DetailList[0]);
                  // console.log(Data[0]);
                  // setCateData(Data);
                }
              });
          }}
        >
          2-addItemToCart
        </button>

        <button
          type="button"
          className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            const itemId = 27;
            const detailId = 17;
            const amount = 13;
            const msg = 'edit';

            return apiHelper
              .editCart({
                itemId,
                detailId,
                amount,
                msg,
              })
              .then((res) => {
                console.log(res);

                if (res?.data?.Status) {
                  console.log('editCart:::', res?.data);

                  // const { Data, DetailList } = res.data;
                  // console.log(DetailList[0]);
                  // console.log(Data[0]);
                  // setCateData(Data);
                }
              });
          }}
        >
          --editCart
        </button>

        <button
          type="button"
          className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => apiHelper
            .checkoutCart({ Id, paymentId, deliveryId })
            .then((res) => {
              console.log(res);

              if (res?.data?.Status) {
                console.log('submitCart:::', res?.data);

                // const { Data, DetailList } = res.data;
                // console.log(DetailList[0]);
                // console.log(Data[0]);
                // setCateData(Data);
              }
            })}
        >
          5-submitCart
        </button>

        <button
          type="button"
          className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => apiHelper.orderPay().then((res) => {
            console.log(res);

            if (res?.data?.Status) {
              console.log('submitCart:::', res?.data);

              // const { Data, DetailList } = res.data;
              // console.log(DetailList[0]);
              // console.log(Data[0]);
              // setCateData(Data);
            }
          })}
        >
          --orderPay
        </button>

        <button
          type="button"
          className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => apiHelper
            .checkoutCart({ Id, paymentId, deliveryId })
            .then((res) => {
              console.log(res);

              if (res?.data?.Status) {
                console.log('submitCart:::', res?.data);

                // const { Data, DetailList } = res.data;
                // console.log(DetailList[0]);
                // console.log(Data[0]);
                // setCateData(Data);
              }
            })}
        >
          5-submitCart
        </button>
      </div>

      <hr />

      <button
        type="button"
        className="block rounded-lg border border-gray-200 bg-white p-0.5
          text-center text-sm font-medium text-gray-900
          hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
          focus:ring-4 focus:ring-gray-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => apiHelper.getShopTag().then((res) => {
          console.log(res);

          if (res?.data?.Status) {
            console.log('getShopTag:::', res?.data?.Data);

            const { Data } = res.data;
            setCateData(Data);
          }
        })}
      >
        1-getShopClass
      </button>

      <button
        type="button"
        className="block rounded-lg border border-gray-200 bg-white p-0.5
          text-center text-sm font-medium text-gray-900
          hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
          focus:ring-4 focus:ring-gray-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => apiHelper.getShopCity().then((res) => {
          console.log(res);

          if (res?.data?.Status) {
            console.log('getShopCity:::', res?.data);

            const { Message } = res.data;
            console.log(Message[0]);
            // setCateData(Data);
          }
        })}
      >
        2-getShopCity
      </button>

      <button
        type="button"
        className="block rounded-lg border border-gray-200 bg-white p-0.5
          text-center text-sm font-medium text-gray-900
          hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
          focus:ring-4 focus:ring-gray-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => apiHelper.getShopHot().then((res) => {
          console.log(res);

          if (res?.data?.Status) {
            console.log('getShopHot:::', res?.data);

            const { Message } = res.data;
            console.log(Message[0]);
            // setCateData(Data);
          }
        })}
      >
        3-getShopHot
      </button>

      <button
        type="button"
        className="block rounded-lg border border-gray-200 bg-white p-0.5
          text-center text-sm font-medium text-gray-900
          hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
          focus:ring-4 focus:ring-gray-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => apiHelper.getShopsByTag(1).then((res) => {
          console.log(res);

          if (res?.data?.Status) {
            console.log('getShopsByTag:::', res?.data);

            const { data } = res.data;
            console.log(data[0]);
            // setCateData(Data);
          }
        })}
      >
        4-getShopsByTag
      </button>

      <button
        type="button"
        className="block rounded-lg border border-gray-200 bg-white p-0.5
          text-center text-sm font-medium text-gray-900
          hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
          focus:ring-4 focus:ring-gray-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => apiHelper.getShopByCity().then((res) => {
          console.log(res);

          if (res?.data?.Status) {
            console.log('getShopByCity:::', res?.data?.Data);

            const { Data } = res.data;
            console.log(Data[0]);
            // setCateData(Data);
          }
        })}
      >
        5-getShopByCity
      </button>

      <button
        type="button"
        className="block rounded-lg border border-gray-200 bg-white p-0.5
          text-center text-sm font-medium text-gray-900
          hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
          focus:ring-4 focus:ring-gray-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => apiHelper.getInfoMenu(2).then((res) => {
          console.log(res);
          if (res?.data?.Status) {
            console.log('getInfoMenu:::', res?.data);

            const { Message } = res.data;
            console.log(Message[0]);
            // setCateData(Data);
          }
        })}
      >
        6-getInfoMenu
      </button>

      <button
        type="button"
        className="block rounded-lg border border-gray-200 bg-white p-0.5
          text-center text-sm font-medium text-gray-900
          hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
          focus:ring-4 focus:ring-gray-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => apiHelper.getMenuItem(10).then((res) => {
          console.log(res);
          if (res?.data?.Status) {
            console.log('getMenuItem:::', res?.data);

            const { Data, DetailList } = res.data;
            console.log(DetailList[0]);
            console.log(Data[0]);
            // setCateData(Data);
          }
        })}
      >
        7-getMenuItem
      </button>
    </div>
  );
}
/* end of DevBtns() */

function DevHome() {
  return (
    <>
      {/* <DevBtns /> */}

      <HomeHero />

      {/* <HomeCategory data={cateData} /> */}
      <HomeCategory />

      <HomeArea />

      <HomeShops />

      <HomeIntro />
    </>
  );
}
/* end of DevHome() */

export default DevHome;
