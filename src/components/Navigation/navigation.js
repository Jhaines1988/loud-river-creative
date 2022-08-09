import React from 'react';
import * as styles from './navigation.module.css';
import { Link } from 'gatsby';
const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <span className={styles.staticImagePicture}></span>
        <div className={styles.navItemContainer}>
          <li className={styles.navItem}>
            <Link to='/'>Hello</Link>
          </li>
          <li className={styles.navItem}>
            <a href='#about'>About</a>
          </li>
          <li className={styles.navItem}>
            <a href='#work-together'>Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
