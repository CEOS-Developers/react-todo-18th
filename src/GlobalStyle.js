import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        background-color: black;
        color : #ECECEC;
        font-family: 'GmarketSansMedium';
    }
`;
export default GlobalStyle;
