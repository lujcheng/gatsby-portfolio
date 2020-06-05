import React, { useState } from 'react';

import '../assets/css/main.css';

import { Header } from '../components/Header';
import { About } from '../components/About';
import { Resume } from '../components/Resume';
import { Portfolio } from '../components/Portfolio';
import { Interests } from '../components/Interests';
import { Footer } from '../components/Footer';

const IndexPage = () => {
  const [bg, setBg] = useState(0);
  const click = () => {
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
