import React from 'react';
import * as styles from './About.module.css';
import Business from './Business';
import DesignIcon from '../IconComponents/DesignIcon';
import CodeIcon from '../IconComponents/CodeIcon';
import MusicIcon from '../IconComponents/MusicIcon';
const AboutInfo = (props) => {
  const dummyText =
    'Nunc cubilia arcu eros quam aliquam quam ridiculus hendrerit et nec at nostra adipiscing molestie';
  return (
    <div id='about' className={styles.aboutContainer}>
      <Business
        BusinessIcon={<DesignIcon />}
        title='Carolyn Haines .design'
        text={dummyText}
        buttonUrl='https://carolynhaines.design'
      />
      <Business
        BusinessIcon={<CodeIcon />}
        title='Joe Haines .codes'
        text={dummyText}
        buttonUrl='https://joehaines.codes'
      />
      <Business
        BusinessIcon={<MusicIcon />}
        title={`Joe & The Loud River`}
        text={dummyText}
        buttonUrl='https://joeandtheloudriver.bandcamp.com/'
      />
    </div>
  );
};

export default AboutInfo;
