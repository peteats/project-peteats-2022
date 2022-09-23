import React, { useEffect, useState } from 'react';
// import React from 'react';
// import PropTypes from 'prop-types';

import apiHelper from '../utils/helpers';
import AreaItem from './AreaItem';

function AreaList() {
  const [areaData, setAreaData] = useState(null);

  useEffect(() => {
    if (!areaData) {
      apiHelper.getShopCity().then((res) => {
        console.log(res);

        if (res?.data?.Status) {
          console.log('getShopCity:::', res?.data);

          const { Message } = res.data;
          // console.log(Message[0]);
          setAreaData(Message);
        }
      });
    }
  }, [areaData]);

  if (!areaData) {
    return <h3>LOADING...</h3>;
  }

  return (
    <ul className="-ml-8 -mb-8 flex flex-wrap">
      {areaData.map((item) => (
        <AreaItem key={item.Id} item={item} />
      ))}
    </ul>
  );
}
/* end of AreaList() */

// AreaList.defaultProps = {
//   isFlexWrap: '',
// };

// AreaList.propTypes = {
//   isFlexWrap: PropTypes.string,
// };
/* end of AreaList.propTypes */

export default AreaList;
