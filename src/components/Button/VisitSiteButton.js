import React from 'react';
import * as styles from './VisitSiteButton.module.css';
import ArrowIcon from '../IconComponents/ArrowIcon';

const VisitSiteButton = ({ buttonURL }) => {
  return (
    <>
      <a
        className={styles.visitSite}
        href={buttonURL}
        target='_blank'
        rel='noreferrer'
        role='button'>
        Visit Site
        <ArrowIcon />
      </a>
    </>
  );
};

export default VisitSiteButton;
