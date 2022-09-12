import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo-peteats.png';

function LayoutNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 z-20 w-full border-b
        border-gray-200 bg-white p-2 md:py-0
        md:px-4"
    >
      {/* opacity-95 */}
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1>
          <Link to="/" className="block">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="PetEats-Logo" />
          </Link>
        </h1>

        <div className="flex md:order-2">
          {/* <button
            type="button"
            className="mr-3 rounded-lg bg-gray-700 px-5 py-2.5
            text-center text-sm font-medium text-white
            hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300
            md:mr-0"
          >
            Login
          </button> */}

          <button
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm
            text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
            md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span>O</span>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <div
          className={`w-full items-center justify-end md:order-1 md:flex md:w-[75%] ${
            open ? '' : 'hidden'
          }`}
        >
          <ul
            className="mt-4 flex flex-col gap-6 py-6 px-7 text-center
              md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:py-5 md:text-sm md:font-medium"
          >
            <li className="border-b md:border-0">
              <Link
                to="/"
                className="block rounded py-4 md:bg-transparent md:p-0"
                aria-current="page"
              >
                回首頁
              </Link>
            </li>

            <li className="border-b md:border-0">
              <Link
                to="/login"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100  md:p-0 md:hover:bg-transparent"
              >
                註冊 / 登入
              </Link>
            </li>

            <li className="border-b md:border-0">
              <Link
                to="/"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100  md:p-0 md:hover:bg-transparent"
              >
                LINK
              </Link>
            </li>

            <li className="border-b md:border-0">
              <Link
                to="/"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100  md:p-0 md:hover:bg-transparent"
              >
                LINK
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* end of container */}
    </nav>
  );
}
/* end of LayoutNavbar() */

export default LayoutNavbar;
