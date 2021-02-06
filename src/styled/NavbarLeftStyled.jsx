import styled from "styled-components";
import { NavUl } from "./NavbarStyled";
export const NavLeft = styled.nav`
  height: 20em;
  width: 15em;
  background-color: orange;
  position: absolute;
  top: 6em;
  left: 0;
`;

export const NavLeftUl = styled(NavUl)`
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 2em;
  padding-top: 0.5em;
  li {
    font-size: 1.5em;
    color: #fff;
    margin: 0.8em 0;
    width: 100%;
    cursor: pointer;
  }
`;
