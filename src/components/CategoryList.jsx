import React, { useEffect, useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';

import apiHelper from '../utils/helpers';
import RenderLoading from './RenderLoading';

import CategoryItem from './CategoryItem';

function CategoryList({ pageType }) {
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

  if (!cateData.length) {
    return <RenderLoading />;
  }
  /* end of IF(!data) */

  return (
    <>
      {/* <code>
        LEN::
        {cateData.length}
      </code> */}

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap"> */}
      {/* #FIXME: */}
      <ul
        className={` ${
          pageType === 'HOME'
            ? 'grid grid-cols-8 grid-rows-2 gap-x-4 gap-y-10 md:w-full lg:w-[66%]'
            : 'grid grid-flow-row grid-cols-12 gap-6'
        }  z-10 `}
      >
        {cateData.map((item) => (
          // console.log('!', item);
          <CategoryItem key={item.Id} item={item} pageType={pageType} />
        ))}
        {/* end of data.map() */}
      </ul>
    </>
  );
}
/* end of CategoryList() */

CategoryList.defaultProps = {
  pageType: 'HOME',
};

CategoryList.propTypes = {
  pageType: PropTypes.string,
};
/* end of CategoryList.propTypes */

export default CategoryList;
