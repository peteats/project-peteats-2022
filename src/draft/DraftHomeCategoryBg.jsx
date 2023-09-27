import React from 'react';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import CategoryList from './CategoryList';

const NEKO = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/feature_LayoutOfGET/src/images/bg-neko.png';

function HomeCategory() {
  return (
    <>
      <div className="min-h-screen w-full bg-slate-300/50 bg-home-neko bg-[length:590.75px_553.16px] bg-[right_20px_bottom_80px] bg-no-repeat">
        <span className="sr-only">neko works finally</span>
      </div>

      <div className="flex min-h-screen items-end justify-end bg-slate-300/50">
        <div className="h-[553.16px] w-[590.75px]  bg-home-neko bg-[length:590.75px_553.16px] bg-[right_0px_bottom_0px] bg-no-repeat">
          <span className="sr-only">
            neko works end and good position with bg-length
          </span>
        </div>
      </div>

      <div className="flex min-h-screen items-end justify-end bg-slate-300/50">
        <div className="h-[553.16px] w-[590.75px]  bg-home-neko bg-cover bg-[right_0px_bottom_0px] bg-no-repeat">
          <span className="sr-only">neko works end and good position</span>
        </div>
      </div>

      <div className="flex min-h-screen items-end justify-end bg-slate-300/50">
        <div className="h-[553.16px] w-[590.75px]  bg-home-neko bg-cover bg-[right_30px_bottom_30px] bg-no-repeat">
          <span className="sr-only">neko works end</span>
        </div>
      </div>

      <div className="flex min-h-screen items-end justify-end bg-slate-300/50">
        <div className="h-[500px] w-[500px]  bg-home-neko bg-cover bg-[right_30px_bottom_30px] bg-no-repeat">
          <span className="sr-only">neko works end</span>
        </div>
      </div>

      <div className="min-h-screen">
        <div className="mx-auto h-[500px] w-[500px]  bg-home-neko bg-cover bg-[right_30px_bottom_30px] bg-no-repeat">
          {/* <div className="flex h-screen w-[590px]
        bg-home-neko bg-cover bg-[right_100px_bottom_30px] bg-no-repeat" /> */}
          <span className="sr-only">neko works</span>
        </div>
      </div>

      {/* <div className="flex-1 bg-home-neko bg-cover bg-right bg-no-repeat" /> */}
      {/* </div> */}
      {/* <div className="flex h-screen w-[590px]">
        <div className={`bg-[url('${NEKO}')]  bg-cover bg-center bg-no-repeat`}>
      </div> */}

      <section className="pe-container mx-auto my-20  md:min-h-screen">
        {/* <div className="container-md container mx-auto"> */}
        {/* <div className="container mx-auto px-px md:min-h-[calc(100vh_-_64px)]"> */}
        <h2 className="mb-16 text-center text-3xl font-bold">
          快速分類
          {/* <br /> */}
          <span className="pl-4">立即訂購</span>
        </h2>

        {/* <section className="flex justify-between ">
          <div className="-z-10 -mb-10 -mt-96 flex  w-[74vh] items-end justify-end">
            <img
              className="w-full object-cover object-center"
              src={NEKO}
              alt=""
            />
          </div>
        </section> */}
        <CategoryList isFlexWrap="flex-wrap" />
      </section>

      <div className="hidden md:-mt-[100vh] md:flex md:min-h-screen md:justify-end ">
        <div className="-z-10 mr-24 mb-1 flex w-[590.75px] items-end justify-end">
          <img
            className="w-full object-cover object-center"
            src={NEKO}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
/* end of HomeCategory() */

export default HomeCategory;
