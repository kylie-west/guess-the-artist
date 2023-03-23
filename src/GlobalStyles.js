import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;

        @media only screen and (max-width: 1200px){
            font-size: 58%;
        }
        @media only screen and (min-width: 1980px){
            font-size: 70%;
        }
    }

    body {
        font-family: sans-serif;
        line-height: 1.6;
        font-size: 1.6rem;
        background: #F9F9F9;
        color: #000;
    }
`;

export default GlobalStyles;
