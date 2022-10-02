import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import apiHelper from '../utils/helpers';
import PrintResponse from '../components/DevPrintResponse';

import SectionShopInfo from '../components/SectionShopInfo';

function SubShopLayout() {
  const { shopId, itemId } = useParams();

  const [shopInfosData, setShopInfosData] = useState(null);
  const [isFetch, setIsFetch] = useState(null);

  useEffect(() => {
    apiHelper.getInfoMenu(shopId).then((res) => {
      console.log(res);

      if (res?.data?.Status) {
        console.log('getInfoMenu:::', res?.data);

        const { Message, menuList, feedback } = res.data;
        // console.log('menuList-0:::', menuList[0]);
        if (!isFetch) {
          setShopInfosData({ Message, menuList, feedback });
        }
      }
      /* end of IF(!Status) */
    });
    // }
    /* end of IF(!length) */

    return () => {
      setTimeout(() => {
        setIsFetch(true);
      }, 500);
      /* end of setTimeout() */
    };
  }, [shopId]);
  /* end of useEffect() */

  if (!shopInfosData || !isFetch) {
    return <h2>LOADING...</h2>;
  }
  /* end of IF(!data) */

  return (
    <>
      <code className="fixed hidden w-1/2 bg-slate-400/50 p-2">
        <PrintResponse data={shopInfosData} title="shopInfosData" />

        <pre>
          This is a dynamic page for_
          {shopId}
        </pre>
      </code>

      <SectionShopInfo data={shopInfosData} />

      <Outlet />
    </>
  );
}
/* end of SubShopLayout() */

export default SubShopLayout;
