/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconTianjiayouxiang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.760533 0 512 229.239467 512 512 0 282.760533-229.239467 512-512 512-282.760533 0-512-229.239467-512-512C0 229.239467 229.239467 0 512 0z m0 68.266667C266.922667 68.266667 68.266667 266.922667 68.266667 512s198.656 443.733333 443.733333 443.733333 443.733333-198.656 443.733333-443.733333S757.077333 68.266667 512 68.266667z m34.133333 187.733333v221.832533l221.866667 0.034134v68.266666H546.133333v221.866667h-68.266666V546.133333H256v-68.266666H477.866667V256h68.266666z"
        fill={getIconColor(color, 0, '#C0C0C0')}
      />
    </Svg>
  );
};

IconTianjiayouxiang.defaultProps = {
  size: 18,
};

IconTianjiayouxiang = React.memo ? React.memo(IconTianjiayouxiang) : IconTianjiayouxiang;

export default IconTianjiayouxiang;
