import React from 'react';

import Area from '../images/Area.png';

function HomeArea() {
  return (
    <div className="container mx-auto px-1 md:min-h-[calc(100vh_-_64px)]">
      <h2 className="my-28  text-center text-3xl font-bold">
        地區分類
        <br />
        靠近你我
      </h2>

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        <li className="w-full pb-28 pl-8 md:w-1/3">
          <a href="/#">
            <div className="border-bg-primary relative rounded-3xl border-4 border-[#DB8C8C] px-10 pb-6 pt-[50%] text-center hover:bg-[#DB8C8C]">
              <img
                className="absolute top-12 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-xl"
                src={Area}
                alt=""
              />

              <h3 className="mt-3 text-5xl font-bold leading-snug tracking-tight text-black">
                台北市
              </h3>
            </div>
          </a>
        </li>

        <li className="w-full pb-28 pl-8 md:w-1/3">
          <a href="/#">
            <div className="border-bg-primary relative rounded-3xl border-4 border-[#DB8C8C] px-10 pb-6 pt-[50%] text-center hover:bg-[#DB8C8C]">
              <img
                className="absolute top-12 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-xl"
                src={Area}
                alt=""
              />

              <h3 className="mt-3 text-5xl font-bold leading-snug tracking-tight text-black">
                台北市
              </h3>
            </div>
          </a>
        </li>

        <li className="w-full pb-28 pl-8 md:w-1/3">
          <a href="/#">
            <div className="border-bg-primary relative rounded-3xl border-4 border-[#DB8C8C] px-10 pb-6 pt-[50%] text-center hover:bg-[#DB8C8C]">
              <img
                className="absolute top-12 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-xl"
                src={Area}
                alt=""
              />

              <h3 className="mt-3 text-5xl font-bold leading-snug tracking-tight text-black">
                台北市
              </h3>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HomeArea;
