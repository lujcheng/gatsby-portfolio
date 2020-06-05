import React from "react";

import { Education, Work, Skills } from "./Sections"

const Resume = () => (
  <section id="resume">
    <Work />
    <Skills />
    <Education />
  </section>
);

export default Resume;
