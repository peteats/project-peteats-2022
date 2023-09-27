import React, { useState, useEffect, useReducer } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import Skeleton from '@mui/material/Skeleton';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import apiHelper from '../utils/helpers';
import useInput from '../hooks/useInput';
import useCounter from '../hooks/useCounter';

function ControlledRadioButtonsGroup({ optionData, onClickItem }) {
  const [value, setValue] = React.useState(null);
  // const [value, setValue] = React.useState(optionData[0].Id);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        {/* <h3 className="text-lg font-bold">付款方式</h3> */}
      </FormLabel>

      <div className="pl-2">
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {optionData.map((item) => (
            // console.log();
            // console.log(item);

            <li key={item.Id}>
              <button
                type="button"
                className="block"
                onClick={() => {
                  onClickItem(item.Id);
                }}
              >
                <FormControlLabel
                  control={<Radio />}
                  label={item.Content}
                  value={item.Id}
                />
                {/* <span>{item.Id}</span>
                  {item.Content} */}
              </button>
            </li>
          ))}
        </RadioGroup>
      </div>
    </FormControl>
  );
}

function MenuOptionList({ itemId, onClickItem }) {
  // const { itemId } = useParams();
  // #TODO: WIP
  const [optionData, setOptionData] = useState(null);
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    let isFetch = false;

    apiHelper.getMenuItem(itemId).then((res) => {
      // console.log(res);

      if (res?.data?.Status) {
        // console.log('getMenuItem:::', res?.data);

        const { Data, DetailList } = res.data;
        // console.log(DetailList[0]);
        // console.log(Data.ProductName);

        if (!isFetch) {
          setOptionData(DetailList);
          setItemData(Data);
        }
        /* end of IF(!isFetch) */
      }
      /* end of IF(!Status) */
    });

    return () => {
      isFetch = true;
    };
  }, [itemId]);

  if (!optionData || !itemData) {
    return (
      <h3>
        {itemId}
        LOADING...
      </h3>
    );
  }

  return (
    <>
      {itemData?.ProductContent}

      <section className="flex flex-col gap-4 pb-8">
        <h4 className="mt-4 text-xl font-bold">商品選項</h4>

        <ul className="flex w-full flex-col justify-between gap-4">
          <ControlledRadioButtonsGroup
            optionData={optionData}
            onClickItem={onClickItem}
          />
        </ul>
      </section>
      {/*  */}
    </>
  );
}
/* end of MenuOptionList */

MenuOptionList.propTypes = {
  itemId: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

function MenuModalContent({ item, shopId }) {
  const navigate = useNavigate();

  const {
    Id, Price, ProductName, imageUrl, ProductContent,
  } = item;

  // const [state, dispatch] = useReducer(counterReducer, { count: 1 });
  const [state, dispatch] = useCounter({ count: 1, Price });

  const [clickOptionId, setClickOptionId] = useState(0);

  const thisMsg = useInput('');

  const onClickItem = (optionItemId) =>
    // console.log('optionItemId:::', optionItemId);
    // console.log('shopId:::', shopId);
    setClickOptionId(optionItemId);
  /* end of onClickItem() */

  return (
    <section className="flex w-full flex-col gap-6 py-2">
      <pre className="fixed top-4 flex hidden gap-4">
        shopId:::
        {shopId}
        <code>
          itemId:::
          {Id}
        </code>
      </pre>

      <picture className="block h-[160px] w-[526px]">
        {imageUrl ? (
          <img
            loading="lazy"
            src={imageUrl}
            alt={ProductName}
            className="h-full w-full rounded-2xl object-cover object-center"
            // #FIXME:
          />
        ) : (
          <Skeleton
            sx={{ borderRadius: '20px' }}
            height="100%"
            width="100%"
            // height="160px"
            // maxWidth="526px"
            variant="rounded"
          />
        )}
      </picture>

      {/* Modal-Body */}
      <article className="flex flex-col gap-1">
        {ProductName ? (
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-2xl font-bold">{ProductName}</h4>

            <p>{`${Price} 元`}</p>
            {/* <p>{ProductContent}</p> */}
          </div>
        ) : (
          <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} />
        )}

        {Id ? (
          <>
            {/* <h4 className="text-xl font-bold">商品選項</h4> */}
            {/* // #TODO: WIP */}
            <MenuOptionList itemId={Id} onClickItem={onClickItem} />
          </>
        ) : (
          <>
            <Skeleton
              height="2rem"
              width="25%"
              variant="rounded"
              sx={{ my: 1 }}
            />
            <Skeleton height="1rem" width="50%" variant="rounded" />
            <Skeleton height="1rem" width="50%" variant="rounded" />
            <Skeleton height="1rem" width="50%" variant="rounded" />
          </>
        )}

        {Id ? (
          <>
            <h4 className="text-xl font-bold">給店家的留言</h4>

            <label htmlFor="msg" className="my-1 block w-full">
              <input
                type="text"
                name="msg"
                id="msg"
                className="my-1 w-full rounded border border-slate-300 p-1"
                placeholder=""
                value={thisMsg.value}
                onChange={thisMsg.onChange}
              />
            </label>

            {/* <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="block h-16 w-full py-2 px-3"
            /> */}
          </>
        ) : (
          <>
            <Skeleton
              height="2.5rem"
              width="25%"
              variant="rounded"
              sx={{ mt: 2, mb: 1 }}
            />
            <Skeleton variant="rounded" height={80} />
          </>
        )}
      </article>

      <footer className="">
        {Id ? (
          <div className="flex justify-between">
            <div className="flex items-center justify-evenly  md:col-span-2 md:w-full md:flex-row">
              <button
                type="button"
                onClick={() => {
                  dispatch({ type: 'minus' });
                }}
              >
                {/* - */}
                <RemoveIcon />
              </button>

              <p className="text-2xl font-bold text-[#DB8C8C]">{state.count}</p>

              <button
                type="button"
                onClick={() => {
                  dispatch({ type: 'plus' });
                }}
              >
                {/* + */}
                <AddIcon />
              </button>
            </div>

            <button
              type="button"
              disabled={`${!clickOptionId ? 'disabled' : ''}`}
              className={` ${
                !clickOptionId
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'bg-[#333] hover:bg-[#DB8C8C]'
              }  m-2 block w-4/5 rounded  px-4 py-2 text-center text-white `}
              // onClick={closeToast}
              onClick={() => {
                // const optionId = 8;
                const msg = thisMsg.value || 'null';
                const amount = state.count;

                return apiHelper
                  .addItemToCart({ clickOptionId, msg, amount })
                  .then((res) => {
                    // console.log(res);

                    if (res?.data?.Status) {
                      // console.log('addItemToCart:::', res?.data);

                      // #TODO: Toast-ID
                      // closeToast();
                      return navigate(`/shops/${shopId}/cart`);
                      // return navigate('/page4');
                      // const { Data, DetailList } = res.data;
                      // console.log(DetailList[0]);
                      // console.log(Data[0]);
                      // setCateData(Data);
                    }
                    // closeToast();
                    return navigate(-1);
                  });
              }}
            >
              加入購物車
            </button>
          </div>
        ) : (
          <Skeleton
            height="2.5rem"
            width="100%"
            variant="rounded"
            sx={{ mt: 2, mb: 1 }}
          />
        )}
      </footer>
    </section>
  );
}
/* end of MenuModalContent() */

export default MenuModalContent;
