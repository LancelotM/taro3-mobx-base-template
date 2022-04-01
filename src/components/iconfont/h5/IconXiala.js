/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiala = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 2048 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1024 1013.76L10.24 0h2027.52z"
        fill={getIconColor(color, 0, '#969696')}
      />
    </svg>
  );
};

IconXiala.defaultProps = {
  size: 18,
};

export default IconXiala;
