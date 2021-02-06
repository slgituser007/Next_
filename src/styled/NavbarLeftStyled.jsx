import styled from "styled-components";
import { NavUl } from "./NavbarStyled";
import { displayFlex } from "./GlobalStyled";
export const NavLeft = styled.nav`
  height: 20em;
  width: 15em;
  background-color: #fff;
  position: absolute;
  top: 10.5em;
  left: 0;
  z-index: 2;
`;

export const NavLeftUl = styled(NavUl)`
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 2em;
  padding-top: 0.5em;
`;

export const NavLi = styled.li`
  font-size: 1.5em;
  color: ${(p) => {
    p.Color ? p.Color : "";
  }};
  margin: 0.8em 0;
  width: 100%;
  cursor: pointer;
`;
