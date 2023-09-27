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
  const nickname = useInput('');

  const submitForm = (event) => {
    event.preventDefault();
    // console.log('email', email.value);
    // console.log('password', password.value);

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
      Nickname: nickname.value,
    };

    // console.log(data);
    apiHelper.userSignUp(data).then((res) => {
      // console.log(res);
    });
    /* end of userSignUp() */
  };

  return (
    <section className="pe-container mx-auto min-h-screen py-20 px-2 md:px-[120px] lg:px-[160px] xl:px-[290px]">
      <h3 className="my-4 text-center text-lg font-bold">註冊帳號</h3>

      <form
        action=""
        onSubmit={submitForm}
        className="flex flex-col items-center gap-2"
      >
        <label htmlFor="email" className="my-1 block w-full">
          信箱
          <input
            required
            placeholder="信箱"
            value={email.value}
            type="email"
            name="email"
            id=""
            className="my-1 w-full rounded border p-1"
            onChange={email.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <label htmlFor="password" className="my-1 block w-full">
          密碼
          <input
            required
            placeholder="密碼"
            value={password.value}
            type="password"
            name="password"
            id=""
            className="my-1 w-full rounded border p-1"
            onChange={password.onChange}
          />
          <small className="invisible">hint</small>
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
          名字
          <input
            required
            placeholder="名字"
            value={userName.value}
            type="text"
            name="Name"
            id=""
            className="my-1 w-full rounded border p-1"
            onChange={userName.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <label htmlFor="userNickname" className="my-1 block w-full">
          暱稱
          <input
            required
            placeholder="暱稱"
            value={nickname.value}
            type="text"
            name="Nickname"
            id=""
            className="my-1 w-full rounded border p-1"
            onChange={nickname.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <label htmlFor="phoneNumber" className="my-1 block w-full">
          手機號碼
          <input
            required
            placeholder="手機號碼"
            value={phoneNumber.value}
            type="text"
            name="MobilePhone"
            id=""
            className="my-1 w-full rounded border p-1"
            onChange={phoneNumber.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <label htmlFor="Address" className="my-1 block w-full">
          地址
          <input
            placeholder="地址"
            required
            value={address.value}
            type="text"
            name="Address"
            id=""
            className="my-1 w-full rounded border p-1"
            onChange={address.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <button
          className="hover:scale-103 col-span-1 block rounded bg-[#343A40]
          py-2.5 px-6 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80"
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
            // console.log('login');
            navigate('/login');
          }}
        />
      </form>
    </section>
  );
}

export default DevSignup;
