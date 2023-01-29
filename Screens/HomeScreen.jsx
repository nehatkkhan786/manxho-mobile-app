import { View, SafeAreaView, TextInput, TouchableOpacity,  } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Category from '../components/Categories/Category';
import MenuList from '../components/Menu/MenuList';
import Header from '../components/Header';


const HomeScreen = () => {
    const navigation = useNavigation();

    const [selectedCat, setSelectedCat] = useState()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    }, [])
  return (
    <SafeAreaView>

        {/* Header */}
        <Header/>

        {/* Search Bar */}
        <View style={{flexDirection:'row', padding:10,backgroundColor:'white', marginTop:10, borderRadius:40, marginHorizontal:10, paddingHorizontal:20}}>
            <TextInput placeholder='Search Food'  style={{fontSize:18, flex:1}}/>
            <TouchableOpacity>
                <Ionicons name="search" size={32} color="red"  />
            </TouchableOpacity>
        </View>

        {/* Menu Categories */}

        <View>
            <Category selectedCat={selectedCat} setSelectedCat = {setSelectedCat}/>
        </View>

        {/* Menu */}
        <View>
            <MenuList selectedCat={selectedCat}/>
        </View>


    </SafeAreaView>
  )
}


export default HomeScreen;