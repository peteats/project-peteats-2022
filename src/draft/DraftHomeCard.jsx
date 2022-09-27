import React from 'react';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import CategoryList from './CategoryList';

const Cate = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Cate.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('信用卡');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            低溫舒肥雞胸肉
          </Typography>

          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <FormControl>
              <FormLabel
                sx={{ pb: 2 }}
                id="demo-controlled-radio-buttons-group"
              >
                商品選項
              </FormLabel>

              <RadioGroup
                sx={{ pl: 2 }}
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  sx={{ pb: 1 }}
                  value="female"
                  control={<Radio />}
                  label="Female"
                />

                <FormControlLabel
                  sx={{ pb: 1 }}
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

function HomeCategory() {
  return (
    <>
      <section className="pe-container my-80 mx-auto">
        <KeepMountedModal />

        {/* <ul className="col-span-8 grid grid-flow-row grid-cols-8 gap-x-4 gap-y-6">
          <li className="col-span-4">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-4">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-4">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-4">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>
        </ul> */}
      </section>

      <section className="pe-container my-20 mx-auto min-h-screen">
        <ul className="grid grid-cols-8 grid-rows-2 gap-x-4 gap-y-10 overflow-hidden bg-slate-300/50 md:w-full lg:w-[66%]">
          <li className="box col-span-8 md:col-span-4">
            <div className="h-[320px]">1</div>
          </li>

          <li className="box col-span-8 md:col-span-4">
            <div className="h-[320px]">2</div>
          </li>

          <li className="box col-span-8 md:col-span-4">
            <div className="h-[320px]">3</div>
          </li>

          <li className="box col-span-8 md:col-span-4">
            <div className="h-[320px]">4</div>
          </li>
        </ul>
      </section>

      <section className="pe-container my-20 mx-auto min-h-screen">
        <ul className="grid w-[66%] grid-flow-row grid-cols-8 grid-rows-2 gap-x-4 gap-y-10 overflow-hidden">
          <li className="box col-span-4">
            <div className="h-[320px]">1</div>
          </li>

          <li className="box col-span-4">
            <div className="h-[320px]">2</div>
          </li>

          <li className="box col-span-4">
            <div className="h-[320px]">3</div>
          </li>

          <li className="box col-span-4">
            <div className="h-[320px]">4</div>
          </li>
        </ul>
      </section>

      <section className="pe-container my-20 mx-auto min-h-screen">
        <ul className="grid-lines grid grid-flow-row grid-cols-12 grid-rows-2 gap-x-4 gap-y-10 overflow-hidden">
          <li className="box col-span-4 row-span-1 block">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </li>

          <li className="box col-span-4 row-span-1 block">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="box col-span-4 col-start-1 row-span-1 block">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="box col-span-4 row-span-1 block">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>
        </ul>
      </section>

      <section className="pe-container my-20 mx-auto min-h-screen">
        <ul className="grid-lines grid grid-flow-row grid-cols-12 grid-rows-2 gap-x-4 gap-y-10 overflow-hidden">
          <li className="box col-span-4 row-span-1 block h-[320px]">1</li>
          <li className="box col-span-4 row-span-1 block h-[320px]">2</li>
          <li className="box col-span-4 col-start-1 row-span-1 block h-[320px]">
            3
          </li>
          <li className="box col-span-4 row-span-1 block h-[320px]">4</li>
        </ul>
      </section>

      <section className="pe-container my-20 mx-auto grid min-h-screen grid-flow-row grid-cols-12">
        <ul className="col-span-8 gap-4">
          <li className="col-span-4">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-4">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-4">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-4">
            <div className="h-[320px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>
        </ul>
      </section>

      <section className="pe-container my-20 mx-auto min-h-screen">
        <ul className="grid grid-flow-row grid-cols-12 gap-6">
          <li className="col-span-3">
            <div className="h-[136px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-3">
            <div className="h-[136px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-3">
            <div className="h-[136px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>

          <li className="col-span-3">
            <div className="h-[136px]">
              <img
                src={Cate}
                alt=""
                className="object-fit h-full w-full object-cover "
              />
            </div>
          </li>
        </ul>
      </section>

      <div className="min-h-screen w-full bg-[length:590.75px_553.16px] bg-[left_90%_bottom_0px] bg-no-repeat md:bg-home-neko">
        {/* <span className="sr-only">neko works finally</span> */}

        <section className="pe-container mx-auto my-20  md:min-h-screen">
          <h2 className="mb-10 text-center text-3xl font-bold md:mb-16">
            快速分類
            <br className="md:hidden" />
            <span className="md:pl-4">立即訂購</span>
          </h2>

          <CategoryList isFlexWrap="flex-wrap" />
        </section>
      </div>

      {/*
      <section className="pe-container mx-auto my-20  md:min-h-screen">
        <h2 className="mb-16 text-center text-3xl font-bold">
          快速分類
          <span className="pl-4">立即訂購</span>
        </h2>

        <CategoryList isFlexWrap="flex-wrap" />
      </section> */}

      {/* <div className="hidden md:-mt-[100vh] md:flex md:min-h-screen md:justify-end ">
        <div className="-z-10 mr-24 mb-1 flex w-[590.75px] items-end justify-end">
          <img
            className="w-full object-cover object-center"
            src={NEKO}
            alt=""
          />
        </div>
      </div> */}
    </>
  );
}
/* end of HomeCategory() */

export default HomeCategory;
