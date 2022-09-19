import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/LayoutNavbar';
import Footer from '../components/LayoutFooter';

import DevDrawer from '../draft/DevDrawer';

function LayoutMain() {
  return (
    <>
      <DevDrawer />
      {/*  */}

      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
/* end of LayoutMain() */

export default LayoutMain;
