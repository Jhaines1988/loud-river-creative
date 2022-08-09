import React from 'react';
import * as styles from './layout.module.css';
import Navigation from '../Navigation/navigation';

import Footer from '../Footer/Footer';
import '../../typography.css';
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />

      <main className={styles.mainLayout}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
