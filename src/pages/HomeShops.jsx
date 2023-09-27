import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import AOS from 'aos';
import ShopList from '../components/ShopList';
// const FAKE_IMAGE = 'https://fakeimg.pl/300x200/';

import 'aos/dist/aos.css';

function HomeShops() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[length:224px_196px] bg-[left_92%_top_0px] bg-no-repeat md:min-h-[88vh] md:bg-home-food md:py-1">
      {/* end of bg-home-food */}
      <section
        className="HomeShops pe-container mx-auto min-h-[50vh]"
        data-aos="fade-up"
      >
        <h2 className="mb-10 pt-20 text-center text-5xl font-bold leading-[69.5px]">
          精選推薦
          <br className="md:hidden" />
          <span className="md:pl-4">熱門店家</span>
        </h2>

        <ShopList queryType="HOT" />

        <Link
          to="/shops"
          className="mx-auto mt-12 block max-w-fit cursor-pointer rounded-sm border border-[#343A40] py-2 px-4 text-center text-xl text-[#343A40] md:px-5"
        >
          查看更多店家
          <i className="pl-2">
            {/* #FIXME: */}
            <ArrowRightAltIcon className="animate-shake pb-1" />
          </i>
        </Link>
      </section>
    </div>
  );
}
/* end of HomeShops() */

export default HomeShops;
