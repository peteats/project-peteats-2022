import React from 'react';

import Cate from '../images/Cate.png';

function HomeIntro() {
  return (
    <div className="container mx-auto px-1 md:min-h-[calc(100vh_-_64px)]">
      <h2 className="my-12 text-center text-3xl font-bold">
        食品用心
        <br />
        毛孩開心
      </h2>

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <img
              className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
              src={Cate}
              alt=""
            />

            <h5 className="my-8 text-center text-2xl font-bold tracking-tight text-black">
              整合在地寵物餐廳
            </h5>
          </div>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <img
              className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
              src={Cate}
              alt=""
            />

            <h5 className="my-8 text-center text-2xl font-bold tracking-tight text-black">
              便利的貓狗訂餐平台
            </h5>
          </div>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <img
              className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
              src={Cate}
              alt=""
            />

            <h5 className="my-8 text-center text-2xl font-bold tracking-tight text-black">
              不定期專屬優惠
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
}
/* end of HomeIntro() */

export default HomeIntro;
