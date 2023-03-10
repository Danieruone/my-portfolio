import styled from 'styled-components';
import { fadeIn } from '../../styles/Animations';

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
  margin-top: 20px;
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
    flex-direction: column;
    & img {
      width: 200px;
      margin-right: 0px;
    }
  }
`;

export const DescriptionContainer = styled.div`
  ${fadeIn()}
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    margin: 10px;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    color: #323ebe;
    margin: 0 0 30px 0;
    font-weight: 400;
  }
  & div {
    display: flex;
    justify-content: space-around;
    width: 20%;
  }
  & div img {
    width: 50px;
  }
  & div div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & div div span {
    color: gray;
    font-size: 12px;
    margin-top: 5px;
  }
  @media (max-width: 600px) {
    & div {
      width: 90%;
      margin-bottom: 20px;
    }
    & h1 {
      margin: 20px 0 30px 0;
    }
  }
`;
