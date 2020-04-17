import React, {useEffect} from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => {
  return (
  <div className="row banner" >
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Lucas Cheng.</h1>
      <h3>
        I'm a Toronto based <span>full-stack software developer </span> 
        passionate about creating applications that make life easier for everyday people.
        <a className="smoothscroll" href="#portfolio">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#portfolio">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
)};

export default Banner;
