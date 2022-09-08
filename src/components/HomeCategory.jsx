import React from 'react';

import Cate from '../images/Cate.png';

function HomeCategory() {
  return (
    <div className="container mx-auto px-px md:min-h-[calc(100vh_-_64px)]">
      <h2 className="my-10 text-center text-3xl font-bold">
        快速分類
        <br />
        立即訂購
      </h2>

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        <li className="w-full pl-8 pb-8 md:w-1/2">
          <a href="/#">
            <div className="">
              <img
                className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
                src={Cate}
                alt=""
              />

              <h5 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
                Noteworthy
              </h5>
            </div>
          </a>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/2">
          <a href="/#">
            <div className="">
              <img
                className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
                src={Cate}
                alt=""
              />

              <h5 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
                Noteworthy
              </h5>
            </div>
          </a>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/2">
          <a href="/#">
            <div className="">
              <img
                className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
                src={Cate}
                alt=""
              />

              <h5 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
                Noteworthy
              </h5>
            </div>
          </a>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/2">
          <a href="/#">
            <div className="">
              <img
                className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
                src={Cate}
                alt=""
              />

              <h5 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
                Noteworthy
              </h5>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HomeCategory;
