import React from 'react';
import { useRoutes } from 'react-router-dom';

import DevLayout from './DevLayout';
import DevHome from './DevHome';
import DevPage from './DevPage';
import DevSignup from './DevSignup';
import DevLogin from './DevLogin';

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
          path: '/*',
          element: <PageNotFound />,
        },
      ],
    },
  ]);
}

export default RoutesConfig;
