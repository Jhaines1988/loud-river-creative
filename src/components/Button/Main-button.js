import React from 'react';
import * as styles from './Main-button.module.css';
import { navigate } from 'gatsby';
const MainButton = (props) => {
  return (
    <>
      <button
        onClick={() => {
          navigate('#contact-form');
        }}
        className={styles.mainButton}>
        {props.buttonText}
      </button>
    </>
  );
};

export default MainButton;
