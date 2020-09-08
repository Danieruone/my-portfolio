import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  & li {
    list-style: none;
    padding: 10px;
  }

  & li a {
    text-decoration: none;
    color: black;
    padding: 10px;
    &:hover {
      border-radius: 50px;
      background-color: #edf2f7;
    }
  }
`;
