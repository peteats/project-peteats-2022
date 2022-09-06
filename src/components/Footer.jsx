import React from 'react';
import { Link } from 'react-router-dom';

import LogoLight from '../images/logo-light.png';

function Footer() {
  return (
    <footer className="bg-[#212529] text-center text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-3 pt-20 md:flex-row">
        <div className="pb-20 md:text-left">
          <Link to="/" className="block">
            <img
              src={LogoLight}
              className="block h-16 w-full object-cover"
              alt="PetEats-Logo"
            />
          </Link>

          <p className="pt-6 font-bold">
            Copyright &#169; 2022 Pet Eats 配食舖
          </p>
        </div>
        {/* end of footer-Logo */}

        <ul className="pb-20 font-normal md:flex md:flex-row md:gap-6">
          <li className="pb-6">
            <Link to="/" className="block">
              關於我們
            </Link>
          </li>

          <li className="pb-6">
            <Link to="/" className="block">
              隱私政策
            </Link>
          </li>

          <li className="pb-6">
            <Link to="/" className="block">
              意見回饋
            </Link>
          </li>
        </ul>
      </div>
      {/* end of container */}
    </footer>
  );
}

export default Footer;
