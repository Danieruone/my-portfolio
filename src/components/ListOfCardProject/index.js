import React from "react";
import { CardProject } from "../CardProject";
import { ListOfCardProjectContainer } from "./styles";

export const ListOfCardProject = () => {
  return (
    <ListOfCardProjectContainer>
      {[1, 2, 3, 4, 5, 6].map((id) => (
        <CardProject key={id} />
      ))}
    </ListOfCardProjectContainer>
  );
};
