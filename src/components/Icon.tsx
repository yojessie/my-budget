import React, { ReactElement } from 'react';
import * as icons from '../assets/svg';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps {
  type: IconType;
  color?: string;
  size?: string | number;
}

const NORMAL_SIZE = '24px';
const NORMAL_COLOR = '#3D434B';

function Icon({ type, color, size }: IconProps): ReactElement {
  const SVGIcon = icons[type];
  const fillColor = color || NORMAL_COLOR;
  const widthPx =
    (size &&
      (typeof size === 'number'
        ? `${size}px`
        : `${size.replace('px', '')}px`)) ||
    NORMAL_SIZE;

  return (
    <SVGIcon
      style={{
        color: fillColor,
        width: widthPx,
        height: 'auto',
      }}
    />
  );
}

export default Icon;
