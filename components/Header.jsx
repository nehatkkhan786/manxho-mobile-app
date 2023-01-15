import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{height:70, backgroundColor:"black", display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
        <Image style={{width:100, height:30}} source={{uri:"https://shop.manxho.co.in/static/media/log.e1d5bf735f2232cd0d52.png"}}/>
        <Text style={{color:'white'}}>Local . Hygienic . Fresh</Text>
    </View>
  )
}

export default Header