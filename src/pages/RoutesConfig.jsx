import React from 'react';
import { useRoutes } from 'react-router-dom';
// import { useRoutes, useLocation } from 'react-router-dom';

import LayoutMain from './LayoutMain';
import PageHome from './PageHome';
import PageShops from './PageShops';
import SubShopLayout from './SubShopLayout';
import SubShopMenu from './SubShopMenu';
import SubShopCart from './SubShopCart';

import PageNotFound from './PageNotFound';

// import Modal from '../draft/DraftModal';

// import DevHome from '../draft/DevHome';
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
import DraftAreaGrid from '../draft/DraftAreaGrid';

import DevPage from '../draft/DevPage';
import DevSignup from '../draft/DevSignup';
import DevLogin from '../draft/DevLogin';
import DevMe from '../draft/DevMe';
import DevSetting from '../draft/DevSetting';
import DevReset from '../draft/DevReset';
// import Redirect from './Redirect';
import DraftHome from '../draft/DraftHome';

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
          element: <PageHome />,
          // element: <DevHome />,
        },

        {
          path: '/shops',
          element: <PageShops />,
          // element: <Draft2 />,
          // element: <DraftShops />,
        },
        {
          path: '/shops/tag/:tagId',
          element: <PageShops />,
        },
        {
          path: '/shops/city/:cityId',
          // path: '/shops/city/:tagId',
          element: <PageShops />,
        },
        /* end of shops-routes */

        // {
        //   path: '/shops/:shopId',
        //   element: <PageShopMenu />,
        //   // element: <Draft3 />,
        //   // location: background || location,
        // },
        {
          path: '/shops/:shopId',
          element: <SubShopLayout />,
          children: [
            {
              index: true,
              element: <SubShopMenu />,
            },
            {
              path: 'menu/:itemId',
              // path: 'menu/:itemId/modal',
              // path: '/shops/:shopId/menu/:itemId',
              element: <SubShopMenu />,
            },
            {
              path: 'cart',
              element: <SubShopCart />,
            },
          ],
        },

        {
          path: '/wip',
          element: <PageShops />,
        },

        // {
        //   path: '/page3',
        //   element: <Draft3 />,
        // },
        // {
        //   path: '/shops/:shopId/menu/:itemId',
        //   element: <Draft3 />,
        //   // location: background,
        // },
        {
          path: '/shops/:shopId/menu/:itemId/:optionId',
          element: <Draft3 />,
          // location: background,
        },
        // {
        //   path: '/shops/:shopId/menu/:optionId/modal',
        //   element: <Modal />,
        //   // location: background,
        // },

        {
          path: '/draft',
          element: <DraftHome />,
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
          path: '/me/setting',
          element: <DevSetting />,
        },

        // {
        //   path: '/reset-password',
        //   element: <DevReset />,
        // },
        {
          path: '/me/new-password',
          element: <DevReset />,
        },

        // {
        //   path: '/auth-mail',
        //   element: <DevSetting />,
        // },
        {
          path: '/auth-mail',
          element: <PageHome />,
        },
        {
          path: '/reset-password',
          element: <PageHome />,
        },
        // {
        //   path: '/auth-mail',
        //   element: <Redirect to="/auth" />,
        // },

        // #REVIEW: change the name
        {
          path: '/page4',
          element: <Draft4 />,
        },
        {
          path: '/me/cart',
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
        // {
        //   path: '/me/orders',
        //   element: <Draft6 />,
        // },

        {
          path: '/page7',
          element: <Draft7 />,
        },
        {
          path: '/me/orders',
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
          path: '/*',
          element: <PageHome />,
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
