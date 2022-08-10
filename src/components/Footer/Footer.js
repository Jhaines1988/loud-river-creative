import React from 'react';
import * as styles from './Footer.module.css';
const Footer = (props) => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <p> Copyright &copy; 2022 Loud River Creative, LLC</p>
        <div>
          {' '}
          <a
            className={styles.footerLink}
            target='_blank'
            rel='noreferrer'
            href='https://carolynhaines.design'>
            carolynhaines.design
          </a>
          {''} | {''}
          <a
            className={styles.footerLink}
            target='_blank'
            rel='noreferrer'
            href='https://joehaines.codes'>
            joehaines.codes
          </a>
          {''} | {''}
          <a
            className={styles.footerLink}
            target='_blank'
            rel='noreferrer'
            href='https://joehaines.codes'>
            joe & the loud river
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
