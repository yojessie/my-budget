import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    font-family: 'GmarketSansMedium', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.regular};
    line-height: 1.4;
    color: ${({ theme }) => theme.color.black};
    background: ${({ theme }) => theme.color.background};
  }
  ol, ul {
    list-style: none;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
