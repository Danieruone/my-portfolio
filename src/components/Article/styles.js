import styled from "styled-components";

export const Anchor = styled.a`
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
`;
