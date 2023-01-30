import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import { useContext } from "react";
import productContext from "../Context/ProductContext";
import colors from "../themes/ThemeColor";

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  const { cart } = useContext(productContext);
  return (
    <BottomNav.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "white",
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "black",
        },
      })}
    >
      <BottomNav.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Manxho" }}
      />
      <BottomNav.Screen name="Profile" component={ProfileScreen} />
      <BottomNav.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarBadge: cart?.length }}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
