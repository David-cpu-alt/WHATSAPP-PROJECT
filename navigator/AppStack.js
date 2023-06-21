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

export default AppStack;

const styles = StyleSheet.create({});
