import axios from 'axios';

const BASE_URL = 'https://peteats.rocket-coding.com';

const baseReq = axios.create({
  baseURL: `${BASE_URL}/api`,

  // baseURL: `${BASE_URL}`,
  timeout: 9000,
});

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

export default baseReq;
