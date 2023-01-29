import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import productContext from '../../Context/ProductContext';

const MenuCard = ({product}) => {
  

  const {addToCart, cart} = useContext(productContext)

  return (
    <TouchableWithoutFeedback>
        <View style={styles.mainCardView}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={styles.subCardView}>
                    <Image  source={{uri:`https://api.manxho.co.in${product.image}`}}
                    style={{width:65, height:65, borderRadius:20}}
                    />
                </View>

                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:14, fontWeight:'bold', textTransform: 'uppercase',}}>{product?.title}</Text>
                    <Text style={{marginTop:5}}>Rs.{product.price} / {product.size}</Text>
                </View>
            </View>
            <View>
                    <TouchableOpacity onPress={()=>addToCart(product)}>
                        <Ionicons name="cart" size={32} color="red"  />
                    </TouchableOpacity>
                </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    mainCardView: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        borderRadius: 15,
        
        shadowOpacity: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
      },

      subCardView: {
        height: 50,
        width: 50,
        borderRadius: 25, 
        borderColor:'black',
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default MenuCard