import React from 'react';
import { Link } from 'react-router-dom';

// import AreaList from './AreaList';

const AREA_IMG = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Area.png';

function ItemGridUI() {
  return (
    <>
      {/*  */}
      <li className="col-span-11 pl-[16%] sm:col-span-6 md:col-span-6 lg:col-span-4">
        <Link
          to="/shops/city"
          className="inline-flex h-[75%] w-full rounded-3xl bg-[#212529] hover:bg-[#DB8C8C]"
        >
          <div className="flex items-center">
            <picture className="relative z-10 -ml-[16%] block w-[120px]">
              <img
                className="h-full w-full rounded-full object-cover object-center shadow-xl"
                src={AREA_IMG}
                alt=""
              />
            </picture>

            <h3 className="p-4 text-center text-5xl font-bold leading-snug tracking-tight text-white">
              City
            </h3>
            {/* <section className="h-full w-full rounded-3xl bg-[#212529] py-4 hover:bg-[#DB8C8C]">
            </section> */}
          </div>
        </Link>
      </li>
    </>
  );
}
/* end of ItemUI() */

function AreaGridUI() {
  return (
    <>
      {/*  */}
      <ul className="grid grid-flow-row grid-cols-12 gap-6">
        <ItemUI />
        <ItemUI />
        <ItemUI />
      </ul>
    </>
  );
}
/* end of AreaUI() */

function ItemLayout() {
  return (
    <>
      {/*  */}
      <li className="col-span-4 block w-full bg-slate-400/50">
        <Link
          to="/shops/city"
          className="inline-block w-full rounded-3xl border-4 border-[#DB8C8C] hover:bg-[#DB8C8C]"
        >
          <div className="flex flex-col items-center justify-center">
            <picture className="relative z-10 -mb-[40%] block hidden w-[280px]">
              <img
                className="h-full w-full rounded-full object-cover object-center shadow-xl"
                src={AREA_IMG}
                alt=""
              />
            </picture>

            <h3 className="text-center text-5xl font-bold leading-snug tracking-tight text-black">
              CityName
            </h3>
          </div>
        </Link>
      </li>
    </>
  );
}
/* end of ItemLayout() */

function ItemUI() {
  return (
    <>
      {/*  */}
      <li className="col-span-12 block w-full md:col-span-6 lg:col-span-4">
        <Link
          to="/shops/city"
          className="inline-block w-full rounded-3xl border-4 border-[#DB8C8C] hover:bg-[#DB8C8C]"
        >
          <div className="flex flex-col items-center justify-center py-6">
            <picture className="relative z-10 -mt-[30%] block w-[280px]">
              <img
                className="h-full w-full rounded-full object-cover object-center shadow-xl"
                src={AREA_IMG}
                alt=""
              />
            </picture>

            <h3 className="mt-6 text-center text-5xl font-bold leading-snug tracking-tight text-black">
              CityName
            </h3>
          </div>
        </Link>
      </li>
    </>
  );
}
/* end of ItemUI() */

function AreaUI() {
  return (
    <>
      {/*  */}
      <ul className="grid grid-flow-row grid-cols-12 gap-6 gap-y-28 sm:gap-y-48 md:gap-y-24">
        <ItemUI />
        <ItemUI />
        <ItemUI />
      </ul>
    </>
  );
}
/* end of AreaUI() */

function HomeArea() {
  return (
    <>
      <div className="pe-container mx-auto my-40">
        <AreaUI />
      </div>
      {/*
      <div className="min-h-screen w-full bg-[length:446.4px_391.87px] bg-[right_96%_top_0] bg-no-repeat md:py-1 lg:bg-home-dog">
        <section className="pe-container mx-auto px-1">
          <h2 className="my-24 text-center text-3xl font-bold">
            地區分類
            <br className="md:hidden" />
            <span className="md:pl-4">靠近你我</span>
          </h2>

          <AreaList />
        </section>
      </div> */}
    </>
  );
}
/* end of HomeArea() */

export default HomeArea;
