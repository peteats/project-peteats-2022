import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import AxiosInterceptors from './utils/AxiosInterceptors';

import 'react-toastify/dist/ReactToastify.css';

import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <AxiosInterceptors>
        <ToastContainer />
        <App />
      </AxiosInterceptors>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,

  document.getElementById('root'),
);
