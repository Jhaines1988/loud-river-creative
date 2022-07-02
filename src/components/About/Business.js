import React from 'react';
import * as styles from './Business.module.css';
import VisitSiteButton from '../Button/VisitSiteButton';
const Business = ({ BusinessIcon, title, text, buttonUrl }) => {
  return (
    <div className={styles.businessContainer}>
      {BusinessIcon}
      <h2 className={styles.businessTitle}>{title}</h2>
      <p className={styles.aboutBusinessText}>{text}</p>
      <VisitSiteButton buttonURL={buttonUrl} />
    </div>
  );
};

export default Business;
