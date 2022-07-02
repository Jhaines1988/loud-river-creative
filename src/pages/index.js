import * as React from 'react';
import Home from '../components/Home/Home';
import ImagesContainer from '../components/Project-images/Images-container';
import AboutInfo from '../components/About/About';
import ContactForm from '../components/Contact-Form/contact-form';

const IndexPage = () => {
  return (
    <>
      <Home />
      <ImagesContainer />
      <AboutInfo />
      <ContactForm />
    </>
  );
};

export default IndexPage;
