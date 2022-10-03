import React from 'react';
// import { useOutletContext } from 'react-router-dom';

import { useShop } from './SubShopLayout';
// import PrintResponse from '../components/DevPrintResponse';

import MenuItem from '../components/MenuItem';

function SubShopMenu() {
  const { shopId, menuData } = useShop();
  // const [shopInfosData, setShopInfosData] = useOutletContext();
  // const [count, setCount] = useOutletContext();

  if (!menuData) {
    return <h2>LOADING...</h2>;
  }
  /* end of IF(!data) */

  return (
    <>
      {/* <PrintResponse data={shopInfosData} title="shopInfosData" /> */}
      {/* <PrintResponse data={menuData} title="menuData" /> */}

      {/* <pre>
        shopId:::
        {shopId}
      </pre> */}

      <>
        <div className="SubShopMenu pe-container mx-auto mb-20 px-1 md:p-0">
          <ul className="flex w-full flex-col flex-wrap justify-between gap-8 md:flex-row">
            {menuData.map((item) => {
              console.log('item:', item);
              // <PrintResponse data={item} title="item" />;
              // <SpecItem key={item.Id} data={item} onClickItem={onClickItem} />
              return <MenuItem key={item.Id} item={item} shopId={shopId} />;
            })}
          </ul>
        </div>
        {/* end of container */}
      </>
    </>
  );
}
/* end of SubShopMenu() */

export default SubShopMenu;
