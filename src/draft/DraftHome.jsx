import React from 'react';

import { Link } from 'react-router-dom';

const Cate = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Cate.png';

function DraftItem() {
  return (
    <li className="col-span-4">
      <div>
        <Link to="/shops/tag" className="block">
          <img
            className="border-bg-primary h-full w-full rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
            src={Cate}
            alt="CategoryItem"
          />
        </Link>
      </div>
    </li>
  );
}

function DraftHome() {
  return (
    <>
      <h3>PageNotFound</h3>

      <div className="container mx-auto my-20 px-1">
        <div className=" grid grid-flow-row grid-cols-12">
          {/* <div className="grid grid-flow-row grid-cols-12"> */}
          <ul className=" gap-x-4 gap-y-10">
            <li className="col-span-4 block">
              <div>
                <Link to="/shops/tag" className="block">
                  <img
                    className="border-bg-primary h-full w-full rounded-lg border-2 border-[#DB8C8C] bg-white shadow-md"
                    src={Cate}
                    alt="CategoryItem"
                  />
                </Link>
              </div>
            </li>
            <DraftItem />
            <DraftItem />
            <DraftItem />
          </ul>
        </div>
      </div>
    </>
  );
}
/* end of DraftHome() */

export default DraftHome;
