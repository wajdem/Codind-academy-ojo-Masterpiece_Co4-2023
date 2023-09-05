import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CarScreen from './screens/CarScreen';
import CompScreen from './screens/CompScreen';
import DetailsScreen from './screens/DetailsScreen';
import EvidenceScreen from './screens/EvidenceScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TenantScreen from './screens/TenantScreen';
import HomePage from './screens/HomePage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Car" component={CarScreen} />
        <Stack.Screen name="Comp" component={CompScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Evidence" component={EvidenceScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Tenant" component={TenantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
