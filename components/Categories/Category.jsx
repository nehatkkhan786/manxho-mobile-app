import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

import { CategoryMenus } from '../../data/CategoryData'
import productContext from '../../Context/ProductContext'


const Category = () => {
  const [selectedCat, setSelectedCat] = useState(1)
  const {categories, getAllCategories} = useContext(productContext)

  useEffect(()=>{
      getAllCategories();
     
  }, [] )

  return (
    <View>
      <Text style={{fontSize:15, fontWeight:'bold',marginLeft:15, marginTop:15}}>Eat what makes you feel good</Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
          paddingHorizontal:15,
          paddingTop:5,
          }}
          data = {categories}
          renderItem={({item}) => <CategoryCard item={item} selectedCat={selectedCat} setSelectedCat={setSelectedCat}/> }
          keyExtractor={item => item._id}
        />    
    </View>
  )
}

export default Category