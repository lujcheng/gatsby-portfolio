import React from 'react';

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
          <h3>Doing it all at an A.I. startup</h3>
          <h4>Arima</h4>
          <p>
            {' '}
            Arima uses{' '}
            <strong style={{ fontWeight: '700' }}>Machine Learning</strong> to
            combine data from different sources into a single source of truth to
            provide insights into{' '}
            <strong style={{ fontWeight: '700' }}>Consumer Data</strong>. Arima
            provides a dashboard equipped with{' '}
            <strong style={{ fontWeight: '700' }}>data visualization</strong>{' '}
            tools that allow users to depict trends, changes, and densities in
            the data. APIs are available for those that require a more
            integrated solution.{' '}
          </p>

          <h4 className="info">
            Lead Software Engineer
            <span>&bull;</span>
            <em className="date">December 2019 - Present</em>
          </h4>

          <p>
            In this role, I led the design and production of our data
            visualization dashboard and data as an API products.
          </p>

          <h4 className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">September 2019 - December 2019</em>
          </h4>

          <p>
            In this role, I was responsible for front-end, back-end, DevOps,
            user management and database administration. Our Tech Stack: React,
            Flask, Google Cloud Platform, Okta(OAuth 2.0), SQL, Firebase
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
            The bulk of my Physiotherapy career is in clinical practice. My
            clinical setting is in outpatient private practice, which means I am
            the the primary caregiver and premier diagnostician. People who walk
            in our doors need to be properly assessed and directed to the
            healthcare services they will need to get better.
            <br />I believe the most valuable skill I've attained in this career
            is how to listen and focus into the most important factors to
            recovery. The difference can mean weeks to sometimes years in
            recovery time. I'm proud of the cases I've handle in the latter
            years of my career.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
