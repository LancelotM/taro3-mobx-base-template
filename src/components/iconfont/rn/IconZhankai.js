/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconZhankai = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1024 0v1024H0V0z"
        fill={getIconColor(color, 0, '#FFE6E6')}
        fillOpacity="0"
      />
      <Path
        d="M865.109333 301.112889a56.888889 56.888889 0 0 1 3.328 76.828444l-3.328 3.612445-312.888889 312.888889a56.888889 56.888889 0 0 1-76.828444 3.328l-3.612444-3.328-312.888889-312.888889a56.888889 56.888889 0 0 1 76.828444-83.768889l3.612445 3.328L512 573.724444l272.668444-272.64a56.888889 56.888889 0 0 1 76.828445-3.328l3.612444 3.328z"
        fill={getIconColor(color, 1, '#969696')}
        fillOpacity=".299"
      />
    </Svg>
  );
};

IconZhankai.defaultProps = {
  size: 18,
};

IconZhankai = React.memo ? React.memo(IconZhankai) : IconZhankai;

export default IconZhankai;
