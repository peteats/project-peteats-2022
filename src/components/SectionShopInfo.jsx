import React from 'react';
import PropTypes from 'prop-types';

import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function SectionShopInfo({ data }) {
  const { Message } = data;
  // #REVIEW"

  const {
    ShopName,
    OpeningHourse,
    ShopAddress,
    Freight,
    EvaluateStars,
    ShopTEL,
    imageUrl,
  } = Message;

  return (
    <>
      <div className="ShopInfo pe-container mx-auto mb-20 px-1 sm:p-0">
        <div className="flex flex-col items-center justify-start pt-20 font-bold sm:flex-row">
          <picture className="block w-[364px]">
            <img
              className="h-full w-full rounded-3xl object-cover object-center"
              src={imageUrl}
              alt={ShopName}
            />
          </picture>

          <section className="md:ml-4">
            <h2 className="mb-4 mt-4 text-center text-xl md:mt-0 md:text-left">
              {ShopName}
            </h2>

            <ul className="flex flex-col gap-4">
              <li className="">
                <p>
                  營業時間
                  <span className="ml-4 font-normal">{OpeningHourse}</span>
                </p>
              </li>

              <li className="">
                <p>
                  地址
                  <span className="ml-4 font-normal">{ShopAddress}</span>
                </p>
              </li>

              <li className="">
                <p>
                  運費
                  <span className="ml-4 font-normal">{Freight}</span>
                  <span className="ml-2 font-normal">元</span>
                </p>
              </li>

              <li className="">
                <p>
                  聯絡電話
                  <span className="ml-4 font-normal">{ShopTEL}</span>
                </p>
              </li>

              <li className="">
                <p>
                  {/* #TODO: */}
                  {/* <Rating name="read-only" value={EvaluateStars} readOnly /> */}

                  <Rating
                    name="text-feedback"
                    value={EvaluateStars}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />

                  {/* <span className="ml-4 font-normal">{EvaluateStars}</span> */}
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
      {/* end of container */}
    </>
  );
}
/* end of SectionShopInfo() */

SectionShopInfo.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
      PropTypes.string,
      PropTypes.number,
    ]),
  ).isRequired,
};
/* end of SectionShopInfo.propTypes */

export default SectionShopInfo;
