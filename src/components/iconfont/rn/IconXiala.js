/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconXiala = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 2048 1024" width={size} height={size} {...rest}>
      <Path
        d="M1024 1013.76L10.24 0h2027.52z"
        fill={getIconColor(color, 0, '#969696')}
      />
    </Svg>
  );
};

IconXiala.defaultProps = {
  size: 18,
};

IconXiala = React.memo ? React.memo(IconXiala) : IconXiala;

export default IconXiala;
