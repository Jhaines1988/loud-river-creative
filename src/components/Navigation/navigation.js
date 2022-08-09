import React from 'react';
import * as styles from './navigation.module.css';
import { Link } from 'gatsby';
const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <span className={styles.staticImagePicture}></span>
        {/* <StaticImage
          // src='../../images/LRC Logo Mark.png'
          src='../../images/LRC Logo.png'
          alt='placeholder icon'
          // width={64}
          layout='constrained'
          placeholder='blurred'
          imgClassName={styles.staticImagePicture}
          className={styles.staticImage}
        /> */}
        <div className={styles.navItemContainer}>
          <li className={styles.navItem}>
            <Link to='/'>Hello</Link>
          </li>
          <li className={styles.navItem}>
            <Link to='#about'>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link to='#work-together'>Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
