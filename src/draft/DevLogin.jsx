import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import useInput from '../hooks/useInput';
import useAuth from '../hooks/useAuth';
import apiHelper from '../utils/helpers';

function DevLogin() {
  const [isClick, setIsClick] = useState(false);
  const { token, setToken } = useAuth();

  const navigate = useNavigate();
  // const { setToken } = useAuth();

  const email = useInput('');
  const password = useInput('');

  const saveToken = ({ JwtToken }) => {
    // console.log('AUTH_TOKEN:::', JwtToken);
    const AUTH_TOKEN = `Bearer ${JwtToken}`;
    setToken(AUTH_TOKEN);
    localStorage.setItem('JWT', AUTH_TOKEN);
  };

  const submitForm = (event) => {
    event.preventDefault();
    // console.log('email', email.value);
    // console.log('password', password.value);

    const data = {
      Account: email.value,
      Password: password.value,
    };
    // const data = {
    //   Account: 'yuuya82323@gmail.com',
    //   Password: 'Text1234',
    // };

    // {
    //   Account: 'yuuya82323@gmail.com',
    //   Password: 'Text1234',
    // }

    // console.log('user-input:::', data);

    apiHelper.userLogin(data).then((res) => {
      // console.log('userLogin::', res);
      // const { JwtToken } = res?.data ?? null;
      // console.log('JWT::', JwtToken);
      // #FIXME:
      // res.data.Status = true;

      if (res?.data?.Status) {
        saveToken(res?.data);

        navigate('/shops');
      }
      /* end of IF(Status) */
    });
    /* end of userLogin() */
  };

  return (
    <section className="pe-container mx-auto px-2 pt-28 pb-20 md:min-h-[calc(100vh_-_320px)] md:px-[120px] lg:px-[160px] xl:px-[290px]">
      {!isClick ? (
        <>
          <h2 className="mb-6 text-center text-lg font-bold">登入</h2>

          {/* <hr /> */}

          <form
            action=""
            onSubmit={submitForm}
            className="flex flex-col items-center gap-2"
          >
            <label htmlFor="Account" className="my-1 block w-full">
              信箱
              <input
                required
                placeholder="name@mail.com"
                value={email.value}
                type="email"
                name="Account"
                id=""
                className="peer my-1 w-full rounded border p-1"
                onChange={email.onChange}
              />
              <small className="invisible">hint</small>
              {/* <p className="invisible font-light text-red-700 peer-invalid:visible">
                Please enter your name
              </p> */}
            </label>

            <label htmlFor="Password" className="my-1 block w-full">
              密碼
              <input
                required
                placeholder="••••••••"
                value={password.value}
                type="password"
                name="Password"
                id=""
                className="my-1 w-full rounded border p-1"
                onChange={password.onChange}
              />
              <small className="invisible">hint</small>
            </label>

            <button
              type="button"
              className="block self-end text-[#6C757D] transition delay-150 duration-500 ease-in-out hover:scale-105 hover:text-black"
              onClick={() =>
                // console.log('CLICK');
                setIsClick(true)}
            >
              忘記密碼？
            </button>

            <button
              className={`hover:scale-103 col-span-1 block rounded  py-2.5 px-6 text-center font-normal text-white ${
                !email.value && !password.value
                  ? 'cursor-not-allowed bg-gray-400'
                  : ' bg-[#343A40] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80'
              } `}
              type="submit"
              disabled={`${!email.value && !password.value ? 'disabled' : ''}`}
            >
              登入
            </button>

            <input
              value="註冊"
              type="button"
              name=""
              id=""
              className="my-2 cursor-pointer hover:scale-100"
              onClick={() => {
                // console.log('signup');
                navigate('/signup');
              }}
            />
          </form>
        </>
      ) : (
        <>
          <h2 className="mb-6 text-center text-lg font-bold">忘記密碼</h2>

          <label htmlFor="Account" className="my-1 block w-full">
            信箱
            <input
              placeholder="name@mail.com"
              value={email.value}
              type="email"
              name="Account"
              id=""
              className="my-1 w-full rounded border p-1"
              onChange={email.onChange}
            />
            <small className="invisible">hint</small>
          </label>

          <button
            type="submit"
            className="hover:scale-103 col-span-1 mx-auto block rounded bg-[#343A40]
    py-2.5 px-6 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80"
            onClick={() => {
              // console.log('FORGET');

              const data = {
                Account: email.value,
              };

              apiHelper.userForgetPassword(data).then((res) => {
                // console.log(res);

                if (res?.data?.Status) {
                  // console.log('userForgetPassword:::', res?.data);

                  setTimeout(() => {
                    // console.log('navigate');
                    // navigate('/login');
                    navigate(0);
                  }, 5000);
                  /* end of setTimeout() */
                }
                /* end of IF(Status) */
              });
              /* end of API */
            }}
          >
            送出
          </button>
        </>
      )}
    </section>
  );
}

export default DevLogin;
