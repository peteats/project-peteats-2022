import { useEffect } from 'react';
import { toast } from 'react-toastify';

import axiosInstance from './http';
// #TODO: AxiosInterceptors with toastify fn()
/**
 * #NOTE: { theme: 'colored', "dark", "light" }
 */

// # NOTE: A-1
function responseHandler({ Status, Message }) {
  if (!Status) {
    return toast.error(Message, { theme: 'colored' });
  }
  return toast.success('Request success');
}
/* end of responseHandler() */

function AxiosInterceptors({ children }) {
  console.log('interceptor');

  useEffect(() => {
    console.log('useEffect');

    // # NOTE: A-1
    const resInterceptor = (response) => {
      console.log('resInterceptor');

      console.log(`
            [${response.status}] response from
              [${response.request?.responseURL}]
            ( at ${new Date()} ).
          `);

      const { data } = response;
      responseHandler(data);

      return response;
    };

    const errInterceptor = (error) => {
      console.log('errInterceptor');
      if (error.response.status === 401) {
        // redirect logic here
      }

      toast.error('Failed');

      return Promise.reject();
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

  return children;
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

export default AxiosInterceptors;
