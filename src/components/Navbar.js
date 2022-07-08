import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
};

export default Navbar;
