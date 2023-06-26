import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './navigator/AuthStack'
import { COLORS } from './src/constants'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <StatusBar
        backgroundColor="#075E54"
        barStyle="light-content"
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthScreen" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App;

const styles = StyleSheet.create({})
