import styled from "styled-components";
import { displayFlex } from "./GlobalStyled";

export const LayoutS = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const WaveS = styled(displayFlex)`
  height: 100%;
  width: 100%;
  margin-top: -6em;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const MapS = styled(displayFlex)`
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
