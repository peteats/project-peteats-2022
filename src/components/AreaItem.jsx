import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const AREA_IMG = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Area.png';

function AreaItem({ item }) {
  const { Id, CityName, imageUrl } = item;

  if (!item) {
    return <h3>LOADING...</h3>;
  }
  /* end of IF(!data) */

  return (
    <li className="w-full pb-28 pl-8 md:w-1/3">
      <Link to={`/shops/city/${Id}`}>
        {/* /shops/city/:id */}
        <div className="border-bg-primary relative rounded-3xl border-4 border-[#DB8C8C] px-10 pb-6 pt-[50%] text-center hover:bg-[#DB8C8C]">
          <img
            className="absolute top-12 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-xl"
            src={AREA_IMG || imageUrl}
            alt={CityName || 'CityName'}
          />

          <h3 className="mt-3 text-5xl font-bold leading-snug tracking-tight text-black">
            <span>{Id}</span>
            {CityName}
          </h3>
        </div>
      </Link>
    </li>
  );
}
/* end of AreaItem() */

AreaItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,
};
/* end of AreaItem.propTypes */

export default AreaItem;
