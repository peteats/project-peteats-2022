import React, { useEffect } from 'react';
// import React, { Suspense } from 'react';

import AOS from 'aos';
import AreaList from '../components/AreaList';

import 'aos/dist/aos.css';

// const LazyAreaList = React.lazy(() => import('../components/AreaList'));

function HomeArea() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[length:446.4px_391.87px] bg-[right_96%_top_0] bg-no-repeat lg:min-h-[84vh] lg:bg-home-dog lg:py-1">
      {/* end of bg-home-dog */}
      <section
        className="HomeArea pe-container mx-auto px-1"
        data-aos="fade-up"
      >
        <h2 className="my-20 text-center text-5xl font-bold leading-[69.5px]">
          地區分類
          <br className="md:hidden" />
          <span className="md:pl-4">靠近你我</span>
        </h2>

        <AreaList pageType="HOME" />
        {/* <Suspense fallback={<AreaSkeleton />}> */}
        {/* <Suspense fallback={<div>Loading...</div>}>
          <LazyAreaList />
        </Suspense> */}
      </section>
    </div>
  );
}
/* end of HomeArea() */

export default HomeArea;
