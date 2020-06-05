import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>
          Education
        </span>
      </h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>
            The start of my coding career
          </h3>
          <p className="info">
            Lighthouse Labs Web Development
            <span>
              &bull;
            </span>
            <em className="date">
              June 2019
            </em>
          </p>
          <p>
            A 10 week bootcamp where I learned popular languages and frameworks like JavaScript & Ruby on Rails, and how to think like a programmer by building software from the ground up. To prepare for the bootcamp, I completed a 70 hour preparation module, and when the bootcamp started I spent 70-80 hours a week during the 10 week period learning to code. The bootcamp was a great environment for learning, providing us with mentorship, data-driven curriculum, and a progressively challenging workload.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>
            Becoming a specialist in health diagnosis and treatment
          </h3>
          <p className="info">
            M.Sc. Degree in Physical Therapy
            <span>
              &bull;
            </span>
            <em className="date">
              2014
            </em>
          </p>
          <p className="info">
            B.Sc. Degree in Kinesiology
            <span>
              &bull;
            </span>
            <em className="date">
              2011
            </em>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
