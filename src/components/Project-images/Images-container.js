import React from "react";
import * as styles from "./Images-container.module.css";
import { StaticImage } from "gatsby-plugin-image";

const ImagesContainer = () => {
  return (
    <div className={styles.imageContainer}>
      <StaticImage
        className={styles.staticImage}
        alt='Carolyn Haines smiling like a elementary school student on picture day, wearing glasses and a yellow blazer'
        src='../../images/CHDesign.png'
        placeholder='blurred'
        layout='constrained'
      />

      <StaticImage
        className={styles.staticImage}
        alt='A laptop wvith code on it representing Joe Haines Development Site'
        src='../../images/JHCodes.png'
        placeholder='blurred'
        layout='constrained'
      />
      {/*
      <StaticImage
        className={styles.staticImage}
        alt='Joe And The Loud River album cover with a vinyl record emerging from the sleeve'
        src='../../images/JLRiver.png'
        placeholder='blurred'
        layout='constrained'
      /> */}
    </div>
  );
};

export default ImagesContainer;
