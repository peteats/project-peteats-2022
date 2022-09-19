import React from 'react';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

function CardWithBorderAndCol({ children }) {
  return (
    <section className="flex flex-col justify-center rounded-[20px] border-4 border-[#DB8C8C] p-10">
      {children}
    </section>
  );
}
/* end of CardWithBorderAndCol({ children }) */

CardWithBorderAndCol.propTypes = {
  children: PropTypes.node.isRequired,
};

function HistoryOrderFormItem() {
  return (
    <li>
      <p className="flex items-center gap-4">
        title
        <span className="font-normal">string</span>
      </p>
    </li>
  );
}
/* end of HistoryOrderFormItem() */

function PageHistoryDetail() {
  return (
    <>
      <div className="container mx-auto px-1 pt-40 pb-20  font-bold  md:pt-20">
        <h2 className="pb-6 text-center text-3xl">TITTLE</h2>

        <div className="gap-6  md:grid md:grid-flow-row md:grid-cols-12">
          <div className="md:col-span-8">
            <CardWithBorderAndCol>
              <div className="flex items-center justify-center gap-4">
                <h3>訂單編號</h3>
                <span className="text-[#DB8C8C]">00000</span>
              </div>

              <ul className="flex flex-col gap-4">
                {/* #TODO: inject data from Server */}
                <HistoryOrderFormItem />
                <HistoryOrderFormItem />
                <HistoryOrderFormItem />
                <HistoryOrderFormItem />
                <HistoryOrderFormItem />
                <HistoryOrderFormItem />
                <HistoryOrderFormItem />
              </ul>

              <div>
                <p>1</p>
                <p>2</p>

                <picture className="relative block w-full pt-[100%] md:h-64 md:pt-[50%]">
                  <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="random_image"
                    className="absolute left-0 top-0 h-full w-full object-cover object-center"
                  />
                </picture>
              </div>

              <div>
                <p>1</p>
                <p>2</p>
              </div>
            </CardWithBorderAndCol>
          </div>

          <div className="md:col-span-4">
            <CardWithBorderAndCol>
              <h3>訂單內容</h3>
            </CardWithBorderAndCol>
          </div>
        </div>
        {/* end of Grid */}
      </div>
      {/* end of container */}
    </>
  );
}
/* end of PageHistoryDetail() */

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

function Draft8() {
  return (
    <>
      <PageHistoryDetail />
      <hr />
    </>
  );
}
/* end of Draft8() */

export default Draft8;
