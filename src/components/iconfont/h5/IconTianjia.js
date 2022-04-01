/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconTianjia = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 0a64 64 0 0 1 64 64l-0.032 383.968L960 448a64 64 0 1 1 0 128l-384.032-0.032L576 960a64 64 0 1 1-128 0l-0.032-384.032L64 576a64 64 0 1 1 0-128l383.968-0.032L448 64a64 64 0 0 1 64-64z"
        fill={getIconColor(color, 0, '#E0E0E0')}
      />
    </svg>
  );
};

IconTianjia.defaultProps = {
  size: 18,
};

export default IconTianjia;
