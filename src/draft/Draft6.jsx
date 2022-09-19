import React from 'react';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

function PageCheckoutResult() {
  return (
    <div className="container mx-auto  px-1 pt-40 pb-20  lg:pt-24 lg:pb-10">
      <div className="grid grid-cols-12 items-center justify-center">
        <section className="col-span-8 col-start-3">
          <h2 className="mb-6 text-center font-bold">目前訂單進度</h2>

          <div className="flex flex-col gap-10 rounded-2xl border-4 border-[#DB8C8C] p-10">
            <ul className="flex flex-col gap-4">
              <li>
                <p>
                  title
                  <span className="pl-4">string</span>
                </p>
              </li>

              <li>
                <p>
                  title
                  <span className="pl-4">string</span>
                </p>
              </li>

              <li>
                <p>
                  title
                  <span className="pl-4">string</span>
                </p>
              </li>

              <li>
                <p>
                  title
                  <span className="pl-4">string</span>
                </p>
              </li>

              <li>
                <p>
                  title
                  <span className="pl-4">string</span>
                </p>
              </li>
            </ul>

            <div className="flex gap-10">
              <button type="button" className="w-full border py-2">
                CLICK
              </button>

              <button type="button" className="w-full bg-black py-2 text-white">
                CLICK
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
/* end of PageCheckoutResult() */

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

function Draft6() {
  return (
    <>
      <PageCheckoutResult />
      <hr />
    </>
  );
}
/* end of Draft6() */

export default Draft6;
