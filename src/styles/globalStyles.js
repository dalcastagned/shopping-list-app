import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Poppins, sans-serif;
    -webkit-tap-highlight-color: transparent;
    table { border-collapse: collapse; border-spacing: 0; }
}

body {
    background: #202124;
}

`;

export const Container = styled.div`
    min-height: 100vh;
    max-width: 580px;
    margin: 0 auto;
    position: relative;
    padding-bottom: 30px;
`
export default GlobalStyle