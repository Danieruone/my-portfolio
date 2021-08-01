import React from "react";
import { FaGithub } from "react-icons/fa";
//styles
import {
  CardContainer,
  CardImage,
  CardText,
  Button,
  ButtonContainer,
} from "./styles";

export const CardProject = ({ image, name, description, url, code_url }) => {
  return (
    <CardContainer>
      <CardImage>
        <img src={image} alt="Imagen del proyecto" />
      </CardImage>
      <CardText>
        <h1>{name}</h1>
        <p>{description}</p>
        <ButtonContainer>
          <a href={url} target="_blank" rel="noreferrer">
            <Button>Ir al proyecto</Button>
          </a>
          <a href={code_url} target="_blank" rel="noreferrer">
            <Button>
              <FaGithub /> Código
            </Button>
          </a>
        </ButtonContainer>
      </CardText>
    </CardContainer>
  );
};
