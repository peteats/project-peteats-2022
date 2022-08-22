import React from 'react';

import { useNavigate } from 'react-router-dom';

import useInput from '../hooks/useInput';

function DevLogin() {
  const navigate = useNavigate();

  const email = useInput('');
  const password = useInput('');

  const submitForm = (event) => {
    event.preventDefault();
    console.log('email', email.value);
    console.log('password', password.value);

    const user = {
      Account: email.value,
      Password: password.value,
    };

    console.log(user);

    // apis.usersLogIn({ user }).then((res) => {
    //   console.log(res);

    //   saveToken(res);
    //   navigate('/todos');
    // });
  };

  return (
    <>
      <p className="text-center text-lg font-bold">LOGIN</p>

      <hr />

      <form
        action=""
        onSubmit={submitForm}
        className="flex flex-col items-center"
      >
        <label htmlFor="Account" className="my-1 block w-full">
          Email
          <input
            placeholder="EMAIL"
            value={email.value}
            type="email"
            name="Account"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={email.onChange}
          />
        </label>

        <label htmlFor="Password" className="my-1 block w-full">
          Password
          <input
            placeholder="PASSWORD"
            value={password.value}
            type="password"
            name="Password"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={password.onChange}
          />
        </label>

        <button
          className="m-2 block rounded bg-[#333] px-4 py-1 text-center text-white"
          type="submit"
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
            console.log('signup');
            navigate('/signup');
          }}
        />
      </form>
    </>
  );
}

export default DevLogin;
