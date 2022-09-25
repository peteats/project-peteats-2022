import React from 'react';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import CategoryList from './CategoryList';

const NEKO = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/feature_LayoutOfGET/src/images/bg-neko.png';

function HomeCategory() {
  return (
    <>
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

      <div className="-mt-[100vh] flex justify-end md:min-h-screen">
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
