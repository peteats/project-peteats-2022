import React from 'react';
import { Link } from 'react-router-dom';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import ShopList from './ShopList';

const BG_FOOD = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/feature_LayoutOfGET/src/images/home-bg-food.png';

function HomeShops() {
  return (
    <>
      <section className="pe-container mx-auto my-20">
        {/* md:min-h-screen */}
        <h2 className="text-center text-3xl font-bold">
          精選推薦
          {/* <br /> */}
          <span className="pl-4">熱門店家</span>
        </h2>

        <ShopList queryType="HOT" />

        <Link
          to="/shops"
          className="mx-auto block max-w-fit cursor-pointer rounded-sm border border-[#343A40] py-2 px-5 text-center text-xl text-[#343A40]"
        >
          {/* /orders/:id */}
          查看更多店家
          <i className="pl-2">
            {/* #FIXME: */}
            <ArrowRightAltIcon />
          </i>
        </Link>
      </section>

      <div className="hidden md:-mt-[calc(100vh_+_6rem)] md:flex md:min-h-screen md:justify-end">
        <div className="-z-10 mr-20 mb-1 flex w-[304px] items-start justify-start">
          <img
            className="w-full object-cover object-center"
            src={BG_FOOD}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
/* end of HomeShops() */

export default HomeShops;
