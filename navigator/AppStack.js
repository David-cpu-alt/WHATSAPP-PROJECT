import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CallDetails from '../src/screens/CallFolder/CallDetails';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CallDetails" component={CallDetails} />
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})