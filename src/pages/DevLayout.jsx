import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function DevLayout() {
  return (
    <div className="container mx-auto">
      <nav className="Navbar">
        <ul className="text-blue-700">
          <li>
            <Link to="/layout">DevLayoutHome</Link>
          </li>

          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/signup">SIGN-UP</Link>
          </li>
          <li>
            <Link to="/login">LOG-IN</Link>
          </li>
          <li>
            <Link to="/shops">SHOPS</Link>
          </li>
          <li>
            <Link to="/me">PROFILE</Link>
          </li>

          <li>
            <Link to="/new-password">RESET</Link>
          </li>
          <li>
            <Link to="/auth-mail">MAIL</Link>
          </li>
          <li>
            <Link to="/auth">AUTH</Link>
          </li>
          <li>
            <Link to="/dev">DEV</Link>
          </li>
          <li>
            <Link to="/idontknowwheretogo">404</Link>
          </li>
        </ul>
      </nav>

      <hr className="bg-slate-300 h-2" />

      <div className="Outlet">
        <div className="min-h-screen">
          <section className="px-4 py-8">
            <Outlet />
          </section>
        </div>
      </div>

      <footer
        className="flex min-h-screen flex-col
        flex-wrap items-center justify-center px-3"
      >
        <div className="">
          <h3>
            <img src="" alt="PetEats" />
          </h3>

          <p className="text-md">Copyright</p>

          <nav className="">
            <ul className="text-bg-secondary">
              <li>
                <Link to="/">HOME</Link>
              </li>

              <li>
                <Link to="/">HOME</Link>
              </li>

              <li>
                <Link to="/">HOME</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default DevLayout;
