import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CartItemCard from '../components/CartItemCard';
import productContext from "../Context/ProductContext"
import EmptyCart from '../components/EmptyCart';


const CartScreen = () => {
  const navigation = useNavigation();

  const {cart} = useContext(productContext)

  return (
    
   <SafeAreaView>
     <View style={{minHeight:60, backgroundColor:'black',  position:'relative', justifyContent:'center', alignItems:'center',}}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{position:'absolute', left:20}} >
              <Ionicons name="arrow-back-outline" color='white' size={24} />     
            </TouchableOpacity>
       <Text style={{color:'white', fontWeight:'bold', fontSize:20, position:'absolute', alignItems:'center', justifyContent:'center'}}>Shopping Cart</Text>
     </View>  

    {cart?.length == 0 ? (
      <EmptyCart/>
    ) : (
      <View>
      <ScrollView style={{marginTop:10, height:450}}>
        {cart?.map((item)=>{
          return (<CartItemCard item={item} key={item?._id}/>)
        })} 
       </ScrollView>  
 
        <View>
             <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingBottom:6, paddingTop:5}}>
               <Text style={{fontSize:13}}>Sub Total</Text>
               <Text style={{fontSize:12}} >Rs. 50000</Text>
             </View>
 
             <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingBottom:6}}>
               <Text style={{fontSize:13}} >Total Weight</Text>
               <Text style={{fontSize:12}}>500 Kg</Text>
             </View>
 
             <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingBottom:6}}>
               <Text style={{fontSize:13}} >Shipping Price</Text>
               <Text style={{fontSize:12}}>Rs. 90</Text>
             </View>
 
             <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingBottom:6}}>
               <Text style={{fontWeight:'bold', fontSize:15}}>Total Price</Text>
               <Text style={{fontWeight:'bold', fontSize:15}} >Rs. 90</Text>
             </View>
 
             <TouchableOpacity style={{backgroundColor:"red", borderRadius:15,paddingVertical:12, marginHorizontal:12}}>
               <Text style={{color:'white', fontWeight:'bold', textAlign:'center', fontSize:20}}>Place Order</Text>
             </TouchableOpacity>
 
        </View>   
       </View>
    )}
     
   </SafeAreaView>
  )
}

export default CartScreen
