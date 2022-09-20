import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Cate = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Cate.png';

function CategoryItem({ data }) {
  const { Id, ProductClassName } = data;

  return (
    <li className="w-full pl-8 pb-8 md:w-1/2">
      {/* /shops/tag/:id */}
      <Link to={`/shops/tag/${Id}`}>
        <div className="">
          <img
            className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
            src={Cate}
            alt="CategoryItem"
          />

          <h5 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
            <span>{Id}</span>
            {ProductClassName}
          </h5>
        </div>
      </Link>
    </li>
    // <li>
    //   {Id}
    //   <p>{ProductClassName}</p>
    // </li>
  );
}
/* end of CategoryItem() */

CategoryItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
/* end of CategoryItem.propTypes */

export default CategoryItem;
