import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from '@mui/material/Skeleton';

function ItemUI({ pageType }) {
  const isPageHome = pageType === 'HOME';

  return (
    <>
      {/* {console.log()} */}
      {isPageHome ? (
        <li className="col-span-12 flex w-full justify-center rounded-3xl border-r-4 border-l-4 border-b-4 border-[#212529]/10 sm:col-span-6 lg:col-span-4">
          {/* /shops/city/:id */}
          <div className="flex flex-col items-center justify-center py-6">
            <picture className="relative z-10 -mt-[30%] block h-[280px] w-[280px]">
              <Skeleton
                height="100%"
                width="100%"
                variant="circular"
                animation="wave"
              />
            </picture>

            <Skeleton
              sx={{ mt: 4 }}
              height="3.75rem"
              width="96%"
              variant="rounded"
              animation="wave"
            />
          </div>
        </li>
      ) : (
      /* end of style-Large */

        <li className="col-span-11 pl-[12%] sm:col-span-6 md:col-span-6 lg:col-span-4">
          {/* /shops/city/:id */}
          <div className="flex items-center">
            <picture className="relative z-10 -ml-[12%] block h-[120px] w-[120px]">
              <Skeleton
                // sx={{ ml: 0 }}
                height="100%"
                width="100%"
                variant="circular"
                animation="wave"
              />
            </picture>

            <Skeleton
              sx={{ ml: -0.1 }}
              height="4rem"
              width="75%"
              variant="rounded"
              animation="wave"
            />
          </div>
        </li>

      /* end of style-Small */
      )}
    </>
  );
}

/* end of ItemUI() */

function AreaSkeleton({ pageType }) {
  const isPageHome = pageType === 'HOME';

  return (
    <ul
      className={`grid grid-flow-row grid-cols-12  ${
        isPageHome ? 'gap-6 gap-y-20 md:gap-y-24' : 'gap-2 sm:gap-4 md:gap-6'
      }
    `}
    >
      <ItemUI pageType={pageType} />
      <ItemUI pageType={pageType} />
      <ItemUI pageType={pageType} />
    </ul>
  );
}
/* end of UI-AreaSkeleton() */

AreaSkeleton.defaultProps = {
  pageType: '',
};

AreaSkeleton.propTypes = {
  pageType: PropTypes.string,
};
/* end of AreaSkeleton.propTypes */

export default AreaSkeleton;
