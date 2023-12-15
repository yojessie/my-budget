import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import Gnb from './components/Gnb';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Gnb />
    </ThemeProvider>
  );
}

export default App;
