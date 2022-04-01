/* eslint-disable */

import React from 'react';

import IconDanxuanOff from './IconDanxuanOff';
import IconQingchu from './IconQingchu';
import IconBukejian from './IconBukejian';
import IconGengduo from './IconGengduo';
import IconDanxuanOn from './IconDanxuanOn';
import IconShoujihao from './IconShoujihao';
import IconZhanghao from './IconZhanghao';
import IconXieyiweigouxuan from './IconXieyiweigouxuan';
import IconBuchongshenfenxinxi from './IconBuchongshenfenxinxi';
import IconKejian from './IconKejian';
import IconXiala from './IconXiala';
import IconTianjia from './IconTianjia';
import IconMima from './IconMima';
import IconYanzhengma from './IconYanzhengma';
import IconTianjiayouxiang from './IconTianjiayouxiang';
import IconZhankai from './IconZhankai';
import IconXieyiyigouxuan from './IconXieyiyigouxuan';
import IconShenfenzheng from './IconShenfenzheng';
import IconQuerenmima from './IconQuerenmima';
export { default as IconDanxuanOff } from './IconDanxuanOff';
export { default as IconQingchu } from './IconQingchu';
export { default as IconBukejian } from './IconBukejian';
export { default as IconGengduo } from './IconGengduo';
export { default as IconDanxuanOn } from './IconDanxuanOn';
export { default as IconShoujihao } from './IconShoujihao';
export { default as IconZhanghao } from './IconZhanghao';
export { default as IconXieyiweigouxuan } from './IconXieyiweigouxuan';
export { default as IconBuchongshenfenxinxi } from './IconBuchongshenfenxinxi';
export { default as IconKejian } from './IconKejian';
export { default as IconXiala } from './IconXiala';
export { default as IconTianjia } from './IconTianjia';
export { default as IconMima } from './IconMima';
export { default as IconYanzhengma } from './IconYanzhengma';
export { default as IconTianjiayouxiang } from './IconTianjiayouxiang';
export { default as IconZhankai } from './IconZhankai';
export { default as IconXieyiyigouxuan } from './IconXieyiyigouxuan';
export { default as IconShenfenzheng } from './IconShenfenzheng';
export { default as IconQuerenmima } from './IconQuerenmima';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'danxuan_off':
      return <IconDanxuanOff key="1" {...rest} />;
    case 'qingchu':
      return <IconQingchu key="2" {...rest} />;
    case 'bukejian':
      return <IconBukejian key="3" {...rest} />;
    case 'gengduo':
      return <IconGengduo key="4" {...rest} />;
    case 'danxuan_on':
      return <IconDanxuanOn key="5" {...rest} />;
    case 'shoujihao':
      return <IconShoujihao key="6" {...rest} />;
    case 'zhanghao':
      return <IconZhanghao key="7" {...rest} />;
    case 'xieyiweigouxuan':
      return <IconXieyiweigouxuan key="8" {...rest} />;
    case 'buchongshenfenxinxi':
      return <IconBuchongshenfenxinxi key="9" {...rest} />;
    case 'kejian':
      return <IconKejian key="10" {...rest} />;
    case 'xiala':
      return <IconXiala key="11" {...rest} />;
    case 'tianjia':
      return <IconTianjia key="12" {...rest} />;
    case 'mima':
      return <IconMima key="13" {...rest} />;
    case 'yanzhengma':
      return <IconYanzhengma key="14" {...rest} />;
    case 'tianjiayouxiang':
      return <IconTianjiayouxiang key="15" {...rest} />;
    case 'zhankai':
      return <IconZhankai key="16" {...rest} />;
    case 'xieyiyigouxuan':
      return <IconXieyiyigouxuan key="17" {...rest} />;
    case 'shenfenzheng':
      return <IconShenfenzheng key="18" {...rest} />;
    case 'querenmima':
      return <IconQuerenmima key="19" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
