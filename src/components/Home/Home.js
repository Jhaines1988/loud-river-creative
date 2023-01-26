import React from "react";
import * as styles from "./Home.module.css";
import MainButton from "../Button/Main-button";

const Home = (props) => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.header}>
        Welcome to our collection of
        <em className={styles.emphasizedFont}>creative</em> adventures.
      </h1>

      <p className={styles.text}>
        Loud River Creative is a small development and design shop run by Joe and Carolyn Haines. If
        you're interested in working with us on your next website or application, please get in
        touch!
      </p>
      <MainButton buttonText='Work With Us' />
    </div>
  );
};

export default Home;
