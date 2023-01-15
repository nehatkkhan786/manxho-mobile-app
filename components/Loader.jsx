import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = ({message}) => {
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator color="red" size='large' />
      <Text style={{fontSize:20, color:'black'}}>{message}</Text>
    </View>
  )
}

export default Loader