import styled from "styled-components";
import { fadeIn } from "../../styles/Animations";

export const Anchor = styled.a`
  ${fadeIn()}
  text-decoration: none;
  width: 700px;
  & h1 {
    color: black;
    display: flex;
    align-items: center;
  }

  & p {
    color: #605a68;
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
    width: 300px;
  }
`;
