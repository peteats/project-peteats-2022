import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  Link,
  useNavigate,
  useParams,
  useLocation,
  useMatch,
} from 'react-router-dom';
import apiHelper from '../utils/helpers';
import { useShop } from './SubShopLayout';

import imgStore from '../images/Store.png';

function counterReducer(state, action) {
  // console.log('counterReducer:::', state.count);

  switch (action.type) {
    case 'plus':
      return { count: state.count + 1 };
    case 'minus':
      return { count: state.count > 1 ? state.count - 1 : 0 };

      // default:
      //   return { count: action.payload };
      // // return { count: 0 };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
/* end of counterReducer(state, action) */

function Counter({ Amount }) {
  const [state, dispatch] = useReducer(counterReducer, { count: Amount });
  // const [state, dispatch] = useReducer(counterReducer, initCount);

  return (
    <>
      <button
        type="button"
        className="font-bold text-[#DB8C8C]"
        onClick={() => {
          dispatch({ type: 'minus' });
        }}
      >
        -
      </button>

      <p>
        Count:
        {state.count}
      </p>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'plus' });
        }}
      >
        <span className='className="font-bold text-[#DB8C8C]"'>+</span>
      </button>
    </>
  );
}
/* end of Counter(initCount) */

function SummaryItem({ item, stateCount }) {
  const { ProductName, Amount, Price } = item;

  return (
    <li className="mb-6  md:mb-6">
      <section className="flex items-center justify-between">
        <h4 className="w-3/5">{ProductName}</h4>

        <div className="flex w-2/5 items-center justify-between">
          <p className="font-bold text-[#DB8C8C]">{Amount}</p>

          {/* <p className="justify-end">{Price * stateCount || Price * Amount}</p> */}
          <p className="justify-end">{Price * Amount}</p>
        </div>
      </section>
    </li>
  );
}
/* end of SummaryItem */

function CartSummary({
  data, payment, stateCount, isEdit,
}) {
  // const { shopId } = useParams();
  const { shopId } = useShop();

  const isMeCartPath = useMatch('/me/cart');

  useEffect(() => {}, [isEdit]);

  return (
    <section className="flex flex-col gap-10 rounded-2xl border-4 border-[#DB8C8C] p-10  lg:w-2/5">
      <h3 className="text-center  md:text-left">訂單內容</h3>

      <div className="hidden md:flex md:items-center md:justify-between md:border-b-2 md:pb-2">
        <p className="w-3/5">品項</p>

        <div className="flex w-2/5 items-center justify-between">
          <p className="">數量</p>
          <p className="justify-end">金額</p>
        </div>
      </div>
      {/* end of RWD-PC-title */}

      <ul className="md:border-b-2 md:pb-1">
        {/* #TODO: inject data from Server */}
        {data.map((item) => (
          // console.log('Summary');
          <SummaryItem key={item.Id} item={item} stateCount={stateCount} />
        ))}
      </ul>

      <div className="flex items-center justify-end gap-6">
        <p className="w-[48%] text-center">運費</p>

        <p className="">{data[0]?.Freight}</p>
      </div>

      <div className="flex items-center justify-end gap-6">
        <p className="w-[48%] text-center">總金額</p>

        <p className="font-bold text-[#DB8C8C]">{payment}</p>
      </div>

      {isMeCartPath ? (
        <button
          type="button"
          className="m-2 hidden rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            // console.log('SUBMIT');

            const Id = 27;
            const paymentId = 1;
            const deliveryId = 2;

            return apiHelper
              .checkoutCart({ Id, paymentId, deliveryId })
              .then((res) => {
                // console.log(res);

                if (res?.data?.Status) {
                  // console.log('submitCart:::', res?.data);
                  // const { Data, DetailList } = res.data;
                  // console.log(DetailList[0]);
                  // console.log(Data[0]);
                  // setCateData(Data);
                }
              });
          }}
        >
          5-submitCart
        </button>
      ) : (
        <Link
          to={`/shops/${shopId}/checkout`}
          className="block rounded-[4px] bg-black py-2 text-center font-normal text-white"
        >
          前往購物車結帳
        </Link>
      )}

      <button
        type="button"
        className="m-2 hidden rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
        onClick={() => {
          // console.log('SUBMIT');

          const Id = 27;
          const paymentId = 1;
          const deliveryId = 2;

          return apiHelper
            .checkoutCart({ Id, paymentId, deliveryId })
            .then((res) => {
              // console.log(res);

              if (res?.data?.Status) {
                // console.log('submitCart:::', res?.data);
                // const { Data, DetailList } = res.data;
                // console.log(DetailList[0]);
                // console.log(Data[0]);
                // setCateData(Data);
              }
            });
        }}
      >
        5-submitCart
      </button>
    </section>
  );
}
/* end of CartSummary */

function CartItem({ item, onClickItem, isEdit }) {
  const navigate = useNavigate();
  const { shopId } = useParams();
  const location = useLocation();

  // const [isEdit, setIsEdit] = useState(null);

  const {
    Id, ProductName, Amount, Price, Content, ProductDetailId,
  } = item;
  // #FIXME:

  // const [state, dispatch] = useReducer(counterReducer, { count: Amount });
  const initValue = { count: Amount };
  const [state, dispatch] = useReducer(counterReducer, initValue);

  const handleCartEdit = (editCount) => {
    const itemId = Id;
    const detailId = ProductDetailId;
    const amount = editCount;
    // const amount = state.count;
    const msg = 'edit';

    // console.log('editCount', editCount);
    // console.log('state.count', state.count);
    // console.log('amount', amount);

    // return apiHelper
    //   .editCart({
    //     itemId,
    //     detailId,
    //     amount,
    //     msg,
    //   })
    //   .then((res) => {
    //     console.log(res);

    //     if (res?.data?.Status) {
    //       console.log('editCart:::', res?.data);

    //       setIsEdit(true);
    //       navigate(0);
    //     }
    //   });
  };
  /* end of handleCartEdit() */

  useEffect(() => {
    // fetchData()
    // console.log('state', state.count);
  }, [dispatch, isEdit, location.key]);

  return (
    <li>
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4  md:grid md:grid-cols-7 md:grid-rows-1">
          <section className="flex justify-between  md:col-span-5">
            <h4 className="">{ProductName}</h4>

            <span className="hidden  md:block md:w-1/5">{Price}</span>
            {/* end of RWD-PC-price */}
          </section>

          <div className="flex w-2/5 items-center justify-evenly  md:col-span-2 md:w-full md:flex-row">
            {/* #REVIEW: wired about flex mix grid of RWD */}

            {/* #FIXME: weird reducer state */}
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'minus' });
                // handleCartEdit(state.count);

                const itemId = Id;
                const detailId = ProductDetailId;
                const msg = 'edit';
                const amount = state.count - 1;
                // onClickItem(state.count);
                onClickItem({
                  itemId,
                  detailId,
                  msg,
                  amount,
                });

                // console.log('minus-amount', amount - 1);
                // console.log('minus-amount', amount);

                // return apiHelper
                //   .editCart({
                //     itemId,
                //     detailId,
                //     amount,
                //     msg,
                //   })
                //   .then((res) => {
                //     console.log(res);

                //     if (res?.data?.Status) {
                //       console.log('editCart:::', res?.data);

                //       // setIsEdit(true);
                //       // navigate(0);
                //     }
                //   });
                /* end of API */
              }}
            >
              -
            </button>

            <p className="text-xs font-bold text-[#DB8C8C]">
              {/* Amount:
              {Amount}
              <br /> */}
              {/* Count: */}
              {state.count}
            </p>

            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'plus' });
                // handleCartEdit(state.count);
                // onClickItem(state.count);

                const itemId = Id;
                const detailId = ProductDetailId;
                const msg = 'edit';
                const amount = state.count + 1;
                // console.log('plus-amount', amount + 1);
                // console.log('plus-amount', amount);

                onClickItem({
                  itemId,
                  detailId,
                  msg,
                  amount,
                });

                // return apiHelper
                //   .editCart({
                //     itemId,
                //     detailId,
                //     amount,
                //     msg,
                //   })
                //   .then((res) => {
                //     console.log(res);

                //     if (res?.data?.Status) {
                //       console.log('editCart:::', res?.data);

                //       // setIsEdit(true);
                //       // navigate(0);

                //       // navigate(`/shops/${shopId}/cart/reload`);
                //     }
                //   });
              }}
            >
              +
            </button>

            {/* <Counter Amount={Amount} /> */}
            {/* <p>-</p>
            <p>{Amount}</p>
            <p>+</p> */}

            <button
              type="button"
              className="m-2 hidden rounded bg-red-400/80 py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
              onClick={() => apiHelper.deleteCart(Id).then((res) => {
                // console.log(res);

                if (res?.data?.Status) {
                  // console.log('deleteCart:::', res?.data);
                }
              })}
            >
              X
            </button>

            <button
              type="button"
              className="m-2 hidden rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
              onClick={() => {
                const itemId = Id;
                const detailId = ProductDetailId;
                const amount = state.count;
                const msg = 'edit';

                // console.log('amount', amount);

                return apiHelper
                  .editCart({
                    itemId,
                    detailId,
                    amount,
                    msg,
                  })
                  .then((res) => {
                    // console.log(res);

                    if (res?.data?.Status) {
                      // console.log('editCart:::', res?.data);

                      navigate(0);
                      // navigate(`/shops/${shopId}/cart/reload`);
                    }
                  });
              }}
            >
              *
            </button>
          </div>
          {/* end of items-Btn */}
        </div>

        <p className="md:hidden md:w-1/5">{Price}</p>
        {/* end of RWD-mobile-price */}

        <small className="text-xs">{Content}</small>
      </div>
    </li>
  );
}
/* end of OrderItem */

function CartList({ data, onClickItem }) {
  return (
    <section className="lg:w-[calc(66%_-_24px)]">
      <h3 className="border-b-1 border-[#D9D9D9] py-4">已選購餐點</h3>

      {/* #TODO: inject data from Server */}
      <ul>
        {data.map((item) => (
          // console.log('cart');
          <CartItem key={item.Id} item={item} onClickItem={onClickItem} />
        ))}
      </ul>
    </section>
  );
}
/* end of CartList */

function SubShopCart() {
  const location = useLocation();
  const [cartData, setCartData] = useState([]);
  const [payment, setPayment] = useState(0);

  const [stateCount, setStateCount] = useState(0);

  const [isEdit, setIsEdit] = useState(null);

  const [saveValue, setSaveValue] = useState(null);

  const onClickItem = ({
    itemId, detailId, msg, amount,
  }) => {
    // console.log({
    //   itemId,
    //   detailId,
    //   msg,
    //   amount,
    // });

    const reqData = {
      itemId,
      detailId,
      msg,
      amount,
    };
    // console.log(state);

    // console.log('preMemo-', cartData?.[0]?.Memo);
    const isTargetId = (element) => element.Id === itemId;
    const targetId = cartData.findIndex(isTargetId);
    // console.log(targetId);
    if (targetId !== -1) {
      // console.log('targetMemo-', cartData?.[targetId]?.Memo);
      // const reSaveMemo = cartData?.[targetId]?.Memo;
      reqData.msg = cartData?.[targetId]?.Memo;
    }

    // setStateCount(() => state + 1);
    // setIsEdit(() => true);
    setSaveValue(reqData);
  };

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      apiHelper
        .editCart({
          // Uncaught TypeError: saveValue is null
          itemId: saveValue?.itemId,
          detailId: saveValue?.detailId,
          amount: saveValue?.amount,
          msg: saveValue?.msg,
        })
        .then((res) => {
          // console.log(res);

          if (res?.data?.Status) {
            // console.log('editCart:::', res?.data);
            setIsEdit(() => true);
          }
        });
      /* end of API */
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [saveValue]);

  useEffect(() => {
    apiHelper.getCart().then((res) => {
      // console.log(res);

      if (res?.data?.Status) {
        // console.log('getCart:::', res?.data);

        // const { Message } = res.data;
        const { Message, total } = res.data;
        // console.log('cart:', Message[0].ProductDetailId);
        setCartData(Message);
        setPayment(total);
      }
    });
    // fetchCart();

    return () => {
      // setTimeout(() => {
      setIsEdit(false);
      // }, 300);
      /* end of setTimeout() */
    };

    // #FIXME: do not refresh
  }, [location.key, isEdit]);
  // }, [location.key]);

  const fetchCart = () => apiHelper.getCart().then((res) => {
    // console.log(res);

    if (res?.data?.Status) {
      // console.log('getCart:::', res?.data);

      // const { Message } = res.data;
      const { Message, total } = res.data;
      // console.log('cart-ProductDetailId:', Message[0].ProductDetailId);
      setCartData(Message);
      setPayment(total);
    }
  });

  return (
    <>
      <div className="pe-container mx-auto my-20 px-1 md:p-0">
        {/* min-h-screen */}
        <button
          type="button"
          className="m-2 hidden rounded bg-[#6AF] py-2 px-3 text-center text-xs font-bold
          text-white transition-all hover:bg-gray-200"
          onClick={fetchCart}
        >
          1-getCart
        </button>

        <div className="flex flex-col justify-between gap-4 font-bold  lg:flex-row">
          <CartList data={cartData} onClickItem={onClickItem} />

          <CartSummary
            data={cartData}
            payment={payment}
            stateCount={stateCount}
            isEdit={isEdit}
          />
        </div>
      </div>
      {/* end of container */}
    </>
  );
}
/* end of SubShopCart() */

export default SubShopCart;
