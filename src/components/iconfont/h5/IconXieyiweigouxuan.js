/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXieyiweigouxuan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M887.466667 0a136.533333 136.533333 0 0 1 136.533333 136.533333v750.933334a136.533333 136.533333 0 0 1-136.533333 136.533333H136.533333a136.533333 136.533333 0 0 1-136.533333-136.533333V136.533333a136.533333 136.533333 0 0 1 136.533333-136.533333h750.933334z m0 68.266667H136.533333a68.266667 68.266667 0 0 0-68.096 63.146666L68.266667 136.533333v750.933334a68.266667 68.266667 0 0 0 63.146666 68.096L136.533333 955.733333h750.933334a68.266667 68.266667 0 0 0 68.096-63.146666L955.733333 887.466667V136.533333a68.266667 68.266667 0 0 0-63.146666-68.096L887.466667 68.266667z"
        fill={getIconColor(color, 0, '#E6E6E6')}
        fillOpacity=".8"
      />
    </svg>
  );
};

IconXieyiweigouxuan.defaultProps = {
  size: 18,
};

export default IconXieyiweigouxuan;
