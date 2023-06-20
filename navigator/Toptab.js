import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from '../src/screens/ChatFolder/Chat';
import Call from '../src/screens/CallFolder/Call';
import Community from '../src/screens/CommunityFolder/Community';
import Status from '../src/screens/StatusFolder/Status';


const Toptab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Call" component={Call} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Status" component={Status} />



    </Tab.Navigator>
  )
}

export default Toptab

const styles = StyleSheet.create({})