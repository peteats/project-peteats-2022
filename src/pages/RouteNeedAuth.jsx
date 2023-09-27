import React from 'react';
import { Navigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import useAuth from '../hooks/useAuth';

function RouteNeedAuth({ children }) {
  const { token } = useAuth();

  if (!token) {
    // toast.error('請登入帳號', { theme: 'dark' });
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RouteNeedAuth;
