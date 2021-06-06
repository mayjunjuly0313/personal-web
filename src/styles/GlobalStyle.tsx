import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow-x: hidden;
    font-family: Raleway;
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
    
`;

export default GlobalStyle;
