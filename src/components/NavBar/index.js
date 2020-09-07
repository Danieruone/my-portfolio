import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { NavContainer, Ul } from "./styles";

export const NavBar = () => {
  return (
    <NavContainer>
      <Ul>
        <li>Bienvenido a mi portafolio!</li>
      </Ul>
      <Ul>
        <li>{<FaGithub />}</li>
        <li>{<FaTwitter />}</li>
        <li>{<FaLinkedinIn />}</li>
      </Ul>
    </NavContainer>
  );
};
