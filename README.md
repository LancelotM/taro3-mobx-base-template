## taro3-mobx-base-template
### Taro3 + mobx基础小程序模版
技术栈主要是：`taro3+typescript+taro-ui+mobx+hooks`

开发环境
![Image text](https://img.shields.io/badge/npm-6.14.16-green.svg)
![Image text](https://img.shields.io/badge/node-14.19.1-green.svg)

##### **重要说明**
安装`@tarojs/cli`的时候需要注意加上版本号，也就是需要按照下方说明来看下执行的命令是否正确

```
  如果之前有安装其他版本的@tarojs/cli，需要先全局卸载，执行下方命令,执行完后再执行下方两步
  npm uninstall -g @tarojs/cli
  rm -rf node_modules
  ---------------
  第一步
  npm install -g @tarojs/cli@3.4.3
  or
  cnpm install -g @tarojs/cli@3.4.3
  or
  yarn global add @tarojs/cli@3.4.3

  第二步
  npm install
  or
  cnpm install
  or
  yarn
  
  第三步
  npm run dev:weapp 微信小程序-开发模式
  npm run build:weapp 微信小程序-生产模式
```
