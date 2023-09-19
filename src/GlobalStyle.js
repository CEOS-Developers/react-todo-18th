import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        background-color: black;
        color : #ECECEC;
        font-family: 'GmarketSansMedium';
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default GlobalStyle;
