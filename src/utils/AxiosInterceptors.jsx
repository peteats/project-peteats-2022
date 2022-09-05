import { useEffect } from 'react';
import { toast } from 'react-toastify';

import axiosInstance from './http';
// #TODO: AxiosInterceptors with toastify fn()

function AxiosInterceptors({ children }) {
  console.log('interceptor');

  useEffect(() => {
    console.log('useEffect');

    const resInterceptor = (response) => {
      console.log('resInterceptor');

      toast.success('Request success');

      return response;
    };

    const errInterceptor = (error) => {
      console.log('errInterceptor');
      if (error.response.status === 401) {
        // redirect logic here
      }

      return Promise.reject();
    };

    const interceptor = axiosInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor,
    );

    return () => axiosInstance.interceptors.response.eject(interceptor);
  }, []);

  return children;
}

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

// eslint-disable-next-line import/prefer-default-export
// export { AxiosInterceptors };

export default AxiosInterceptors;
