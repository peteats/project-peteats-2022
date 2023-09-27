import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

function Modal({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  // const background = location.state && location.state.background;
  const modalOpen = location.state?.modalOpen;

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    navigate(-1);
    return setIsOpen(!isOpen);
  };

  useEffect(() => {}, [modalOpen]);

  return (
    <>
      {/* <!-- Main modal --> */}
      {console.log('modalOpen::', modalOpen)}

      <section
        id="Modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`h-modal fixed top-0 right-0 left-0 z-50 w-full items-center justify-center
        overflow-y-auto overflow-x-hidden bg-slate-500/50 md:inset-0 md:h-full  ${
          modalOpen ? '' : 'hidden'
        }`}
      >
        <div className="relative h-full w-full max-w-2xl p-4 md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow">
            {/* <!-- Modal header --> */}
            <section className="flex items-start justify-between rounded-t border-b p-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Terms of Service
              </h3>

              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm
              text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                onClick={toggle}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </section>

            {/* <!-- Modal body --> */}
            <section className="space-y-6 p-6">
              <p className="text-base leading-relaxed text-gray-500 ">
                <Outlet />
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
                {children}
              </p>
            </section>

            {/* <!-- Modal footer --> */}
            <section
              className="flex items-center space-x-2 rounded-b border-t
            border-gray-200 p-6"
            >
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm
                font-medium text-white
              hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                I accept
              </button>

              <button
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5
                text-sm font-medium
              text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10
                focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                Decline
              </button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Modal;
