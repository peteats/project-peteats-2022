import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const IMG_CATE = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Cate.png';

function CategoryItem({ item, pageType }) {
  const { Id, ProductClassName, imageUrl } = item;

  const onImageError = (e) => {
    e.target.src = IMG_CATE;
  };
  /* end of onImageError(e) */

  return (
    <li
      className={` ${
        pageType === 'HOME' ? 'col-span-8 sm:col-span-4' : 'col-span-3'
      }  `}
    >
      {/* #TODO: Layout-Hover */}
      {/* /shops/tag/:id */}
      <Link
        to={`/shops/tag/${Id}`}
        className="inline-flex w-full items-center justify-center"
      >
        <div
          className={` ${pageType === 'HOME' ? '' : 'h-[136px]'}  w-[364px]`}
        >
          <img
            loading="lazy"
            onError={onImageError}
            src={imageUrl}
            alt={ProductClassName || 'CategoryItem'}
            className="h-full w-full rounded-lg border-2 border-[#DB8C8C] object-cover object-center shadow-md"
          />

          <h3 className="-mt-16 pl-4 text-2xl font-bold tracking-tight text-white sm:-mt-12">
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
