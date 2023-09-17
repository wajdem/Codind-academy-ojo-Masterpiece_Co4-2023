import { View, Text } from "react-native";
import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/HomePage";
import Login from "./screens/LoginScreen";
import Signup from "./screens/RegisterScreen";


export default function Navigator() {
  const { user } = useAuthContext();

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      )}
    </>
  );
}
