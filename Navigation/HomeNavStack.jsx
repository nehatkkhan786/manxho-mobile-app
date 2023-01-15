import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import BottomNavigation from './BottomNavigation';
import Home from '../Screens/Home';




const Stack = createNativeStackNavigator();
const HomeNavStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name ='HomeScreen' component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavStack