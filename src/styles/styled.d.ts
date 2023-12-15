import 'styled-components';
import { colorTypes, fontSizeTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: colorTypes;
    fontSize: fontSizeTypes;
  }
}
