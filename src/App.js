// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import darkTheme from "./styles/themes/darkTheme";
import lightTheme from "./styles/themes/lightTheme";

import Login from "./pages/Login";
import BudgetList from "./pages/BudgetList";
import BudgetSet from "./pages/BudgetSet";
import BudgetListId from "./pages/BudgetListId";
import AddSpend from "./pages/AddSpend";

import Calendar from "./components/Modules/Calendar";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/budget-list"
            element={
              <BudgetList toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          />
          <Route path="/budget-set" element={<BudgetSet />} />
          <Route
            path="/budget-list-id"
            element={<BudgetListId />}
            isEmpty={false}
          />
          <Route path="/add-spend" element={<AddSpend />} />
          <Route path="calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
