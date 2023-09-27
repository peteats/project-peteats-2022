import React from 'react';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import PacmanLoader from 'react-spinners/PacmanLoader';

function RenderLoading() {
  // function RenderLoading({ data }) {
  //   if (!data.length) {
  return (
    <>
      {/* <h3 className="text-center">LOADING...</h3> */}

      <section className="flex min-h-[50vh] items-center justify-center">
        {/* <section className="flex min-h-[25vh] items-center justify-center"> */}
        <PacmanLoader
          color="#DB8C8C"
          loading
          // cssOverride={override}
          size={32}
        />
      </section>
    </>
  );
  // }
  // /* end of IF(!data) */
}
/* end of RenderLoading() */

export default RenderLoading;
