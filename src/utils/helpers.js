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
/* end of API-users */

const getShopTag = async () => {
  const response = await baseReq.get('/home/shop').catch((error) => error);

  return response;
};

const getShopCity = async () => {
  const response = await baseReq.get('/home/city').catch((error) => error);

  return response;
};

const getShopHot = async () => {
  const response = await baseReq.get('/home/hot').catch((error) => error);

  return response;
};

const getShopsByTag = async (query) => {
  console.log(query);

  const response = await baseReq
    // .get('/shop/tag?ProductClassId=1')
    .get(`/shop/tag?ProductClassId=${query}`)
    .catch((error) => error);

  return response;
};

const getShopsByCity = async () => {
  const response = await baseReq
    .get('/shop/local/city?Id=1')
    .catch((error) => error);

  return response;
};

const getMenu = async () => {
  const response = await baseReq
    .get('/shop/shop-id/menu?ShopId=2')
    .catch((error) => error);

  return response;
};

const getMenuItem = async () => {
  const response = await baseReq
    .get('/shop/shop-id/menu/item-id?ProductId=7')
    .catch((error) => error);

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

  getShopTag,
  getShopCity,
  getShopsByTag,
  getShopsByCity,
  getShopHot,
  getMenu,
  getMenuItem,
};

export default apiHelper;
