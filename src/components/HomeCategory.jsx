import React from 'react';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import CategoryList from './CategoryList';

const Cate = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Cate.png';

function LayoutCategory() {
  return (
    <>
      <section className="pe-container my-20 mx-auto min-h-screen">
        {/* #NOTE: correct grid for PageHome */}
        <ul className="grid grid-cols-8 grid-rows-2 gap-x-4 gap-y-10 overflow-hidden bg-slate-300/50 md:w-full lg:w-[66%]">
          <li className="box col-span-8 md:col-span-4">
            <div className="h-[320px]">1</div>
          </li>

          <li className="box col-span-8 md:col-span-4">
            <div className="h-[320px]">2</div>
          </li>

          <li className="box col-span-8 md:col-span-4">
            <div className="h-[320px]">3</div>
          </li>

          <li className="box col-span-8 md:col-span-4">
            <div className="h-[320px]">4</div>
          </li>
        </ul>
      </section>

      <section className="pe-container my-20 mx-auto min-h-screen">
        {/* #NOTE: correct grid for PageShops */}
        <ul className="grid grid-flow-row grid-cols-12 gap-6">
          <li className="col-span-3">
            <div className="h-[136px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-3">
            <div className="h-[136px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-3">
            <div className="h-[136px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-3">
            <div className="h-[136px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
/* end of Draft-LayoutCategory */

function HomeCategory() {
  return (
    <>
      <div className="min-h-screen w-full bg-[length:590.75px_553.16px] bg-[left_90%_bottom_0px] bg-no-repeat md:bg-home-neko">
        {/* <span className="sr-only">neko works finally</span> */}

        <section className="pe-container mx-auto my-20  md:min-h-screen">
          <h2 className="mb-10 text-center text-3xl font-bold md:mb-16">
            快速分類
            <br className="md:hidden" />
            <span className="md:pl-4">立即訂購</span>
          </h2>

          <CategoryList pageType="HOME" />
        </section>
      </div>

      {/*
      <section className="pe-container mx-auto my-20  md:min-h-screen">
        <h2 className="mb-16 text-center text-3xl font-bold">
          快速分類
          <span className="pl-4">立即訂購</span>
        </h2>

        <CategoryList isFlexWrap="flex-wrap" />
      </section> */}

      {/* <div className="hidden md:-mt-[100vh] md:flex md:min-h-screen md:justify-end ">
        <div className="-z-10 mr-24 mb-1 flex w-[590.75px] items-end justify-end">
          <img
            className="w-full object-cover object-center"
            src={NEKO}
            alt=""
          />
        </div>
      </div> */}
    </>
  );
}
/* end of HomeCategory() */

export default HomeCategory;
