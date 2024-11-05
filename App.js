import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import MenuScreen from './Screens/MenuScreen';
import AperturaCajaScreen from './Screens/AperturaCajaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menu Inicial' }} />
        <Stack.Screen name="AperturaCaja" component={AperturaCajaScreen} options={{ title: 'Apertura de Caja' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}