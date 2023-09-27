import React, { useEffect } from 'react';
// import React from 'react';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';

import apiHelper from '../utils/helpers';

function DevSetting() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const Guid = params.get('guid')?.toString();
  // const isAuth = params.get('auth-mail')?.toString();
  const isAuthPath = useMatch('auth-mail');

  // const Guid = params.get('guid')?.toString();

  // const data = {
  //   Guid,
  // };
  // const data = Guid;

  useEffect(() => {
    // console.log('isAuth:', isAuthPath);

    if (isAuthPath) {
      apiHelper.userAuthMail(Guid).then((res) => {
        // console.log(res);
        navigate('/login');
      });
    }
  }, [location.key]);

  return (
    <section className="pe-container mx-auto min-h-screen py-40 px-2 md:px-[120px] lg:px-[160px] xl:px-[290px]">
      <h2 className="mb-6 text-center text-lg font-bold">SETTING</h2>

      <input
        type="button"
        value="CHECK"
        className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
        onClick={() => {
          // console.log('CHECK');

          apiHelper.userCheck().then((res) => {
            // console.log(res);
          });
        }}
      />

      <input
        type="button"
        value="NEW"
        className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
        onClick={() => {
          // console.log('NEW');

          const data = {
            Password: 'Bb000000',
            CheckPassword: 'Bb000000',
          };

          apiHelper.userNewPassword(data).then((res) => {
            // console.log(res);
          });
        }}
      />

      <input
        type="button"
        value="RESET"
        className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
        onClick={() => {
          // console.log('RESET');

          const data = {
            Password: 'Bb000000',
            CheckPassword: 'Bb000000',
            Guid,
          };

          apiHelper.userResetPassword(data).then((res) => {
            // console.log(res);
          });
        }}
      />

      <input
        type="button"
        value="FORGET"
        className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
        onClick={() => {
          // console.log('FORGET');

          const data = {
            Account: '',
          };

          apiHelper.userForgetPassword(data).then((res) => {
            // console.log(res);
          });
        }}
      />

      <input
        type="button"
        value="AUTH"
        className="m-2 rounded bg-[#FA3] py-2 px-3 text-center text-xs font-bold text-white transition-all hover:bg-gray-200"
        onClick={() => {
          // console.log('AUTH');

          apiHelper.userAuthMail(Guid).then((res) => {
            // console.log(res);
          });
        }}
      />

      <div className="mx-auto my-10 text-center">
        {/* http://localhost:3000/project-peteats-2022/#/auth-mail
      ?guid=
      fcca70b8-32bd-4a83-a97e-f13f2c9b6b0c */}
        <p>
          get-auth-mail?：
          {params.get('auth-mail')}
        </p>

        <p>
          get-guid：
          {Guid}
        </p>

        <p>
          get-guid：
          {params.get('guid')}
        </p>

        <p>
          toString：
          {params.toString()}
        </p>
        <hr />
      </div>
    </section>
  );
}

export default DevSetting;
