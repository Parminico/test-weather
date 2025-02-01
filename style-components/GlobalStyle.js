import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        font-family: 'Arial', sans-serif;
        color: white;
    }
    body {
        background-color: ${props => props.theme.darkPurple};
        color: white;
    }
    button {
        padding: 5px 10px;
        border-radius: 10px;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        width: 100%;
    }
    .big-text{
        font-size: ${props => props.theme.s3};
        font-weight: 600;
    }
`
export default GlobalStyle;