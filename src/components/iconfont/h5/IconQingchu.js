/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconQingchu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#323232')}
        fillOpacity=".203"
      />
      <path
        d="M642.446222 722.887111L512 592.440889l-130.446222 130.446222a56.888889 56.888889 0 0 1-80.440889-80.440889l130.474667-130.474666-130.474667-130.417778a56.888889 56.888889 0 0 1 80.440889-80.440889L512 431.559111l130.446222-130.446222a56.888889 56.888889 0 0 1 80.440889 80.440889L592.412444 512l130.474667 130.474667a56.888889 56.888889 0 0 1-80.440889 80.440889z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

IconQingchu.defaultProps = {
  size: 18,
};

export default IconQingchu;
