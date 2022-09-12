import React, { useEffect, useState } from 'react';
import axios from 'axios';

import apiHelper from '../utils/helpers';
import Button from '../components/Button';

import logo from '../images/logo.svg';
import poweredBy from '../images/powered-by-vitawind-dark.png';

function fetchData() {
  return new Promise((resolve) => {
    console.log('START');
    return setTimeout(resolve, 5000);
  });
}

function DevPage() {
  const [count, setCount] = useState(0);
  const [resMsg, setResMsg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const saveToken = ({ JwtToken }) => {
    console.log('AUTH_TOKEN:::', JwtToken);
    const AUTH_TOKEN = `Bearer ${JwtToken}`;
    // setToken(JwtToken);
    localStorage.setItem('JWT', AUTH_TOKEN);
  };

  const handleClick = () => {
    setLoading(true);
    // setLoading(!isLoading);
  };

  useEffect(() => {
    if (isLoading) {
      fetchData().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <div className="text-center selection:bg-green-900">
      <header className="container">
        <Button disabled={isLoading ? 'disabled' : ''} onClick={handleClick}>
          {isLoading ? 'Loading...' : 'Click'}
        </Button>

        <input
          type="button"
          value="NEW"
          className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            console.log('NEW');

            const data = {
              Password: 'Bb000000',
              CheckPassword: 'Bb000000',
            };

            apiHelper.userNewPassword(data).then((res) => {
              console.log(res);
            });
          }}
        />

        <input
          value="SIGN-UP"
          type="button"
          className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            console.log('SIGN-UP');

            const user = {
              email: 'g1@dev',
              nickname: 'g1@dev',
              password: 'g1@dev',
            };
            apiHelper.userSignUp({ user }).then((res) => {
              console.log(res);
              const { status } = res;
              if (status) {
                const { headers } = res;
                console.log('JWT::', headers?.authorization);
              }
            });

            // const data = {
            //   Account: 'maord@pm.me',
            //   Password: 'g1@dev',
            //   Name: 'g1@dev',
            //   MobilePhone: 'g1@dev',
            //   Address: 'g1@dev',
            // };
            // apiHelper.userSignUp(data).then((res) => {
            //   console.log(res);
            // });
            /* end of userSignUp() */
          }}
        />

        <p>
          res:
          {/* {JSON.stringify(null, 2, resMsg)} */}
          {resMsg}
        </p>

        <button
          type="button"
          className="m-2 rounded bg-[#4C9] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
          onClick={() => {
            console.log('LOG-IN');

            // const user = {
            //   email: 'g1@dev',
            //   password: 'g1@dev',
            // };
            // apiHelper.userLogin({ user }).then((res) => {
            //   console.log(res);
            //   setResMsg(JSON.stringify(resMsg, null, 2));

            //   const { authorization } = res?.headers ?? null;
            //   console.log('JWT::', authorization);
            //   localStorage.setItem('JWT', authorization);
            //   // saveToken(res);
            // });

            // const data = {
            //   Account: 'maord@pm.me',
            //   Password: 'string',
            // };
            const data = {
              Account: 'yuuya82323@gmail.com',
              Password: 'Text1234',
            };
            apiHelper.userLogin(data).then((res) => {
              console.log(res);
              // const { JwtToken } = res?.data ?? null;
              // console.log('JWT::', JwtToken);
              saveToken(res?.data);

              // const { authorization } = res?.headers ?? null;
              // console.log('JWT::', authorization);
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
              Name: 'string',
              MobilePhone: 'string',
              Address: 'string',
            };

            // const data = {
            //   Account: 'g1@dev',
            //   // Password: 'g1@dev',
            //   Name: '000000',
            //   MobilePhone: '000000',
            //   // Address: '000000',
            // };

            const config = {
              method: 'put',
              url: 'https://peteats.rocket-coding.com/api/users/edit',
              headers: {
                Authorization:
                  'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6NSwiQWNjb3VudCI6Inl1dXlhODIzMjNAZ21haWwuY29tIiwiTmFtZSI6Inl1dXlhODIzMjMiLCJFeHAiOiI4LzI5LzIwMjIgNDoxOTo0MCBQTSJ9.nmbHchQ6MzH9rPXalj4lOIYknAyzzy2dowpBxBp_3FauEUJVxh8VuPw57Czunxr26Je-NeRcQrO1NQcm6DwXgQ',
                'Content-Type': 'application/json',
              },
              data,
            };

            axios(config)
              .then((response) => {
                console.log(JSON.stringify(response.data));
              })
              .catch((error) => {
                console.log(error);
              });

            // apiHelper.userEdit(data).then((res) => {
            //   console.log(res);
            // });
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
