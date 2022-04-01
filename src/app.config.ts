import { useGlobalIconFont } from './components/iconfont/helper';

export default defineAppConfig({
  pages: [
    'pages/index/index',
  ],
  usingComponents: Object.assign(useGlobalIconFont()),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
