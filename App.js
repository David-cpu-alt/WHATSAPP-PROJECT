<<<<<<< HEAD
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './navigator/AuthStack'
import { COLORS } from './src/constants'
import AppStack from './navigator/AppStack'
import CallDetails from './src/screens/CallFolder/CallDetails'
=======
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./navigator/AuthStack";
import AppStack from "./navigator/AppStack";
import StatusUpdate from "./src/screens/StatusFolder/StatusUpdate";
>>>>>>> 6d47019cf42959e5353bcead84907c7b070210ad

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
<<<<<<< HEAD
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
=======
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthScreen" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />

        <Stack.Screen name="StatusUpdate" component={StatusUpdate} />
>>>>>>> 6d47019cf42959e5353bcead84907c7b070210ad
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
