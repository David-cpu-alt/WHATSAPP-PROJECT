<<<<<<< HEAD
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
=======
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CreateNativeStackNavigation from "@react-navigation/native-stack";
import StatusUpdate from "../src/screens/StatusFolder/StatusUpdate";
import Community from "../src/screens/CommunityFolder/Community";
const AppStack = () => {
  const Stack = CreateNativeStackNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StatusUpdate" component={StatusUpdate} />
      <Stack.Screen name="Community" component={Community} />
    </Stack.Navigator>
  );
};
>>>>>>> 6d47019cf42959e5353bcead84907c7b070210ad

export default AppStack;

const styles = StyleSheet.create({});
