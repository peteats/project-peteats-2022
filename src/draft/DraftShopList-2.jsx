import React, { useEffect, useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation, useMatch } from 'react-router-dom';

import apiHelper from '../utils/helpers';

import ShopItem from './ShopItem';

function ShopList({ queryId }) {
  // function ShopList({ queryType, queryId }) {
  const [shopsData, setShopsData] = useState([]);

  const [queryType, setQueryType] = useState('');

  // const queryType = () => {
  const isTagRoute = useMatch('/shops/tag/:tagId');
  const isCityRoute = useMatch('/shops/city/:tagId');

  // if (isTagRoute) {
  //   return 'TAG';
  // }
  // if (isCityRoute) {
  //   return 'CITY';
  // }
  // return 'HOME';
  // };

  // = async ({ queryType, query }) => {
  useEffect(() => {
    if (isTagRoute) {
      setQueryType('TAG');
    }

    // console.log(isCityRoute);

    apiHelper.getShops({ queryType, queryId }).then((res) => {
      // console.log(res);
      // console.log('queryType', queryType);

      if (res?.data?.Status) {
        // console.log('getShops:::', res?.data);
        // const { data } = res.data;
        // console.log(data[0]);
        // setShopsData(data);
      }
    });

    // if (queryType === 'TAG') {
    //   apiHelper.getShopsByTag(queryId).then((res) => {
    //     console.log(res);

    //     if (res?.data?.Status) {
    //       console.log('getShopsByTag:::', res?.data);

    //       const { data } = res.data;
    //       console.log(data[0]);
    //       setShopsData(data);
    //     }
    //   });
    // }
  }, [queryId]);

  return (
    <section className="container mx-auto my-20 px-12 md:p-0">
      <h2 className="my-4 text-left text-2xl font-bold">熱門店家</h2>

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ul> */}

      <ul className="-ml-8 -mb-8 flex flex-wrap">
        {shopsData.map((item) => (
          // console.log('!', item);
          <ShopItem key={item.Id} data={item} />
        ))}
      </ul>
    </section>
  );
}
/* end of StoreList() */

ShopList.defaultProps = {
  queryType: 'TAG',
  queryId: 1,
};

ShopList.propTypes = {
  queryType: PropTypes.string,
  queryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
/* end of ShopList.propTypes */

export default ShopList;
