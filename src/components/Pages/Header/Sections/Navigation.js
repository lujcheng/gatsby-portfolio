import React, { useState, useEffect } from 'react';
import { getPageBreak } from '../utils';

const isCurrent = (anchor, pathname) =>
  pathname.endsWith(anchor) ? 'current' : '';

const Navigation = () => {
  const [state, setState] = useState({
    pathname: '#home',
    background: 'light',
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setState(getPageBreak());
    });
  }, []);
  return (
    <nav id="nav-wrap" className={state.background == 'dark' ? 'navBg' : ''}>
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className={isCurrent('#home', state.pathname)}>
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li className={isCurrent('#portfolio', state.pathname)}>
          <a className="smoothscroll" href="#portfolio">
            Projects
          </a>
        </li>
        <li className={isCurrent('#about', state.pathname)}>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li className={isCurrent('#resume', state.pathname)}>
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
        <li className={isCurrent('#testimonials', state.pathname)}>
          <a className="smoothscroll" href="#testimonials">
            Interests
          </a>
        </li>
        <li className={isCurrent('#footer', state.pathname)}>
          <a className="smoothscroll" href="#footer">
            Footer
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
