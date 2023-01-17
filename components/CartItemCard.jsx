import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useContext } from 'react'
import productContext from '../Context/ProductContext';

const CartItemCard = ({item}) => {
    const {dispatch, addToCart, removeFromCart} = useContext(productContext)

    const increment = async (_id) =>{
      dispatch({
        type:"INCREMENT_ITEM", 
        payload:_id
      })
    }

    const decrement = async (_id) => {
      dispatch({
        type: "DECREMENT_ITEM",
        payload : _id
      })
    }

    const removefromCart = async (_id) =>{
      dispatch({
        type:"REMOVE_FROM_CART",
        payload:_id
      })
    }
  return (
    <View style={{ paddingHorizontal:15, marginHorizontal:4, borderRadius:15, backgroundColor:'white', shadowOpacity: 0.3, borderColor:'black', marginBottom:15, paddingBottom:10, }}> 
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingTop:10}}>
          <Text style={{fontSize:15, color:'red'}}>{item?.qty} x</Text>
          <Image source ={{uri : `https://api.manxho.co.in${item.image}`}} style={{height:50, width:50, borderRadius:50}}/>
          <Text style={{fontSize:16, fontWeight:'normal',}}>{item.title}</Text>
          <Text style={{}}>Rs.5000</Text>
      </View>
      <View style={{flexDirection:'row', alignItems:"center", justifyContent:'flex-end'}}>
        <TouchableOpacity  onPress={ ()=>decrement(item?._id)}>
          <Ionicons name="remove" color='red' size={30} style={{marginRight:10}}/>
        </TouchableOpacity>

        <Text style={{fontSize:15, fontWeight:'bold', marginRight:10}}>{item.qty}</Text>

        <TouchableOpacity onPress={ ()=>increment(item?._id)}>
          <Ionicons name="add" color='red' size={30}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removefromCart(item?._id)} style={{marginLeft:15}}>
            <Text style={{color:'red'}}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>

  
  )
}

export default CartItemCard