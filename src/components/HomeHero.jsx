import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import Logo from '../images/logo-peteats.png';
import Hero from '../images/hero-pattern.png';
import HeroMd from '../images/hero-pattern-md.png';

function HomeHero() {
  return (
    <header className="min-h-[90vh] sm:min-h-[75vh] sm:pt-16 md:min-h-[60vh] lg:min-h-[50vh] xl:min-h-[calc(100vh_-_64px)]">
      <div className="pe-container relative z-10 flex min-h-screen items-end justify-center sm:min-h-[75vh] md:min-h-[88vh] md:items-center md:justify-end">
        <section className="sm:pb-20 md:w-[50%] md:pb-40 lg:w-[40%] lg:pb-0">
          <picture className="block">
            <img
              src={Logo}
              className="h-auto w-full object-cover object-center"
              alt="PetEats-Logo"
            />
          </picture>

          <h2 className="py-6 text-center text-4xl font-bold leading-6">
            主子！用膳啦！
          </h2>

          <div className="grid grid-flow-row grid-cols-5 gap-2">
            <div className="col-span-4 flex items-center justify-between rounded-sm border-2 border-[#DB8C8C] px-2 font-normal">
              <SearchIcon sx={{ color: '#343A40' }} />
              {/* <div className="p-3"> */}
              {/* <SearchIcon sx={{ fontSize: '16px', color: '#343A40' }} /> */}
              {/* </div> */}

              <input
                type="search"
                name=""
                id=""
                placeholder="立即搜尋商品"
                className="block w-full pl-2"
                aria-label="search"
              />
            </div>

            <button
              className="hover:scale-103 col-span-1 block rounded bg-black py-2 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80"
              type="button"
            >
              搜尋
            </button>
          </div>
        </section>
      </div>
      {/* end of HERO-stuff */}

      <div className="-mt-[calc(100vh_-_64px)] flex flex-col items-center justify-between pt-24 md:flex md:flex-row">
        <picture className="block w-full md:w-[56%]">
          <source
            className="h-full w-full object-cover object-center"
            srcSet={HeroMd}
            media="(min-width: 767px)"
          />

          <img
            src={Hero}
            className="h-full w-full object-cover object-center"
            alt="Hero-Banner"
          />
        </picture>
      </div>
    </header>
  );
}

export default HomeHero;
