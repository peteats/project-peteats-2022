import React, { useEffect, useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';

import apiHelper from '../utils/helpers';
import CategoryItem from './CategoryItem';

function CategoryList({ isFlexWrap }) {
  // #REVIEW: context.Provider?
  const [cateData, setCateData] = useState([]);

  useEffect(() => {
    if (!cateData.length) {
      apiHelper.getShopTag().then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopTag:::', res?.data?.Data);

          const { Data } = res.data;
          setCateData(Data);
        }
        /* end of IF(Status) */
      });
    }
  }, [cateData]);
  /* end of useEffect() */

  if (!cateData) {
    return <h2>LOADING...</h2>;
  }
  /* end of IF(!data) */

  return (
    <>
      <code>
        LEN::
        {cateData.length}
      </code>

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap"> */}
      <ul className={`-ml-8 -mb-8 flex  ${isFlexWrap}`}>
        {cateData.map((item) => (
          // console.log('!', item);
          <CategoryItem key={item.Id} item={item} />
        ))}
        {/* end of data.map() */}
      </ul>
    </>
  );
}
/* end of CategoryList() */

CategoryList.defaultProps = {
  isFlexWrap: '',
};

CategoryList.propTypes = {
  isFlexWrap: PropTypes.string,
};
/* end of CategoryList.propTypes */

export default CategoryList;
