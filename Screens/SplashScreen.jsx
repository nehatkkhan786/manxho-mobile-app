import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const SplashScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=>{
            navigation.setOptions({
                headerShown:false,
            })
    }, [])

    useEffect(()=>{
        setTimeout(() =>{
            navigation.navigate('HomeScreen')
        }, 5000)
    }, [] )


  return (
    <SafeAreaView style={{ backgroundColor:'black', height:'100%', justifyContent:'center', alignItems:'center',}}> 
        <Image source={require('../assets/Images/logo.gif')} style={{height:200, width:200}} />
        <Text style={{color:'white', marginTop:5, fontSize:25, fontWeight:'bold'}}>Local . Hygienic . Fresh</Text>
    </SafeAreaView>
  )
}

export default SplashScreen