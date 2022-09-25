import React from 'react';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';

// import apiHelper from '../utils/helpers';
// import CategoryItem from './CategoryItem';
import CategoryList from './CategoryList';

// import Cate from '../images/Cate.png';
// const Cate = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Cate.png';

// function CategoryItem({ data }) {
//   const { Id, ProductClassName } = data;

//   return (
//     <li className="w-full pl-8 pb-8 md:w-1/2">
//       {/* /shops/tag/:id */}
//       <Link to={`/shops/tag/${Id}`}>
//         <div className="">
//           <img
//             className="border-bg-primary rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
//             src={Cate}
//             alt="CategoryItem"
//           />

//           <h5 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
//             <span>{Id}</span>
//             {ProductClassName}
//           </h5>
//         </div>
//       </Link>
//     </li>
//     // <li>
//     //   {Id}
//     //   <p>{ProductClassName}</p>
//     // </li>
//   );
// }
// /* end of CategoryItem() */

// CategoryItem.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
// };
// /* end of CategoryItem.propTypes */

// function CategoryList() {
//   const [cateData, setCateData] = useState([]);

//   useEffect(() => {
//     if (!cateData.length) {
//       apiHelper.getShopClass().then((res) => {
//         console.log(res);

//         if (res?.data?.Status) {
//           console.log('getShopClass:::', res?.data?.Data);

//           const { Data } = res.data;
//           setCateData(Data);
//         }
//       });
//     }
//   }, [cateData]);

//   return (
//     <>
//       <code>
//         LEN::
//         {cateData.length}
//       </code>

//       <ul className="-ml-8 -mb-8 flex flex-wrap">
//         {cateData.map((item) => {
//           console.log('!', item);
//           return <CategoryItem key={item.Id} data={item} />;
//         })}
//       </ul>
//     </>
//   );
// }
// /* end of CategoryList() */

function HomeCategory() {
  // const [cateData, setCateData] = useState([]);

  // useEffect(() => {
  //   if (!cateData.length) {
  //     apiHelper.getShopClass().then((res) => {
  //       console.log(res);

  //       if (res?.data?.Status) {
  //         console.log('getShopClass:::', res?.data?.Data);

  //         const { Data } = res.data;
  //         setCateData(Data);
  //       }
  //     });
  //   }
  // }, [cateData]);

  return (
    <div className="container mx-auto px-px md:min-h-[calc(100vh_-_64px)]">
      <h2 className="my-10 text-center text-3xl font-bold">
        快速分類
        <br />
        立即訂購
      </h2>

      {/* <button
        type="button"
        className="block rounded-lg border border-gray-200 bg-white p-0.5
          text-center text-sm font-medium text-gray-900
          hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
          focus:ring-4 focus:ring-gray-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => apiHelper.getShopClass().then((res) => {
          console.log(res);

          if (res?.data?.Status) {
            console.log('getShopClass:::', res?.data?.Data);

            const { Data } = res.data;
            setCateData(Data);
          }
        })}
      >
        1-getShopClass
      </button>
      <button
        type="button"
        className="block rounded-lg border border-gray-200 bg-white p-0.5
          text-center text-sm font-medium text-gray-900
          hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none
          focus:ring-4 focus:ring-gray-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        onClick={() => console.log(cateData.length)}
      >
        LEN:
        {' '}
        {cateData.length}
      </button> */}
      {/* <nav className="grid-col-2 grid grid-flow-row gap-4"> */}
      {/* <nav className="-ml-8 -mb-8 flex flex-wrap"> */}
      <CategoryList classRow={2} />
      {/* </nav> */}

      {/* <hr /> */}

      {/* <ul className="-ml-8 -mb-8 flex flex-wrap">
        {cateData.map((item) => {
          console.log('!', item);
          return <CategoryItem key={item.Id} data={item} />;
        })} */}

      {/* <li className="w-full pl-8 pb-8 md:w-1/2">
          <a href="/#">
            <div className="">
              <img
                className="border-bg-primary rounded-lg border-2 border-[#DB8C8C]
                bg-white shadow-md"
                src={Cate}
                alt=""
              />

              <h5 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
                Noteworthy
              </h5>
            </div>
          </a>
        </li>

        <li className="w-full pl-8 pb-8 md:w-1/2">
          <a href="/#">
            <div className="">
              <img
                className="border-bg-primary rounded-lg border-2 border-[#DB8C8C]
                bg-white shadow-md"
                src={Cate}
                alt=""
              />

              <h5 className="-mt-12 pl-4 text-2xl font-bold tracking-tight text-white">
                Noteworthy
              </h5>
            </div>
          </a>
        </li> */}
      {/* </ul> */}
    </div>
  );
}
/* end of HomeCategory() */

export default HomeCategory;
