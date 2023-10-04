import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import GitHubIcon from '@mui/icons-material/GitHub';
// import DesignServices from '@mui/icons-material/DesignServices';
import ApiIcon from '@mui/icons-material/Api';

import FavoriteIcon from '@mui/icons-material/Favorite';

import LogoLight from '../images/logo-light.png';
// import GitHubIcon from '../images/icon-github.svg';
// import FigmaIcon from '../images/icon-figma.png';
import FigmaIcon from '../images/figma-edited.png';
import RocketIcon from '../images/rocketcamp_edited-removebg-preview.png';

function LayoutFooter() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-[#212529] text-center text-white">
      <div className="pe-container mx-auto flex flex-col items-center justify-between px-3 pt-20 md:flex-row">
        <div className="pb-20 md:text-left">
          <Link to="/" className="block">
            <img
              src={LogoLight}
              className="block h-auto w-full object-cover hover:opacity-80"
              alt="PetEats-Logo"
            />
          </Link>

          <p className="pt-6 font-bold">
            <span>Copyright &#169; </span>
            <Link to="/" className="hover:opacity-80">
              2022 Pet Eats 配食舖
            </Link>
          </p>
        </div>
        {/* end of footer-Logo */}

        <div className="mb-10 text-center md:text-right" data-aos="flip-up">
          <ul className="flex flex-row gap-6 font-normal">
            {/* <li className="pb-6">
            <Link to="/" className="block">
              關於我們
            </Link>
          </li> */}

            <li className="pb-6 opacity-70 hover:opacity-100">
              <Link
                to="http://orid.rocket-coding.com/index.html"
                className="block"
                onClick={() => window.location.assign(
                  'http://orid.rocket-coding.com/index.html',
                )}
              >
                {/* 隱私政策 */}
                {/* <DesignServices sx={{ fontSize: '32px' }} /> */}
                <img
                  src={RocketIcon}
                  className="h-[32px] w-[32px] object-cover object-center"
                  alt="RocketIcon"
                />
              </Link>
            </li>

            <li className="pb-6 opacity-80 hover:opacity-100">
              <Link
                to="https://peteats.rocket-coding.com/swagger"
                className="block"
                onClick={() => window.location.assign(
                  'https://peteats.rocket-coding.com/swagger',
                )}
                // onClick={() => window.location.assign(
                //   'https://peteats.rocket-coding.com/swagger/index.html?url=/swagger/v1/swagger.json',
                // )}
              >
                {/* 意見回饋 */}
                <ApiIcon sx={{ fontSize: '32px' }} />
              </Link>
            </li>

            <li className="pb-6 opacity-70 hover:opacity-100">
              <Link
                to="https://www.figma.com/file/3VZWUjlZisosNjEzdWktz6/Pet-Eats"
                className="block"
                onClick={() => window.location.assign(
                  'https://www.figma.com/file/3VZWUjlZisosNjEzdWktz6/Pet-Eats',
                )}
              >
                {/* 隱私政策 */}
                {/* <DesignServices sx={{ fontSize: '32px' }} /> */}
                <img
                  src={FigmaIcon}
                  className="h-[32px] w-[32px] object-cover object-center"
                  alt="FigmaIcon"
                />
              </Link>
            </li>

            <li className="pb-6 opacity-80 hover:animate-[wiggle_1s_ease-in-out_infinite] hover:opacity-100">
              {/* <Link
              to={{ pathname: 'https://peteats.github.io/' }}
              target="_blank"
            > */}
              <Link
                to={{
                  pathname: 'https://github.com/peteats/project-peteats-2022',
                }}
                // to="https://peteats.github.io/"
                target="_blank"
                rel="noreferrer"
                className="block"
                onClick={() => window.location.assign(
                  'https://github.com/peteats/project-peteats-2022',
                )}
              >
                <GitHubIcon
                  sx={{ fontSize: '32px' }}
                  className="ease-linear hover:scale-125"
                />
                {/* <img
                src={GitHubIcon}
                className="h-8 w-8 object-cover object-center"
                alt="GitHubIcon"
              /> */}
              </Link>
            </li>
          </ul>

          {/* text-[#212529] */}
          <code className="inline-flex gap-1 text-xs opacity-80 hover:opacity-100">
            Made with
            {' '}
            <Link
              to={{ pathname: 'https://peteats.github.io/peteats.txt' }}
              target="_blank"
              rel="noreferrer"
              className="block"
              onClick={() => window.location.assign('https://peteats.github.io/peteats.txt')}
            >
              <FavoriteIcon
                className="animate-pulse pb-1 text-[#DB8C8C]"
                sx={{ fontSize: '18px' }}
              />
            </Link>
            {' '}
            by PetEats.
          </code>
        </div>
      </div>
      {/* end of container */}
    </footer>
  );
}
/* end of LayoutFooter() */

export default LayoutFooter;
