import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import apiHelper from '../utils/helpers';
import ShopsSkeleton from './ShopsSkeleton';

import ShopItem from './ShopItem';

const MOCK_DATA = {
  Status: true,
  data: [
    {
      Id: 1,
      ShopName: 'SHOP',
      EvaluateStars: 4,
      Views: 5,
      CityName: 'Taipei',
      imageUrl:
        'https://peteats.rocket-coding.com/Image/Class/ProductClasses_01.png',
    },
  ],
};
/* end of MOCK_DATA */

function ShopList({ queryType, queryId }) {
  const [shopsData, setShopsData] = useState(null);
  // const [isFetch, setIsFetch] = useState(null);

  // useEffect(() => {
  //   const { data } = MOCK_DATA;
  //   setShopsData(data);
  // }, [shopsData]);
  /* end of useEffect-MOCK_DATA */

  useEffect(() => {
    if (queryType === 'TAG') {
      apiHelper.getShopsByTag(queryId).then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopsByTag:::', res?.data);

          const { data } = res.data;
          console.log(data[0]);
          setShopsData(data);
        }
      });
    }

    if (queryType === 'CITY') {
      apiHelper.getShopsByCity(queryId).then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopsByCity:::', res?.data);

          const { Data } = res.data;
          console.log(Data[0]);
          setShopsData(Data);
        }
      });
    }

    if (queryType === 'HOT') {
      apiHelper.getShopsHot().then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopsHot:::', res?.data);

          const { Message } = res.data;
          console.log(Message[0]);
          setShopsData(Message);
        }
      });
    }
  }, [queryId]);

  if (!shopsData) {
    return <ShopsSkeleton />;
  }
  /* end of IF(!data) */

  return (
    <ul className="grid grid-flow-row auto-rows-auto grid-cols-12 place-content-center gap-4 px-6 sm:px-0">
      {shopsData.map((item) => (
        <ShopItem key={item.Id} data={item} />
      ))}
    </ul>
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
