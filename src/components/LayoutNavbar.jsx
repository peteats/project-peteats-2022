import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

import apiHelper from '../utils/helpers';

import Logo from '../images/logo-peteats.png';

function LayoutNavbar({ token }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // #FIXME: missing Navbar on PC

    if (open && document.documentElement.scrollWidth < 768) {
      setTimeout(() => {
        // console.log(
        //   'document.documentElement.scrollWidth',
        //   document.documentElement.scrollWidth,
        // );
        // console.log('window.scrollY',window.scrollY );
        // console.log('TOGGLE');
        setOpen(false);
      }, 1300);
    }
    /* end of IF(TRUE) */
  }, [open]);

  // border-b border-gray-200 shadow-lg
  return (
    <nav
      id="TOP"
      className={`sticky top-0 left-0 z-50 w-full bg-white/90 p-2
      md:py-0 md:px-0 ${
        window.scrollY >= 10 ? 'border-b border-gray-200 shadow-md' : ''
      }`}
    >
      <div className="pe-container mx-auto flex flex-wrap items-center justify-between">
        <h1>
          <Link to="/" className="block">
            <img src={Logo} className="h-6 sm:h-9" alt="PetEats-Logo" />
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
            className="inline-flex items-center rounded-lg  p-2 text-sm
            text-gray-500 hover:bg-gray-100/50 hover:text-[#DB8C8C] focus:outline-none focus:ring-2 focus:ring-gray-200
            md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <i>
              <MenuIcon />
            </i>

            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <div
          className={`flex w-full items-center justify-end md:order-1 md:flex-1  ${
            open ? '' : 'hidden'
          }  `}
        >
          {/* <div
          className={`  w-full items-center justify-end lg:order-1 lg:flex lg:w-[75%] ${
            open ? '' : 'hidden'
          }  bg-slate-300/50`}
        > */}
          <ul
            className="mt-4 flex w-full flex-col gap-6 py-6 px-7 text-center
              md:mt-0 md:w-fit md:flex-row md:space-x-8 md:border-0 md:py-5 md:text-sm md:font-medium md:last:pr-0"
          >
            <li className="block border-b md:hidden md:border-0">
              <Link
                to="/"
                className="md:border-1 inline-flex items-center gap-1 rounded py-2 pr-4 pl-3 text-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:border-[#DB8C8C] hover:text-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 md:border md:border-[#343A40] md:px-5 md:hover:bg-[#DB8C8C] md:hover:bg-transparent
                "
                aria-current="page"
              >
                回首頁
              </Link>
            </li>

            {!token && (
              <li className="border-b md:border-0">
                <Link
                  to="/login"
                  // to={token ? '/me/new-password' : '/signup'}
                  // to={token ? '/login' : '/signup'}
                  // to="/signup"
                  className="md:border-1 inline-flex items-center gap-1 rounded py-2 pr-4 pl-3 text-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:border-[#DB8C8C] hover:text-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 md:border md:border-[#343A40] md:px-5 md:hover:bg-[#DB8C8C] md:hover:bg-transparent
                "
                >
                  <i className="hidden md:block">
                    <PersonIcon sx={{ fontSize: '16px' }} />
                  </i>
                  登入
                </Link>
              </li>
            )}

            {token && (
              <>
                <li className="border-b md:border-0">
                  <button
                    type="button"
                    // <button
                    // to="/"
                    // to={token ? '/me/new-password' : '/signup'}
                    // to={token ? '/login' : '/signup'}
                    // to="/signup"
                    className="md:border-1 inline-flex items-center gap-1 rounded py-2 pr-4 pl-3 text-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:border-[#DB8C8C] hover:text-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 md:border md:border-[#343A40] md:px-5 md:hover:bg-[#DB8C8C] md:hover:bg-transparent
                    "
                    onClick={() => {
                      // console.log('OUT');

                      apiHelper.userLogout().then((res) => {
                        // console.log(res);

                        if (res?.data?.Status) {
                          // console.log('userForgetPassword:::', res?.data);
                          localStorage.removeItem('JWT');

                          setTimeout(() => {
                            // console.log('navigate');
                            // navigate('/login');
                            navigate('/');
                          }, 500);
                          /* end of setTimeout() */
                        }
                        /* end of IF(Status) */
                      });
                      /* end of API */
                    }}
                  >
                    <i className="hidden md:block">
                      <LogoutIcon sx={{ fontSize: '16px' }} />
                    </i>
                    登出
                  </button>
                </li>

                <li className="border-b md:border-0">
                  <Link
                    to="/me"
                    // to={token ? '/me/new-password' : '/signup'}
                    // to={token ? '/login' : '/signup'}
                    // to="/signup"
                    className="md:border-1 inline-flex items-center gap-1 rounded py-2 pr-4 pl-3 text-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:border-[#DB8C8C] hover:text-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 md:border md:border-[#343A40] md:px-5 md:hover:bg-[#DB8C8C] md:hover:bg-transparent
                "
                  >
                    <i className="hidden md:block">
                      <PersonIcon sx={{ fontSize: '16px' }} />
                    </i>
                    會員中心
                  </Link>
                </li>

                <li className="border-b md:border-0">
                  <Link
                    to="/me/orders"
                    className="md:border-1 inline-flex items-center gap-1 rounded py-2 pr-4 pl-3 text-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:border-[#DB8C8C] hover:text-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 md:border md:border-[#343A40] md:px-5 md:hover:bg-[#DB8C8C] md:hover:bg-transparent
                "
                  >
                    訂單資訊
                  </Link>
                </li>

                <li className="hidden border-b md:block md:border-0">
                  <Link
                    to="/me/cart"
                    className="md:border-1 inline-flex items-center gap-1 rounded py-2 pr-4 pl-3 text-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:border-[#DB8C8C] hover:text-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 md:border md:border-[#343A40] md:px-3 md:hover:bg-[#DB8C8C] md:hover:bg-transparent
                "
                  >
                    <i className="hidden md:block">
                      <ShoppingCartOutlinedIcon sx={{ fontSize: '16px' }} />
                    </i>
                  </Link>
                </li>
              </>
            )}

            {/* <li className="border-b md:border-0">
              <Link
                to="/"
                className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100
                md:p-0 md:hover:bg-transparent"
              >
                LINK
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* end of container */}
    </nav>
  );
}
/* end of LayoutNavbar() */

export default LayoutNavbar;
