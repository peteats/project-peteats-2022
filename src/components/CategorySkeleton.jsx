import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from '@mui/material/Skeleton';

function CategorySkeleton({ pageType }) {
  const isPageHome = pageType === 'HOME';

  const SkeletonItem = (
    <li className="col-span-3">
      <div className="h-[136px]">
        <Skeleton height="100%" variant="rounded" animation="wave" />
      </div>
    </li>
  );
  const SkeletonHomeCategory = (
    <li className="box col-span-8 md:col-span-4">
      <div className="h-[320px]">
        <Skeleton height="100%" variant="rounded" animation="wave" />
      </div>
    </li>
  );
  /* end of JSX-CategorySkeleton */

  return (
    <>
      {/* // <section className="Layout pe-container my-20 mx-auto min-h-screen"> */}
      {/* #NOTE: correct grid for PageHome */}
      {isPageHome ? (
        <ul className="grid grid-cols-8 grid-rows-2 gap-x-4 gap-y-10 overflow-hidden  md:w-full lg:w-[66%]">
          {SkeletonHomeCategory}
          {SkeletonHomeCategory}
          {SkeletonHomeCategory}
          {SkeletonHomeCategory}
        </ul>
      ) : (
        <ul className="grid grid-flow-row grid-cols-12 gap-6">
          {/* #NOTE: correct grid for PageShops */}
          {SkeletonItem}
          {SkeletonItem}
          {SkeletonItem}
          {SkeletonItem}
        </ul>
      )}
      {/* // </section> */}
    </>
  );
}
/* end of UI-CategorySkeleton */

CategorySkeleton.defaultProps = {
  pageType: 'HOME',
};

CategorySkeleton.propTypes = {
  pageType: PropTypes.string,
};
/* end of CategorySkeleton.propTypes */

export default CategorySkeleton;
