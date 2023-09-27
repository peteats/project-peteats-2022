import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import CustomModal from './CustomModal';
import MenuModalContent from './MenuModalContent';

function MenuItem({ item, shopId }) {
  const [open, setOpen] = useState(false);

  const {
    Id, Price, ProductName, imageUrl,
  } = item;

  const handleItemId = () => {
    // console.log('handleItemId:', Id);
    // console.log('shopId::', shopId);

    setOpen(true);
    // return onClickItem({ itemId: Id, shopId });
  };
  /* end of handleItemId() */

  return (
    <li className="MenuItem block w-full lg:w-[calc(49%_-_24px)]">
      <CustomModal open={open} setOpen={setOpen}>
        {/* #TODO: open Modal */}
        {/* <MenuModalContent props={{ item, shopId }} /> */}
        <MenuModalContent item={item} shopId={shopId} />
      </CustomModal>

      <Link
        to={`/shops/${shopId}/menu/${Id}`}
        className="flex w-full flex-col justify-start lg:flex-row"
      >
        <img
          className="h-[120px] w-full rounded-2xl object-cover object-center lg:w-[120px]"
          src={imageUrl}
          alt={ProductName}
        />

        <section className="grid grid-rows-3 items-center gap-4 sm:w-full md:gap-1 lg:ml-4">
          <div className="flex items-center justify-between">
            <h4 className="mt-4 w-full text-center text-xl font-bold md:m-0 md:text-left">
              {/* <code>
                {Id}
                _
              </code> */}
              {ProductName}
            </h4>

            {/* <p>{ProductContent}</p> */}
            {/* <p>{console.log('ProductContent', ProductContent)}</p> */}

            {/* md:invisible  */}
            <button
              type="button"
              className="hover:scale-103 relative z-10 col-span-1 hidden w-full rounded bg-[#343A40] py-2 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 lg:block"
              // onClick={handleOpen}
              onClick={handleItemId}
            >
              {/* #TODO: onClick={} */}
              新增此商品
            </button>
            {/* end of RWD-PC-button */}
          </div>

          {/* #FIXME: Need to same height with img */}
          {/* <p className="row-span-1">Lorem, ipsum dolor sit </p> */}
          <p className="row-span-1">
            售價：
            {Price}
            <span className="pl-1">元</span>
          </p>

          <button
            type="button"
            className="hover:scale-103 relative z-10 col-span-1 block rounded bg-[#343A40] py-2 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80 lg:hidden"
            onClick={handleItemId}
          >
            {/* #TODO: onClick={} */}
            新增此商品
          </button>
          {/* end of RWD-Mobile-button */}
        </section>
      </Link>
    </li>
  );
}
/* end of MenuItem() */

MenuItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,
};
/* end of MenuItem.propTypes */

export default MenuItem;
