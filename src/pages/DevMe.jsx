import React, { useEffect, useState } from 'react';

import useInput from '../hooks/useInput';
import apiHelper from '../utils/helpers';

function DevMe() {
  const [userData, setUserData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const userName = useInput('');
  const phoneNumber = useInput('');
  const address = useInput('');

  const submitForm = (event) => {
    event.preventDefault();

    const data = {
      Name: userName.value,
      MobilePhone: phoneNumber.value,
      Address: address.value,
    };

    console.log('submitForm-', data);

    apiHelper.userEdit(data).then((res) => {
      console.log(res);
    });
    /* end of userEdit() */
  };

  useEffect(() => {
    apiHelper.userGetInfo().then((res) => {
      console.log(res);
      const {
        data: { userdata: userInfo },
      } = res;

      console.log('userInfo-', userInfo);
      setUserData(userInfo);

      const { Name, MobilePhone, Address } = userInfo;
      userName.setValue(Name);
      phoneNumber.setValue(MobilePhone);
      address.setValue(Address);
    });
  }, []);

  return (
    <>
      <p className="text-center text-lg font-bold">編輯會員資料</p>

      <hr />

      <form
        action=""
        onSubmit={submitForm}
        className="flex flex-col items-center"
      >
        <label htmlFor="userName" className="my-1 block w-full">
          Name
          {/* <div role="article">
            <div
              role="presentation"
              // onKeyPress={onKeyPressHandler}
              onClick={() => {
                setIsEdit(true);
              }}
            >
              {userData?.Name}
            </div>
          </div> */}
          <hr />
          {isEdit ? (
            <input
              placeholder="userName"
              value={userName.value}
              type="text"
              name="Name"
              id=""
              className="my-1 w-full rounded bg-yellow-50 p-1"
              onChange={userName.onChange}
            />
          ) : (
            <input
              data-buttontype="EDIT"
              value={userData?.Name}
              type="button"
              className="text-black"
              onClick={() => {
                setIsEdit(true);
              }}
            />
          )}
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
          送出
        </button>

        <button
          type="button"
          onClick={() => {
            apiHelper.userGetInfo().then((res) => {
              console.log(res);
              const {
                data: { userdata: userInfo },
              } = res;

              console.log('userInfo-', userInfo);
              setUserData(userInfo);
            });
          }}
        >
          GET
        </button>
      </form>
    </>
  );
}

export default DevMe;
