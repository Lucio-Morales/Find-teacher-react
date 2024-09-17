import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    body {
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2;
    color: #333;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
    h1, h2, h3, h4, h5, h6 {
    color: #060215;
    margin-bottom: 1.2rem;
  }
    p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
    `;

export default GlobalStyles;
