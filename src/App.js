import React from 'react';

import NavBar from './NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Sell from './pages/Sell';
import Consignment from './pages/Consignment';
import CustomPieces from './pages/CustomPieces';
import Repairs from './pages/Repairs';
import ContactUs from './pages/ContactUs'

import styles from './App.module.css';

export default function App() {
  return (
    <body>
      <NavBar />
        <section 
          id="main" 
          className={styles.mainSlide}
        >
          <Home />
        </section>
        <section 
          id="about-us" 
          className={styles.aboutBackImg}
        >
          <AboutUs />
        </section>
        <section 
          id="sell"
        >
          <Sell />
        </section>
        <section 
          id="consignment"
        >
          <Consignment />
        </section>
        <section 
          id="custom-pieces"
        >
          <CustomPieces />
        </section>
        <section 
          id="repairs"
        >
          <Repairs />
        </section>
        <section 
          id="contact-us"
        >
          <ContactUs />
        </section>
  </body>
  );
}