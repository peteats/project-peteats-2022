import React from 'react';
// import React, { useState } from 'react';
import { ToastContainer, Flip } from 'react-toastify';

import AxiosInterceptors from './utils/AxiosInterceptors';
import LoadingContext from './contexts/LoadingContext';
import RoutesConfig from './pages/RoutesConfig';

function App() {
  return (
    <LoadingContext.LoadingProvider>
      <AxiosInterceptors>
        <RoutesConfig />
      </AxiosInterceptors>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={3}
        transition={Flip}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </LoadingContext.LoadingProvider>
  );
}

export default App;
