import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Store = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Store.png';

const ICON_STAR = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/feature_LayoutOfGET/src/images/icon-star.png';

function ShopItem({ data, queryType }) {
  const { Id, ShopName, imageUrl } = data;
  // const { Id, ShopName } = data;
  // const { Id, ShopName, ShopAddress } = data;

  /**
   * #NOTE:
   * - `.`: many
   * - `+`: any
   */
  const regexpCity = /.+市/;

  const onImageError = (e) => {
    e.target.src = Store;
  };

  return (
    <li className="w-full pl-6 pb-6 md:w-1/4">
      {/* <li className="w-full pl-6 pb-6 md:max-w-[267px]"> */}
      {/* /shops/:shopId */}
      <Link to={`/shops/${Id}`}>
        <div className="transition duration-500 ease-out hover:scale-105 hover:ease-in">
          <picture className="block rounded-2xl">
            {/* <picture className="block max-w-[267px] rounded-2xl"> */}
            <img
              onError={onImageError}
              // src={imageUrl || Store}
              src={imageUrl || Store}
              // src={cover ? cover : placeholderImage}
              alt={ShopName || 'ShopName'}
              className="z-0 block h-full w-full rounded-2xl object-cover"
            />
          </picture>

          <section
            className="relative z-10 -mt-11 flex flex-col rounded-2xl bg-[#212529] py-4 px-6 text-white shadow-xl
hover:bg-[#DB8C8C]"
          >
            <div className="flex justify-between">
              {/* #TODO: CityName */}
              {queryType === 'TAG' && data.ShopAddress.match(regexpCity)}
              {queryType === 'CITY' && data.CityName}
              {/* <p>{ShopAddress.match(regexpCity)}</p> */}
              <p>$CityName</p>

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
              <p className="pl-2">$4.6</p>
              <span>（$100+）</span>
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
