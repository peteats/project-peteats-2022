import React, { useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import PacmanLoader from 'react-spinners/PacmanLoader';

import LoadingContext from '../contexts/LoadingContext';
import axiosInstance from './http';
// #TODO: AxiosInterceptors with toastify fn()
/**
 * #NOTE: { theme: 'colored', "dark", "light" }
 */

// # NOTE: A-1
function responseHandler({ Status, Message }) {
  // setTimeout(() => {
  //   console.log('setLoading');
  //   setLoading(false);
  // }, 5000);

  if (!Status) {
    return toast.error(Message || 'Failed', { theme: 'dark' });
  }
  return toast.success(Message || 'Request success', { theme: 'dark' });
}
/* end of responseHandler() */

function AxiosInterceptors({ children }) {
  console.log('AxiosInterceptors');
  // const [isLoading, setLoading] = useState(false);
  const { isLoading, setLoading } = LoadingContext.useLoading();

  useEffect(() => {
    console.log('AxiosInterceptors-useEffect');

    // Add a request interceptor
    axiosInstance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        console.log('http-req:::', config);

        setLoading(true);

        return config;
      },
      (error) => {
        // Do something with request error
        console.log(error);

        return Promise.reject(error);
      },
    );

    // # NOTE: A-1
    const resInterceptor = (response) => {
      console.log(`resInterceptor-
        [${response.status}] response from
        [${response.request?.responseURL}]
        ( at ${new Date()} ).
      `);

      const { data } = response;
      responseHandler(data);

      setLoading(false);

      return response;
    };

    const errInterceptor = (error) => {
      console.log('errInterceptor-');
      // status codes falls outside 2xx
      if (error.response && error.response.status === 401) {
        console.log('redirect logic here-');
      }

      if (error.response && error.response.data) {
        toast.error(`ERROR::: ${error.response.data.message}`);
        // return;
      }

      if (error.response) {
        // #NOTE: CORS: error.response.data === undefined
        console.log(error.response.data);
        // error.response.status === 0
        console.log(error.response.status);
        // error.response.data === headers
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('error.request:::', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error:::', error.message);
      }
      console.log('error.config:::', error.config);

      setLoading(false);
      toast.error(`ERROR::: ${error.message}`, { theme: 'dark' });

      return Promise.reject(error);
    };

    const interceptor = axiosInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor,
    );
    // console.log(axiosInstance.interceptors.response.eject(interceptor));
    console.log('interceptor::', interceptor);

    return () => axiosInstance.interceptors.response.eject(interceptor);

    // const PromiseNotify = () =>
    //   toast.promise(fetchData(), {
    //     loading: 'loading...',
    //     success: 'Successfully get data',
    //     error: 'error occurs in data',
    //   });

    // return () => {
    //   toast.promise(axiosInstance.interceptors.response.eject(interceptor), {
    //     loading: 'loading...',
    //     success: 'Successfully get data',
    //     error: 'error occurs in data',
    //   });
    // };
  }, []);

  // return children;
  return (
    <>
      {children}
      <div className="fixed bottom-4 right-16">
        <p className="sr-only">LOADING...</p>

        <PacmanLoader
          color="#DB8C8C"
          loading={isLoading}
          // cssOverride={override}
          size={16}
        />
      </div>
    </>
  );
}

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data

//     console.log(`
//       ${response.config} response
//         [${response.status}]
//       ( at ${new Date()} ).
//     `);

//     toast.success('Request success');

//     return response;
//   },
//   (error) => {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error

//     console.log(`
//       ${error.response.data} response
//         [${error.response.data.status}]
//       ( at ${new Date()} ).
//     `);

//     toast.error('Sorry request failed');

//     return Promise.reject(error);
//   },
// );
// /* end of interceptors-response */

// axiosInstance.interceptors.request.use(
//   // axios.interceptors.request.use(
//   (config) => {
//     console.log(`
//       ${config.method.toUpperCase()} request sent to
//         [${config.url}]
//       ( at ${new Date()} ).
//     `);

//     const token = localStorage.getItem('JWT');
//     if (token) {
//       const { headers } = config;
//       headers.Authorization = token;

//       console.log('axios-config:::', config);
//     }
//     return config;
//   },
//   (error) => {
//     console.log('interceptors-ERROR:');
//     return Promise.reject(error);
//   },
// );
// /* end of interceptors-request */

// eslint-disable-next-line import/prefer-default-export
// export { AxiosInterceptors };

AxiosInterceptors.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AxiosInterceptors;
