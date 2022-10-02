import React, { Suspense, useState } from 'react';
// import React, { useState } from 'react';

import { useNavigate, useLocation, useMatch } from 'react-router-dom';

import HomeHero from './HomeHero';
import HomeIntro from './HomeIntro';

import HomeCategory from './HomeCategory';
import HomeShops from './HomeShops';

import HomeArea from './HomeArea';

function PageHome() {
  return (
    <>
      <HomeHero />

      <HomeCategory />

      <HomeArea />

      <HomeShops />

      <HomeIntro />
    </>
  );
}
/* end of PageHome() */

export default PageHome;
