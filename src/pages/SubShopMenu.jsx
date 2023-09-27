import React from 'react';
// import { useOutletContext } from 'react-router-dom';

import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ImgUser from '../images/img-user.svg';

import { useShop } from './SubShopLayout';
// import PrintResponse from '../components/DevPrintResponse';

import MenuItem from '../components/MenuItem';

const FAKE_IMAGE = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Store.png';

function SectionReviews({ data }) {
  // const { Nickname, imageUrl, Feedback } = data;

  return (
    <div className="pe-container mx-auto my-20 px-1 md:p-0">
      <ul className="grid grid-flow-row grid-cols-12 gap-6">
        {data.map((item, i) => {
          // console.log(item);
          let { Nickname, imageUrl, Feedback } = item;

          const fakeKey = `${i}${imageUrl}`;

          const fakeRating = Nickname.length;

          if (imageUrl === 'https://peteats.rocket-coding.com/Image/User/') {
            imageUrl = ImgUser;
          }

          return (
            <li key={fakeKey} className="col-span-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-6">
                  <img
                    className="h-[80px] w-[80px] rounded-2xl object-cover object-center"
                    src={imageUrl}
                    alt={`Img-User-${Nickname}`}
                  />

                  <h4 className="text-2xl font-bold text-[#343A40]">
                    {Nickname}
                  </h4>
                </div>

                <div className="pl-[104px]">
                  <Rating
                    name="text-feedback"
                    value={fakeRating}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />

                  <p className="">{Feedback}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SubShopMenu() {
  const { shopId, menuData, feedbackData } = useShop();
  // const [shopInfosData, setShopInfosData] = useOutletContext();
  // const [count, setCount] = useOutletContext();

  if (!menuData) {
    return <h2>LOADING...</h2>;
  }

  if (!feedbackData) {
    return <h2>LOADING...</h2>;
  }
  /* end of IF(!data) */

  return (
    <>
      {/* <PrintResponse data={shopInfosData} title="shopInfosData" /> */}
      {/* <PrintResponse data={menuData} title="menuData" /> */}

      {/* <pre>
        shopId:::
        {shopId}
      </pre> */}

      <>
        <div className="SubShopMenu pe-container mx-auto mb-20 px-1 md:p-0">
          <ul className="flex w-full flex-col flex-wrap justify-between gap-8 md:flex-row">
            {menuData.map((item) => (
              // console.log('item:', item);
              // <PrintResponse data={item} title="item" />;
              // <SpecItem key={item.Id} data={item} onClickItem={onClickItem} />
              <MenuItem key={item.Id} item={item} shopId={shopId} />
            ))}
          </ul>
        </div>

        <SectionReviews data={feedbackData} />
        {/* end of container */}
      </>
    </>
  );
}
/* end of SubShopMenu() */

export default SubShopMenu;
