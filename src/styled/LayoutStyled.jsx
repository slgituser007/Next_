import styled from "styled-components";
import { displayFlex } from "./GlobalStyled";
import { motion } from "framer-motion";

export const LayoutS = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const WaveS = styled(displayFlex)`
  height: 100%;
  width: 100%;
  margin-top: -4.5em;
  svg {
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;

export const MapS = styled(displayFlex)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const HeadingS = styled(displayFlex)`
  z-index: 3;
  height: 100%;
  width: 100%;
  position: absolute;
  pointer-events: none;
`;

export const HeadingH = styled.h1`
  font-size: 30em;
  font-weight: 700;
  color: #fff;
  text-transform: capitalize;
  margin-top: 0.5em;
  padding-left: 0.6em;
  white-space: nowrap;
  transform: translateY(-0.14em);
  background: -webkit-linear-gradient(
    #ffffff,
    ${(props) => props.Color || "blue"}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
