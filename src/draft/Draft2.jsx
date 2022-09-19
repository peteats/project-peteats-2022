import React from 'react';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

function SectionAreaSmall() {
  return (
    <section className="container mx-auto px-12 md:p-0">
      <h2 className="my-4 text-left text-2xl font-bold">地區分類</h2>
      {/* <ul className="grid-cols-3 gap-16 md:grid">
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </ul> */}

      <ul className="-ml-24 -mb-8 flex flex-wrap">
        <li className="w-full pl-24 pb-6 md:w-1/3">
          <a href="/#" className="block rounded-3xl bg-[#212529] text-center">
            <div
              className="relative rounded-2xl
              bg-[#212529] text-center hover:bg-[#DB8C8C]"
            >
              <img
                className="absolute top-1/2 -left-2 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover object-center shadow-xl"
                src={Area}
                alt=""
              />

              <h3 className="py-1 text-4xl font-bold leading-snug tracking-tight text-white">
                台北市
              </h3>
            </div>
          </a>
        </li>

        <li className="w-full pl-24 pb-6 md:w-1/3">
          <a href="/#" className="block rounded-3xl bg-[#212529] text-center">
            <div
              className="relative rounded-2xl
              bg-[#212529] text-center hover:bg-[#DB8C8C]"
            >
              <img
                className="absolute top-1/2 -left-2 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover object-center shadow-xl"
                src={Area}
                alt=""
              />

              <h3 className="py-1 text-4xl font-bold leading-snug tracking-tight text-white">
                台北市
              </h3>
            </div>
          </a>
        </li>

        <li className="w-full pl-24 pb-6 md:w-1/3">
          <a href="/#" className="block rounded-3xl bg-[#212529] text-center">
            <div
              className="relative rounded-2xl
              bg-[#212529] text-center hover:bg-[#DB8C8C]"
            >
              <img
                className="absolute top-1/2 -left-2 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover object-center shadow-xl"
                src={Area}
                alt=""
              />

              <h3 className="py-1 text-4xl font-bold leading-snug tracking-tight text-white">
                台北市
              </h3>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
/* end of SectionAreaSmall() */

function StoreCard() {
  return (
    <li className="w-full pl-8 pb-6 md:w-1/4">
      <div className="transition duration-500 ease-out hover:scale-105 hover:ease-in">
        <picture className="block rounded-2xl">
          <img
            src={Store}
            alt=""
            className="z-0 block h-full w-full rounded-2xl object-cover"
          />
        </picture>

        <section className="relative z-10 -mt-11 flex flex-col rounded-2xl bg-[#DB8C8C] py-4 px-6 shadow-xl">
          <div className="flex justify-between">
            <p>CITY</p>
            <p>ICON</p>
          </div>

          <h3 className="py-3">STORE</h3>

          <span>4.6</span>
        </section>
      </div>
    </li>
  );
}
/* end of StoreCard() */

function StoreList() {
  return (
    <section className="container mx-auto px-12 md:p-0">
      <h2 className="my-4 text-left text-2xl font-bold">熱門店家</h2>

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ul>
    </section>
  );
}
/* end of StoreList() */

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

function Draft2() {
  return (
    <>
      <SectionAreaSmall />
      <StoreList />
    </>
  );
}
/* end of Draft2() */

export default Draft2;
