import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '../hooks/useInput';
import apiHelper from '../utils/helpers';

function DevSignup() {
  const navigate = useNavigate();

  const email = useInput('');
  const password = useInput('');
  const userName = useInput('');
  const phoneNumber = useInput('');
  const address = useInput('');

  // Account;
  // Password;
  // Name;
  // MobilePhone;
  // Address;

  // const passwordConfirm = useInput('');

  // "SingUpVm": {
  //     "type": "object",
  //     "description": "註冊帳號",
  //     "properties": {
  //       "Account": {
  //         "type": "string",
  //         "description": "帳號名稱"
  //       },
  //       "Password": {
  //         "type": "string",
  //         "description": "密碼"
  //       },
  //       "Name": {
  //         "title": "真實姓名",
  //         "type": "string",
  //         "description": "真實姓名",
  //         "maxLength": 50
  //       },
  //       "MobilePhone": {
  //         "title": "手機號碼",
  //         "type": "string",
  //         "description": "手機號碼",
  //         "maxLength": 50
  //       },
  //       "Address": {
  //         "title": "配送地址",
  //         "type": "string",
  //         "description": "配送地址",
  //         "maxLength": 50
  //       }
  //     }
  //   },

  const submitForm = (event) => {
    event.preventDefault();
    console.log('email', email.value);
    console.log('password', password.value);

    // Account: 'string';
    // Address: 'string';
    // MobilePhone: 'string';
    // Name: 'string';
    // Password: 'string';
    const data = {
      Account: email.value,
      Password: password.value,
      Name: userName.value,
      MobilePhone: phoneNumber.value,
      Address: address.value,
    };

    console.log(data);
    apiHelper.userSignUp(data).then((res) => {
      console.log(res);
    });
    /* end of userSignUp() */
  };

  return (
    <>
      <p className="text-center text-lg font-bold">註冊帳號</p>

      <hr />

      <form
        action=""
        onSubmit={submitForm}
        className="flex flex-col items-center"
      >
        <label htmlFor="email" className="my-1 block w-full">
          Email
          <input
            placeholder="EMAIL"
            value={email.value}
            type="email"
            name="email"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={email.onChange}
          />
        </label>

        <label htmlFor="password" className="my-1 block w-full">
          Password
          <input
            placeholder="PASSWORD"
            value={password.value}
            type="password"
            name="password"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={password.onChange}
          />
        </label>

        {/* <label htmlFor="passwordConfirm" className="my-1 block w-full">
          Password Confirm
          <input
            placeholder="CONFIRM"
            value={passwordConfirm.value}
            type="password"
            name="passwordConfirm"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={passwordConfirm.onChange}
          />
        </label> */}

        <label htmlFor="userName" className="my-1 block w-full">
          Name
          <input
            placeholder="userName"
            value={userName.value}
            type="text"
            name="Name"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={userName.onChange}
          />
        </label>

        <label htmlFor="phoneNumber" className="my-1 block w-full">
          MobilePhone
          <input
            placeholder="phoneNumber"
            value={phoneNumber.value}
            type="text"
            name="MobilePhone"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={phoneNumber.onChange}
          />
        </label>

        <label htmlFor="Address" className="my-1 block w-full">
          Address
          <input
            placeholder="Address"
            value={address.value}
            type="text"
            name="Address"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={address.onChange}
          />
        </label>

        <button
          className="m-2 block rounded bg-[#333] px-16 py-2 text-center text-white"
          type="submit"
        >
          註冊帳號
        </button>

        <input
          value="登入"
          type="button"
          name=""
          id=""
          className="my-2 cursor-pointer hover:scale-100"
          onClick={() => {
            console.log('login');
            navigate('/login');
          }}
        />
      </form>
    </>
  );
}

export default DevSignup;
