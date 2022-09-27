import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Skeleton from '@mui/material/Skeleton';

const Cate = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Cate.png';

function CategoryItem({ item, pageType }) {
  const { Id, ProductClassName, imageUrl } = item;

  if (!item) {
    // return <h3>LOADING...</h3>;
    return <Skeleton variant="rectangular" width={364} height={320} />;
  }
  /* end of IF(!data) */

  return (
    <li
      className={` ${
        pageType === 'HOME' ? 'box col-span-8 sm:col-span-4' : 'col-span-3'
      }  `}
    >
      {/* <li className="pl-4 pb-10 lg:w-1/2"> */}
      {/*  */}
      <Link
        to={`/shops/tag/${Id}`}
        className="inline-flex w-full items-center justify-center"
      >
        {/* /shops/tag/:id */}
        <div
          className={` ${pageType === 'HOME' ? 'w-[364px]' : 'h-[136px]'}  `}
        >
          <img
            loading="lazy"
            className="h-full w-full rounded-lg border-2 border-[#DB8C8C] object-cover object-center shadow-md"
            src={imageUrl || Cate}
            alt={ProductClassName || 'CategoryItem'}
          />

          <h3 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
            {/* <code>
              {Id}
              _
            </code> */}
            {ProductClassName}
          </h3>
        </div>
      </Link>
    </li>
  );
}
/* end of CategoryItem() */

CategoryItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,
};
/* end of CategoryItem.propTypes */

export default CategoryItem;
