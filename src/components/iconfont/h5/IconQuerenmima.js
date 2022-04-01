/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconQuerenmima = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M483.555556 71.111111C255.772444 71.111111 71.111111 255.772444 71.111111 483.555556S255.772444 896 483.555556 896 896 711.338667 896 483.555556 711.338667 71.111111 483.555556 71.111111z m0 85.333333c180.650667 0 327.111111 146.460444 327.111111 327.111112S664.206222 810.666667 483.555556 810.666667 156.444444 664.206222 156.444444 483.555556 302.904889 156.444444 483.555556 156.444444zM754.488889 754.488889a42.666667 42.666667 0 0 1 57.287111-2.759111l3.043556 2.759111 160.910222 160.910222a42.666667 42.666667 0 0 1-57.287111 63.118222l-3.043556-2.787555-160.910222-160.910222a42.666667 42.666667 0 0 1 0-60.302223z"
        fill={getIconColor(color, 0, '#969696')}
      />
      <path
        d="M272.355556 456.817778a42.666667 42.666667 0 0 1 57.315555-2.759111l3.043556 2.787555 88.945777 88.945778 212.963556-209.863111a42.666667 42.666667 0 0 1 57.315556-2.332445l3.015111 2.787556a42.666667 42.666667 0 0 1 2.360889 57.315556l-2.787556 3.015111-243.114667 239.587555a42.666667 42.666667 0 0 1-57.116444 2.56l-3.015111-2.759111-118.897778-118.926222a42.666667 42.666667 0 0 1 0-60.330667z"
        fill={getIconColor(color, 1, '#969696')}
      />
    </svg>
  );
};

IconQuerenmima.defaultProps = {
  size: 18,
};

export default IconQuerenmima;
