
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav>
    <h3>Bookstore CMS</h3>
    <ul className={styles.navLinks}>
      <Link className={styles.navStyle} to="/">
        <li>Books</li>
      </Link>
      <Link className={styles.navStyle} to="/categories">
        <li>Categories</li>
      </Link>
    </ul>
  </nav>
);

export default Navbar;
