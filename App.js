import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './navigator/AuthStack'
import { COLORS } from './src/constants'
import AppStack from './navigator/AppStack'
import CallDetails from './src/screens/CallFolder/CallDetails'

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
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen
          name="CallDetails" component={CallDetails} />
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App;

const styles = StyleSheet.create({})
