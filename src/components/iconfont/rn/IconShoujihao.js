/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShoujihao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M796.444444 0a113.777778 113.777778 0 0 1 113.777778 113.777778v796.444444a113.777778 113.777778 0 0 1-113.777778 113.777778H227.555556a113.777778 113.777778 0 0 1-113.777778-113.777778V113.777778a113.777778 113.777778 0 0 1 113.777778-113.777778h568.888888z m28.444445 691.996444H199.111111V910.222222a28.444444 28.444444 0 0 0 25.116445 28.245334L227.555556 938.666667h568.888888a28.444444 28.444444 0 0 0 28.245334-25.116445L824.888889 910.222222v-218.225778zM526.222222 739.555556a71.111111 71.111111 0 1 1 0 142.222222 71.111111 71.111111 0 0 1 0-142.222222zM796.444444 85.333333H227.555556a28.444444 28.444444 0 0 0-28.245334 25.116445L199.111111 113.777778v492.885333h625.777778V113.777778a28.444444 28.444444 0 0 0-25.116445-28.245334L796.444444 85.333333z"
        fill={getIconColor(color, 0, '#969696')}
      />
    </Svg>
  );
};

IconShoujihao.defaultProps = {
  size: 18,
};

IconShoujihao = React.memo ? React.memo(IconShoujihao) : IconShoujihao;

export default IconShoujihao;
