import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';

import apiHelper from '../utils/helpers';

import HomeHero from './HomeHero';
import HomeIntro from './HomeIntro';

import HomeCategory from './HomeCategory';
import HomeShops from './HomeShops';

import HomeArea from './HomeArea';

function PageHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const Guid = params.get('guid')?.toString();

  const isAuthPath = useMatch('auth-mail');
  const isResetPath = useMatch('reset-password');

  useEffect(() => {
    if ('geolocation' in navigator) {
      // console.log('GEO-Available');

      // navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position);
      // console.log('Latitude is :', position.coords.latitude);
      // console.log('Longitude is :', position.coords.longitude);
      // });

      navigator.geolocation.getCurrentPosition(
        (position) => {
          // console.log(position);
        },
        (error) => {
          // console.error(`Error Code = ${error.code} - ${error.message}`);
        },
      );
    } else {
      // console.log('Not Available');
    }

    // console.log('isAuth:', isAuthPath);

    if (isAuthPath) {
      apiHelper.userAuthMail(Guid).then((res) => {
        // console.log(res);
        // #TODO:
        // #FIXME: delay navigate cos too fast

        setTimeout(() => {
          // console.log('navigate');
          navigate('/login');
        }, 1500);
        /* end of setTimeout() */
      });
    }

    if (isResetPath) {
      // console.log('GUID');

      apiHelper.userResetPassword(Guid).then((res) => {
        // console.log(res);

        setTimeout(() => {
          // console.log('navigate');

          navigate(`/me/new-password?guid=${Guid}`);
        }, 1500);
        /* end of setTimeout() */
      });
    }
  }, [location.key]);

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
