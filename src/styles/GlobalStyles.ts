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
    font-size: ${({ theme }) => theme.typo.regular};
    line-height: 1.4;
    color: ${({ theme }) => theme.color.black};
    background: #E6E9EE;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ol, ul {
    list-style: none;
  }
  button {
    font-family: 'GmarketSansMedium', sans-serif;
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  .screen {
    width: 360px;
    height: 740px;
    background-color: ${({ theme }) => theme.color.background};
    padding: 24px;
    border-radius: 16px;
  }
  .name-tag {
    display: block;
    text-align: center;
    margin-top: 24px;
    color: #A7B6C9;
  }
`;

export default GlobalStyle;
