import { createGlobalStyle } from "styled-components";

import background from "../images/background.png";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "SUITE-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2")
    format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}
  body {
    background-image: url(${background});
    background-size: cover;
  }
  `;

export default GlobalStyle;
