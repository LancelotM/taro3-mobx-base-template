import { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
import { Provider } from 'mobx-react'

import store from './store'

import './app.less'

export default ({children}): JSX.Element => {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return <Provider store={store}>
    {children}
  </Provider>
}