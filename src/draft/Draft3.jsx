import React from 'react';
import PropTypes from 'prop-types';

import imgStore from '../images/Store.png';
// import Area from '../images/Area.png';

function SpecList() {
  return (
    <li className="flex w-full flex-col justify-start md:w-[calc(49%_-_24px)] md:flex-row">
      {/* #NOTE: [calc(int_-_int)] */}
      {/* #NOTE: Only img width, another section will auto fit itself */}
      <img
        className="h-[120px] rounded-2xl object-cover object-center md:w-[120px]"
        src={imgStore}
        alt="imgStore"
      />

      <section className="grid w-full grid-rows-3 items-center gap-4 md:ml-4 md:gap-1">
        <div className="flex items-center justify-between">
          <h4 className="mt-4 w-full text-center font-bold md:m-0 md:text-left">
            TITLE4
          </h4>

          {/* md:invisible  */}
          <button
            type="button"
            className="hidden w-1/3 rounded-[4px] bg-[#343A40] text-white md:block"
          >
            {/* #TODO: onClick={} */}
            CLICK
          </button>
          {/* end of RWD-PC-button */}
        </div>

        {/* #FIXME: Need to same height with img */}
        <p className="row-span-1">Lorem, ipsum dolor sit </p>
        <p className="row-span-1">123</p>

        <button
          type="button"
          className="block rounded-[4px] bg-[#343A40] py-2 text-white md:hidden"
        >
          {/* #TODO: onClick={} */}
          CLICK
        </button>
        {/* end of RWD-Mobile-button */}
      </section>
    </li>
  );
}
/* end of SpecList */

function SectionMenu() {
  return (
    <>
      <div className="container mx-auto  px-1">
        <ul className="flex w-full flex-wrap justify-between gap-4">
          <SpecList />
          <SpecList />
          {/* <SpecList /> */}
          {/* <SpecList /> */}
        </ul>
      </div>
      {/* end of container */}
    </>
  );
}
/* end of SectionMenu */

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

function Draft3() {
  return (
    <>
      <SectionShopInfo />
      <SectionMenu />
    </>
  );
}
/* end of Draft3() */

export default Draft3;
