import React from "react";
import { aboutMe } from "../../content";
import {
  PresentationContainer,
  ImageContainer,
  PositionText,
  DescriptionContainer,
  Container,
} from "./styles";
import gif from "../../images/developmentgif.gif";

export const AboutMe = () => {
  const { image, position, description1, description2 } = aboutMe;
  return (
    <>
      <PresentationContainer>
        <ImageContainer>
          <img src={image} alt="Imágen de perfil"></img>
        </ImageContainer>
        <PositionText>{position}</PositionText>
      </PresentationContainer>
      <Container>
        <img src={gif} />
        <DescriptionContainer>
          <p>{description1}</p>
          <p>{description2}</p>
        </DescriptionContainer>
      </Container>
    </>
  );
};
