import React from 'react';
// import React, { useState } from 'react';

import { useParams, useMatch } from 'react-router-dom';

import ShopList from '../components/ShopList';
import CategoryList from '../components/CategoryList';
import AreaList from '../components/AreaList';

import PrintResponse from '../components/DevPrintResponse';

function PageShops() {
  const { tagId, cityId } = useParams();

  const isCityRoute = useMatch('/shops/city/:cityId');
  const isTagRoute = useMatch('/shops/tag/:tagId');
  const isFromSearch = isCityRoute || isTagRoute;

  return (
    <>
      <code className="fixed hidden w-1/2 bg-slate-400/50 p-2">
        <PrintResponse data={isCityRoute} title="isCityRoute" />
        <PrintResponse data={isTagRoute} title="isTagRoute" />

        <PrintResponse data={tagId} title="tagId" />
        <PrintResponse data={cityId} title="cityId" />

        <PrintResponse data={Boolean(isCityRoute)} title="checker" />

        <pre>
          This is a dynamic page for_
          {tagId}
        </pre>
      </code>

      {isFromSearch && (
        <section
          id="ShopList"
          className="ShopList pe-container mx-auto mb-10 px-12 sm:px-2 md:p-0"
        >
          <h2 className="mb-6 pt-20 text-left text-2xl font-bold">商家一覽</h2>

          <ShopList
            queryType={tagId ? 'TAG' : 'CITY'}
            queryId={tagId || cityId}
          />
        </section>
      )}

      <section className="CategoryList pe-container mx-auto my-20 px-6 sm:px-2 md:p-0">
        <h2 className="mb-6 text-left text-2xl font-bold">快速分類</h2>

        <CategoryList pageType="SHOP" />
      </section>

      <section className="AreaList pe-container mx-auto my-20 px-4 sm:p-2 md:p-0">
        <h2 className="mb-8 text-left text-2xl font-bold">地區分類</h2>

        <AreaList pageType="SHOP" />
      </section>

      {!isFromSearch && (
        <section className="ShopList pe-container mx-auto my-20 px-12 sm:px-2 md:p-0">
          <h2 className="my-6 text-left text-2xl font-bold">熱門店家</h2>

          <ShopList queryType="HOT" />
        </section>
      )}
    </>
  );
}
/* end of PageShops() */

export default PageShops;
