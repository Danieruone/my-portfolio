import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  & li {
    list-style: none;
    padding: 10px;
  }
`;
