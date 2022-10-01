import React from 'react';
import PropTypes from 'prop-types';

const INTRO_DATA = [
  {
    img: 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/feature_LayoutOfGET/src/images/intro-1.png',
    title: '整合在地寵物餐廳',
  },
  {
    img: 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/feature_LayoutOfGET/src/images/intro-2.png',
    title: '不定期專屬優惠',
  },
  {
    img: 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/feature_LayoutOfGET/src/images/intro-3.png',
    title: '便利的貓狗訂餐平台',
  },
];
/* end of INTRO_DATA[{}] */

function IntroItem({ item }) {
  const { img, title } = item;

  return (
    <li className="col-span-12 sm:col-span-6 md:col-span-4">
      <section className="mx-auto flex flex-col items-center justify-between">
        <picture className="block max-w-[364px]">
          <img
            loading="lazy"
            src={img}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </picture>

        <h5 className="pt-6 text-center text-2xl font-bold tracking-tight text-black">
          {title}
        </h5>
      </section>
    </li>
  );
}
/* end of IntroItem() */

IntroItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,
};
/* end of IntroItem.propTypes */

function HomeIntro() {
  return (
    <div className="pe-container w-full bg-[length:168px_157px] bg-[right_96%_top_0] bg-no-repeat md:bg-home-claw md:py-1">
      {/* end of bg-home-claw */}
      <section className="HomeIntro pe-container mx-auto my-24 md:px-0">
        <h2 className="my-10 text-center text-3xl font-bold">
          食品用心
          <br className="md:hidden" />
          <span className="md:pl-4">毛孩開心</span>
        </h2>

        <ul className="grid grid-flow-row grid-cols-12 gap-6 overflow-hidden">
          {INTRO_DATA.map((item) => {
            console.log('!', item.img);
            return <IntroItem key={item.img} item={item} />;
            // console.log('!');
            // return <IntroItem key={item.img} item={item} />;
          })}
        </ul>
      </section>
    </div>
  );
}
/* end of HomeIntro() */

export default HomeIntro;
