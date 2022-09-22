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

// 2-1
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

const getInfoMenu = async (query) => {
  console.log(query);
  // =${query}

  const response = await baseReq
    .get(`/shop/shop-id/menu?ShopId=${query}`)
    .catch((error) => error);

  return response;
};

const getMenuItem = async (query) => {
  console.log(query);
  // =${query}

  const response = await baseReq
    .get(`/shop/shop-id/menu/item-id?ProductId=${query}`)
    .catch((error) => error);

  return response;
};
/* end of API-GET */

const getCart = async () => {
  const response = await baseReq.get('/cart/content').catch((error) => error);

  return response;
};

const addItemToCart = async ({ clickOptionId, msg, amount }) => {
  // const addItemToCart = async (query) => {
  //   console.log(query);
  //   // =${query}
  //   const msg = 'hi';
  //   const amount = 1;

  const response = await baseReq
    .post(
      `/cart/AddProduct?ProductDetailId=${clickOptionId}&Memo=${msg}&Amount=${amount}`,
    )
    .catch((error) => error);

  return response;
};

const editCart = async ({
  itemId, detailId, amount, msg,
}) => {
  // console.log(query);
  // =${query}

  // const msg = 'edit';
  // const amount = 13;
  // const detailId = 11;

  // #TODO: WIP
  const response = await baseReq
    .put(
      `/cart/item?Id=${itemId}&ProductDetailId=${detailId}&Amount=${amount}&Memo=${msg}`,
    )
    .catch((error) => error);

  return response;
};

const deleteCart = async (query) => {
  console.log(query);
  // =${query}

  const response = await baseReq
    .delete(`/cart/delete?Id=${query}`)
    .catch((error) => error);

  return response;
};

const getHistoryOrder = async () => {
  const response = await baseReq
    .get('/order/Order-history')
    .catch((error) => error);

  return response;
};

const checkoutCart = async ({ Id, paymentId, deliveryId }) => {
  // const deliveryId = 1;
  // const paymentId = 1;

  const response = await baseReq
    .get(
      `/cart/send?UserId=${Id}&PaymentId=${paymentId}&ProductDeliveryId=${deliveryId}`,
    )
    .catch((error) => error);

  return response;
};
/* end of API-cart */

const orderPay = async (query) => {
  console.log(query);

  const response = await baseReq
    .post(`/order/pay?Id=${query}`)
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
  getInfoMenu,
  getMenuItem,

  getCart,
  addItemToCart,
  editCart,
  deleteCart,
  checkoutCart,

  orderPay,
  getHistoryOrder,
};

export default apiHelper;
