import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import apiHelper from '../utils/helpers';
import AreaItem from './AreaItem';
import AreaSkeleton from './AreaSkeleton';

function AreaList({ pageType }) {
  const [areaData, setAreaData] = useState(null);

  const isPageHome = pageType === 'HOME';

  useEffect(() => {
    if (!areaData) {
      apiHelper.getShopCity().then((res) => {
        // console.log(res);

        if (res?.data?.Status) {
          // console.log('getShopCity:::', res?.data);

          const { Message } = res.data;
          // console.log(Message[0]);
          setAreaData(Message);
        }
      });
    }
  }, [areaData]);

  if (!areaData) {
    return <AreaSkeleton pageType={pageType} />;
    // return <h3>LOADING...</h3>;
  }
  /* end of IF(!data) */

  return (
    // <ul className="-ml-8 -mb-8 flex flex-wrap">
    // <ul className={`${isLarge ? '-ml-6' : '-ml-24'} -mb-8  flex flex-wrap`}>
    <ul
      className={`grid grid-flow-row grid-cols-12  ${
        isPageHome ? 'gap-6 gap-y-20 md:gap-y-24' : 'gap-2 sm:gap-4 md:gap-6'
      }  `}
    >
      {areaData.map((item) => (
        <AreaItem key={item.Id} item={item} pageType={pageType} />
      ))}
    </ul>
  );
}
/* end of AreaList() */

AreaList.defaultProps = {
  pageType: 'HOME',
};

AreaList.propTypes = {
  pageType: PropTypes.string,
};
/* end of AreaList.propTypes */

export default AreaList;
