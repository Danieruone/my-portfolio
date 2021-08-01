import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #edf2f7;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 20px;
  & h1 {
    text-align: center;
    font-weight: 400;
  }
  @media (max-width: 600px) {
    margin-bottom: 0px;
    & h1 {
      text-align: center;
      font-size: 25px;
      font-weight: 400;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  & li {
    list-style: none;
    padding: 10px;
    text-decoration: none;
  }
  & li a {
    text-decoration: none;
    color: black;
    padding: 10px;
    &:hover {
      border-radius: 50px;
      background-color: #d6d9db;
    }
  }
`;

export const Li = styled(LinkRouter)`
  &.active {
    border-radius: 50px;
    background-color: #d6d9db;
  }
`;
