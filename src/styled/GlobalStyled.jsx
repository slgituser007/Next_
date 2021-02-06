import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*,*::after,*::before{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family:'Poppins';
        font-weight:normal;
}
body{
        height:100vh;
        width:100%;
}

li{
        list-style:none;
}
`;
export const displayFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
