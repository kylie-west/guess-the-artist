import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: sans-serif;
        line-height: 1.6;
        font-size: 1.6rem;
        background: white;
        color: #2e2e2e;
    }
`;

export default GlobalStyles;
