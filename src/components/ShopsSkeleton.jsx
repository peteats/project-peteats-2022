import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from '@mui/material/Skeleton';

function ShopsSkeleton({ pageType }) {
  const LoadingItem = (
    <li className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
      <Skeleton
        sx={{ height: '360px', borderRadius: '20px' }}
        animation="wave"
        variant="rounded"
      />
    </li>
  );

  return (
    <ul className="grid grid-flow-row auto-rows-auto grid-cols-12 place-content-center gap-4 px-6 sm:px-0">
      {/* <LoadingItem /> */}
      {LoadingItem}
      {LoadingItem}
      {LoadingItem}
      {LoadingItem}
    </ul>
  );
}
/* end of UI-ShopsSkeleton */

ShopsSkeleton.defaultProps = {
  pageType: 'HOME',
};

ShopsSkeleton.propTypes = {
  pageType: PropTypes.string,
};
/* end of ShopsSkeleton.propTypes */

export default ShopsSkeleton;
