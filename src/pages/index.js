import React, {useState} from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const IndexPage = () => {
  const [bg, setBg] = useState(0);
  const click = (x) => {
    if (bg) {
      window.location.href = '#portfolio'
      setBg(0)
    }
  }
  return (
  <div onClick={click}>
    <Header />
    <Portfolio setBg={setBg} bg={bg}/>
    <About />
    <Resume />
    <Testimonials />
    <Footer />
  </div>
)};

export default IndexPage;
