import React from 'react';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

function OrderState() {
  return (
    <div className="container mx-auto  w-96 p-3">
      <div className="flex flex-col gap-6">
        <section className="flex items-center justify-between">
          <div className="order-1 flex w-1/3 flex-col items-center justify-center">
            <p className="">訂單狀態</p>
            <p className="pt-6 pb-2">訂單狀態</p>
            <p className="">訂單狀態</p>
          </div>

          <picture className="relative order-2 block w-2/3">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="random_image"
              className="absolute left-0 top-0 h-full w-full rounded-3xl object-cover object-center shadow-sm"
            />
          </picture>
        </section>

        <button
          type="button"
          className="w-full rounded-sm bg-black py-2 text-white"
        >
          CLICK
        </button>
      </div>
    </div>
  );
}
/* end of OrderState() */

function SectionOrderInfo() {
  return (
    <div className="flex flex-col justify-start font-bold  md:flex-row">
      <img
        className="w-[364px] rounded-sm object-cover object-center"
        src="https://picsum.photos/seed/picsum/200/300"
        alt="imgStore"
      />

      <section className="md:1/2 md:ml-4">
        <h2 className="mb-4 mt-4 text-center text-lg md:mt-0 md:text-left">
          TITLE2
        </h2>

        <ul className="flex flex-col gap-4">
          {/* #TODO: data from Server */}
          {/* <ShopInfoItem /> */}

          <li className="">
            <p>
              TITLE
              <span className="ml-4 font-normal">string</span>
            </p>
          </li>
          <li className="">
            <p>
              TITLE
              <span className="ml-4 font-normal">string</span>
            </p>
          </li>
          <li className="">
            <p>
              TITLE
              <span className="ml-4 font-normal">string</span>
            </p>
          </li>
          <li className="">
            <p>
              TITLE
              <span className="ml-4 font-normal">string</span>
            </p>
          </li>
          <li className="">
            <p>
              TITLE
              <span className="ml-4 font-normal">string</span>
            </p>
          </li>
        </ul>
      </section>

      <div className="md:w-[16%]">
        <button
          type="button"
          className="w-full rounded-sm bg-black py-2 text-white"
        >
          CLICK
        </button>
      </div>
    </div>
  );
}
/* end of SectionShopInfo() */

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

function Draft10() {
  return (
    <>
      {/* <SectionOrderInfo /> */}
      <hr />
      {/* <OrderState /> */}
      <hr />
    </>
  );
}
/* end of Draft10() */

export default Draft10;
