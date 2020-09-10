import React from "react";
//styles
import { CardContainer, CardImage, CardText, Button } from "./styles";
import defaultImage from "../../images/default.jpg";

export const CardProject = ({ image, name, description, url }) => {
  return (
    <CardContainer>
      <CardImage>
        <img src={image}></img>
      </CardImage>
      <CardText>
        <h1>{name}</h1>
        <p>{description}</p>
        <a href={url} target="_blank">
          <Button>Ir al proyecto</Button>
        </a>
      </CardText>
    </CardContainer>
  );
};
