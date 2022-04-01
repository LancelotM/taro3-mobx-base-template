/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconDanxuanOff = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0z m0 51.2C257.5104 51.2 51.2 257.5104 51.2 512s206.3104 460.8 460.8 460.8 460.8-206.3104 460.8-460.8S766.4896 51.2 512 51.2z"
        fill={getIconColor(color, 0, '#DDDDDD')}
      />
    </Svg>
  );
};

IconDanxuanOff.defaultProps = {
  size: 18,
};

IconDanxuanOff = React.memo ? React.memo(IconDanxuanOff) : IconDanxuanOff;

export default IconDanxuanOff;
