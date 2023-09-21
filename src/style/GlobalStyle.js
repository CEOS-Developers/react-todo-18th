import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;

        // 사용할 색깔들
        --white: #FFFFFF;
        --lightGray: #D4D4D4;
        --darkGray: 675F5F;
        --yellow: 

        // 색상 그라디언트 
        --gradient: radial-gradient(50% 50% at 50% 50%, rgba(18, 18, 18, 0) 0%, #202020 100%);

        // 그림자
        --shadow:  0px 0px 60px 20px rgba(13, 12, 11, 0.25);
    }
    body{
        background-color: black;
        position: relative;
    }
`;
