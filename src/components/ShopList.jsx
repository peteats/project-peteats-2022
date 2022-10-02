import React, { useEffect, useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from '@mui/material/Skeleton';

import PacmanLoader from 'react-spinners/PacmanLoader';

import apiHelper from '../utils/helpers';

import ShopItem from './ShopItem';

function ShopList({ queryType, queryId }) {
  // const [shopsData, setShopsData] = useState([]);
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

  const LoadingItem = (
    <li className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
      <Skeleton
        sx={{ height: '360px', borderRadius: '20px' }}
        // className="rounded-sm"
        animation="wave"
        variant="rounded"
      />
    </li>
  );

  if (!shopsData) {
    return (
      <>
        {/* <h3>LOADING...</h3> */}

        <ul className="grid grid-flow-row auto-rows-auto grid-cols-12 place-content-center gap-4 px-6 sm:px-0">
          {/* <LoadingItem /> */}
          {LoadingItem}
          {LoadingItem}
          {LoadingItem}
          {LoadingItem}
        </ul>

        {/*
        <section className="mx-auto flex min-h-[25vh] items-center justify-center">
          <h3>LOADING...</h3>

          <Skeleton
            className="min-h-[25vh]"
            animation="wave"
            variant="rectangular"
          /> */}
        {/* <PacmanLoader
            color="#DB8C8C"
            loading
            // cssOverride={override}
            size={32}
          /> */}
        {/* </section> */}
      </>
    );
  }
  /* end of IF(!data) */

  return (
    <>
      {' '}
      {/* <div className="pe-container mx-auto my-20 px-12 md:p-0"> */}
      {/* {queryType === 'HOT' ? null : (
        <h2 className="my-4 text-left text-2xl font-bold">熱門店家</h2>
      )} */}
      {/* <ul className="-ml-8 -mb-8 flex flex-wrap">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ul> */}
      <ul className="grid grid-flow-row auto-rows-auto grid-cols-12 place-content-center gap-4 px-6 sm:px-0">
        {/* <ul className="-ml-6 -mb-8 flex flex-wrap px-6 md:px-0"> */}
        {shopsData.map((item) => {
          console.log('!', item);
          // apiHelper.getImg(item?.imageUrl).then((res) => {
          //   console.log('res:', res);
          // });

          return <ShopItem key={item.Id} data={item} />;
        })}
      </ul>
      {' '}
      {/* </div> */}
    </>
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
