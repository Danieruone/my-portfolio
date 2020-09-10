import styled from "styled-components";
import { fadeIn } from "../../styles/Animations";

export const PresentationContainer = styled.div`
  ${fadeIn()}
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const PositionText = styled.p`
  width: 30%;
  text-align: center;
  color: gray;
  margin: 0;
  background-color: #edf2f7;
  margin-top: 0;
  margin-left: 20px;
  @media (max-width: 600px) {
    width: 80%;
    margin-top: 20px;
    margin-left: 0;
  }
`;

export const DescriptionContainer = styled.div`
  ${fadeIn()}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  @media (max-width: 600px) {
    padding-top: 5%;
  }
`;

export const DescriptionText = styled.p`
  margin-top: 0;
  width: 60%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;
