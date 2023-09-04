import {createGlobalStyle} from 'styled-components'
import Reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${Reset}
  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family : Pretendard;
    line-height: 1.5;
    margin: 0;
  }

  *{
    font-family : Pretendard;
    box-sizing: border-box;
  }
  button {
    border : none;
  }
`;

export default GlobalStyles;