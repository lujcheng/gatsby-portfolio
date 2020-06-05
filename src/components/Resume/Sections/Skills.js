import React from 'react';

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        Below are indicators of my level of comfortable and relative experience
        in each skill. For a more detailed list of skills, please refer to my
        resume.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand versioncontrol" />
            <em>Version Control, Git, Github</em>
          </li>
          <li>
            <span className="bar-expand htmlcss" />
            <em>HTML5/CSS</em>
          </li>
          <li>
            <span className="bar-expand javascript" />
            <em>Javascript</em>
          </li>

          <li>
            <span className="bar-expand react" />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand node" />
            <em>NodeJS & Frameworks</em>
          </li>
          <li>
            <span className="bar-expand python" />
            <em>Python & Frameworks</em>
          </li>
          <li>
            <span className="bar-expand ruby" />
            <em>Ruby & Frameworks</em>
          </li>
          <li>
            <span className="bar-expand apirest" />
            <em>HTTP, APIs, REST</em>
          </li>
          <li>
            <span className="bar-expand database" />
            <em>Database, SQL, NoSQL</em>
          </li>
          <li>
            <span className="bar-expand devops" />
            <em>DevOps, Web Architecture</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
