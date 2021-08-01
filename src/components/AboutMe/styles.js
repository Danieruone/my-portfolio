import styled from "styled-components";
import { fadeIn } from "../../styles/Animations";

export const PresentationContainer = styled.div`
  ${fadeIn()}
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border: solid 2px;
  border-color: #323ebe;
  border-radius: 50%;
  padding: 5px;
  transition: all 0.1s ease;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  &:hover {
    cursor: pointer;
    padding: 10px;
  }
`;

export const PositionText = styled.p`
  width: auto;
  text-align: center;
  color: gray;
  margin: 0;
  padding: 10px;
  border-radius: 30px;
  background-color: #edf2f7;
  margin-top: 0;
  margin-left: 20px;
  @media (max-width: 600px) {
    width: 80%;
    margin-top: 20px;
    margin-left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: auto;
  & img {
    width: 300px;
    margin-right: 30px;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const DescriptionContainer = styled.div`
  ${fadeIn()}
  display: flex;
  flex-direction: column;
  align-items: center;
`;
