import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import SplashScreen from "../Screens/SplashScreen";
import BottomNavigation from "./BottomNavigation";
import Home from "../Screens/Home";
import colors from "../themes/ThemeColor";

const Stack = createNativeStackNavigator();
const HomeNavStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBlurEffect: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.buttonPrimary,
            elevation: null,
          },
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            title: "Manxho",
            headerBackVisible: false,
            headerTintColor: colors.primaryText,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavStack;
