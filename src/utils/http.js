import axios from 'axios';

// for IIS
// const BASE_URL = 'http://localhost:8080';
// const BASE_URL = '.';
// const BASE_URL = 'http://localhost';
// const BASE_URL = 'https://peteats.rocket-coding.com';

const axiosInstance = axios.create({
  // baseURL: '/api',
  // for IIS
  baseURL: './api',
  // baseURL: `${BASE_URL}/api`,

  // timeout: 12000,
});

export default axiosInstance;
