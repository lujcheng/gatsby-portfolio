import React from 'react';
import { getPageBreak } from '../utils';

const isCurrent = (anchor, pathname) =>
  pathname.endsWith(anchor) ? 'current' : '';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: '#home',
      background: 'light',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState(getPageBreak());
    });
  }

  render() {
    const { pathname } = this.state;
    return (
      <nav
        id="nav-wrap"
        className={this.state.background == 'dark' ? 'navBg' : ''}
      >
        <a className="mobile-btn" href="#nav-wrap" />
        <ul id="nav" className="nav">
          <li className={isCurrent('#home', pathname)}>
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li className={isCurrent('#portfolio', pathname)}>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          <li className={isCurrent('#about', pathname)}>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li className={isCurrent('#resume', pathname)}>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li className={isCurrent('#testimonials', pathname)}>
            <a className="smoothscroll" href="#testimonials">
              Interests
            </a>
          </li>
          <li className={isCurrent('#footer', pathname)}>
            <a className="smoothscroll" href="#footer">
              Footer
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
