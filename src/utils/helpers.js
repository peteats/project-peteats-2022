import axios from 'axios';

const BASE_URL = 'https://peteats.rocket-coding.com';
// const BASE_URL = 'https://easysplit.rocket-coding.com';

// const BASE_URL = 'https://todoo.5xcamp.us';

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

const userSignUp = async (data) => {
  // const userSignUp = async ({ user }) => {
  console.log(data);
  const response = await baseReq
    .post('/users/sign-up', data)
    .catch((error) => error.response);

  // const response = await baseReq
  //   .post('/users', { user })
  //   .catch((error) => error.response);
  return response;
};

// const userLogin = async ({ user }) => {
const userLogin = async (data) => {
  console.log(data);

  const response = await baseReq
    .post('/users/login', data)
    .catch((error) => error.response);

  // const response = await baseReq
  //   .post('/users/sign_in', { user })
  //   .catch((error) => error.response);

  // return baseReq.post('/users/login', data);
  return response;
};

const userEdit = async (data) => {
  console.log(data);

  const response = await baseReq
    .put('/users/edit', data)
    .catch((error) => error.response);

  return response;
};

const userGetInfo = async () => {
  const response = await baseReq
    .get('/users/info')
    .catch((error) => error.response);

  return response;
};

const userAuthMail = async (query) => {
  console.log(query);
  const response = await baseReq
    .post(`/users/auth-mail?guid=${query}`)
    .catch((error) => error.response);

  return response;
};
// const userAuthMail = async (data) => {
//   const response = await baseReq
//     .post('/users/auth-mail', data)
//     .catch((error) => error.response);

//   return response;
// };

const userForgetPassword = async (data) => {
  console.log(data);
  const response = await baseReq
    .put('/users/forget-password-mail', data)
    .catch((error) => error.response);

  return response;
};

const userResetPassword = async (data) => {
  console.log(data);
  const response = await baseReq
    .post('/users/mail-reset-password', data)
    .catch((error) => error.response);

  return response;
};

const userNewPassword = async (data) => {
  console.log(data);
  const response = await baseReq
    .post('/users/login-reset-password', data)
    .catch((error) => error.response);

  return response;
};

const userCheck = async () => {
  const response = await baseReq
    .post('/users/check')
    .catch((error) => error.response);

  return response;
};

const apiHelper = {
  userSignUp,
  userAuthMail,
  userLogin,
  userGetInfo,
  userEdit,
  userNewPassword,
  userForgetPassword,
  userResetPassword,
  userCheck,
};

export default apiHelper;
