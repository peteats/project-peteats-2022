import React from 'react';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

const FAKE_IMAGE = 'https://peteats.rocket-coding.com/Image/Shop/Shop_04few.jpg';
// const FAKE_IMAGE = 'https://peteats.rocket-coding.com/Image/Shop/Shop_04.jpg';

function ItemUI() {
  return (
    <li className="col-span-12 p-2 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <div className="transition duration-500 ease-out hover:scale-105 hover:ease-in">
        <div className="mx-auto flex max-w-[267px] flex-col justify-between">
          <picture className="relative pt-[100%]">
            <img
              src={FAKE_IMAGE}
              alt=""
              className="absolute left-0 top-0 z-0 h-full w-full rounded-2xl object-cover object-center"
            />
          </picture>

          <section className="relative z-30 -mt-10 flex flex-col rounded-2xl bg-[#212529] py-4 px-6 text-white shadow-xl hover:bg-[#DB8C8C]">
            <div>
              <h3>12</h3>
              <h3>12</h3>
              <h3>12</h3>
            </div>
          </section>
        </div>
      </div>
    </li>
  );
}
/* end of ItemUI() */

function ListUI() {
  return (
    <section className="pe-container mx-auto my-80">
      <ul className="grid min-h-screen grid-flow-row auto-rows-auto grid-cols-12 place-content-center gap-4 overflow-hidden px-12 sm:p-0">
        <ItemUI />
        <ItemUI />
        <ItemUI />
        <ItemUI />
      </ul>
    </section>
  );
}
/* end of ListUI() */

function GridShops() {
  return (
    <>
      <ListUI />
      <hr />
    </>
  );
}
/* end of GridShops() */

export default GridShops;
