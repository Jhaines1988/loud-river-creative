import React from 'react';
import * as styles from './Home.module.css';
import MainButton from '../Button/Main-button';

const Home = (props) => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.header}>
        Welcome to our collection of
        <em className={styles.emphasizedFont}>creative</em> adventures.
      </h1>

      <p className={styles.text}>
        Hey, hi, hello! We're Joe & Carolyn Haines, and we make lots of things,
        and we're bringing our creative specialties together to live under one
        roof: Loud River Creative. While we work on that behind the scenes, we
        invite you to check out our existing explorations into design,
        programming and music.
      </p>
      <MainButton buttonText='Work With Us' />
    </div>
  );
};

export default Home;
