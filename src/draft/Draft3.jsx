import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  useParams, Link, useLocation, useNavigate,
} from 'react-router-dom';

import { toast } from 'react-toastify';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import Skeleton from '@mui/material/Skeleton';

import useInput from '../hooks/useInput';
import apiHelper from '../utils/helpers';

import CustomModal from '../components/CustomModal';

// import Modal from '../components/Modal';

// import imgStore from '../images/Store.png';
// import Area from '../images/Area.png';

const FAKE_IMAGE = 'https://fakeimg.pl/120x120/';

const imgStore = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Store.png';

function MenuModalContent(props) {
  return (
    <section className="flex flex-col gap-6 py-2">
      <header>
        {/* <CloseIcon /> */}
        <Skeleton
          sx={{ borderRadius: '20px' }}
          height="160px"
          maxWidth="526px"
          // animation="wave"
          variant="rounded"
        />
      </header>

      {/* Modal-Body */}
      <article className="flex flex-col gap-1">
        {/* <h2 className="my-4">body</h2> */}
        <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} />

        <Skeleton height="2rem" width="25%" variant="rounded" sx={{ my: 1 }} />
        <Skeleton height="1rem" width="50%" variant="rounded" />
        <Skeleton height="1rem" width="50%" variant="rounded" />
        <Skeleton height="1rem" width="50%" variant="rounded" />

        <Skeleton
          height="2.5rem"
          width="25%"
          variant="rounded"
          sx={{ mt: 2, mb: 1 }}
        />

        <Skeleton variant="rounded" height={80} />
      </article>

      <footer className="">
        <Skeleton
          height="2.5rem"
          width="100%"
          variant="rounded"
          sx={{ mt: 2, mb: 1 }}
        />
      </footer>
    </section>
  );
}

function MenuOptionList({ itemId, onClickItem }) {
  // const { itemId } = useParams();
  // #TODO: WIP
  const [optionData, setOptionData] = useState(null);
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    let isFetch = false;

    apiHelper.getMenuItem(itemId).then((res) => {
      console.log(res);

      if (res?.data?.Status) {
        console.log('getMenuItem:::', res?.data);

        const { Data, DetailList } = res.data;
        console.log(DetailList[0]);
        console.log(Data.ProductName);

        if (!isFetch) {
          setOptionData(DetailList);
          setItemData(Data);
        }
        /* end of IF(!isFetch) */
      }
      /* end of IF(!Status) */
    });

    return () => {
      isFetch = true;
    };
  }, [itemId]);

  if (!optionData || !itemData) {
    return (
      <h3>
        {itemId}
        LOADING...
      </h3>
    );
  }

  return (
    <>
      <section className="flex flex-col gap-4 pb-8">
        <div className="flex justify-between py-2">
          <h3 className="text-lg font-bold">{itemData.ProductName}</h3>

          <p>{`${itemData.Price} 元`}</p>
        </div>

        <h4 className="text-lg font-bold">商品選項</h4>

        <ul className="flex w-full flex-col justify-between gap-4">
          {optionData.map((item) => {
            console.log(item);
            return (
              <li key={item.Id}>
                <p>
                  <button
                    type="button"
                    className="block"
                    onClick={() => {
                      onClickItem(item.Id);
                    }}
                  >
                    <span>{item.Id}</span>
                    {item.Content}
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      {/*  */}
    </>
  );
}
/* end of MenuOptionList */

MenuOptionList.propTypes = {
  itemId: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

function counterReducer(state, action) {
  switch (action.type) {
    case 'plus':
      return { count: state.count + 1 };
    case 'minus':
      return { count: state.count > 2 ? state.count - 1 : 1 };

    default:
      return { count: 1 };
  }
}
/* end of counterReducer(state, action) */

function Msg({
  closeToast, toastProps, itemId, shopId,
}) {
  // function Msg({ closeToast, toastProps, data }) {
  const navigate = useNavigate();
  // const { itemId, shopId } = useParams();
  // const { itemId, shopId } = data;
  const [state, dispatch] = useReducer(counterReducer, { count: 1 });

  const [clickOptionId, setClickOptionId] = useState(0);
  const thisMsg = useInput('');

  const onClickItem = (optionItemId) => {
    console.log('optionItemId:::', optionItemId);
    console.log('shopId:::', shopId);
    return setClickOptionId(optionItemId);
  };
  /* end of onClickItem() */

  return (
    <section className="">
      <pre>
        shopId:
        {shopId}
      </pre>
      <code>
        itemId:
        {itemId}
      </code>

      <MenuOptionList itemId={itemId} onClickItem={onClickItem} />

      <label htmlFor="msg" className="my-1 block w-full">
        Message
        <input
          placeholder=""
          value={thisMsg.value}
          type="text"
          name="msg"
          id=""
          className="my-1 w-full rounded border border-slate-300 p-1"
          onChange={thisMsg.onChange}
        />
      </label>

      {/* {toastProps.position} */}
      <div className="flex justify-between">
        <div className="flex items-center justify-evenly  md:col-span-2 md:w-full md:flex-row">
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'minus' });
            }}
          >
            -
          </button>

          <p>{state.count}</p>

          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'plus' });
            }}
          >
            +
          </button>
        </div>

        <button
          type="button"
          disabled={`${!clickOptionId ? 'disabled' : ''}`}
          className={` ${
            !clickOptionId ? 'bg-gray-400' : 'bg-[#333] hover:bg-[#DB8C8C]'
          }  m-2 block w-4/5 rounded  px-4 py-1 text-center text-white `}
          // onClick={closeToast}
          onClick={() => {
            // const optionId = 8;
            const msg = thisMsg.value || 'null';
            const amount = state.count;

            return apiHelper
              .addItemToCart({ clickOptionId, msg, amount })
              .then((res) => {
                console.log(res);

                if (res?.data?.Status) {
                  console.log('addItemToCart:::', res?.data);

                  // #TODO: Toast-ID
                  closeToast();
                  return navigate(`/shops/${shopId}/cart`);
                  // return navigate('/page4');
                  // const { Data, DetailList } = res.data;
                  // console.log(DetailList[0]);
                  // console.log(Data[0]);
                  // setCateData(Data);
                }
                // closeToast();
                return navigate(-1);
              });
          }}
        >
          CART
        </button>
      </div>
    </section>
  );
}

function toastModal({ itemId, shopId }) {
  // const { itemId } = useParams();
  console.log('toastModal:', itemId);
  console.log('shopId::', shopId);

  const toastConfig = {
    position: 'top-center',
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  return (
    <CustomModal>
      <MenuModalContent />
      {/* <Msg itemId={itemId} shopId={shopId} /> */}
    </CustomModal>
  );
  // return toast(<Msg itemId={itemId} shopId={shopId} />, toastConfig);

  // return toast(<Msg data={{ itemId, shopId }} />, toastConfig);
  // return toast(<Msg itemId={itemId} />, toastConfig);
}
/* end of toastModal() */

function SpecItem({ data, onClickItem }) {
  // const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);

  // const [isOpenModal, setOpenModal] = useState(false);

  const { shopId } = useParams();

  const {
    Id, Price, ProductName, imageUrl,
  } = data;

  const handleItemId = () => {
    console.log('handleItemId:', Id);
    console.log('shopId::', shopId);

    setOpen(true);
    return onClickItem({ itemId: Id, shopId });
  };
  /* end of handleItemId() */

  // useEffect(() => {}, [isOpenModal]);

  return (
    <li className="block w-full lg:w-[calc(49%_-_24px)]">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

      {/* <CustomModal open={open} setOpen={setOpen} /> */}
      <CustomModal open={open} setOpen={setOpen}>
        <MenuModalContent />
        {/* <Msg itemId={itemId} shopId={shopId} /> */}
      </CustomModal>
      {/* #TODO: open Modal */}
      {/* {isOpenModal && (
        <Modal>
          <p>123</p>
        </Modal>
      )} */}

      {/* <button
        type="button"
        onClick={() => {
          console.log('CLICK');
          // setOpenModal(true);
        }}

        // toast('Wow!', {
        //   position: 'top-center',
        //   autoClose: false,
        //   hideProgressBar: false,
        //   closeOnClick: false,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });

        //   navigate(`/shops/${shopId}/menu/${Id}/modal`, {
        //     state: {
        //       modalOpen: true,
        //     },
        //   });
        // }}
      >
        Open Modal
      </button> */}

      <Link
        to={`/shops/${shopId}/menu/${Id}`}
        className="flex w-full flex-col justify-start lg:flex-row"
      >
        {/* <Link to={`/shops/${shopId}/menu/${Id}`} state={{ background: location }}> */}
        {/* /shops/:shopId/menu/:itemId */}

        {/* #NOTE: [calc(int_-_int)] */}
        {/* #NOTE: Only img width, another section will auto fit itself */}
        {/* <img
          className="h-[120px] rounded-2xl object-cover object-center md:w-[120px]"
          src={imageUrl}
          alt={ProductName}
        /> */}

        <img
          className="h-[120px] w-full rounded-2xl object-cover object-center lg:w-[120px]"
          src={imageUrl}
          alt={ProductName}
        />

        <section className="grid grid-rows-3 items-center gap-4 sm:w-full md:gap-1 lg:ml-4">
          <div className="flex items-center justify-between">
            <h4 className="mt-4 w-full text-center text-xl font-bold md:m-0 md:text-left">
              <code>
                {Id}
                _
              </code>
              {ProductName}
            </h4>

            {/* md:invisible  */}

            <button
              type="button"
              className="hover:scale-103 relative z-10 col-span-1 hidden w-full rounded bg-[#343A40] py-2 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 lg:block"
              // onClick={handleOpen}
              onClick={handleItemId}
            >
              {/* #TODO: onClick={} */}
              新增此商品
            </button>
            {/* end of RWD-PC-button */}
          </div>

          {/* #FIXME: Need to same height with img */}
          {/* <p className="row-span-1">Lorem, ipsum dolor sit </p> */}
          <p className="row-span-1">
            售價：
            {Price}
            <span className="pl-1">元</span>
          </p>

          <button
            type="button"
            className="hover:scale-103 relative z-10 col-span-1 block rounded bg-[#343A40] py-2 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 lg:hidden"
            onClick={handleItemId}
          >
            {/* #TODO: onClick={} */}
            新增此商品
          </button>
          {/* end of RWD-Mobile-button */}
        </section>
      </Link>
    </li>
  );
}
/* end of SpecItem */

SpecItem.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,
};
/* end of SpecItem.propTypes */

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: '50vw',
  p: 2,

  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
};
/* end of CustomModal-Style */

// function CustomModal(props) {
//   const [open, setOpen] = React.useState(true);

//   const { title, content, children } = props;

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <section>
//       <Button onClick={handleOpen}>Open modal</Button>

//       <Modal
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="keep-mounted-modal-title"
//         aria-describedby="keep-mounted-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="keep-mounted-modal-description" sx={{ mt: 0 }}>
//             {content}
//             {children}
//           </Typography>
//         </Box>
//       </Modal>
//     </section>
//   );
// }
/* end of MUI-KeepMountedModal() */

function SectionMenu({ data }) {
  // const [menuData, setMenuDate] = useState([]);
  const { menuList } = data;
  const { shopId } = useParams();

  const onClickItem = ({ itemId, shopId }) => {
    console.log('onClickItem-itemId:', itemId);
    console.log('shopId::', shopId);

    // return setOpen(true);
    // return toastModal({ itemId, shopId });
  };
  /* end of onClickItem() */

  return (
    <>
      <div className="pe-container mx-auto mb-20 px-1 md:p-0">
        <ul className="flex w-full flex-col flex-wrap justify-between gap-8 md:flex-row">
          {/* {console.log(menuList[0])} */}

          {menuList.map((item) => (
            // console.log(item);
            // return <li>item.Id</li>;
            <SpecItem key={item.Id} data={item} onClickItem={onClickItem} />
          ))}
          {/* <SpecItem /> */}
          {/* <SpecItem /> */}
          {/* <SpecItem /> */}
        </ul>
      </div>
      {/* end of container */}
    </>
  );
}
/* end of SectionMenu */

SectionMenu.propTypes = {
  // menuList: PropTypes.arrayOf.isRequired,
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
      PropTypes.string,
      PropTypes.number,
    ]),
  ).isRequired,
};
/* end of SectionMenu.propTypes */

function ShopInfoItem({ title, info }) {
  // function ShopInfoItem({ data }) {
  //   const { title, info } = data;
  console.log(title);

  // const {
  //   ShopName,
  //   OpeningHourse,
  //   ShopAddress,
  //   Freight,
  //   EvaluateStars,
  //   ShopTEL,
  // } = data;

  const titleDic = {
    Freight: '運費',
    OpeningHourse: '營業時間',
    ShopAddress: '門市地址',
    ShopTEL: '連絡電話',
  };

  return (
    <li className="">
      <p>
        {console.log(titleDic[title])}
        {console.log(title)}

        {titleDic.key === title && titleDic[title]}
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
  info: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
};
/* end of ShopInfoItem.propTypes  */

function SectionShopInfo({ data }) {
  const { Message } = data;
  // #REVIEW"
  const {
    ShopName,
    OpeningHourse,
    ShopAddress,
    Freight,
    EvaluateStars,
    ShopTEL,
    imageUrl,
  } = Message;

  return (
    <>
      <div className="pe-container mx-auto mb-20 px-1 sm:p-0">
        <div className="flex flex-col items-center justify-start pt-20 font-bold sm:flex-row">
          <picture className="block w-[364px]">
            <img
              className="h-full w-full rounded-3xl object-cover object-center"
              src={imageUrl}
              alt={ShopName}
            />
          </picture>

          <section className="md:ml-4">
            <h2 className="mb-4 mt-4 text-center text-xl md:mt-0 md:text-left">
              {ShopName}
              {/* {console.log('ShopName', ShopName)} */}
            </h2>

            <ul className="flex flex-col gap-4">
              {/* #TODO: data from Server */}
              {/* <ShopInfoItem /> */}

              {/* {data.map((item) => (
                // console.log('!', item);
                <ShopInfoItem data={item} />
              ))} */}

              {/* #REVIEW:  */}
              {/* #NOTE: forEach() do NOT return */}
              {/* {Object.entries(data).forEach(([key, value]) => {
                console.log(`${key} ${value}`);
                console.log('---');
                // <ShopInfoItem data={{ title: key, info: value }} />;
                // return <ShopInfoItem title={key} info={value} />;
                return (
                  <li>
                    $
                    {key}
                    {' '}
                    $
                    {value}
                  </li>
                );
              })} */}

              <li className="">
                <p>
                  營業時間
                  <span className="ml-4 font-normal">{OpeningHourse}</span>
                </p>
              </li>

              <li className="">
                <p>
                  地址
                  <span className="ml-4 font-normal">{ShopAddress}</span>
                </p>
              </li>

              <li className="">
                <p>
                  運費
                  <span className="ml-4 font-normal">{Freight}</span>
                  <span className="ml-2 font-normal">元</span>
                </p>
              </li>

              <li className="">
                <p>
                  聯絡電話
                  <span className="ml-4 font-normal">{ShopTEL}</span>
                </p>
              </li>

              <li className="">
                <p>
                  {/* #TODO: */}
                  <span className="ml-4 font-normal">{EvaluateStars}</span>
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

SectionShopInfo.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
      PropTypes.string,
      PropTypes.number,
    ]),
  ).isRequired,
};
/* end of SectionShopInfo.propTypes */

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

// const res = {
//   Status: true,
//   Message: {
//     ShopName: '多野樂',
//     OpeningHourse: 'Monday-Sunday 10:00–20:00',
//     ShopTEL: '(02)2241-1234',
//     ShopAddress: '台北市中山北路999號',
//     Freight: '30元',
//     Views: 7,
//     EvaluateStars: 3,
//     Image: null,
//   },
//   menuList: [
//     {
//       Id: 7,
//       ProductName: '低溫舒肥雞胸肉',
//       Price: 60,
//     },
//     {
//       Id: 13,
//       ProductName: '牛小排通心粉',
//       Price: 230,
//     },
//   ],
//   feedback: [
//     {
//       Feedback: null,
//     },
//     {
//       Feedback: null,
//     },
//     {
//       Feedback: null,
//     },
//     {
//       Feedback: null,
//     },
//     {
//       Feedback: null,
//     },
//     {
//       Feedback: null,
//     },
//     {
//       Feedback: '很香',
//     },
//     {
//       Feedback: '看起來很好吃~',
//     },
//   ],
// };

function SectionReviews() {
  return (
    <div className="pe-container mx-auto my-20 px-1 md:p-0">
      <ul className="grid grid-cols-12 gap-x-4 gap-y-6">
        <li className="col-span-6">
          <div className="flex flex-col gap-4">
            <h4>user</h4>
            <p>comment</p>

            <img
              className="h-[120px] rounded-2xl object-cover object-center md:w-[120px]"
              src={FAKE_IMAGE}
              alt=""
            />
          </div>
        </li>

        <li className="col-span-6">
          <div className="flex flex-col gap-4">
            <h4>user</h4>
            <p>comment</p>

            <img
              className="h-[120px] rounded-2xl object-cover object-center md:w-[120px]"
              src={FAKE_IMAGE}
              alt=""
            />
          </div>
        </li>

        <li className="col-span-6">
          <div className="flex flex-col gap-4">
            <h4>user</h4>
            <p>comment</p>

            <img
              className="h-[120px] rounded-2xl object-cover object-center md:w-[120px]"
              src={FAKE_IMAGE}
              alt=""
            />
          </div>
        </li>

        <li className="col-span-6">
          <div className="flex flex-col gap-4">
            <h4>user</h4>
            <p>comment</p>

            <img
              className="h-[120px] rounded-2xl object-cover object-center md:w-[120px]"
              src={FAKE_IMAGE}
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

function Draft3() {
  const { shopId, itemId } = useParams();

  // const { Message, menuList, feedback } = res;
  const [shopInfosData, setShopInfosData] = useState(null);
  // const [shopInfosData, setShopInfosData] = useState({
  //   Message,
  //   menuList,
  //   feedback,
  // });

  useEffect(() => {
    let isFetch = false;

    // if (!shopInfosData) {
    // console.log(Message[0]);
    // setShopInfosData({ Message, menuList, feedback });

    apiHelper.getInfoMenu(shopId).then((res) => {
      console.log(res);

      if (res?.data?.Status) {
        console.log('getInfoMenu:::', res?.data);

        const { Message, menuList, feedback } = res.data;
        console.log('menuList-0:::', menuList[0]);

        if (!isFetch) {
          setShopInfosData({ Message, menuList, feedback });
        }
      }
      /* end of IF(!Status) */
    });
    // }
    /* end of IF(!length) */

    return () => {
      isFetch = true;
    };
    // }, [shopInfosData]);
  }, [shopId]);

  if (!shopInfosData) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      {/* {optionId && <Modal />} */}
      {/* <div className="pe-container mx-auto mt-20 px-1 md:p-0">
      </div> */}

      {/* #NOTE: Objects are not valid as a React child
      (found: object with keys.)
      - If you meant to render a collection of children,
    use an array instead */}
      {/* {shopInfosData} */}

      <SectionShopInfo data={shopInfosData} />

      <pre className="hidden">
        This is a dynamic page for_
        {shopId}
        <p>{shopInfosData?.Message?.ShopName}</p>
      </pre>

      <SectionMenu data={shopInfosData} />

      <SectionReviews />
    </>
  );
}
/* end of Draft3() */

export default Draft3;
