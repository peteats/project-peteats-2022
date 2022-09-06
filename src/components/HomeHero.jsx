import React from 'react';

import Logo from '../images/logo-peteats.png';
import Hero from '../images/hero-pattern.png';
import HeroMd from '../images/hero-pattern-md.png';

function HomeHero() {
  return (
    <header className="min-h-[calc(100vh_-_64px)]">
      {/* <header className="flex min-h-screen w-full
     flex-col items-center justify-end bg-hero-pattern bg-auto bg-top bg-no-repeat"> */}
      <div className="container mx-auto flex flex-col items-center justify-between px-1 py-20  md:flex md:flex-row">
        <picture className="block md:w-1/2">
          <source
            className="block h-full w-full object-cover"
            srcSet={HeroMd}
            media="(min-width: 767px)"
          />

          <img
            src={Hero}
            className="block h-full w-full object-cover"
            alt="Hero-Banner"
          />
        </picture>

        <section className="md:w-1/2">
          <picture className="block">
            <img
              src={Logo}
              className="block h-full w-full object-cover"
              alt="PetEats-Logo"
            />
          </picture>

          <h2 className="py-6 text-center text-5xl font-bold leading-6">
            主子！用膳啦！
          </h2>

          <div className="flex justify-between">
            <input
              type="search"
              name=""
              id=""
              placeholder="立即搜尋商品"
              className="w-4/5 px-3 py-2 font-normal"
            />

            <button
              className="ml-2 rounded bg-black py-2 px-3 text-center font-normal text-white"
              type="button"
            >
              搜尋
            </button>
          </div>
        </section>
      </div>
    </header>
  );
}

export default HomeHero;
