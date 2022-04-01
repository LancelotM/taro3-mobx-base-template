/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBuchongshenfenxinxi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1382 1024" width={size} height={size} {...rest}>
      <Path
        d="M1298.6112 0c44.5952 0 81.1776 34.2528 83.6608 77.2864L1382.4 81.92v860.16c0 43.5712-35.0464 79.36-79.0272 81.792l-4.7616 0.128H83.7888C39.168 1024 2.6112 989.696 0.128 946.7136L0 942.08V81.92C0 38.2976 35.0464 2.56 79.0272 0.128L83.7888 0h1214.8224zM1280 102.4H102.4v819.2h1177.6V102.4z"
        fill={getIconColor(color, 0, '#D4A655')}
      />
      <Path
        d="M268.8 332.8h332.8a64 64 0 1 1 0 128h-332.8a64 64 0 1 1 0-128zM268.8 588.8h230.4a64 64 0 1 1 0 128h-230.4a64 64 0 1 1 0-128z"
        fill={getIconColor(color, 1, '#D4A655')}
      />
      <Path
        d="M934.4 230.4a166.4 166.4 0 0 1 100.608 298.9568A230.3744 230.3744 0 0 1 1177.6 742.4a51.2 51.2 0 0 1-102.272 3.84L1075.2 742.4a128 128 0 0 0-256 0 51.2 51.2 0 1 1-102.4 0 230.4 230.4 0 0 1 127.0784-205.9776A166.4 166.4 0 0 1 934.4 230.4z m0 102.4a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
        fill={getIconColor(color, 2, '#D4A655')}
      />
    </Svg>
  );
};

IconBuchongshenfenxinxi.defaultProps = {
  size: 18,
};

IconBuchongshenfenxinxi = React.memo ? React.memo(IconBuchongshenfenxinxi) : IconBuchongshenfenxinxi;

export default IconBuchongshenfenxinxi;
