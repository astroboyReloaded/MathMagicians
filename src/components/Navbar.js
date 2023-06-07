import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/Navbar.css';

export const routes = [
  { path: '/', label: 'Home' },
  { path: '/calculator', label: 'Calculator' },
  { path: '/quote', label: 'Quote' },
];

const Navbar = () => (
  <>
    <header className="header">
      <h1 className="title">Math Magicians</h1>
      <nav className="navbar">
        <ul className="ul">
          {routes.map((route) => (
            <li
              className="li"
              key={route.label}
            >
              <NavLink
                to={route.path}
              >
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
export default Navbar;
