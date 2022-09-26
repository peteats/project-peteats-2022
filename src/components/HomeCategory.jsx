import React from 'react';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import CategoryList from './CategoryList';

function HomeCategory() {
  return (
    <>
      <div className="min-h-screen w-full bg-slate-300/50 bg-home-neko bg-[length:590.75px_553.16px] bg-[left_90%_bottom_0px] bg-no-repeat">
        <span className="sr-only">neko works finally</span>

        <section className="pe-container mx-auto my-20  md:min-h-screen">
          <h2 className="mb-16 text-center text-3xl font-bold">
            快速分類
            <span className="pl-4">立即訂購</span>
          </h2>

          <CategoryList isFlexWrap="flex-wrap" />
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
