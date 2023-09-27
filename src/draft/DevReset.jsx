import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useInput from '../hooks/useInput';
import apiHelper from '../utils/helpers';

function DevReset() {
  const navigate = useNavigate();

  const Password = useInput('');
  const CheckPassword = useInput('');

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const Guid = params.get('guid')?.toString();

  const submitForm = (event) => {
    event.preventDefault();

    if (Password.value !== CheckPassword.value) {
      return navigate(0);
    }

    const data = {
      Password: Password.value,
      CheckPassword: CheckPassword.value,
      Guid,
    };

    // console.log('submitForm-', data);

    if (Guid) {
      // console.log('GUID');
      return apiHelper.userResetPassword(data).then((res) => {
        // console.log(res);

        setTimeout(() => {
          // console.log('navigate');
          navigate('/login');
        }, 1500);
        /* end of setTimeout() */
      });
    }

    return apiHelper.userNewPassword(data).then((res) => {
      // console.log('!GUID');
      // console.log(res);

      setTimeout(() => {
        // console.log('navigate');
        navigate('/login');
      }, 1500);
      /* end of setTimeout() */
    });
  };

  return (
    <section className="pe-container mx-auto py-20  px-2 md:min-h-[calc(100vh_-_320px)] md:px-[120px] lg:px-[160px] xl:px-[290px]">
      <h3 className="my-4 text-center text-lg font-bold">重設密碼</h3>

      <form
        action=""
        onSubmit={submitForm}
        className="flex flex-col items-center"
      >
        <label htmlFor="Password" className="my-1 block w-full">
          密碼
          <input
            placeholder="Password"
            value={Password.value}
            type="password"
            name="Password"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={Password.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <label htmlFor="CheckPassword" className="my-1 block w-full">
          確認密碼
          <input
            placeholder="CheckPassword"
            value={CheckPassword.value}
            type="password"
            name="CheckPassword"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={CheckPassword.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <button
          className="hover:scale-103 col-span-1 mb-6 block rounded
          bg-[#343A40] py-2.5 px-6 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80"
          type="submit"
        >
          送出
        </button>
      </form>
    </section>
  );
}

export default DevReset;
