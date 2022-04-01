/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMima = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 28.444444c157.098667 0 284.444444 127.345778 284.444444 284.444445v28.444444h28.444445a113.777778 113.777778 0 0 1 113.777778 113.777778v455.111111a113.777778 113.777778 0 0 1-113.777778 113.777778H199.111111a113.777778 113.777778 0 0 1-113.777778-113.777778V455.111111a113.777778 113.777778 0 0 1 113.777778-113.777778h28.444445v-28.444444C227.555556 155.790222 354.901333 28.444444 512 28.444444z m312.888889 398.222223H199.111111a28.444444 28.444444 0 0 0-28.245333 25.116444L170.666667 455.111111v455.111111a28.444444 28.444444 0 0 0 25.116444 28.245334L199.111111 938.666667h625.777778a28.444444 28.444444 0 0 0 28.245333-25.116445L853.333333 910.222222V455.111111a28.444444 28.444444 0 0 0-25.116444-28.245333L824.888889 426.666667z m-312.888889 71.111111a156.444444 156.444444 0 0 1 42.666667 307.000889v59.448889h-85.333334v-59.448889A156.444444 156.444444 0 0 1 512 497.777778z m0 85.333333a71.111111 71.111111 0 0 0-21.532444 138.894222h43.064888A71.139556 71.139556 0 0 0 512 583.111111zM512 113.777778a199.111111 199.111111 0 0 0-198.997333 192.284444L312.888889 312.888889v28.444444h398.222222v-28.444444a199.111111 199.111111 0 0 0-192.284444-198.997333L512 113.777778z"
        fill={getIconColor(color, 0, '#969696')}
      />
    </Svg>
  );
};

IconMima.defaultProps = {
  size: 18,
};

IconMima = React.memo ? React.memo(IconMima) : IconMima;

export default IconMima;
