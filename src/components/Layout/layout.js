import React from 'react';
import * as styles from './layout.module.css';
import Navigation from '../Navigation/navigation';
import Container from './container';
import Footer from '../Footer/Footer';
import '../../typography.css';
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>
        <main className={styles.mainLayout}>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
