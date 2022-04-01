/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconTianjiayouxiang = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 0c282.760533 0 512 229.239467 512 512 0 282.760533-229.239467 512-512 512-282.760533 0-512-229.239467-512-512C0 229.239467 229.239467 0 512 0z m0 68.266667C266.922667 68.266667 68.266667 266.922667 68.266667 512s198.656 443.733333 443.733333 443.733333 443.733333-198.656 443.733333-443.733333S757.077333 68.266667 512 68.266667z m34.133333 187.733333v221.832533l221.866667 0.034134v68.266666H546.133333v221.866667h-68.266666V546.133333H256v-68.266666H477.866667V256h68.266666z"
        fill={getIconColor(color, 0, '#C0C0C0')}
      />
    </svg>
  );
};

IconTianjiayouxiang.defaultProps = {
  size: 18,
};

export default IconTianjiayouxiang;
