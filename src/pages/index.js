import * as React from 'react';
import Home from '../components/Home/Home';
import ImagesContainer from '../components/Project-images/Images-container';
import AboutInfo from '../components/About/About';
import ContactForm from '../components/Contact-Form/contact-form';
import Navigation from '../components/Navigation/navigation';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/layout';

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <ImagesContainer />
      <AboutInfo />
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;
