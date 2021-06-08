import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    font-family: Raleway;
    margin: 0;
    padding: 0;
    max-width: 100%;
    ::-webkit-scrollbar { 
      display: none; 
      }
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
    
`;

export default GlobalStyle;
