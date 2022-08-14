import styles from "./Home.module.scss";
import { Fragment } from "react";
import Footer from "../Components/Footer";
import TopNavbar from "../Components/TopNavbar";

import React from "react";

const Home = () => {
  return (
    <Fragment>
      <TopNavbar />
      <div>Home</div>
      <Footer />
    </Fragment>
  );
};

export default Home;
