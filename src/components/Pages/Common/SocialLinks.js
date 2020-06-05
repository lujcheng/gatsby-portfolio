import React from "react";
import {
  FaLinkedinSquare,
  FaGithub
} from "react-icons/lib/fa";
import { MdMail } from "react-icons/lib/md"

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/luccheng/">
        <FaLinkedinSquare />
      </a>
    </li>
    <li>
      <a href="mailto:lucas.cheng12@gmail.com">
        <MdMail />
      </a>
    </li>
    <li>
      <a href="https://github.com/Renkinjutsu">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
