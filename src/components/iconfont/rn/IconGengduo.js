/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGengduo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0h1024v1024H0z"
        fill={getIconColor(color, 0, '#FFE6E6')}
        fillOpacity="0"
      />
      <Path
        d="M339.626667 197.404444a42.666667 42.666667 0 0 1 57.088-2.958222l3.242666 2.929778 284.444445 284.444444a42.666667 42.666667 0 0 1 2.929778 57.116445l-2.929778 3.242667-284.444445 284.444444a42.666667 42.666667 0 0 1-63.288889-57.116444l2.929778-3.242667L593.92 512l-254.293333-254.293333a42.666667 42.666667 0 0 1-2.929778-57.088l2.929778-3.242667z"
        fill={getIconColor(color, 1, '#C0C0C0')}
      />
    </Svg>
  );
};

IconGengduo.defaultProps = {
  size: 18,
};

IconGengduo = React.memo ? React.memo(IconGengduo) : IconGengduo;

export default IconGengduo;
