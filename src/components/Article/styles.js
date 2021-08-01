import styled from "styled-components";
import { fadeIn } from "../../styles/Animations";

export const Anchor = styled.a`
  ${fadeIn()}
  text-decoration: none;
  width: 60%;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px #c3acac;
  margin-top: 20px;

  & img {
    margin-right: 30px;
    width: 80px;
  }

  & h1 {
    color: black;
    font-weight: 400;
    line-height: 30px;
    font-size: 1.3rem;
    margin: 0;
    color: #323ebe;
  }

  & p {
    color: #605a68;
    margin: 0;
  }

  & div {
    color: black;
  }

  & hr {
    background-color: red;
    border: 0;
    height: 1px;
  }

  @media (max-width: 600px) {
    width: 90%;
    & img {
      margin-right: 10px;
      width: 80px;
    }
    & h1 {
      font-size: 1rem;
      line-height: 20px;
    }
  }
`;
