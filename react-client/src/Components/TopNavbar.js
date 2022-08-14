import styles from "./TopNavbar.module.scss";

import React from "react";

const TopNavbar = () => {
  return (
    <nav className={styles.topnav}>
      <h2 className="logo">EasyML</h2>
      <div className={styles.topnav__items}>
        <a className={styles.topnav__item} href="#">
          Log In
        </a>
        <a className={styles.topnav__item} href="#">
          Register
        </a>
        <a className={styles.topnav__item} href="#">
          Log out
        </a>
      </div>
    </nav>
  );
};

export default TopNavbar;
