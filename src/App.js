import React from 'react';

import NavBar from './NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Sell from './pages/Sell';
import Consignment from './pages/Consignment';
import CustomPieces from './pages/CustomPieces';
import Repairs from './pages/Repairs';
import Appraisals from './pages/Appraisals';
import ContactUs from './pages/ContactUs';

import styles from './App.module.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutUs />
      <Sell />
      <Consignment />
      <CustomPieces />
      <Repairs />
      <Appraisals />
      <ContactUs />
    </div>
  );
}