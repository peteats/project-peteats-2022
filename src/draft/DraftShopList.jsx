import React, { useEffect, useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation, useMatch } from 'react-router-dom';

import apiHelper from '../utils/helpers';

import ShopItem from './ShopItem';

function ShopList({ queryType, queryId }) {
  // const location = useLocation();
  const { tagId } = useParams();
  // const { tagId, cityId } = useParams();
  const [shopsData, setShopsData] = useState(null);
  // const match = useMatch();
  const isCityRoute = useMatch('/shops/city/:tagId');
  const isTagRoute = useMatch('/shops/tag/:tagId');
  // const isCityRoute = useMatch('/shops/city/:tagId');
  // /shops/city/:tagId

  // const regexpCity = /city/;

  const fetchShops = () => {
    if (isTagRoute) {
      console.log('isTagRoute');

      return apiHelper.getShopsByTag(queryId).then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopsByTag:::', res?.data);

          const { data } = res.data;
          console.log(data[0]);
          // return setShopsData(data);
          return data;
        }
      });
    }

    if (isCityRoute) {
      console.log('isCityRoute');

      return apiHelper.getShopsByCity(queryId).then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopsByCity:::', res?.data);

          const { data } = res.data;
          console.log(data[0]);
          // setShopsData(data);
          return data;
        }
      });
    }
  };

  useEffect(() => {
    // console.log('queryType', queryType);
    // console.log('isCityRoute', isCityRoute);
    // console.log('location:::', location.pathname.includes('city'));
    // if (queryType === 'TAG') {
    //   apiHelper.getShopsByTag(queryId).then((res) => {
    //     console.log(res);
    //     if (res?.data?.Status) {
    //       console.log('getShopsByTag:::', res?.data);
    //       const { data } = res.data;
    //       console.log(data[0]);
    //       // setShopsData(data);
    //     }
    //   });
    // }
  }, [queryId]);
  /* end of useEffect() */

  if (!shopsData) {
    return <h3>LOADING...</h3>;
  }
  /* end of IF(!data) */

  return (
    <section className="container mx-auto my-20 px-12 md:p-0">
      {console.log('Shops-tagId:', tagId)}
      {/* {console.log('Shops-cityId:', cityId)} */}
      <h2>
        This is a dynamic page for
        {tagId}
      </h2>

      <h2 className="my-4 text-left text-2xl font-bold">熱門店家</h2>

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ul> */}

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap">
        {shopsData.map((item) => (
          // console.log('!', item);
          <ShopItem key={item.Id} data={item} />
        ))}
      </ul> */}
    </section>
  );
}
/* end of ShopListList() */

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
