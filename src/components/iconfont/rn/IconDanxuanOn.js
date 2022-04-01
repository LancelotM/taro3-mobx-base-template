/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDanxuanOn = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#D4A655')}
      />
      <Path
        d="M765.2864 306.8416a38.4 38.4 0 0 1 59.136 48.896l-2.5088 3.0208-324.352 353.792a64 64 0 0 1-91.6736 2.7648l-3.1744-3.328-175.3088-195.6608a38.4 38.4 0 0 1 54.4256-54.016l2.7648 2.7648 165.888 185.1392 314.8032-343.3728z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IconDanxuanOn.defaultProps = {
  size: 18,
};

IconDanxuanOn = React.memo ? React.memo(IconDanxuanOn) : IconDanxuanOn;

export default IconDanxuanOn;
