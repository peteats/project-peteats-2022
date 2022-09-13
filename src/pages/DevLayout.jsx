import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// import Navbar from '../components/LayoutNavbar';
import Footer from '../components/LayoutFooter';

function DevNavbar() {
  return (
    <nav className="DevNavbar">
      <ul className="text-blue-700">
        <li>
          <Link to="/layout">WIP-layout</Link>
        </li>

        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/signup">SIGN-UP</Link>
        </li>
        <li>
          <Link to="/login">LOG-IN</Link>
        </li>
        <li>
          <Link to="/shops">SHOPS</Link>
        </li>
        <li>
          <Link to="/me">PROFILE</Link>
        </li>

        <li>
          <Link to="/new-password">RESET</Link>
        </li>
        <li>
          <Link to="/auth-mail">MAIL</Link>
        </li>
        <li>
          <Link to="/auth">AUTH</Link>
        </li>
        <li>
          <Link to="/dev">DEV</Link>
        </li>
        <li>
          <Link to="/idontknowwheretogo">404</Link>
        </li>
      </ul>

      <hr className="h-4 bg-slate-300" />
    </nav>
  );
}
/* end of DevNavbar() */

function DevLayout() {
  return (
    <>
      <DevNavbar />

      {/* <Navbar /> */}

      <Outlet />

      <Footer />
    </>
  );
}
/* end of DevLayout() */

export default DevLayout;
