import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import apiHelper from '../utils/helpers';

import CategorySkeleton from './CategorySkeleton';
import CategoryItem from './CategoryItem';

const MOCK_DATA = {
  Status: true,
  Data: [
    {
      Id: 1,
      ProductClassName: '生食',
      imageUrl:
        'https://peteats.rocket-coding.com/Image/Class/ProductClasses_01.png',
    },
    {
      Id: 2,
      ProductClassName: '鮮食',
      imageUrl:
        'https://peteats.rocket-coding.com/Image/Class/ProductClasses_02.png',
    },
    {
      Id: 3,
      ProductClassName: '飼料',
      imageUrl:
        'https://peteats.rocket-coding.com/Image/Class/ProductClasses_03.png',
    },
    {
      Id: 4,
      ProductClassName: '罐頭',
      imageUrl:
        'https://peteats.rocket-coding.com/Image/Class/ProductClasses_04.png',
    },
  ],
};
/* end of MOCK_DATA */

function CategoryList({ pageType }) {
  // #REVIEW: context.Provider?
  const [cateData, setCateData] = useState([]);
  const [isFetch, setIsFetch] = useState(null);

  // useEffect(() => {
  //   const { Data } = MOCK_DATA;
  //   setCateData(Data);
  // }, [cateData]);
  /* end of useEffect-MOCK_DATA */

  useEffect(() => {
    if (!cateData.length) {
      apiHelper.getShopTag().then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopTag:::', res?.data?.Data);

          const { Data } = res.data;
          if (!isFetch) {
            setCateData(Data);
          }
          /* end of IF(!isFetch) */
        }
        /* end of IF(Status) */
      });
      /* end of API */
    }
    return () => {
      setTimeout(() => {
        setIsFetch(true);
      }, 300);
      /* end of setTimeout() */
    };
  }, [cateData]);
  /* end of useEffect() */

  if (!cateData.length || !isFetch) {
    // if (!cateData.length) {
    return <CategorySkeleton pageType={pageType} />;
  }
  /* end of IF(!data) */

  return (
    <>
      {/* <code>
        LEN::
        {cateData.length}
      </code> */}

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap"> */}
      <ul
        className={` ${
          pageType === 'HOME'
            ? 'grid grid-cols-8 grid-rows-2 gap-x-4 gap-y-10 md:w-full lg:w-[66%]'
            : 'grid grid-flow-row grid-cols-12 gap-6'
        }  z-10 `}
      >
        {cateData.map((item) => (
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
