import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #323ebe;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: white;
  & h1 {
    text-align: center;
    font-weight: 400;
  }
  @media (max-width: 600px) {
    margin-bottom: 0px;
    & h1 {
      text-align: center;
      font-size: 23px;
      font-weight: 200;
      margin: 30px 0 30px 0;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  transition: all 0.1s ease;
  & li {
    list-style: none;
    padding: 10px;
    text-decoration: none;
  }
  & li a {
    text-decoration: none;
    color: white;
    padding: 10px;
    &:hover {
      color: #323ebe;
      border-radius: 50px;
      background-color: white;
    }
  }
`;

export const Li = styled(LinkRouter)`
  &.active {
    color: #323ebe;
    border-radius: 50px;
    background-color: white;
  }
`;
