import styled from "styled-components";
import { fadeIn } from "../../styles/Animations";

export const AboutMeContainer = styled.div`
  ${fadeIn()}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
`;

export const ImageContainer = styled.div`
  & img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;

export const PositionText = styled.p`
  width: 300px;
  text-align: center;
  color: gray;
  margin: 0;
`;

export const DescriptionText = styled.p`
  width: 700px;
  @media (max-width: 600px) {
    width: 300px;
    text-align: justify;
  }
`;
