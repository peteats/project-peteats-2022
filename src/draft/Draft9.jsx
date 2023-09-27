import React, { useState } from 'react';

import {
  Link, useNavigate, useParams, useLocation,
} from 'react-router-dom';

import { Rating, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import useInput from '../hooks/useInput';
import apiHelper from '../utils/helpers';

import Store from '../images/Store.png';
import Area from '../images/Area.png';

function CardWithBorderAndCol({ children }) {
  return (
    <section className="flex flex-col justify-center rounded-[20px] border-4 border-[#DB8C8C] p-10">
      {children}
    </section>
  );
}
/* end of CardWithBorderAndCol({ children }) */

// const labels = {
//   0.5: '0.5',
//   1: '1',
//   1.5: '1.5',
//   2: '2',
//   2.5: '2.5',
//   3: '3',
//   3.5: '3.5',
//   4: '4',
//   4.5: '4.5',
//   5: '5',
// };
/* end of labels-Dic */

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
/* end of labels-Dic */

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
/* end of getLabelText() */

function SectionRating() {
  const [value, setValue] = useState(1);
  const [hover, setHover] = useState(-1);

  return (
    <>
      <>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </>

      <>
        {/* <hr />
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
        {/* end of readOnly-Ver. */}
      </>
    </>
  );
}
/* end of SectionRating() */

function PageRatingOrder() {
  const navigate = useNavigate();

  const { orderId } = useParams();

  const [value, setValue] = useState(1);
  const [tmp, setTmp] = useState('');
  const [hover, setHover] = useState(-1);

  const comment = useInput('');

  return (
    <>
      <div className="pe-container mx-auto my-20">
        <div className="flex flex-col justify-center font-bold md:grid md:grid-flow-row md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3">
            <h2 className="pt-21 pb-6 text-center">評價此訂單</h2>

            <CardWithBorderAndCol>
              <div className="flex flex-col gap-6 ">
                <div>
                  <h3 className="">總體評價星級</h3>
                  {/* #TODO: Component-ratings */}
                  {/* <SectionRating /> */}
                  <section>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                        // comment.value = newValue;
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={(
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      )}
                    />
                    {value !== null && (
                      <Box className="hidden" sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </section>
                </div>

                <div className="w-full">
                  <p className="pb-2">您的建議及評價</p>

                  <textarea
                    name="comment"
                    value={comment.value}
                    onChange={comment.onChange}
                    placeholder="請輸入文字"
                    type="text"
                    id=""
                    cols="30"
                    rows="10"
                    className="block h-32 w-full border py-2 px-3"
                  />

                  {/* <pre>{comment.value}</pre> */}
                </div>

                {/* <div>
                  <p className="pb-2">UPLOAD</p> */}
                {/* #TODO: Component-upload */}

                {/* <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="random_image"
                    className="h-20 w-20 rounded-3xl object-cover object-center"
                  />
                </div> */}

                <button
                  type="button"
                  className="hover:scale-103 col-span-1 block rounded bg-[#343A40]
                  py-2.5 px-6 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80"
                  onClick={() => {
                    // console.log('REVIEW');
                    // const rating = value;
                    const rating = comment.value;

                    return apiHelper
                      .reviewOrder({ orderId, rating })
                      .then((res) => {
                        // console.log(res);

                        if (res?.data?.Status) {
                          // console.log('reviewOrder:::', res?.data);

                          // const { Data } = res.data;
                          // setCateData(Data);
                          // #TODO: navigate to shops
                          // navigate(-1);
                          // orderId
                          navigate('/shops/4');
                          // navigate(`/shops/${orderId}`);
                        }
                      });
                  }}
                >
                  送出評價
                </button>

                <button
                  type="button"
                  className="block w-full rounded-md bg-white py-2 text-white"
                  onClick={() =>
                  // console.log('REVIEW');
                  // const rating = value;

                    apiHelper.orderPay(orderId).then((res) => {
                      // console.log(res);

                      if (res?.data?.Status) {
                        // console.log('reviewOrder:::', res?.data);

                        // const { Data } = res.data;
                        // setCateData(Data);
                        // #TODO: navigate to shops
                        // navigate(-1);
                        navigate('/shops/3');
                      }
                    })}
                >
                  付款
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
