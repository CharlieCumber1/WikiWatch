import { createGlobalStyle } from 'styled-components';
import '@fontsource/nunito-sans';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Nunito Sans", serif;
    margin: 0;
  }
`;

export default GlobalStyle;
