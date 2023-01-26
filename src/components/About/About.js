import React from "react";
import CodeIcon from "../IconComponents/CodeIcon";
import DesignIcon from "../IconComponents/DesignIcon";
import * as styles from "./About.module.css";
import Business from "./Business";
const AboutInfo = (props) => {
  const carolynhainesDesignText = `Design website and portfolio`;

  const jhCodesText = `Development Blog and website`;

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
      {/* <Business
        BusinessIcon={<MusicIcon />}
        title={`Joe & The Loud River`}
        text={joeAndTheLoudRiverText}
        buttonUrl='https://joeandtheloudriver.bandcamp.com/'
      /> */}
    </div>
  );
};

export default AboutInfo;
