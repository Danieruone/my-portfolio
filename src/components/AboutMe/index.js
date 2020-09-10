import React from "react";
import { aboutMe } from "../../content";
import {AboutMeContainer, ImageContainer, PositionText, DescriptionText} from "./styles"

export const AboutMe = () => {
  const { image, position, description1, description2 } = aboutMe;
  return (
    <AboutMeContainer>
      <ImageContainer>
        <img src={image}></img>
      </ImageContainer>
      <PositionText>{position}</PositionText>
      <DescriptionText>{description1}</DescriptionText>
      <DescriptionText>{description2}</DescriptionText>
    </AboutMeContainer>
  );
};
