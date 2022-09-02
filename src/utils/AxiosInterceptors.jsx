import baseReq from './http';
// #TODO: AxiosInterceptors with toastify fn()

baseReq.interceptors.request.use(
  // axios.interceptors.request.use(
  (config) => {
    console.log(`
      ${config.method.toUpperCase()} request sent to
        [${config.url}]
      ( at ${new Date()} ).
    `);

    const token = localStorage.getItem('JWT');
    if (token) {
      const { headers } = config;
      headers.Authorization = token;

      console.log('axios-config:::', config);
    }
    return config;
  },
  (error) => {
    console.log('interceptors-ERROR:');
    return Promise.reject(error);
  },
);
/* end of axios-config */
