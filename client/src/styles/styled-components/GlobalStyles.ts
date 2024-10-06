import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
    overflow-x: hidden;
    overscroll-behavior: none;
    position: relative;
  }
  html,
  body,
  #root {
    height: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    letter-spacing: .3px;
    touch-action: pan-x pan-y;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
  }
  body::-webkit-scrollbar {
      display: none;
      @media (min-width: 431px) {
        display: unset;
        width: 9px;
        margin:9px;
      }
    }
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
    padding: 9px;
  }
  body::-webkit-scrollbar-thumb {
    -webkit-border-radius: 9px;
    border-radius: 9px;
    background: ${({ theme }) => theme.scrollbar};
  }
  * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  }
`;

export default GlobalStyle;

// import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = createGlobalStyle`
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
//     body {
//     font-family: 'Arial', sans-serif;
//     background-color: #f2f2f2;
//     color: #333;
//     line-height: 1.6;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
//     h1, h2, h3, h4, h5, h6 {
//     color: #060215;
//     margin-bottom: 1.2rem;
//   }
//     p {
//     margin-bottom: 1rem;
//   }

//   button {
//     cursor: pointer;
//     font-family: inherit;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//   }
//     `;

// export default GlobalStyles;
