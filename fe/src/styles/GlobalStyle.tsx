import { createGlobalStyle } from 'styled-components';

import Normalize from '@/styles/Normalize';

const GlobalStyle = createGlobalStyle`
  ${Normalize};
  
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    border: 0;
    padding: 0;
    background-color: #fff;
  }
  
  input {
    border: 0;
    outline: 0;
  }
  
  li, ul, ol {
    list-style: none;
    padding-left: 0;
  }
`;

export default GlobalStyle;
