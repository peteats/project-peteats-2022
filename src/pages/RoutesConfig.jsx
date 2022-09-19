import React from 'react';
import { useRoutes } from 'react-router-dom';

import LayoutMain from './LayoutMain';
import PageNotFound from './PageNotFound';

import DevHome from '../draft/DevHome';
import Draft2 from '../draft/Draft2';
import DraftShops from '../draft/DraftShops';
// import Draft3 from '../draft/Draft3';
// import Draft4 from '../draft/Draft4';
// import Draft5 from '../draft/Draft5';
// import Draft6 from '../draft/Draft6';
// import Draft7 from '../draft/Draft7';
// import Draft8 from '../draft/Draft8';

import DevPage from '../draft/DevPage';
import DevSignup from '../draft/DevSignup';
import DevLogin from '../draft/DevLogin';
import DevMe from '../draft/DevMe';
import DevSetting from '../draft/DevSetting';
import DevReset from '../draft/DevReset';
// import Redirect from './Redirect';

function RoutesConfig() {
  return useRoutes([
    {
      path: '/',
      element: <LayoutMain />,

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
          path: '/page2',
          element: <Draft2 />,
        },
        {
          path: '/page3',
          element: <Draft3 />,
        },
        {
          path: '/page4',
          element: <Draft4 />,
        },
        {
          path: '/page5',
          element: <Draft5 />,
        },
        {
          path: '/page6',
          element: <Draft6 />,
        },
        {
          path: '/page7',
          element: <Draft7 />,
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
