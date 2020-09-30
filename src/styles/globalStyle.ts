import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000000;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
