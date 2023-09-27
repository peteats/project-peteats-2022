import React, { useState, useEffect } from 'react';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';

import Navbar from '../components/LayoutNavbar';
import Footer from '../components/LayoutFooter';

// import DevDrawer from '../draft/DevDrawer';

import apiHelper from '../utils/helpers';

function LayoutMain() {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [isEdit, setIsEdit] = useState(null);

  const loadToken = localStorage.getItem('JWT');

  useEffect(() => {
    // console.log('render1-loadToken::', token);

    if (loadToken) {
      setToken(loadToken);
    }

    if (token) {
      // console.log('#TODO: API-TestCheck()');

      apiHelper.userCheck().then((res) => {
        // console.log('#TODO: API-TestCheck()');
        // console.log(res);

        if (!res?.data?.Status) {
          localStorage.removeItem('JWT');
          setToken(null);
        }
        navigate('/shops');
        setToken(loadToken);

        // const { result } = res;
        // console.log(result.message);
        // #TODO: handleError;
        // alert(result.message);

        // navigate('/todos');
        /**
         * #TODO:
         * if (res.ok)
         */
        // IF(!) navigate('/');
      });
    }

    return () => {
      // console.log('#TODO: return clear');
    };
  }, [loadToken, token]);
  /* end of useEffect() */

  return (
    <>
      {/* <DevDrawer /> */}
      {/*  */}

      <Navbar token={token} />

      <Outlet context={{ token, setToken }} />

      <Footer />
    </>
  );
}
/* end of LayoutMain() */

export default LayoutMain;

export function useAuth() {
  return useOutletContext();
}
/* end of useAuth()-useOutletContext */
