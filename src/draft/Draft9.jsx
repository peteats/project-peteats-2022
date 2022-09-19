import React from 'react';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

function PageRatingOrder() {
  return (
    <>
      <div className="container mx-auto px-1">
        <div className="flex flex-col justify-center font-bold md:grid md:grid-flow-row md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3">
            <h2 className="pt-21 pb-6 text-center">評價此訂單</h2>

            <CardWithBorderAndCol>
              <div className="flex flex-col gap-6 ">
                <div>
                  <h3 className="">總體評價星級</h3>
                  {/* #TODO: Component-ratings */}
                  <p>1-2-3-4-5</p>
                </div>

                <div className="w-full">
                  <p className="pb-2">comment</p>

                  <textarea
                    name="comment"
                    id=""
                    cols="30"
                    rows="10"
                    className="block h-32 w-full border py-2 px-3"
                  />
                </div>

                <div>
                  <p className="pb-2">UPLOAD</p>
                  {/* #TODO: Component-upload */}

                  <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="random_image"
                    className="h-20 w-20 rounded-3xl object-cover object-center"
                  />
                </div>

                <button
                  type="button"
                  className="block w-full rounded-md bg-black py-2 text-white"
                >
                  CLICK
                </button>
              </div>
            </CardWithBorderAndCol>
          </div>
        </div>
      </div>
      {/* end of container */}
    </>
  );
}
/* end of PageRatingOrder() */

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

function Draft9() {
  return (
    <>
      <PageRatingOrder />
      <hr />
    </>
  );
}
/* end of Draft9() */

export default Draft9;
