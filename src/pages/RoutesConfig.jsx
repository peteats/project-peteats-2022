import React from 'react';
import { useRoutes } from 'react-router-dom';

// import DevLayoutHome from './DevLayoutHome';

import DevLayout from './DevLayout';
import DevHome from './DevHome';
import DraftShops from './DraftShops';

import DevPage from './DevPage';
import DevSignup from './DevSignup';
import DevLogin from './DevLogin';
import DevMe from './DevMe';
import DevSetting from './DevSetting';
import DevReset from './DevReset';
// import Redirect from './Redirect';
import PageNotFound from './PageNotFound';

function RoutesConfig() {
  return useRoutes([
    {
      path: '/',
      element: <DevLayout />,

      children: [
        {
          index: true,
          element: <DevHome />,
        },
        {
          path: '/dev',
          element: <DevPage />,
        },

        {
          path: '/signup',
          element: <DevSignup />,
        },
        {
          path: '/login',
          element: <DevLogin />,
        },
        {
          path: '/shops',
          element: <DraftShops />,
        },

        // /me/settings
        {
          path: '/me',
          element: <DevMe />,

          // children: [
          //   {
          //     path: '/setting',
          //     element: <DevSetting />,
          //   },
          // ],
        },
        {
          path: '/auth-mail',
          element: <DevSetting />,
        },
        {
          path: '/reset-password',
          element: <DevSetting />,
        },
        {
          path: '/new-password',
          element: <DevReset />,
        },

        // {
        //   path: '/auth-mail',
        //   element: <Redirect to="/auth" />,
        // },

        {
          path: '/*',
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: '/layout',
      element: <DraftShops />,
      children: [
        {
          index: true,
          element: <DraftShops />,
        },
      ],
    },
  ]);
}

export default RoutesConfig;
