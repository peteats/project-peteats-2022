import React from 'react';

import AreaList from './AreaList';

function HomeArea() {
  return (
    <div className="min-h-screen w-full bg-[length:446.4px_391.87px] bg-[right_96%_top_0] bg-no-repeat lg:min-h-[84vh] lg:bg-home-dog lg:py-1">
      <section className="pe-container mx-auto px-1">
        <h2 className="my-20 text-center text-3xl font-bold">
          地區分類
          <br className="md:hidden" />
          <span className="md:pl-4">靠近你我</span>
        </h2>

        <AreaList />
      </section>
    </div>
  );
}
/* end of HomeArea() */

export default HomeArea;
