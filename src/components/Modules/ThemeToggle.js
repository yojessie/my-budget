import React from "react";
import styled from "styled-components";
import { IconMoon, IconSun } from "../../assets/icons/icons";

const Container = styled.div`
  width: auto;
  height: auto;
  background-color: ${({ theme }) => theme.color.bgDark};
  border-radius: 20px;
  ${({ theme }) => theme.flex.centerRow};
  flex-direction: ${({ isDarkMode }) => (isDarkMode ? "row" : "row-reverse")};
  padding: ${({ isDarkMode }) =>
    isDarkMode ? "4px 6px 4px 8px" : "4px 8px 4px 6px"};
  gap: 4px;
  cursor: pointer;
`;

const Toggle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.bgPale};
`;

const ToggleButton = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container onClick={toggleTheme} isDarkMode={isDarkMode}>
      <Toggle />
      {isDarkMode ? <IconMoon /> : <IconSun />}
    </Container>
  );
};

export default ToggleButton;
