import React from 'react';
import * as styles from './navigation.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <StaticImage
          src='../../images/LRC Logo Mark.png'
          alt='placeholder icon'
          width={48}
          layout='constrained'
          placeholder='blurred'
          className={styles.staticImage}
        />
        <li className={styles.navItem}>
          <Link>Hello</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='#about'>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='#work-together'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
