import React, { useEffect, useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';

import apiHelper from '../utils/helpers';

import ShopItem from './ShopItem';

function ShopList({ queryType, queryId }) {
  const [shopsData, setShopsData] = useState(null);

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
    return <h3>LOADING...</h3>;
  }
  /* end of IF(!data) */

  return (
    <section className="pe-container mx-auto my-20 px-12 md:p-0">
      {queryType === 'HOT' ? null : (
        <h2 className="my-4 text-left text-2xl font-bold">熱門店家</h2>
      )}

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ul> */}

      <ul className="-ml-6 -mb-8 flex flex-wrap">
        {shopsData.map((item) => {
          console.log('!', item);
          // apiHelper.getImg(item?.imageUrl).then((res) => {
          //   console.log('res:', res);
          // });

          return <ShopItem key={item.Id} data={item} />;
        })}
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
