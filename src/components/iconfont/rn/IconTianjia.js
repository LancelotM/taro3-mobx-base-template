/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconTianjia = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0a64 64 0 0 1 64 64l-0.032 383.968L960 448a64 64 0 1 1 0 128l-384.032-0.032L576 960a64 64 0 1 1-128 0l-0.032-384.032L64 576a64 64 0 1 1 0-128l383.968-0.032L448 64a64 64 0 0 1 64-64z"
        fill={getIconColor(color, 0, '#E0E0E0')}
      />
    </Svg>
  );
};

IconTianjia.defaultProps = {
  size: 18,
};

IconTianjia = React.memo ? React.memo(IconTianjia) : IconTianjia;

export default IconTianjia;
