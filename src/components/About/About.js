import React from 'react';
import * as styles from './About.module.css';
import Business from './Business';
import DesignIcon from '../IconComponents/DesignIcon';
import CodeIcon from '../IconComponents/CodeIcon';
import MusicIcon from '../IconComponents/MusicIcon';
const AboutInfo = (props) => {
  const carolynhainesDesignText = `Design website and portfolio`;

  const jhCodesText = `Blog and  website featuring writings on front, back and full-stack development and current projects.`;
  const joeAndTheLoudRiverText = `Bandcamp site for Joe & the Loud River. Custom site is under construction, check back soon!`;
  return (
    <div id='about' className={styles.aboutContainer}>
      <Business
        BusinessIcon={<DesignIcon />}
        title='Carolyn Haines.design'
        text={carolynhainesDesignText}
        buttonUrl='https://carolynhaines.design'
      />
      <Business
        BusinessIcon={<CodeIcon />}
        title='Joe Haines.codes'
        text={jhCodesText}
        buttonUrl='https://joehaines.codes'
      />
      <Business
        BusinessIcon={<MusicIcon />}
        title={`Joe & The Loud River`}
        text={joeAndTheLoudRiverText}
        buttonUrl='https://joeandtheloudriver.bandcamp.com/'
      />
    </div>
  );
};

export default AboutInfo;
