import React from 'react';
import { useRoutes } from 'react-router-dom';

import LayoutMain from './LayoutMain';
import PageHome from './PageHome';

import RouteNeedAuth from './RouteNeedAuth';
import PageShops from './PageShops';
import SubShopLayout from './SubShopLayout';
import SubShopMenu from './SubShopMenu';
import SubShopCart from './SubShopCart';
// import SubCartLayout from './SubCartLayout';

// import PageNotFound from './PageNotFound';

// import DevHome from '../draft/DevHome';
// import Draft2 from '../draft/Draft2';
// import Draft3 from '../draft/Draft3';
// import Draft4 from '../draft/Draft4';
import Draft5 from '../draft/Draft5';
import Draft6 from '../draft/Draft6';
import Draft7 from '../draft/Draft7';
import Draft8 from '../draft/Draft8';
import Draft9 from '../draft/Draft9';
import Draft10 from '../draft/Draft10';

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

        // {
        //   path: '/page3',
        //   element: <Draft3 />,
        // },
        // {
        //   path: '/shops/:shopId/menu/:itemId',
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
        //   path: '/shops/:shopId/checkout',
        //   element: <Draft5 />,
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

        {
          path: '/me/new-password',
          element: <DevReset />,
        },

        {
          path: '/auth-mail',
          element: <PageHome />,
          //   element: <DevSetting />,
          //   element: <Redirect to="/auth" />,
        },
        {
          path: '/reset-password',
          element: <PageHome />,
          //   element: <DevReset />,
        },

        // #REVIEW: change the name

        {
          path: '/page6',
          element: <Draft6 />,
        },

        {
          //   path: '/page7',
          path: '/me/orders',
          element: <Draft7 />,
        },

        {
          //   path: '/page8',
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
