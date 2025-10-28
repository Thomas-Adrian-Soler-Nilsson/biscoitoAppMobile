import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Sobre from './src/screens/sobre';
import Integrantes from './src/screens/integrantes';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#960018' }, 
          headerTintColor: '#FFD700', 
          headerTitleStyle: { fontWeight: 'bold' }, 
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Biscoito da Sorte' }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: 'Sobre o App' }}
        />
        <Stack.Screen
          name="Integrantes"
          component={Integrantes}
          options={{ title: 'Integrantes do App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
