import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from '../src/screens/ChatFolder/Chat';
import Call from '../src/screens/CallFolder/Call';
import Community from '../src/screens/CommunityFolder/Community';
import Status from '../src/screens/StatusFolder/Status';
import { COLORS, FONTS, SIZES, icons } from '../src/constants';


const Toptab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.page}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: COLORS.green, height: SIZES.h1 * 3, width: SIZES.h1 * 13 },
        tabBarIndicatorStyle: { height: SIZES.h5 / 3.0, width: SIZES.h1 * 2.5, backgroundColor: COLORS.white, marginBottom: SIZES.h6 },
        tabBarLabelStyle: { textTransform: "lowercase", color: COLORS.white, fontWeight: "bold", ...FONTS.body3 },
        tabBarIcon: ({ focused, size }) => {
          let iconname;
          if (route.name === "Community") {
            iconname = <Image source={icons.community} style={{ height: SIZES.h1 * 1.2, width: SIZES.h2 * 1.85, marginTop: SIZES.h5 / 2 }} />
          }
          return iconname;
        }
      })}>
        <Tab.Screen name="Community" component={Community}
          options={{ tabBarShowLabel: false }} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Call" component={Call} />

      </Tab.Navigator>
    </View>

  )
}

export default Toptab

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "green"

  }
})