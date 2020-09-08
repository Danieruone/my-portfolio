import React from "react";
import { Link } from "react-router-dom";
// styles
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { NavContainer, Ul } from "./styles";

export const NavBar = () => {
  return (
    <NavContainer>
      <Ul>
        <li>
          <Link to="/portafolio">Portafolio</Link>
        </li>
        <li>
          <Link to="/articulos">Artículos</Link>
        </li>
        <li>
          <Link to="/sobremi">Sobre mí</Link>
        </li>
      </Ul>
      <Ul>
        <li>
          <a href="https://github.com/Danieruone" target="_blank">
            {<FaGithub />}
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Danieruone1" target="_blank">
            {<FaTwitter />}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-mendoza-developer/"
            target="_blank"
          >
            {<FaLinkedinIn />}
          </a>
        </li>
      </Ul>
    </NavContainer>
  );
};
