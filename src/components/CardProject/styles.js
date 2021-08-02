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
  @media (max-width: 600px) {
    margin: 20px 0 0 0;
  }
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
    color: #323ebe;
    margin: 0;
    font-size: 1.3rem;
    font-weight: 400;
  }
  & p {
    color: #605a68;
    margin: 10px 0 0 0;
  }
`;

export const Topics = styled.div`
  display: flex;
  & span {
    font-size: 12px;
    margin: 10px 10px 10px 0;
    background-color: #edf2f7;
    color: gray;
    padding: 5px;
    border-radius: 5px;
  }
`;

export const ButtonContainer = styled.div`
  & > * {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  background-color: #323ebe;
  border: none;
  border-radius: 50px;
  padding: 10px;
  color: white;
  &:hover {
    background-color: #6770c6;
    color: white;
    cursor: pointer;
  }
`;
