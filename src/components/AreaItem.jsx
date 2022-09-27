import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const AREA_IMG = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Area.png';

function AreaItem({ item, size }) {
  const { Id, CityName, imageUrl } = item;

  // #REVIEW: something weird
  const isLarge = size !== 'small';

  if (!item) {
    return <h3>LOADING...</h3>;
  }
  /* end of IF(!data) */

  return (
    <>
      {/* {console.log()} */}
      {isLarge ? (
        <li className="col-span-12 flex justify-center sm:col-span-6 lg:col-span-4">
          <Link
            to={`/shops/city/${Id}`}
            className="inline-block rounded-3xl border-4 border-[#DB8C8C] px-6 hover:bg-[#DB8C8C] sm:px-0 md:w-full md:px-2"
          >
            {/* /shops/city/:id */}
            <div className="flex flex-col items-center justify-center py-6">
              <picture className="relative z-10 -mt-[30%] block w-[280px]">
                <img
                  loading="lazy"
                  alt={CityName || 'CityName'}
                  className="h-full w-full rounded-full object-cover object-center shadow-xl"
                  src={AREA_IMG || imageUrl}
                />
              </picture>

              <h3 className="mt-6 text-center text-5xl font-bold leading-snug tracking-tight text-black">
                <code>
                  {Id}
                  _
                </code>
                {CityName}
              </h3>
            </div>
          </Link>
        </li>
      ) : (
        /* end of style-Large */
        <li className="w-full pl-24 pb-6 md:w-1/3">
          <Link
            to={`/shops/city/${Id}`}
            className="block rounded-3xl bg-[#212529] text-center"
          >
            <div
              className="relative rounded-2xl
              bg-[#212529] text-center hover:bg-[#DB8C8C]"
            >
              <img
                className="absolute top-1/2 -left-2 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover object-center shadow-xl"
                src={AREA_IMG || imageUrl}
                alt={CityName || 'CityName'}
              />

              <h3 className="py-1 text-4xl font-bold leading-snug tracking-tight text-white">
                <span>{Id}</span>
                {CityName}
              </h3>
            </div>
          </Link>
        </li>
        /* end of style-Small */
      )}
    </>
  );
}
/* end of AreaItem() */

AreaItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,

  size: PropTypes.string.isRequired,
};
/* end of AreaItem.propTypes */

export default AreaItem;
