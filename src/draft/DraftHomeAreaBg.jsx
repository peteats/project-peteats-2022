import React from 'react';

import AreaList from './AreaList';

const BG_DOG = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/feature_LayoutOfGET/src/images/home-bg-dog.png';

function HomeArea() {
  return (
    <>
      <section className="pe-container mx-auto my-20 md:min-h-screen">
        <h2 className="my-32  text-center text-3xl font-bold">
          地區分類
          {/* <br /> */}
          <span className="pl-4">靠近你我</span>
        </h2>

        <AreaList />
      </section>

      <div className="hidden md:-mt-[calc(100vh_+_12rem)] md:flex md:min-h-screen">
        {/* <div className="-mt-[100vh] flex bg-slate-400/50 md:min-h-screen"> */}
        <div className="-z-10 ml-20 flex max-w-[446px] items-start justify-start">
          <img
            className="h-auto w-full  object-cover object-center"
            src={BG_DOG}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
/* end of HomeArea() */

export default HomeArea;
