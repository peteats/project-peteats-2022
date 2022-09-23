import React from 'react';
import { useRoutes } from 'react-router-dom';
// import { useRoutes, useLocation } from 'react-router-dom';

import LayoutMain from './LayoutMain';
import PageNotFound from './PageNotFound';

import Modal from '../components/Modal';

import DevHome from '../draft/DevHome';
import Draft2 from '../draft/Draft2';
import Draft3 from '../draft/Draft3';
import Draft4 from '../draft/Draft4';
import Draft5 from '../draft/Draft5';
import Draft6 from '../draft/Draft6';
import Draft7 from '../draft/Draft7';
import Draft8 from '../draft/Draft8';
import Draft9 from '../draft/Draft9';
import Draft10 from '../draft/Draft10';
// import DraftShops from '../draft/DraftShops';

import DevPage from '../draft/DevPage';
import DevSignup from '../draft/DevSignup';
import DevLogin from '../draft/DevLogin';
import DevMe from '../draft/DevMe';
import DevSetting from '../draft/DevSetting';
import DevReset from '../draft/DevReset';
// import Redirect from './Redirect';

function RoutesConfig() {
  // const location = useLocation();
  // const background = location.state && location.state.background;

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
          path: '/shops/tag/:tagId',
          element: <Draft2 />,
        },
        {
          path: '/page3',
          element: <Draft3 />,
        },
        {
          path: '/shops/:shopId',
          element: <Draft3 />,
          // location: background || location,
        },
        {
          path: '/shops/:shopId/menu/:itemId',
          element: <Draft3 />,
          // location: background,
        },
        {
          path: '/shops/:shopId/menu/:optionId/modal',
          element: <Modal />,
          // location: background,
        },
        // #REVIEW: change the name
        {
          path: '/page4',
          element: <Draft4 />,
        },
        {
          path: '/shops/:shopId/cart',
          element: <Draft4 />,
        },
        {
          path: '/shops/:shopId/cart/reload',
          element: <Draft4 />,
        },

        {
          path: '/page5',
          element: <Draft5 />,
        },
        {
          path: '/shops/:shopId/checkout',
          element: <Draft5 />,
        },

        {
          path: '/page6',
          element: <Draft6 />,
        },

        {
          path: '/me/orders/:orderId',
          element: <Draft7 />,
        },
        {
          path: '/page7',
          element: <Draft7 />,
        },

        {
          path: '/page8',
          element: <Draft8 />,
        },
        {
          path: '/me/orders/:orderId',
          element: <Draft8 />,
        },

        {
          path: '/me/orders/:orderId/review',
          element: <Draft9 />,
        },
        {
          path: '/page10',
          element: <Draft10 />,
        },

        {
          path: '/signup',
          element: <DevSignup />,
        },
        {
          path: '/login',
          element: <DevLogin />,
        },

        // {
        //   path: '/shops',
        //   element: <DraftShops />,
        // },

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
    // {
    //   path: '/layout',
    //   element: <DraftShops />,
    //   children: [
    //     {
    //       index: true,
    //       element: <DraftShops />,
    //     },
    //   ],
    // },
  ]);
}

export default RoutesConfig;
