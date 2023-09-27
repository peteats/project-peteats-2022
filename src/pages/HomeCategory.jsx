import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

import AOS from 'aos';
import CategoryList from '../components/CategoryList';

import 'aos/dist/aos.css';

function HomeCategory() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[length:590.75px_553.16px] bg-no-repeat sm:min-h-[88vh] sm:bg-home-neko sm:bg-right xl:bg-[left_90%_bottom_0px]">
      {/* end of bg-home-neko */}
      {/* <LayoutCategory pageType="HOME" /> */}
      <section
        className="HomeCategory pe-container mx-auto mt-40 md:mt-0 xl:min-h-screen"
        data-aos="fade-up"
      >
        <h2 className="mb-10 text-center text-5xl font-bold leading-[69.5px] md:mt-16 md:p-0 lg:mt-12">
          快速分類
          <br className="md:hidden" />
          <span className="md:pl-4">立即訂購</span>
        </h2>

        <CategoryList pageType="HOME" />
      </section>
    </div>
  );
}
/* end of HomeCategory() */

export default HomeCategory;
