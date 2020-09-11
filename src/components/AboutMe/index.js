import React from "react";
import { aboutMe } from "../../content";
import {
  PresentationContainer,
  ImageContainer,
  PositionText,
  DescriptionContainer,
} from "./styles";

export const AboutMe = () => {
  const { image, position, description1, description2 } = aboutMe;
  return (
    <>
      <PresentationContainer>
        <ImageContainer>
          <img src={image}></img>
        </ImageContainer>
        <PositionText>{position}</PositionText>
      </PresentationContainer>
      <DescriptionContainer>
        <p>{description1}</p>
        <p>{description2}</p>
      </DescriptionContainer>
    </>
  );
};
