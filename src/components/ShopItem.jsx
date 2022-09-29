import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Skeleton from '@mui/material/Skeleton';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ImageErrorHandler from '../utils/ImageErrorHandler';
const ICON_STAR = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/feature_LayoutOfGET/src/images/icon-star.png';

const Store = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Store.png';

const FAKE_IMAGE = 'https://peteats.rocket-coding.com/Image/Shop/Shop_04few.jpg';

function ShopItem({ data, queryType }) {
  const {
    Id, ShopName, imageUrl, EvaluateStars, Views, CityName,
  } = data;
  // const { Id, ShopName } = data;
  // const { Id, ShopName, ShopAddress } = data;

  // {
  //   Id: null,
  //   ShopName: '',
  //   imageUrl: '',
  //   EvaluateStars: '',
  //   Views: '',
  //   CityName: '',
  // }

  /**
   * #NOTE:
   * - `.`: many
   * - `+`: any
   */
  // const regexpCity = /.+市/;

  const onImageError = (e) => {
    e.target.src = Store;
  };

  // if (!data) {
  //   return (
  //     <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
  //   );
  // }

  return (
    <li className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
      {/* <li className="w-full pl-6 pb-6 md:max-w-[267px]"> */}
      {/* /shops/:shopId */}
      <Link
        to={`/shops/${Id}`}
        className="block transition duration-500 ease-out hover:scale-105 hover:ease-in"
      >
        <div className="mx-auto flex max-w-[267px] flex-col justify-between">
          <picture className="relative pt-[100%]">
            {/* <picture className="block max-w-[267px] rounded-2xl"> */}
            <img
              loading="lazy"
              // src={imageUrl || Store}
              src={FAKE_IMAGE}
              onError={onImageError}
              // onError={ImageErrorHandler}
              // src={imageUrl || Store}
              // src={cover ? cover : placeholderImage}
              alt={ShopName || 'ShopName'}
              // className="z-0 block h-full max-w-[267px] rounded-2xl object-cover"
              className="absolute left-0 top-0 z-0 h-full w-full
              rounded-2xl object-cover object-center"
            />

            {/* {imageUrl ? (
              <img
                loading="lazy"
                src={FAKE_IMAGE}
                onError={onImageError}
                alt={ShopName || 'ShopName'}
                className="absolute left-0 top-0 z-0 h-full w-full
              rounded-2xl object-cover object-center"
              />
            ) : (
              <Skeleton
                sx={{ height: '267px', width: '267px', borderRadius: '6px' }}
                // className="rounded-sm"
                animation="wave"
                variant="rounded"
              />
            )} */}
          </picture>

          <section className="relative z-30 -mt-10 min-h-fit rounded-2xl bg-[#212529] py-4 px-6 text-white shadow-xl hover:bg-[#DB8C8C]">
            <div className="flex justify-between">
              {/* #TODO: CityName */}
              {/* {queryType === 'TAG' && data.ShopAddress.match(regexpCity)}
              {queryType === 'CITY' && data.CityName} */}
              {/* <p>{ShopAddress.match(regexpCity)}</p> */}
              <p>{CityName}</p>

              <FavoriteBorderIcon />
            </div>

            <h3 className="py-3 text-2xl font-bold">
              <code>
                {Id}
                _
              </code>
              {ShopName}
            </h3>

            {/* #TODO: count */}

            <div className="flex">
              <img
                src={ICON_STAR}
                alt="STAR"
                className="z-0 h-[24px] w-[24px] rounded-2xl object-cover"
              />
              <p className="pl-2 pr-0.5">{EvaluateStars}</p>
              {/* <p className="pl-2">$4.6</p> */}
              <span>
                （
                {Views}
                00+）
              </span>
              {/* <span>（$100+）</span> */}
            </div>
          </section>
        </div>
      </Link>
    </li>
  );
}
/* end of ShopItem() */

ShopItem.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,

  // #NOTE: An object that could be one of many types
  // data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // data: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};
/* end of ShopItem.propTypes */

export default ShopItem;
