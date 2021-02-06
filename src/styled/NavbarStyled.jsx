import styled from "styled-components";
import { displayFlex } from "./GlobalStyled";

export const NavBarS = styled.nav`
  height: 6em;
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3em;
  position: fixed;
  top: 0;
  left: 0;
`;

export const NavUl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  li > img {
    height: 1.7em;
    width: 1.7em;
    object-fit: contain;
    margin: 0 1.5em;
    cursor: pointer;
  }
`;

export const LogoSec = styled(displayFlex)`
  flex: 1;
  justify-content: flex-start;

  h1 {
    font-size: 2.2em;
    font-weight: 500;
    color: #fff;
  }
`;
