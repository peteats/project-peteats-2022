import React, { useState, useEffect } from 'react';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';

import apiHelper from '../utils/helpers';
import PrintResponse from '../components/DevPrintResponse';

import SectionShopInfo from '../components/SectionShopInfo';

function SubShopLayout() {
  const { shopId, itemId } = useParams();

  const [shopInfosData, setShopInfosData] = useState(null);
  const [menuData, setMenuData] = useState(null);
  // const [isFetch, setIsFetch] = useState(null);
  // const [count, setCount] = React.useState(0);

  useEffect(() => {
    let isFetch = false;

    if (!shopInfosData) {
      apiHelper.getInfoMenu(shopId).then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getInfoMenu:::', res?.data);

          const { Message, menuList, feedback } = res.data;
          // console.log('menuList-0:::', menuList[0]);
          if (!isFetch) {
            setShopInfosData({ Message, menuList, feedback });
            setMenuData([...menuList]);
          }
          /* end of IF(!isFetch) */
        }
        /* end of IF(!Status) */
      });
    }
    /* end of IF(!length) */

    return () => {
      setTimeout(() => {
        // setIsFetch(true);
        isFetch = true;
      }, 300);
      /* end of setTimeout() */
    };
  }, [shopId]);
  /* end of useEffect() */

  if (!shopInfosData) {
    // if (!shopInfosData || !isFetch) {
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

      <Outlet context={{ shopId, shopInfosData, menuData }} />
      {/* <Outlet context={[count, setCount]} /> */}
    </>
  );
}
/* end of SubShopLayout() */

export default SubShopLayout;

export function useShop() {
  return useOutletContext();
}
/* end of useShop-useOutletContext */
