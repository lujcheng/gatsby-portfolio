import React, { useState } from 'react';

import '../assets/css/main.css';

import { Header } from '../components/Pages/Header';
import { About } from '../components/Pages/About';
import { Resume } from '../components/Pages/Resume';
import { Portfolio } from '../components/Pages/Portfolio';
import { Interests } from '../components/Pages/Interests';
import { Footer } from '../components/Pages/Footer';

const IndexPage = () => {
  const [bg, setBg] = useState(0);
  const click = x => {
    if (bg) {
      window.location.href = '#portfolio';
      setBg(0);
    }
  };
  return (
    <div onClick={click}>
      <Header />
      <Portfolio setBg={setBg} bg={bg} />
      <About />
      <Resume />
      <Interests />
      <Footer />
    </div>
  );
};

export default IndexPage;
