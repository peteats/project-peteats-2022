import axios from 'axios';

const BASE_URL = 'https://peteats.rocket-coding.com';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,

  timeout: 9000,
});

export default axiosInstance;
