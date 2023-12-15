import { DefaultTheme } from 'styled-components';

const color = {
  blue: '#5D9CEC',
  yellow: '#FFCE55',
  green: '#A0D468',
  red: '#ED5564',
  black: '#3D434B',
  background: '#F8F8FC',
  white: '#FFFFFF',
};

const fontSize = {
  large: '21px',
  regular: '14px',
  small: '12px',
  tiny: '10px',
};

export type colorTypes = typeof color;
export type fontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  color,
  fontSize,
};

export default theme;
