import styled from "styled-components";
import { fadeIn } from "../../styles/Animations";

export const CardContainer = styled.div`
  ${fadeIn()}
  width: 300px;
  border-radius: 1%;
  border: solid 1px;
  border-color: #edf2f7;
  margin: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const CardImage = styled.div`
  & img {
    width: 300px;
    height: 200px;
  }
`;

export const CardText = styled.div`
  padding: 5%;
  & h1 {
    color: black;
    margin: 0;
  }
  & p {
    color: #605a68;
    margin: 20px 0px;
  }
`;

export const Button = styled.button`
  background-color: #edf2f7;
  border: none;
  border-radius: 50px;
  padding: 10px;
  &:hover {
    background-color: #4a5568;
    color: white;
    cursor: pointer;
  }
`;
