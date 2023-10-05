import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CarScreen from "./screens/CarScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomePage from "./screens/HomePage";
import Order from "./screens/Order";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#2c2b34',
            },
            headerTintColor: '#ffffff',
          }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Car" component={CarScreen} />
        <Stack.Screen name="CarDetails" component={DetailsScreen} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
