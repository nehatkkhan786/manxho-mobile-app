import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const EmptyCart = () => {
    const navigation = useNavigation()
  return (
    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center',height:'100%',}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>Sorry there is no Item In the cart</Text>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{padding:15, backgroundColor:'red', borderRadius:10, marginTop:10}}>
        <Text style={{color:'white', fontSize:'20', fontWeight:'bold'}}>Start Shopping</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EmptyCart