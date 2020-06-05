import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../../../assets/images/profile-compressor.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>
          About Me
        </h2>
        <p>
          Before my career in programming, I was a clinician. 
          <br/>
          It was an interesting and rewarding career.
          <br/>
          I stumbled onto programming one day.
          <br/>
          The potential, people and stories inspired me, and little by little, I was drawn in. Not long after I started my new career and almost suddenly I'm able to do all these amazing things. Must be Magic.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>
              Contact Details
            </h2>
            <p className="address">
              <span>
                Lucas Cheng
              </span>
              <br />
              <span>
                Toronto, Ontario, Canada
              </span>
              <br />
              <span>
                lucas.cheng12@gmail.com
              </span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://resume.creddle.io/resume/6kv0z12yze3" className="button">
                <FaCloudDownload /> 
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
