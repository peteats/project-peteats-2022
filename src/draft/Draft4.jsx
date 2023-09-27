import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  Link, useNavigate, useParams, useLocation,
} from 'react-router-dom';
import apiHelper from '../utils/helpers';

import imgStore from '../images/Store.png';
// import Area from '../images/Area.png';

function counterReducer(state, action) {
  switch (action.type) {
    case 'plus':
      return { count: state.count + 1 };
    case 'minus':
      return { count: state.count > 2 ? state.count - 1 : 0 };

    default:
      return { count: 0 };
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
        +
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
          <p className="">{Amount}</p>
          {/* <p className="">{state.count}</p> */}

          {/* <p className="">{stateCount || Amount}</p> */}
          {/* <p className="justify-end">{Price * stateCount || Price * Amount}</p> */}
          <p className="justify-end">{Price * Amount}</p>
        </div>
      </section>
    </li>
  );
}
/* end of SummaryItem */

function CartSummary({ data, payment, stateCount }) {
  const { shopId } = useParams();

  return (
    <section className="flex flex-col gap-10 rounded-2xl border-4 border-[#DB8C8C] p-10  lg:w-2/5">
      <h3 className="text-center  md:text-left">訂單內容</h3>

      <div className="hidden  md:flex md:items-center md:justify-between">
        <p className="w-3/5">品項</p>

        <div className="flex w-2/5 items-center justify-between">
          <p className="">數量</p>
          <p className="justify-end">金額</p>
        </div>
      </div>
      {/* end of RWD-PC-title */}

      <ul>
        {/* #TODO: inject data from Server */}
        {data.map((item) => (
          // console.log('Summary');
          <SummaryItem key={item.Id} item={item} stateCount={stateCount} />
        ))}
      </ul>

      <div className="flex items-center justify-between gap-6">
        <p className="w-3/5 text-center">PAYMENT</p>

        <p className="">{payment}</p>
      </div>

      <Link
        to={`/shops/${shopId}/checkout`}
        className="block rounded-sm bg-black py-2 text-center font-normal text-white"
      >
        CHECKOUT
      </Link>

      <button
        type="button"
        className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
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

function CartItem({ item, onClickItem }) {
  const navigate = useNavigate();
  const { shopId } = useParams();
  const location = useLocation();

  const {
    Id, ProductName, Amount, Price, Content, ProductDetailId,
  } = item;
  // #FIXME:

  const [state, dispatch] = useReducer(counterReducer, { count: Amount });

  const handleCartEdit = () => {
    const itemId = Id;
    const detailId = ProductDetailId;
    const amount = state.count;
    const msg = 'edit';

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
        }
      });
  };
  /* end of handleCartEdit() */

  useEffect(() => {
    // fetchData()
  }, [location.key]);

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

            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'minus' });
                onClickItem(state.count);
                // handleCartEdit();
              }}
            >
              -
            </button>

            <pre className="text-xs">
              Amount:
              {Amount}
              <br />
              Count:
              {state.count}
            </pre>

            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'plus' });
                onClickItem(state.count);
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
              className="m-2 rounded bg-red-400/80 py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
              onClick={() => apiHelper.deleteCart(Id).then((res) => {
                // console.log(res);

                if (res?.data?.Status) {
                  // console.log('deleteCart:::', res?.data);
                  // const { Message } = res.data;
                  // const { Message, total } = res.data;
                  // console.log('cart:', Message[0].ProductDetailId);
                  // setCartData(Message);
                  // setPayment(total);
                }
              })}
            >
              X
            </button>

            <button
              type="button"
              className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
              onClick={() => {
                const itemId = Id;
                const detailId = ProductDetailId;
                const amount = state.count;
                const msg = 'edit';

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

                      // const { Data, DetailList } = res.data;
                      // console.log(DetailList[0]);
                      // console.log(Data[0]);
                      // setCateData(Data);
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

function SectionCartInfo() {
  const location = useLocation();
  const [cartData, setCartData] = useState([]);
  const [payment, setPayment] = useState(0);

  const [stateCount, setStateCount] = useState(0);

  const onClickItem = (state) => {
    // console.log(state);

    setStateCount(() => state + 1);
  };

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
  }, [location.key]);

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
          />
        </div>
      </div>
      {/* end of container */}
    </>
  );
}
/* end of SectionOrder */

function ShopInfoItem({ title, info }) {
  return (
    <li className="">
      <p>
        {title}
        <span className="ml-4 font-normal">{info}</span>
      </p>
    </li>
  );
}
/* end of ShopInfoItem  */

ShopInfoItem.defaultProps = {
  title: 'TITLE',
  info: 'STRING',
};

ShopInfoItem.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};
/* end of ShopInfoItem.propTypes  */

function SectionShopInfo() {
  return (
    <>
      <div className="container mx-auto p-1">
        <div className="flex flex-col justify-start font-bold md:flex-row">
          <img
            className="w-[364px] rounded-sm object-cover object-center"
            src={imgStore}
            alt="imgStore"
          />

          <section className="md:ml-4">
            <h2 className="mb-4 mt-4 text-center text-lg md:mt-0 md:text-left">
              TITLE2
            </h2>

            <ul className="flex flex-col gap-4">
              {/* #TODO: data from Server */}
              <ShopInfoItem />

              <li className="">
                <p>
                  TITLE
                  <span className="ml-4 font-normal">string</span>
                </p>
              </li>
              <li className="">
                <p>
                  TITLE
                  <span className="ml-4 font-normal">string</span>
                </p>
              </li>
              <li className="">
                <p>
                  TITLE
                  <span className="ml-4 font-normal">string</span>
                </p>
              </li>
              <li className="">
                <p>
                  TITLE
                  <span className="ml-4 font-normal">string</span>
                </p>
              </li>
              <li className="">
                <p>
                  TITLE
                  <span className="ml-4 font-normal">string</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
      {/* end of container */}
    </>
  );
}
/* end of SectionShopInfo() */

// function PageShops() {
//   return (
//     <>
//       <SectionAreaSmall />
//       <StoreList />
//       <hr />
//     </>
//   );
// }
/* end of PageShops() */

// export default PageShops;

function Draft4() {
  return (
    <>
      {/* <SectionShopInfo /> */}
      <SectionCartInfo />
    </>
  );
}
/* end of Draft4() */

export default Draft4;
