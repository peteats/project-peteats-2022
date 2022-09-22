import React from 'react';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import CategoryList from './CategoryList';

function HomeCategory() {
  return (
    <div className="container mx-auto px-px md:min-h-[calc(100vh_-_64px)]">
      <h2 className="my-10 text-center text-3xl font-bold">
        快速分類
        <br />
        立即訂購
      </h2>

      <CategoryList isFlexWrap="flex-wrap" />
    </div>
  );
}
/* end of HomeCategory() */

export default HomeCategory;
