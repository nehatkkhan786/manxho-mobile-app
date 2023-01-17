import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductContextProvider } from './Context/ProductContext';
import HomeNavStack from './Navigation/HomeNavStack';
import { ToastProvider } from 'react-native-toast-notifications'


export default function App() {
  return (
    <ToastProvider
    duration={1000}
    successColor="green"
    dangerColor="red"
    dangerColor="red"
    warningColor="orange"
    normalColor="gray"
    offsetBottom={60}
    >
    <ProductContextProvider>
      <StatusBar/>
      <HomeNavStack/>
    </ProductContextProvider>
    </ToastProvider>
 
  );
}

