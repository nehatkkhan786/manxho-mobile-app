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
        <Image source={{uri:"https://shop.manxho.co.in/static/media/logo.a13da29e0076c16ed226.png"}} style={{height:150, width:150}} />
        <Text style={{color:'white', marginTop:5, fontSize:25, fontWeight:'bold'}}>Local . Hygienic . Fresh</Text>
    </SafeAreaView>
  )
}

export default SplashScreen