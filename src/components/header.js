import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/header.module.css';

const imgg = require('../css/ico.png');

const Header = () => (
  <div className={styles.panel}>
    <span className={styles.cms}>Bookstore CMS</span>
    <span><NavLink to="/" className={styles.books}>BOOKS</NavLink></span>
    <span><NavLink to="/categories" className={styles.categories}>CATEGORIES</NavLink></span>
    <button type="button" className={styles.oval}>
      <img src={imgg} alt="icon" />
    </button>
  </div>
);

export default Header;
