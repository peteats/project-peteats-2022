import baseReq from './http';
// import baseReq from './AxiosInterceptors';
// import { baseReq } from './AxiosInterceptors';

const userSignUp = async (data) => {
  // console.log(typeof baseReq);
  console.log(data);
  const response = await baseReq.post('/users/sign-up', data).catch((error) => {
    console.log(error);
    return error.response;
  });

  return response;
};

const userLogin = async (data) => {
  console.log(data);

  const response = await baseReq
    .post('/users/login', data)
    .catch((error) => error);

  return response;
};

const userEdit = async (data) => {
  console.log(data);

  const response = await baseReq
    .put('/users/edit', data)
    .catch((error) => error);

  return response;
};

const userGetInfo = async () => {
  const response = await baseReq.get('/users/info').catch((error) => error);

  return response;
};

const userAuthMail = async (query) => {
  console.log(query);
  const response = await baseReq
    .post(`/users/auth-mail?guid=${query}`)
    .catch((error) => error);

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
    .catch((error) => error);

  return response;
};

const userResetPassword = async (data) => {
  console.log(data);
  const response = await baseReq
    .post('/users/mail-reset-password', data)
    .catch((error) => error);

  return response;
};

const userNewPassword = async (data) => {
  console.log(data);
  const response = await baseReq
    .post('/users/login-reset-password', data)
    .catch((error) => error);

  return response;
};

const userCheck = async () => {
  const response = await baseReq.post('/users/check').catch((error) => error);

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
