import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useInput from '../hooks/useInput';
import apiHelper from '../utils/helpers';

function DevMe() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const userName = useInput('');
  const phoneNumber = useInput('');
  const address = useInput('');
  const nickname = useInput('');

  const submitForm = (event) => {
    event.preventDefault();

    const data = {
      Name: userName.value,
      MobilePhone: phoneNumber.value,
      Address: address.value,
      Nickname: nickname.value,
    };
    // {
    //   "Name": "string",
    //   "Nickname": "string",
    //   "MobilePhone": "string",
    //   "Address": "string"
    // }

    // console.log('submitForm-', data);

    apiHelper.userEdit(data).then((res) => {
      // console.log(res);

      if (res?.data?.Status) {
        // console.log('userEdit:::', res?.data);
      }
    });
    /* end of userEdit() */
  };

  useEffect(() => {
    let isFetch = false;

    if (!userData) {
      apiHelper.userGetInfo().then((res) => {
        // console.log(res);

        if (res?.data?.Status) {
          // console.log('userGetInfo:::', res?.data);

          const {
            data: { Userdata: userInfo },
          } = res;
          // console.log('userInfo-', userInfo);

          if (!isFetch) {
            setUserData(userInfo);
            const {
              Name, Nickname, MobilePhone, Address,
            } = userInfo;

            userName.setValue(Name);
            phoneNumber.setValue(MobilePhone);
            address.setValue(Address);
            nickname.setValue(Nickname);
          }
          /* end of IF(!isFetch) */
        }
      });
    }

    return () => {
      isFetch = true;
      /* end of setTimeout() */
    };
  }, [userData]);

  if (!userData) {
    return <h3>LOADING...</h3>;
  }

  return (
    <section className="pe-container mx-auto py-20  px-2 md:min-h-[calc(100vh_-_320px)] md:px-[120px] lg:px-[160px] xl:px-[290px]">
      <h3 className="my-4 text-center text-lg font-bold">編輯會員資料</h3>

      <form
        action=""
        onSubmit={submitForm}
        className="flex flex-col items-center"
      >
        <label htmlFor="userName" className="my-1 block w-full">
          姓名
          <input
            placeholder="姓名"
            value={userName.value}
            type="text"
            name="Name"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={userName.onChange}
          />
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
          {/* <hr /> */}
          {/* {isEdit ? (
            <input
              placeholder="姓名"
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
          )} */}
          <small className="invisible">hint</small>
        </label>

        <label htmlFor="userNickname" className="my-1 block w-full">
          暱稱
          <input
            placeholder="暱稱"
            value={nickname.value}
            type="text"
            name="Nickname"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={nickname.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <label htmlFor="phoneNumber" className="my-1 block w-full">
          手機號碼
          <input
            placeholder="手機號碼"
            value={phoneNumber.value}
            type="text"
            name="MobilePhone"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={phoneNumber.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <label htmlFor="Address" className="my-1 block w-full">
          地址
          <input
            placeholder="地址"
            value={address.value}
            type="text"
            name="Address"
            id=""
            className="my-1 w-full rounded bg-yellow-50 p-1"
            onChange={address.onChange}
          />
          <small className="invisible">hint</small>
        </label>

        <button
          type="button"
          className="block self-end text-[#6C757D] transition delay-150 duration-500 ease-in-out hover:scale-105 hover:text-black"
          onClick={() => {
            // console.log('CLICK');
            navigate('/me/new-password');
          }}
        >
          重設密碼？
        </button>

        <button
          className="hover:scale-103 col-span-1 mb-6 block rounded
          bg-[#343A40] py-2.5 px-6 text-center font-normal text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#DB8C8C] focus:outline-none active:bg-[#DB8C8C]/80"
          type="submit"
        >
          送出
        </button>

        <button
          type="button"
          className="hidden"
          onClick={() => {
            apiHelper.userGetInfo().then((res) => {
              // console.log(res);
              const {
                data: { userdata: userInfo },
              } = res;

              // console.log('userInfo-', userInfo);
              setUserData(userInfo);
            });
          }}
        >
          GET
        </button>
      </form>
    </section>
  );
}

export default DevMe;
