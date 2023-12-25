import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import Button from 'components/Button';
import Header from 'components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="screen">
        <Header />
        <Button title="시작하기" />
      </div>
      <a
        href="https://github.com/yojessie"
        className="name-tag"
        target="_blank"
        rel="noreferrer noopener"
      >
        @yojessie
      </a>
    </ThemeProvider>
  );
}

export default App;
