import React from "react";

const isCurrent = (anchor, pathname, background) => {
  if (background == 'dark') {
    return (
      pathname.endsWith(anchor)
      ? 'current'
      : 'dark'
    )  
  } else {
    return (
      pathname.endsWith(anchor)
      ? 'current'
      : ''
    )
  }
  }
class Navigation extends React.Component {
  state = {
    pathname: '#home',
    background: 'light'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({pathname: window.location.href});
    })
    window.addEventListener('scroll', () => {
      let homeAnchor = document.getElementById("home").getBoundingClientRect().y
      let aboutAnchor = document.getElementById("about").getBoundingClientRect().y
      let resumeAnchor = document.getElementById("resume").getBoundingClientRect().y
      let portfolioAnchor = document.getElementById("portfolio").getBoundingClientRect().y
      if (homeAnchor <= 0 && aboutAnchor > 0) {
        this.setState({pathname: "#home", background: 'light'})
      } else if (aboutAnchor <= 0 && resumeAnchor > 0) {
        this.setState({pathname: "#about", background: 'light'})
      } else if (resumeAnchor <= 0 && portfolioAnchor > 0) {
        this.setState({pathname: "#resume", background: 'dark'})
      } else if (portfolioAnchor <= 0) {
        this.setState({pathname: "#portfolio", background: 'dark'})
      }
    })
  }
  render() {
    const { pathname = '' } = this.state
    return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className={isCurrent('#home', pathname, this.state.background)}>
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li className={isCurrent('#about', pathname, this.state.background)}>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li className={isCurrent('#resume', pathname, this.state.background)}>
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
        <li className={isCurrent('#portfolio', pathname, this.state.background)}>
          <a className="smoothscroll" href="#portfolio">
            Projects
          </a>
        </li>
        <li className={isCurrent('#testimonials', pathname, this.state.background)}>
          <a className="smoothscroll" href="#testimonials">
            Interests
          </a>
        </li>
        <li className={isCurrent('#footer', pathname, this.state.background)}>
          <a className="smoothscroll" href="#footer">
            Footer
          </a>
        </li>
      </ul>
    </nav>
  )}
};

export default Navigation;
