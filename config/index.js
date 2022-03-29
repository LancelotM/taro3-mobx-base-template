const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

const config = {
  projectName: 'taro3-mobx-base-template',
  date: '2022-3-29',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  // 解析alias路径
	alias: {
		'@': path.resolve(__dirname, '..', 'src'),
	},
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  const NODE_ENV = process.env.NODE_ENV
  console.log('当前编译环境:', NODE_ENV)

  let currentConfig = {}
  switch (NODE_ENV) {
    case 'development':
      currentConfig = require('./dev')
      break;
    case 'production':
      currentConfig = require('./prod')
      break;
    case 'test':
      currentConfig = require('./test')
      break;
  }
  return merge({}, config, currentConfig)
}
