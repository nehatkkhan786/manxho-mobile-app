import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductContextProvider } from './Context/ProductContext';
import HomeNavStack from './Navigation/HomeNavStack';

export default function App() {
  return (
    <ProductContextProvider>
      <HomeNavStack/>
    </ProductContextProvider>
  );
}

