/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconDanxuanOff = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0z m0 51.2C257.5104 51.2 51.2 257.5104 51.2 512s206.3104 460.8 460.8 460.8 460.8-206.3104 460.8-460.8S766.4896 51.2 512 51.2z"
        fill={getIconColor(color, 0, '#DDDDDD')}
      />
    </svg>
  );
};

IconDanxuanOff.defaultProps = {
  size: 18,
};

export default IconDanxuanOff;
