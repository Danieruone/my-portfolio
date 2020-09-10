import React from "react";
// styles
import { ListOfCardProjectContainer } from "./styles";
// components
import { CardProject } from "../CardProject";
// content
import { projects } from "../../content";

export const ListOfCardProject = () => {
  return (
    <ListOfCardProjectContainer>
      {projects.map((project, index) => (
        <CardProject key={index} {...project}/>
      ))}
    </ListOfCardProjectContainer>
  );
};
