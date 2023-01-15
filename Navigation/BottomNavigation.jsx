import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


import ProfileScreen from "../Screens/ProfileScreen"
import CartScreen from "../Screens/CartScreen"


const BottomNav = createBottomTabNavigator();


const BottomNavigation = () => {
  return (
    <BottomNav.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';

          }
           else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === 'Cart'){
            iconName = focused ? 'cart' : 'cart-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'white',
        headerShown:false,
        tabBarStyle : {
          backgroundColor:'black'
        }
      })}>
        <BottomNav.Screen name="Home" component={HomeScreen}/>
        <BottomNav.Screen name="Profile" component={ProfileScreen}/>
        <BottomNav.Screen name="Cart" component={CartScreen} options={{tabBarBadge:3}}/>
    </BottomNav.Navigator>
  )
}

export default BottomNavigation