import React from "react";
import { SocialLinks } from "../Common";
import { FaChevronCircleUp } from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />
        <ul className="copyright">
          <li>
            Thanks for reading!
          </li>
          <li>&copy; Copyright 2018 CeeVee</li>
          <li>
            Original design by{" "}
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
          <li>
            Original work in React ⚛️ by{" "}
            <a href="http://www.amanhimself.me">
              Aman Mittal
            </a>
          </li>
          <li>
            Modified work and design &copy; Copyright 2018 by{" "}
            <a href="">
              Lucas Cheng
            </a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
