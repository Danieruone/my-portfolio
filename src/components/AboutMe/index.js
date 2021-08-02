import React from "react";
import { aboutMe } from "../../content";
import {
  PresentationContainer,
  ImageContainer,
  PositionText,
  DescriptionContainer,
  Container,
  TechContainer,
} from "./styles";
// images
import gif from "../../images/developmentgif.gif";
import reacticon from "../../images/icons/reacticon.png";
import reduxicon from "../../images/icons/reduxicon.png";
import jesticon from "../../images/icons/jesticon.png";
import styledicon from "../../images/icons/styledicon.png";

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
        <img src={gif} alt="gif" />
        <DescriptionContainer>
          <p>{description1}</p>
          <p>{description2}</p>
        </DescriptionContainer>
      </Container>
      <TechContainer>
        <h1>Tecnologías</h1>
        <div>
          <div>
            <img src={reacticon} alt="React icon" />
            <span>React</span>
          </div>
          <div>
            <img src={reduxicon} alt="Redux icon" />
            <span>Redux</span>
          </div>
          <div>
            <img src={jesticon} alt="Jest icon" />
            <span>Jest</span>
          </div>
          <div>
            <img src={styledicon} alt="Styled icon" />
            <span>Styled</span>
          </div>
        </div>
      </TechContainer>
    </>
  );
};
