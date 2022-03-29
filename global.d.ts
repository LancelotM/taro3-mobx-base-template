/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace JSX {
    interface IntrinsicElements {
        'import': React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>
    }
}

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

/**
 * 环境变量配置
 */
 declare const APP_CONF: {
  /**
   * 接口HOST
   */
  API_HOST: string
  /**
   * 图片oss域名
   */
  IMG_OSS_PREFIX: string
  /**
   * 腾讯地图接口服务域名
   */
  API_MAP_QQ: string
  /**
   * 腾讯地图服务key
   */
  KEY_MAP_QQ: string
}