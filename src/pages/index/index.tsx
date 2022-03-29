import { useEffect, useCallback } from 'react'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer } from 'mobx-react'
import counterStore from '@/store/counter'
import aag from '@/assets/images/index/aag.png'
import api from '@/services/api'
import './index.less'

const Index = () => {
  const {counter} = counterStore;

  useEffect(()=>{
    console.log('APP_CONF',APP_CONF);
    (async ()=>{
      const data = await api.get('http://www.baidu.com/')
      console.log('api-data',data);
    })()
  },[])

  const increment = useCallback(() => {
		counterStore.increment()
	},[])

  const decrement = useCallback(() => {
		counterStore.decrement()
	},[])

  const incrementAsync = useCallback(() => {
		counterStore.incrementAsync()
	},[])

  return <View className='index'>
    <Button onClick={increment}>+</Button>
    <Button onClick={decrement}>-</Button>
    <Button onClick={incrementAsync}>Add Async</Button>
    <Text>{counter}</Text>
    <Image
      src={aag}
    />
  </View>
}

export default observer(Index)