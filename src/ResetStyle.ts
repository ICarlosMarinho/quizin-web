import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html, body {
    min-width: 100%;
    min-height: 100vh;
  }
`;

export default ResetStyle;
