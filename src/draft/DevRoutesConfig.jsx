import React from 'react';
import { useRoutes } from 'react-router-dom';
// import { useRoutes, useLocation } from 'react-router-dom';

import LayoutMain from '../pages/LayoutMain';
import PageHome from '../pages/PageHome';

import RouteNeedAuth from '../pages/RouteNeedAuth';
import PageShops from '../pages/PageShops';
import SubShopLayout from '../pages/SubShopLayout';
import SubShopMenu from '../pages/SubShopMenu';
import SubShopCart from '../pages/SubShopCart';
import SubCartLayout from '../pages/SubCartLayout';

import PageNotFound from '../pages/PageNotFound';

// import Modal from '../draft/DraftModal';

// import DevHome from '../draft/DevHome';
import Draft2 from './Draft2';
import Draft3 from './Draft3';
import Draft4 from './Draft4';
import Draft5 from './Draft5';
import Draft6 from './Draft6';
import Draft7 from './Draft7';
import Draft8 from './Draft8';
import Draft9 from './Draft9';
import Draft10 from './Draft10';
// import DraftShops from '../draft/DraftShops';
import DraftAreaGrid from './DraftAreaGrid';

import DevPage from './DevPage';
import DevSignup from './DevSignup';
import DevLogin from './DevLogin';
import DevMe from './DevMe';
import DevSetting from './DevSetting';
import DevReset from './DevReset';
// import Redirect from './Redirect';
import DraftHome from './DraftHome';

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
          element: (
            <RouteNeedAuth>
              <PageShops />
            </RouteNeedAuth>
          ),
          // element: <PageShops />,
        },
        {
          path: '/shops/city/:cityId',
          element: (
            <RouteNeedAuth>
              <PageShops />
            </RouteNeedAuth>
          ),
          // path: '/shops/city/:tagId',
        },
        /* end of shops-routes */

        {
          path: '/shops/:shopId',
          element: <SubShopLayout />,
          //   element: <PageShopMenu />,
          //   // element: <Draft3 />,
          //   // location: background || location,
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
            {
              path: 'checkout',
              element: <Draft5 />,
            },

            // {
            //   path: 'cart',
            //   element: <SubCartLayout />,
            //   // element: <Draft4 />,
            //   children: [
            //     {
            //       index: true,
            //       element: <SubShopCart />,
            //       // element: <Draft4 />,
            //     },
            //     {
            //       path: 'checkout',
            //       // element: <SubShopCart />,
            //       element: <Draft5 />,
            //     },
            //   ],
            // },
          ],
        },

        {
          path: '/me/cart',
          element: <SubShopCart />,
        },
        {
          path: '/me/checkout',
          element: <Draft5 />,
        },

        //   path: '/shops/:shopId/cart/reload',
        //   path: '/me/cart',

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
        // {
        //   path: '/shops/:shopId/menu/:itemId/:optionId',
        //   element: <Draft3 />,
        //   // location: background,
        // },
        // {
        //   path: '/shops/:shopId/menu/:optionId/modal',
        //   element: <Modal />,
        //   // location: background,
        // },

        // {
        //   path: '/page5',
        //   element: <Draft5 />,
        // },
        // {
        //   path: '/shops/:shopId/checkout',
        //   element: <Draft5 />,
        // },

        // {
        //   path: '/draft',
        //   element: <DraftHome />,
        // },

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
          // #
          element: <PageHome />,
        },
        // {
        //   path: '/auth-mail',
        //   element: <Redirect to="/auth" />,
        // },

        // #REVIEW: change the name

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
