import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';

import AOS from 'aos';
import Logo from '../images/logo-peteats.png';
import LogoType from '../images/logo-type.svg';
import Hero from '../images/hero-pattern.png';
import HeroMd from '../images/hero-pattern-md.png';

// import CustomOptionDialog from '../components/CustomOptionDialog';
// import CustomSelect from '../components/CustomSelect';
import CustomAsyncSelect from '../components/CustomAsyncSelect';

import 'aos/dist/aos.css';

const OPTION_DIC = [{ title: '台北' }, { title: '台中' }, { title: '高雄' }];

function HomeHero() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (!data) {
      setData(OPTION_DIC);
    }
  }, [data]);

  return (
    <header className="HomeHero min-h-[90vh] sm:min-h-[75vh] md:min-h-[60vh] lg:min-h-[50vh] xl:min-h-[calc(100vh_-_64px)]">
      {/* min-h-screen sm:pt-16 */}
      <div className="pe-container relative z-10 flex min-h-[88vh] items-end justify-center sm:min-h-[75vh] md:min-h-[88vh] md:items-center md:justify-end lg:min-h-[99vh]">
        <section className="sm:pb-20 md:w-[50%] md:pb-40 lg:w-[40%] lg:pb-0">
          <picture className="block">
            <img
              src={LogoType}
              className="h-auto w-full object-cover object-center"
              alt="PetEats-Logo"
            />
          </picture>

          <h2 className="animate-typing overflow-hidden whitespace-nowrap py-6 text-center text-5xl font-bold leading-[69.5px]">
            主子！用膳啦！
          </h2>

          <div
            className="grid grid-flow-row grid-cols-5 gap-2"
            data-aos="zoom-in-up"
          >
            <div className="col-span-4">
              {/* <div className="col-span-4 flex items-center justify-between rounded-sm border-2 border-[#DB8C8C] px-2 font-normal"> */}
              {/* <SearchIcon sx={{ color: '#343A40' }} /> */}

              {/* <input
                type="search"
                name=""
                id=""
                placeholder="立即搜尋商品"
                className="block w-full pl-2"
                aria-label="search"
              /> */}
              {/* <CustomOptionDialog data={data} /> */}
              {/* <CustomSelect data={data} /> */}
              <CustomAsyncSelect data={data} />
            </div>

            <button
              className="hover:scale-103 col-span-1 block rounded bg-black py-2 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80"
              type="button"
              onClick={() => {
                navigate('/shops');
              }}
            >
              搜尋
            </button>
          </div>
        </section>
      </div>
      {/* end of HERO-stuff */}

      <div className="-mt-[calc(100vh_-_64px)] flex flex-col items-center justify-between pt-24 sm:pt-0 md:flex md:flex-row">
        <picture className="block w-full md:w-[56%]" data-aos="fade-right">
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
      {/* end of HERO-bg-img */}
    </header>
  );
}
/* end of HomeHero() */

export default HomeHero;
