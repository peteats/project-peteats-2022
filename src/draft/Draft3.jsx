import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import apiHelper from '../utils/helpers';

// import imgStore from '../images/Store.png';
// import Area from '../images/Area.png';

const imgStore = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Store.png';

function SpecList({ data }) {
  const { Id, Price, ProductName } = data;

  return (
    <li className="flex w-full flex-col justify-start md:w-[calc(49%_-_24px)] md:flex-row">
      {/* #NOTE: [calc(int_-_int)] */}
      {/* #NOTE: Only img width, another section will auto fit itself */}
      <img
        className="h-[120px] rounded-2xl object-cover object-center md:w-[120px]"
        src={imgStore}
        alt="imgStore"
      />

      <section className="grid w-full grid-rows-3 items-center gap-4 md:ml-4 md:gap-1">
        <div className="flex items-center justify-between">
          <h4 className="mt-4 w-full text-center font-bold md:m-0 md:text-left">
            <span>{Id}</span>
            {ProductName}
          </h4>

          {/* md:invisible  */}
          <button
            type="button"
            className="hidden w-1/3 rounded-[4px] bg-[#343A40] text-white md:block"
          >
            {/* #TODO: onClick={} */}
            CLICK
          </button>
          {/* end of RWD-PC-button */}
        </div>

        {/* #FIXME: Need to same height with img */}
        <p className="row-span-1">Lorem, ipsum dolor sit </p>
        <p className="row-span-1">{Price}</p>

        <button
          type="button"
          className="block rounded-[4px] bg-[#343A40] py-2 text-white md:hidden"
        >
          {/* #TODO: onClick={} */}
          CLICK
        </button>
        {/* end of RWD-Mobile-button */}
      </section>
    </li>
  );
}
/* end of SpecList */

SpecList.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,
};
/* end of SpecList.propTypes */

function SectionMenu({ data }) {
  // const [menuData, setMenuDate] = useState([]);
  const { menuList } = data;

  return (
    <>
      <div className="container mx-auto  px-1">
        <ul className="flex w-full flex-wrap justify-between gap-4">
          {/* {console.log(menuList[0])} */}

          {menuList.map((item) => (
            // console.log(item);
            // return <li>item.Id</li>;
            <SpecList key={item.Id} data={item} />
          ))}
          {/* <SpecList /> */}
          {/* <SpecList /> */}
          {/* <SpecList /> */}
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
  } = Message;

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
                  {/* TITLE */}
                  {OpeningHourse}
                  <span className="ml-4 font-normal">string</span>
                </p>
              </li>

              <li className="">
                <p>
                  {/* TITLE */}
                  {ShopAddress}
                  <span className="ml-4 font-normal">string</span>
                </p>
              </li>

              <li className="">
                <p>
                  {/* TITLE */}
                  {Freight}
                  <span className="ml-4 font-normal">string</span>
                </p>
              </li>

              <li className="">
                <p>
                  {/* TITLE */}
                  {EvaluateStars}
                  <span className="ml-4 font-normal">string</span>
                </p>
              </li>

              <li className="">
                <p>
                  {/* TITLE */}
                  {ShopTEL}
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

function Draft3() {
  const { shopId } = useParams();

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
        console.log(menuList[0]);

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
      <div className="container mx-auto my-20 px-1">
        <h2>
          This is a dynamic page for
          {shopId}
        </h2>
      </div>

      {/* #NOTE: Objects are not valid as a React child
      (found: object with keys.)
      - If you meant to render a collection of children,
       use an array instead */}
      {/* {shopInfosData} */}

      <p>{shopInfosData?.Message?.ShopName}</p>

      <SectionShopInfo data={shopInfosData} />

      <SectionMenu data={shopInfosData} />
    </>
  );
}
/* end of Draft3() */

export default Draft3;
