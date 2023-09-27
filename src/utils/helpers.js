import axios from 'axios';
import baseReq from './http';
// import baseReq from './AxiosInterceptors';
// import { baseReq } from './AxiosInterceptors';
import MOCK_DATA from '../draft/mock.json';

// console.log(MOCK_DATA);

const userSignUp = async (data) => {
  // console.log(typeof baseReq);
  // console.log(data);
  const response = await baseReq.post('/users/sign-up', data).catch(
    (error) =>
      // console.log(error);
      error.response,
  );

  return response;
};

const userLogin = async (data) => {
  // console.log(data);

  const response = await baseReq
    .post('/users/login', data)
    .catch((error) => error);

  return response;
};

const userEdit = async (data) => {
  // console.log(data);

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
  // console.log(query);
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
  // console.log(data);
  const response = await baseReq
    .put('/users/forget-password-mail', data)
    .catch((error) => error);

  return response;
};

const userResetPassword = async (data) => {
  // console.log(data);
  const response = await baseReq
    .post('/users/mail-reset-password', data)
    .catch((error) => error);

  return response;
};

const userNewPassword = async (data) => {
  // console.log(data);

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

const userLogout = async () => {
  const response = await baseReq
    .delete('/users/logout')
    .catch((error) => error);

  return response;
};
/* end of API-users */

const getImg = async (src) => {
  // console.log(query);

  const response = await axios.get(src).catch((error) => error);

  return response;
};

// 2-1
const getShopTag = async () => {
  const response = await baseReq.get('/home/shop').catch((error) => error);

  return response;
};

const getShopCity = async () => {
  const response = await baseReq.get('/home/city').catch((error) => error);

  return response;
};

const getShops = async ({ queryType, queryId }) => {
  // console.log(queryId);

  const URI_SHOPS = () => {
    if (queryType === 'TAG') {
      return `/shop/tag?ProductClassId=${queryId}`;
    }
    if (queryType === 'CITY') {
      return `/shop/local/city?Id=${queryId}`;
    }
    return '/home/hot';
  };

  const response = await baseReq
    .get(`${URI_SHOPS(queryType)}`)
    .catch((error) => error);

  return response;
};

const getShopsByTag = async (query) => {
  // console.log(query);

  const response = await baseReq
    // .get('/shop/tag?ProductClassId=1')
    .get(`/shop/tag?ProductClassId=${query}`)
    .catch((error) => error);

  return response;
};

const getShopsByCity = async (query) => {
  // console.log(query);
  // =${query}
  const response = await baseReq
    .get(`/shop/local/city?Id=${query}`)
    .catch((error) => error);

  return response;
};

const getShopsHot = async () => {
  const response = await baseReq.get('/home/hot').catch((error) => error);

  return response;
};

const getInfoMenu = async (query) => {
  // console.log(query);
  // =${query}

  // #TODO: promise with putShopHit

  const response = await baseReq
    .get(`/shop/shop-id/menu?ShopId=${query}`)
    .catch((error) => error);

  return response;
};

const putShopHit = async (query) => {
  // console.log(query);
  // =${query}
  // /shop/views?ShopId=3
  const response = await baseReq
    .put(`/shop/views?ShopId=${query}`)
    .catch((error) => error);

  return response;
};

const getMenuItem = async (query) => {
  // console.log(query);
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
  // console.log(query);
  // =${query}

  const response = await baseReq
    .delete(`/cart/delete?Id=${query}`)
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

const getHistoryOrders = async () => {
  const response = await baseReq
    .get('/order/Order-history')
    .catch((error) => error);

  return response;
};

const getOrderDetail = async (query) => {
  const response = await baseReq
    // oder/detail?OrderInformationId=41
    // .get(`/oder/detail?OrderInformationId=${query}`)
    .get(`/order/detail?OrderInformationId=${query}`)
    .catch((error) => error);

  return response;
};

const orderPay = async (query) => {
  // console.log(query);

  const response = await baseReq
    .post(`/order/pay?Id=${query}`)
    .catch((error) => error);

  return response;
};

const getOrderStatus = async (query) => {
  // console.log(query);

  const response = await baseReq
    .get(`/order/pay-result?Id=${query}`)
    .catch((error) => error);

  return response;
};

const reviewOrder = async ({ orderId, rating }) => {
  // #TODO:
  const response = await baseReq
    .get(`/order/feedback?Id=${orderId}&Feedback=${rating}`)
    // .post(`/order/feedback?Id=${orderId}&Feedback=${rating}`)
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
  userLogout,

  getImg,
  getShopTag,
  getShopCity,

  getShops,
  getShopsByTag,
  getShopsByCity,
  getShopsHot,

  getInfoMenu,
  getMenuItem,
  putShopHit,

  getCart,
  addItemToCart,
  editCart,
  deleteCart,
  checkoutCart,

  orderPay,
  getOrderStatus,
  getHistoryOrders,
  getOrderDetail,
  reviewOrder,
};

export default apiHelper;
