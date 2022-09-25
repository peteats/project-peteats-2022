import React, { useEffect, useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';

import apiHelper from '../utils/helpers';
import CategoryItem from './CategoryItem';

function CategoryList({ classRow }) {
  // #REVIEW: context.Provider
  const [cateData, setCateData] = useState([]);

  // #REVIEW: clean
  const ulClassName = classRow === 2 ? '-ml-8 -mb-8 flex flex-wrap' : '-ml-8 -mb-8 flex';

  useEffect(() => {
    if (!cateData.length) {
      apiHelper.getShopTag().then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopTag:::', res?.data?.Data);

          const { Data } = res.data;
          setCateData(Data);
        }
      });
    }
  }, [cateData]);
  /* end of useEffect() */

  return (
    <>
      <code>
        LEN::
        {cateData.length}
      </code>

      {/* <ul className="block w-full"> */}
      {/* <ul className="-ml-8 -mb-8 flex flex-wrap"> */}
      <ul className={ulClassName}>
        {cateData.map((item) => (
          // console.log('!', item);
          <CategoryItem key={item.Id} data={item} />
        ))}
      </ul>
    </>
  );
}
/* end of CategoryList() */

CategoryList.propTypes = {
  classRow: PropTypes.number.isRequired,
};
/* end of CategoryList.propTypes */

export default CategoryList;
