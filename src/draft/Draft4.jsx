import React from 'react';
import PropTypes from 'prop-types';

import imgStore from '../images/Store.png';
// import Area from '../images/Area.png';

function OrderItem() {
  return (
    <li>
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4  md:grid md:grid-cols-7 md:grid-rows-1">
          <section className="flex justify-between  md:col-span-5">
            <h4 className="">TITLE</h4>

            <span className="hidden  md:block md:w-1/5">$100</span>
            {/* end of RWD-PC-price */}
          </section>

          <div className="flex w-2/5 items-center justify-evenly  md:col-span-2 md:w-full md:flex-row">
            {/* #REVIEW: wired about flex mix grid of RWD */}
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          {/* end of items-Btn */}
        </div>

        <p className="md:hidden md:w-1/5">$100</p>
        {/* end of RWD-mobile-price */}

        <small className="text-xs">info</small>
      </div>
    </li>
  );
}
/* end of OrderItem */

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

function OrderList() {
  return (
    <section className="lg:w-[calc(66%_-_24px)]">
      <h3 className="border-b-1 border-[#D9D9D9] py-4">已選購餐點</h3>

      {/* #TODO: inject data from Server */}
      <ul>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ul>
    </section>
  );
}
/* end of OrderList */

function SectionOrder() {
  return (
    <>
      <div className="container mx-auto px-1">
        {/* min-h-screen */}
        <div className="flex flex-col justify-between gap-4 font-bold  lg:flex-row">
          <OrderList />

          <OrderSummaryList />
        </div>
      </div>
      {/* end of container */}
    </>
  );
}
/* end of SectionOrder */

function ShopInfoItem({ title, info }) {
  return (
    <li className="">
      <p>
        {title}
        <span className="ml-4 font-normal">{info}</span>
      </p>
    </li>
  );
}
/* end of ShopInfoItem  */

ShopInfoItem.defaultProps = {
  title: 'TITLE',
  info: 'STRING',
};

ShopInfoItem.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};
/* end of ShopInfoItem.propTypes  */

function SectionShopInfo() {
  return (
    <>
      <div className="container mx-auto p-1">
        <div className="flex flex-col justify-start font-bold md:flex-row">
          <img
            className="w-[364px] rounded-sm object-cover object-center"
            src={imgStore}
            alt="imgStore"
          />

          <section className="md:ml-4">
            <h2 className="mb-4 mt-4 text-center text-lg md:mt-0 md:text-left">
              TITLE2
            </h2>

            <ul className="flex flex-col gap-4">
              {/* #TODO: data from Server */}
              <ShopInfoItem />

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
        </div>
      </div>
      {/* end of container */}
    </>
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

function Draft4() {
  return (
    <>
      <SectionShopInfo />
      <SectionOrder />
    </>
  );
}
/* end of Draft4() */

export default Draft4;
