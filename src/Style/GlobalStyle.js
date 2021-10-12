import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
      width: 100vw;
      height: 100%;
  }
`;

export default GlobalStyle;
