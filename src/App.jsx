import React from 'react';
// import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import AxiosInterceptors from './utils/AxiosInterceptors';
import RoutesConfig from './pages/RoutesConfig';

function App() {
  return (
    <AxiosInterceptors>
      <RoutesConfig />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AxiosInterceptors>
  );
}

export default App;
