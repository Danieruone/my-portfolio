import React from "react";
// styles
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { NavContainer, Ul, Li } from "./styles";

export const NavBar = () => {
  return (
    <NavContainer>
      <h1>Daniel Mendoza Developer</h1>
      <Ul>
        <li>
          <Li to="/portfolio">Portafolio</Li>
        </li>
        <li>
          <Li to="/articles">Artículos</Li>
        </li>
        <li>
          <Li to="/about-me">Sobre mí</Li>
        </li>
      </Ul>
      <Ul>
        <li>
          <a
            href="https://github.com/Danieruone"
            target="_blank"
            rel="noreferrer"
          >
            {<FaGithub />}
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Darudev"
            target="_blank"
            rel="noreferrer"
          >
            {<FaTwitter />}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-mendoza-developer/"
            target="_blank"
            rel="noreferrer"
          >
            {<FaLinkedinIn />}
          </a>
        </li>
      </Ul>
    </NavContainer>
  );
};
