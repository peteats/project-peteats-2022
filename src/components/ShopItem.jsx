import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Store = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Store.png';

function ShopItem({ data }) {
  const { Id, ShopName, ShopAddress } = data;

  /**
   * #NOTE:
   * - `.`: many
   * - `+`: any
   */
  const regexpCity = /.+市/;

  return (
    <li className="w-full pl-8 pb-6 md:w-1/4">
      {/* /shops/:shopId */}
      <Link to={`/shops/${Id}`}>
        <div className="transition duration-500 ease-out hover:scale-105 hover:ease-in">
          <picture className="block rounded-2xl">
            <img
              src={Store}
              alt="Store"
              className="z-0 block h-full w-full rounded-2xl object-cover"
            />
          </picture>

          <section className="relative z-10 -mt-11 flex flex-col rounded-2xl bg-[#DB8C8C] py-4 px-6 shadow-xl">
            <div className="flex justify-between">
              <p>{ShopAddress.match(regexpCity)}</p>
              <p>ICON</p>
            </div>

            <h3 className="py-3">
              <span>{Id}</span>
              {ShopName}
            </h3>

            <span>4.6</span>
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
