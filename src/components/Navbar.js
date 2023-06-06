import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import navbar from '../styles/Navbar.module.css';

const Navbar = () => {
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/calculator', label: 'Calculator' },
    { path: '/quote', label: 'Quote' },
  ];

  return (
    <>
      <header className={navbar.header}>
        <h1 className={navbar.title}>Math Magicians</h1>
        <nav className={navbar.navbar}>
          <ul className={navbar.ul}>
            {routes.map((route) => (
              <li
                className={navbar.li}
                key={route.label}
              >
                <NavLink to={route.path}>
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
