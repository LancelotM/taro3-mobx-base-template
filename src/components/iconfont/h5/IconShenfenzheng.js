/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconShenfenzheng = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1389 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1305.490286 0c44.507429 0 81.042286 33.755429 84.041143 76.324571L1389.714286 81.92v860.16c0 43.264-34.706286 78.848-78.482286 81.737143l-5.741714 0.182857H84.224c-44.507429 0-81.042286-33.792-84.041143-76.324571L0 942.08V81.92C0 38.619429 34.706286 3.072 78.482286 0.182857L84.224 0h1221.266286zM1280 109.714286H109.714286v804.571428h1170.285714V109.714286z"
        fill={getIconColor(color, 0, '#969696')}
      />
      <path
        d="M274.285714 329.142857h292.571429a54.857143 54.857143 0 0 1 0 109.714286h-292.571429a54.857143 54.857143 0 0 1 0-109.714286zM274.285714 585.142857h182.857143a54.857143 54.857143 0 0 1 0 109.714286h-182.857143a54.857143 54.857143 0 0 1 0-109.714286z"
        fill={getIconColor(color, 1, '#969696')}
      />
      <path
        d="M932.571429 256a164.571429 164.571429 0 1 1 0 329.142857 164.571429 164.571429 0 0 1 0-329.142857z m0 109.714286a54.857143 54.857143 0 1 0 0 109.714285 54.857143 54.857143 0 0 0 0-109.714285z"
        fill={getIconColor(color, 2, '#969696')}
      />
      <path
        d="M932.571429 512c131.291429 0 237.714286 107.154286 237.714285 239.36A53.028571 53.028571 0 0 1 1117.476571 804.571429a52.992 52.992 0 0 1-52.662857-49.225143l-0.182857-3.986286c0-73.435429-59.136-132.973714-132.059428-132.973714-72.923429 0-132.059429 59.538286-132.059429 132.973714A53.028571 53.028571 0 0 1 747.666286 804.571429 53.028571 53.028571 0 0 1 694.857143 751.36C694.857143 619.154286 801.28 512 932.571429 512z"
        fill={getIconColor(color, 3, '#969696')}
      />
    </svg>
  );
};

IconShenfenzheng.defaultProps = {
  size: 18,
};

export default IconShenfenzheng;