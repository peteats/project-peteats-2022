import React from 'react';

import AreaList from './AreaList';

function HomeArea() {
  return (
    <div className="container mx-auto px-1 md:min-h-[calc(100vh_-_64px)]">
      <h2 className="my-28  text-center text-3xl font-bold">
        地區分類
        <br />
        靠近你我
      </h2>

      <AreaList />
    </div>
  );
}
/* end of HomeArea() */

export default HomeArea;
