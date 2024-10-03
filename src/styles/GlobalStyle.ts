import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Figtree", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        background-color: #f4d04e;
    }

    span {
        display: block;
    }
`