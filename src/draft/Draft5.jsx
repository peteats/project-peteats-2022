import React from 'react';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

function SummaryItem() {
  return (
    <li className="mb-6  md:mb-6">
      <section className="flex items-center justify-between">
        <h4 className="w-3/5">TITLE</h4>

        <div className="flex w-2/5 items-center justify-between">
          <p className="">1</p>
          <p className="justify-end">PRICE</p>
        </div>
      </section>
    </li>
  );
}
/* end of SummaryItem */

function OrderSummaryList() {
  return (
    <section className="flex flex-col gap-10 rounded-2xl border-4 border-[#DB8C8C] p-10  lg:w-2/5">
      <h3 className="text-center  md:text-left">訂單內容</h3>

      <div className="hidden  md:flex md:items-center md:justify-between">
        <p className="w-3/5">品項</p>

        <div className="flex w-2/5 items-center justify-between">
          <p className="">數量</p>
          <p className="justify-end">金額</p>
        </div>
      </div>
      {/* end of RWD-PC-title */}

      <ul className="">
        {/* #TODO: inject data from Server */}
        <SummaryItem />
        <SummaryItem />
        <SummaryItem />
      </ul>

      <div className="flex items-center justify-between gap-6">
        <p className="w-3/5 text-center">PAYMENT</p>

        <p className="">$100</p>
      </div>

      <button
        type="button"
        className="rounded-sm bg-black py-2 font-normal text-white"
      >
        CHECKOUT
      </button>
    </section>
  );
}
/* end of OrderSummaryList */

function CheckoutDetail() {
  return (
    <div className="flex flex-col gap-10 rounded-2xl border-4 border-[#DB8C8C] p-10 font-bold  lg:w-[calc(66%_-_24px)]">
      <section className="">
        <h3 className="mb-6">送餐詳情</h3>

        <label htmlFor="a" className="my-4 block w-full">
          送餐時間
          <input
            type="text"
            name="a"
            id=""
            className="border-1 my-1 block w-full rounded-sm border-[#DB8C8C] py-2 px-3"
            placeholder="string"
          />
          <span className="hidden text-xs">hint</span>
        </label>

        <label htmlFor="a" className="my-4 block w-full">
          送餐時間
          <input
            type="text"
            name="a"
            id=""
            className="border-1 my-1 block w-full rounded-sm border-[#DB8C8C] py-2 px-3"
            placeholder="string"
          />
          <span className="hidden text-xs">hint</span>
        </label>

        <label htmlFor="a" className="my-4 block w-full">
          送餐時間
          <input
            type="text"
            name="a"
            id=""
            className="border-1 my-1 block w-full rounded-sm border-[#DB8C8C] py-2 px-3"
            placeholder="string"
          />
          <span className="hidden text-xs">hint</span>
        </label>

        <label htmlFor="a" className="my-4 block w-full">
          送餐時間
          <input
            type="text"
            name="a"
            id=""
            className="border-1 my-1 block w-full rounded-sm border-[#DB8C8C] py-2 px-3"
            placeholder="string"
          />
          <span className="hidden text-xs">hint</span>
        </label>

        <div>
          <p className="hidden  md:block">MAP</p>
          {/* end of RWD-PC tittle */}

          <picture className="relative block w-full pt-[100%] md:h-64 md:pt-[50%]">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="random_image"
              className="absolute left-0 top-0 h-full w-full object-cover object-center"
            />
          </picture>
        </div>
      </section>

      <section>
        <h3 className="mb-6">付款方式</h3>

        <ul className="flex flex-col gap-6">
          <li>
            <p>1</p>
          </li>
          <li>
            <p>1</p>
          </li>
          <li>
            <p>1</p>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="mb-6">備註</h3>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="block h-16 w-full py-2 px-3"
        />
      </section>
    </div>
  );
}
/* end of CheckoutDetail() */

function PageCheckout() {
  return (
    <div className="container mx-auto  px-1 pt-40 pb-20  lg:pt-24 lg:pb-10">
      <div className="flex flex-col gap-6  lg:flex-row ">
        <CheckoutDetail />

        <OrderSummaryList />
      </div>
    </div>
  );
}
/* end of PageCheckout() */

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

function Draft5() {
  return (
    <>
      <PageCheckout />
      <hr />
      <hr />
    </>
  );
}
/* end of Draft5() */

export default Draft5;
