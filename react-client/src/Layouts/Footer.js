import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Copyright all rights reserved &copy; Vishnunadh</p>
      <p>
        Contact Me @{" "}
        <a
          href="mailto:vishnunadh222@gmail.com"
          className={styles.footer__link}
        >
          vishnunadh222@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
