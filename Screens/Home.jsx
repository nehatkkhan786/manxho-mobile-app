import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import BottomNavigation from '../Navigation/BottomNavigation'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false,
    })
}, [])
  return (
    <BottomNavigation/>
  )
}

export default Home