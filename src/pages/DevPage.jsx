import React, { useState } from 'react';

import apiHelper from '../utils/helpers';

import logo from '../images/logo.svg';
import poweredBy from '../images/powered-by-vitawind-dark.png';

function DevPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center selection:bg-green-900">
      <header className="container">
        <input
          value="SIGN-UP"
          type="button"
          className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            console.log('SIGN-UP');

            // const user = {
            //   email: 'g2@dev',
            //   nickname: 'g1@dev',
            //   password: 'g1@dev',
            // };
            // apiHelper.userSignUp({ user }).then((res) => {
            //   console.log(res);
            //   const { authorization } = res?.headers ?? null;
            //   console.log('JWT::', authorization);
            // });

            const data = {
              Account: 'maord@pm.me',
              Password: 'g1@dev',
              Name: 'g1@dev',
              MobilePhone: 'g1@dev',
              Address: 'g1@dev',
            };

            apiHelper.userSignUp(data).then((res) => {
              console.log(res);
            });
            /* end of userSignUp() */
          }}
        />

        <button
          type="button"
          className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            console.log('LOG-IN');

            // const user = {
            //   email: 'g2@dev',
            //   password: 'g1@dev',
            // };
            // apiHelper.userLogin({ user }).then((res) => {
            //   console.log(res);
            //   const { authorization } = res?.headers ?? null;
            //   console.log('JWT::', authorization);
            //   localStorage.setItem('JWT', authorization);
            //   // saveToken(res);
            // });

            const data = {
              Account: 'maord@pm.me',
              Password: 'g1@dev',
            };

            apiHelper.userLogin(data).then((res) => {
              console.log(res);
              const { authorization } = res?.headers ?? null;
              console.log('JWT::', authorization);
              // saveToken(res);
            });
            /* end of userLogin() */
          }}
        >
          LOG-IN
        </button>

        <input
          value="PUT"
          type="button"
          className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            console.log('EDIT');

            const data = {
              Account: 'g1@dev',
              // Password: 'g1@dev',
              Name: '000000',
              MobilePhone: '000000',
              // Address: '000000',
            };

            apiHelper.userEdit(data).then((res) => {
              console.log(res);
            });
            /* end of userEdit() */
          }}
        />

        <hr />

        <input
          value="GET"
          type="button"
          className="m-2 rounded bg-[#6AF] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            // console.log('check-Token::', token);
            // apis.todosGet({ token }).then((res) => {
            //   console.log(res);
            // });
          }}
        />

        <input
          value="POST"
          type="button"
          className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            // console.log('check-Token::', token);
            // apis.todosPost({ token, todo }).then((res) => {
            //   console.log(res);
            // });
          }}
        />

        <input
          value="PUT"
          type="button"
          className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            // console.log('check-Token::', token);
            // apis.todosPut({ token, id, todo }).then((res) => {
            //   console.log(res);
            // });
          }}
        />

        <input
          value="DELETE"
          type="button"
          className="m-2 rounded bg-[#F33] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            // console.log('check-Token::', token);
            // apis.todosDelete({ token, id }).then((res) => {
            //   console.log(res);
            // });
          }}
        />

        <input
          value="PATCH"
          type="button"
          className="m-2 rounded bg-[#5EC] py-2 px-3 text-center text-xs font-bold text-white opacity-70 transition-all hover:bg-gray-200"
          onClick={() => {
            // console.log('check-Token::', token);
            // apis.todosToggle({ token, id }).then((res) => {
            //   console.log(res);
            // });
          }}
        />
      </header>

      <main className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <img
          src={logo}
          className="animate-speed h-60 motion-safe:animate-spin"
          alt="logo"
        />
        <style>
          {
            '\
            .animate-speed{\
              animation-duration:20s;\
            }\
          '
          }
        </style>

        <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
          Vite + React + Tailwindcss v3
        </p>

        <p className="mt-3">
          <button
            type="button"
            className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
            onClick={() => setCount((preCount) => preCount + 1)}
          >
            count is:
            {count}
          </button>
        </p>

        <p>
          Edit
          <code className="text-[#8d96a7]"> App.jsx </code>
          and save to test HMR updates.
        </p>

        <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {' | '}

          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>

        <img src={poweredBy} className="mx-auto my-8" alt="powered-by" />
      </main>
    </div>
  );
}

export default DevPage;
