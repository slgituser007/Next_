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
  .active {
    background-color: gold;
  }
`;

export const NavLiSec = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const ActiveNavLi = styled.div`
  height: 50%;
  width: 0.3em;
  border-radius: 50px;
  transition: 5s;
`;
export const NavLi = styled.li`
  font-size: 1.5em;
  color: ${(props) => props.Color || "red"};
  margin: 0.8em 0;
  width: 100%;
  cursor: pointer;
  padding-left: 0.7em;
`;
