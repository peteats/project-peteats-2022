import React, { useState } from 'react';
// import React from 'react';

import Cate from '../images/Cate.png';
import Logo from '../images/logo-peteats.png';
import LogoLight from '../images/logo-light.png';
import Area from '../images/Area.png';
import Store from '../images/Store.png';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white p-2
      md:px-4"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1>
          <a href="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="PetEats-Logo" />
          </a>
        </h1>

        <div className="flex md:order-2">
          <button
            type="button"
            className="mr-3 rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300  md:mr-0"
          >
            Get started
          </button>

          <button
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span>X</span>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <div
          className={`w-full items-center justify-between md:order-1 md:flex md:w-[12.5%] ${
            open ? '' : 'hidden'
          }`}
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
            <li>
              <a
                href="/#"
                className="block rounded bg-gray-700 py-2 pr-4 pl-3 text-white  md:bg-transparent md:p-0 md:text-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                LINK
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                LINK
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                LINK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function StoreCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md">
      <img className="rounded-t-lg" src={Cate} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          2022
        </h5>

        <p className="mb-3 font-normal text-gray-700">Here are the</p>
      </div>
    </div>
  );
}

function SectionCategories() {
  return (
    <div className="container mx-auto px-px">
      <h2 className="my-4 text-center text-3xl font-bold">
        快速分類
        <br />
        立即訂購
      </h2>

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        <li className="w-full pl-8 pb-8 md:w-1/2">
          <a href="/#">
            <div className="">
              <img
                className="border-bg-primary rounded-lg border-2 border-pink-500 bg-white shadow-md"
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
                className="border-bg-primary rounded-lg border-2 border-pink-500 bg-white shadow-md"
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
                className="border-bg-primary rounded-lg border-2 border-pink-500 bg-white shadow-md"
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
                className="border-bg-primary rounded-lg border-2 border-pink-500 bg-white shadow-md"
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

function SectionArea() {
  return (
    <div className="container mx-auto px-1">
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

function SectionIntro() {
  return (
    <div className="container mx-auto px-1">
      <h2 className="my-12 text-center text-3xl font-bold">
        食品用心
        <br />
        毛孩開心
      </h2>

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <img
              className="border-bg-primary rounded-lg border-2 border-pink-500 bg-white shadow-md"
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
              className="border-bg-primary rounded-lg border-2 border-pink-500 bg-white shadow-md"
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
              className="border-bg-primary rounded-lg border-2 border-pink-500 bg-white shadow-md"
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

function StoreList() {
  return (
    <section className="container mx-auto px-12">
      <h2 className="mb-4 text-center text-3xl font-bold">
        精選推薦
        <br />
        熱門店家
      </h2>

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        <li className="w-full pl-8 pb-6 md:w-1/3">
          <div className="">
            <picture className="block rounded-2xl">
              <img
                src={Store}
                alt=""
                className="z-0 block h-full w-full rounded-2xl object-cover"
              />
            </picture>

            <section className="relative z-10 -mt-11 flex flex-col rounded-2xl bg-[#DB8C8C] py-4 px-6 shadow-xl">
              <div className="flex justify-between">
                <p>CITY</p>
                <p>ICON</p>
              </div>

              <h3 className="py-3">STORE</h3>

              <span>4.6</span>
            </section>
          </div>
        </li>

        <li className="w-full pl-8 pb-6 md:w-1/3">
          <div className="">
            <picture className="block rounded-2xl">
              <img
                src={Store}
                alt=""
                className="z-0 block h-full w-full rounded-2xl object-cover"
              />
            </picture>

            <section className="relative z-10 -mt-11 flex flex-col rounded-2xl bg-[#DB8C8C] py-4 px-6 shadow-xl">
              <div className="flex justify-between">
                <p>CITY</p>
                <p>ICON</p>
              </div>

              <h3 className="py-3">STORE</h3>

              <span>4.6</span>
            </section>
          </div>
        </li>

        <li className="w-full pl-8 pb-6 md:w-1/3">
          <div className="">
            <picture className="block rounded-2xl">
              <img
                src={Store}
                alt=""
                className="z-0 block h-full w-full rounded-2xl object-cover"
              />
            </picture>

            <section className="relative z-10 -mt-11 flex flex-col rounded-2xl bg-[#DB8C8C] py-4 px-6 shadow-xl">
              <div className="flex justify-between">
                <p>CITY</p>
                <p>ICON</p>
              </div>

              <h3 className="py-3">STORE</h3>

              <span>4.6</span>
            </section>
          </div>
        </li>
      </ul>

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <a href="/#">
              <StoreCard />
            </a>
          </div>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <a href="/#">
              <StoreCard />
            </a>
          </div>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/3">
          <div className="">
            <a href="/#">
              <StoreCard />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#212529] text-center text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-3 pt-20 md:flex-row">
        <div className="pb-20 md:text-left">
          <a href="/" className="block">
            <img
              src={LogoLight}
              className="block h-16 w-full object-cover"
              alt="PetEats-Logo"
            />
          </a>

          <p className="pt-6 font-bold">
            Copyright &#169; 2022 Pet Eats 配食舖
          </p>
        </div>

        <ul className="pb-20 font-normal md:flex md:flex-row md:gap-6">
          <li className="pb-6">
            <p>關於我們</p>
          </li>

          <li className="pb-6">
            <p>隱私政策</p>
          </li>

          <li className="pb-6">
            <p>意見回饋</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

function DevLayoutHome() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh_-_64px)]">
        <p>123</p>
      </main>

      <SectionCategories />

      <SectionArea />

      <StoreList />

      <SectionIntro />

      <Footer />

      {/* <hr className="h-8 bg-slate-600" />

      <p>{count}</p>
      <p>{setCount}</p>
      <hr className="h-8 bg-slate-600" />
      <DevPage /> */}
    </>
  );
}

export default DevLayoutHome;
