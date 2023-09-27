import React from 'react';

import Store from '../images/Store.png';
// import Cate from '../images/Cate.png';

// function StoreCard() {
//   return (
//     <div className="rounded-lg border border-gray-200 bg-white shadow-md">
//       <img className="rounded-t-lg" src={Cate} alt="" />

//       <div className="p-5">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
//           2022
//         </h5>

//         <p className="mb-3 font-normal text-gray-700">Here are the</p>
//       </div>
//     </div>
//   );
// }

function StoreList() {
  return (
    <section className="container mx-auto px-12 md:p-0">
      <h2 className="my-10 text-center text-3xl font-bold">
        精選推薦
        {/* <br /> */}
        <span className="pl-4">熱門店家</span>
      </h2>

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        <li className="w-full pl-8 pb-6 md:w-1/4">
          <div className="">
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

        <li className="w-full pl-8 pb-6 md:w-1/4">
          <div className="">
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

        <li className="w-full pl-8 pb-6 md:w-1/4">
          <div className="">
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

        <li className="w-full pl-8 pb-6 md:w-1/4">
          <div className="">
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
      </ul>

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap">
        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <a href="/#">
              <StoreCard />
            </a>
          </div>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <a href="/#">
              <StoreCard />
            </a>
          </div>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <a href="/#">
              <StoreCard />
            </a>
          </div>
        </li>
      </ul> */}
    </section>
  );
}

function HomeShops() {
  return (
    <>
      <StoreList />
      <hr />
    </>
  );
}
/* end of HomeShops() */

export default HomeShops;
