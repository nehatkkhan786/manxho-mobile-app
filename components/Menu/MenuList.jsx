import { View, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MenuCard from './MenuCard'
import productContext from '../../Context/ProductContext'
import Loader from '../Loader'

const MenuList = () => {

    const {products, getAllProducts} = useContext(productContext)

    useEffect(() =>{
        getAllProducts();
    }, [])

  return products?.length < 1 ? <Loader message='Products Are Loading'/> :  (
    <ScrollView style={{marginTop:15, marginBottom:20, height:400}}>
       {products?.map((product)=>{
         return (
           <MenuCard key={product._id} product={product}/>
         )
       })}
    </ScrollView>
  )
}

export default MenuList