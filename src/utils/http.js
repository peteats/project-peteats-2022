import axios from 'axios';

const BASE_URL = 'https://peteats.rocket-coding.com';

const baseReq = axios.create({
  baseURL: `${BASE_URL}/api`,

  // baseURL: `${BASE_URL}`,
  timeout: 9000,
});

export default baseReq;
