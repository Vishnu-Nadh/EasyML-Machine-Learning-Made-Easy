import styles from "./Home.module.scss";
import { Fragment } from "react";
import Footer from "../Layouts/Footer";
import TopNavbar from "../Layouts/TopNavbar";

import React from "react";

const Home = () => {
  return (
    <Fragment>
      {/* <TopNavbar /> */}
      <main className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className="heading-primary">EasyML</h1>
          <p className="primary-text">Machine Learning made easy</p>
        </div>
        <form className={styles.hero__form}>
          <label className={styles.hero__form__label}>
            Upload Your Data (Excel or CSV)
          </label>
          <button type="submit" className="btn-primary">
            Upload
          </button>
          <div className={styles.hero__form__error}>sample error text</div>
        </form>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
