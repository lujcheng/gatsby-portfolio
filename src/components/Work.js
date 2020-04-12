import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Doing it all at an AI startup</h3>
          <h4>Arima</h4>
          <p> Arima is an AI startup using Machine Learning to combine data from different sources into a single source of truth to provide Insights into Market Research. Arima provides a dashboard equipped with data visualization tools that allow users to depict trends, changes, and densities in the data. APIs are available for those that require a more integrated solution. </p>

          <h4 className="info">
            Lead Software Engineer
            <span>&bull;</span>
            <em className="date">December 2019 - Present</em>
          </h4>

          <p>
            Responsibilities:
            <br/>
            <strong style={{fontWeight: "700"}}>Platform and Technical Design</strong> - Led the selection of project hosting platform and technology stack according to project needs
            <br/>
            <strong style={{fontWeight: "700"}}>Growth Roadmap and Innovation </strong>- Led the development of our digital products while considering goals, strategy, UX, security, and budgets
            <strong style={{fontWeight: "700"}}>Dev Ops & MVP </strong> - Deployed, provisioned and maintained Web Applications and API's on Google Cloud Platform with App Engine and Docker. Applied concepts of Agile web development and planned "sprints" to satisfy deadlines for individual Project requirements, while keeping a modular design to build towards larger scalable Products
            <br/>
            <strong style={{fontWeight: "700"}}>QA and Product testing</strong> - Responsible for debugging application and deployment issues. Monitored the progress of products. Conducted research into user personas and use cases. Led product design using UI/UX concepts
            <br/>
            <strong style={{fontWeight: "700"}}>Cybersecurity</strong> - Responsible for foreseeing security issues and planning product design around current best practices
          </p>

          <h4 className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">September 2019 - December 2019</em>
          </h4>

          <p>
            Responsibilities:
            <br/>
            <strong style={{fontWeight: "700"}}> Front End Development</strong> - Designed a responsive and interactive Web Application using Modular Smart and Dumb Components with React/Redux for Visualizing 3-4 billion data points
            <br/>
            <strong style={{fontWeight: "700"}}>Back End Development</strong> - Created web servers and API's using Flask (App Factory) framework designed with REST architecture and Caching
            <br/>
            <strong style={{fontWeight: "700"}}>Database Administration</strong> - Designed, optimized, maintained SQL and NoSQL databases for large datasets, and integrated them into web applications and APIs. Improved SQL query execution by decreasing time by a factor of 1000x, for 3-4 billion data points
            <br/>
            <strong style={{fontWeight: "700"}}>OAuth 2.0 </strong> - Implemented User Authorization using Authorization Code Grant Flow to manage login, permissions and track user activity with Okta
          </p>

        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Physiotherapy Career</h3>
          <p className="info">
            Physical Therapist, Clinical Practictioner
            <span>&bull;</span>
            <em className="date">2015- 2020</em>
          </p>

          <p>
            The bulk of my Physiotherapy career is in clinical practice. My clinical setting is in outpatient private practice, which means I am the the primary caregiver and premier diagnostician. People who walk in our doors need to be properly assessed and directed to the healthcare services they will need to get better. 
            <br/>
            I believe the most valuable skill I've attained in this career is how to listen and focus into the most important factors to recovery. The difference can mean weeks to sometimes years in recovery time. I'm proud of the cases I've handle in the latter years of my career.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
