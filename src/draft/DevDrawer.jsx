import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

function DevNavbar() {
  return (
    <nav className="text-xs text-gray-700 hover:text-white/50">
      <ul className="grid grid-flow-row grid-cols-2 items-end gap-1 pt-4">
        <li>
          <Link to="/layout">WIP</Link>
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
      </ul>
    </nav>
  );
}
/* end of DevNavbar() */

function DrawerLink({ linkPath, setHide, linkName }) {
  return (
    <li className="">
      {/* {console.log('- linkPath: ', linkPath)} */}
      <Link
        to={linkPath}
        onClick={() => {
          setHide(true);
        }}
        className="block rounded-lg border border-gray-200 bg-white p-0.5
        text-center text-sm font-medium text-gray-900
        hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
        focus:ring-4 focus:ring-gray-200
        dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
        dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        {linkName}
      </Link>
    </li>
  );
}
/* end of DrawerLink() */

DrawerLink.defaultProps = {
  linkPath: '/',
};

DrawerLink.propTypes = {
  setHide: PropTypes.func.isRequired,
  linkName: PropTypes.string.isRequired,
  linkPath: PropTypes.string,
};
/* end of DrawerLink.propTypes */

function Drawer() {
  const [isHide, setHide] = useState(true);

  const toggle = (prevIsHide) => setHide(!prevIsHide);
  // function spinTime() {
  //   setTimeout(() => '', 5000);
  //   return 'rotate-180 animate-spin delay-100';
  // }

  return (
    <>
      <section
        id="drawer"
        className={` ${isHide ? '-translate-x-full' : ''}
        fixed left-0 top-0 z-40 h-screen w-40 
        overflow-y-auto overflow-x-hidden bg-white p-4
        shadow-lg shadow-gray-500/40 transition-transform 
        dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
        aria-hidden="true"
      >
        <h5
          id="drawer-label"
          className="mb-4 inline-flex items-center text-lg font-semibold
          text-gray-500 dark:text-gray-400"
        >
          <Link to="/">Draft</Link>
        </h5>

        <button
          type="button"
          aria-controls="drawer"
          className="absolute top-2.5 right-2.5 inline-flex items-center
          rounded-lg bg-transparent p-1.5 text-sm text-gray-400
          hover:bg-gray-200 hover:text-gray-900
          dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => toggle(isHide)}
          // onClick={() => {
          //   setHide(!isHide);
          // }}
        >
          <CloseIcon />
          <span className="sr-only">Close Drawer</span>
        </button>
        {/* end of Drawer-Header */}

        <ul className="flex flex-col gap-4">
          <DrawerLink linkPath="page2" linkName="page2" setHide={setHide} />
          <DrawerLink linkPath="page3" linkName="page3" setHide={setHide} />
          <DrawerLink linkPath="page4" linkName="page4" setHide={setHide} />
          <DrawerLink linkPath="page5" linkName="page5" setHide={setHide} />
          <DrawerLink linkPath="page6" linkName="page6" setHide={setHide} />
          <DrawerLink linkPath="page7" linkName="page7" setHide={setHide} />
          <DrawerLink linkPath="page8" linkName="page8" setHide={setHide} />
          <DrawerLink linkPath="page9" linkName="page9" setHide={setHide} />
          <DrawerLink linkPath="page10" linkName="page10" setHide={setHide} />
          <DrawerLink linkPath="404" linkName="404" setHide={setHide} />
          <DrawerLink linkPath="dev" linkName="dev" setHide={setHide} />
        </ul>

        <DevNavbar />
      </section>

      <button
        className={` ${
          isHide ? 'ml-0 duration-700 ease-out' : 'ml-40 ease-in'
        }  
        fixed top-[45vh] block cursor-pointer rounded-tr-md rounded-br-md
        bg-gray-800/80 p-2 text-center shadow-sm 
        shadow-gray-500/40 `}
        type="button"
        aria-controls="drawer"
        onClick={() => {
          setHide(!isHide);
        }}
      >
        <div
          className={` ${
            isHide ? '' : 'duration-900 rotate-[1turn] transition-all ease-in'
          } 
          bg-transparent' rounded-full `}
        >
          <SettingsIcon sx={{ color: '#fff' }} />
        </div>

        <span className="sr-only">Toggle Drawer</span>
      </button>
      {/* end of Btn-setting */}
    </>
  );
}
/* end of Drawer() */

export default Drawer;
