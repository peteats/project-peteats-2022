import React from 'react';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

function HistoryOrderItem() {
  return (
    <>
      <li className="flex flex-col gap-6  md:grid md:grid-flow-row md:grid-cols-12">
        <div className="md:col-span-4">
          <picture className="relative block w-full pt-[70%]">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="random_image"
              className="absolute left-0 top-0 h-full w-full rounded-2xl object-cover object-center"
            />
          </picture>
        </div>

        <section className="font-bold  md:col-span-6">
          <h3 className="mb-4 text-center  md:text-left">SHOP</h3>

          <ul className="flex flex-col gap-4">
            <li>
              <p className="flex items-center gap-4">
                title
                <span className="">STRING</span>
              </p>
            </li>

            <li>
              <p className="flex items-center gap-4">
                title
                <span>STRING</span>
              </p>
            </li>
            <li>
              <p className="flex items-center gap-4">
                title
                <span>STRING</span>
              </p>
            </li>
            <li>
              <p className="flex items-center gap-4">
                title
                <span>STRING</span>
              </p>
            </li>
          </ul>
        </section>

        <div className="flex flex-col items-end justify-center gap-7  md:col-span-2">
          <button
            type="button"
            className="block w-full rounded-sm border py-2 text-black md:w-2/3"
          >
            CLICK
          </button>

          <button
            type="button"
            className="block w-full rounded-sm border py-2 text-black md:w-2/3"
          >
            CLICK
          </button>
        </div>
      </li>
      {/* end of Grid */}
    </>
  );
}
/* end of HistoryOrderItem() */

function PageHistoryOrder() {
  return (
    <>
      <div className="container mx-auto  px-1 pt-40 pb-20  md:pt-20">
        <div className="items-center  md:grid md:grid-flow-row md:grid-cols-12">
          <div className="pb-6  md:col-span-8 md:pb-2">
            <h2 className="text-center text-2xl font-bold  md:text-left">
              訂單資訊
            </h2>
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
          <HistoryOrderItem />
          <HistoryOrderItem />
          <HistoryOrderItem />
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
