import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import apiHelper from '../utils/helpers';

import CategoryList from '../components/CategoryList';

// import Store from '../images/Store.png';
import Area from '../images/Area.png';

const Store = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Store.png';

function SectionAreaSmall() {
  return (
    <section className="container mx-auto px-12 md:p-0">
      <h2 className="my-4 text-left text-2xl font-bold">地區分類</h2>

      {/* <ul className="grid-cols-3 gap-16 md:grid">
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </ul> */}

      <ul className="-ml-24 -mb-8 flex flex-wrap">
        <li className="w-full pl-24 pb-6 md:w-1/3">
          <a href="/#" className="block rounded-3xl bg-[#212529] text-center">
            <div
              className="relative rounded-2xl
              bg-[#212529] text-center hover:bg-[#DB8C8C]"
            >
              <img
                className="absolute top-1/2 -left-2 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover object-center shadow-xl"
                src={Area}
                alt=""
              />

              <h3 className="py-1 text-4xl font-bold leading-snug tracking-tight text-white">
                台北市
              </h3>
            </div>
          </a>
        </li>

        <li className="w-full pl-24 pb-6 md:w-1/3">
          <a href="/#" className="block rounded-3xl bg-[#212529] text-center">
            <div
              className="relative rounded-2xl
              bg-[#212529] text-center hover:bg-[#DB8C8C]"
            >
              <img
                className="absolute top-1/2 -left-2 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover object-center shadow-xl"
                src={Area}
                alt=""
              />

              <h3 className="py-1 text-4xl font-bold leading-snug tracking-tight text-white">
                台北市
              </h3>
            </div>
          </a>
        </li>

        <li className="w-full pl-24 pb-6 md:w-1/3">
          <a href="/#" className="block rounded-3xl bg-[#212529] text-center">
            <div
              className="relative rounded-2xl
              bg-[#212529] text-center hover:bg-[#DB8C8C]"
            >
              <img
                className="absolute top-1/2 -left-2 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover object-center shadow-xl"
                src={Area}
                alt=""
              />

              <h3 className="py-1 text-4xl font-bold leading-snug tracking-tight text-white">
                台北市
              </h3>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
/* end of SectionAreaSmall() */

function StoreCard({ data }) {
  const { Id, ShopName, ShopAddress } = data;

  /**
   * #NOTE:
   * - `.`: many
   * - `+`: any
   */
  const regexpCity = /.+市/;

  return (
    <li className="w-full pl-8 pb-6 md:w-1/4">
      <div className="transition duration-500 ease-out hover:scale-105 hover:ease-in">
        <picture className="block rounded-2xl">
          <img
            src={Store}
            alt="Store"
            className="z-0 block h-full w-full rounded-2xl object-cover"
          />
        </picture>

        <section className="relative z-10 -mt-11 flex flex-col rounded-2xl bg-[#DB8C8C] py-4 px-6 shadow-xl">
          <div className="flex justify-between">
            <p>{ShopAddress.match(regexpCity)}</p>
            <p>ICON</p>
          </div>

          <h3 className="py-3">
            <span>{Id}</span>
            {ShopName}
          </h3>

          <span>4.6</span>
        </section>
      </div>
    </li>
  );
}
/* end of StoreCard() */

StoreCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
/* end of StoreCard.propTypes */

function StoreList() {
  const [shopsData, setShopsData] = useState([]);

  useEffect(() => {
    if (!shopsData.length) {
      apiHelper.getShopsByTag(1).then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopsByTag:::', res?.data);

          const { data } = res.data;
          console.log(data[0]);
          setShopsData(data);
        }
      });
    }
  }, [shopsData]);

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
        {shopsData.map((item) => {
          console.log('!', item);
          return <StoreCard key={item.Id} data={item} />;
        })}
      </ul>
    </section>
  );
}
/* end of StoreList() */

// function PageShops() {
//   return (
//     <>
//       <SectionAreaSmall />
//       <StoreList />
//       <hr />
//     </>
//   );
// }
/* end of PageShops() */

// export default PageShops;

function Draft2() {
  const { tagId } = useParams();

  return (
    <>
      <div className="container mx-auto my-20 px-1">
        <h2>
          This is a dynamic page for
          {tagId}
        </h2>
        <CategoryList classRow={4} />
      </div>

      <SectionAreaSmall />
      <StoreList />
    </>
  );
}
/* end of Draft2() */

export default Draft2;
