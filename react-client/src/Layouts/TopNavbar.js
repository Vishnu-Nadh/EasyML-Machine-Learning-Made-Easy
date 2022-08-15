import styles from "./TopNavbar.module.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav className={styles.topnav}>
      <Link to="/">
        <h2 className="logo">EasyML</h2>
      </Link>
      <div className={styles.topnav__items}>
        <NavLink
          // className="btn-secondary"
          className={({ isActive }) =>
            isActive ? `${"active"} ${"btn-secondary"}` : "btn-secondary"
          }
          to="/login"
        >
          Log In
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${"active"} ${"btn-secondary"}` : "btn-secondary"
          }
          to="/register"
        >
          Register
        </NavLink>
        {/* <NavLink className="btn-secondary" to="/">
          Log out
        </NavLink> */}
      </div>
    </nav>
  );
};

export default TopNavbar;
