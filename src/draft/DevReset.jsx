import React from 'react';
import { useLocation } from 'react-router-dom';

import useInput from '../hooks/useInput';
import apiHelper from '../utils/helpers';

function DevReset() {
  const Password = useInput('');
  const CheckPassword = useInput('');

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const Guid = params.get('guid')?.toString();

  const submitForm = (event) => {
    event.preventDefault();

    const data = {
      Password: Password.value,
      CheckPassword: CheckPassword.value,
      Guid,
    };

    console.log('submitForm-', data);

    if (Guid) {
      console.log('GUID');
      return apiHelper.userResetPassword(data).then((res) => {
        console.log(res);
      });
    }

    return apiHelper.userNewPassword(data).then((res) => {
      console.log('!GUID');
      console.log(res);
    });
  };

  return (
    <>
      <p className="text-center text-lg font-bold">RESET</p>
      <form
        action=""
        onSubmit={submitForm}
        className="flex flex-col items-center"
      >
        <label htmlFor="Password" className="my-1 block w-full">
          Password
          <input
            placeholder="Password"
            value={Password.value}
            type="password"
            name="Password"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={Password.onChange}
          />
        </label>

        <label htmlFor="CheckPassword" className="my-1 block w-full">
          CheckPassword
          <input
            placeholder="CheckPassword"
            value={CheckPassword.value}
            type="password"
            name="CheckPassword"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={CheckPassword.onChange}
          />
        </label>

        <button
          className="m-2 block rounded bg-[#333] px-16 py-2 text-center text-white"
          type="submit"
        >
          送出
        </button>
      </form>

      <hr />
      <input
        type="button"
        value="RESET"
        className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
        onClick={() => {
          console.log('RESET');

          const data = {
            Password: 'Bb000000',
            CheckPassword: 'Bb000000',
            Guid,
          };

          apiHelper.userResetPassword(data).then((res) => {
            console.log(res);
          });
        }}
      />
    </>
  );
}

export default DevReset;
