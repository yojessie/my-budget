import 'styled-components';
import {
  colorType,
  typoType,
  shadowType,
  borderType,
  radiusType,
} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: colorType;
    typo: typoType;
    shadow: shadowType;
    border: borderType;
    radius: radiusType;
  }
}
