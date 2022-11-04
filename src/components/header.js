import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="container">
    <h1>Bookstore CMS</h1>
    <ul>
      <li><span><NavLink to="/">BOOKS</NavLink></span></li>
      <li><span><NavLink to="/categories">CATEGORIES</NavLink></span></li>
    </ul>
  </div>
);

export default Header;
