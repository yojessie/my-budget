import { DefaultTheme } from 'styled-components';

const color = {
  blue: '#5D9CEC',
  yellow: '#FFCE55',
  green: '#A0D468',
  red: '#ED5564',
  background: '#F8F8FC',
  black: '#3D434B',
  black50: 'rgba(61, 67, 75, 0.5)',
  black30: 'rgba(61, 67, 75, 0.3)',
  white: '#FFFFFF',
  white50: 'rgba(255, 255, 255, 0.2)',
};

const fontSize = {
  large: '21px',
  regular: '14px',
  small: '12px',
  tiny: '10px',
};

const fontWeight = {
  bold: 700,
  medium: 500,
};

const typo = {
  large: `color: ${color.black}; font-size: ${fontSize.large}; font-weight: ${fontWeight.bold}; line-height: 1.2`,
  regular: `color: ${color.black}; font-size: ${fontSize.regular}; font-weight: ${fontWeight.medium}; line-height: 1.4`,
  small: `color: ${color.black}; font-size: ${fontSize.small}; font-weight: ${fontWeight.medium}; line-height: 1.4`,
  tiny: `color: ${color.black}; font-size: ${fontSize.tiny}; font-weight: ${fontWeight.medium}; line-height: 1.4`,
};

const common = {
  // border: `1px solid #3D434B`,
  // radius: '8px',
  // shadow: `0px 8px 0px 0px #3D434B`,
};

const shadow = `0px 8px 0px 0px #3D434B`;
const border = `1px solid #3D434B`;
const radius = {
  large: '16px',
  regular: '8px',
};

export type colorType = typeof color;
export type typoType = typeof typo;
export type shadowType = typeof shadow;
export type borderType = typeof border;
export type radiusType = typeof radius;

const theme: DefaultTheme = {
  color,
  typo,
  common,
  shadow,
  border,
  radius,
};

export default theme;
