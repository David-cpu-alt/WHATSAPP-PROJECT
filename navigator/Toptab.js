<<<<<<< HEAD
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from '../src/screens/ChatFolder/Chat';
import Call from '../src/screens/CallFolder/Call';
import Community from '../src/screens/CommunityFolder/Community';
import Status from '../src/screens/StatusFolder/Status';
import { COLORS, FONTS, SIZES, icons } from '../src/constants';

=======
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chat from "../src/screens/ChatFolder/Chat";
import Call from "../src/screens/CallFolder/Call";
import Community from "../src/screens/CommunityFolder/Community";
import Status from "../src/screens/StatusFolder/Status";
import { SIZES, icons, COLORS, FONTS } from "../src/constants";
>>>>>>> 6d47019cf42959e5353bcead84907c7b070210ad

const Toptab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
<<<<<<< HEAD
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
=======
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          textTransform: "lowercase",
          color: COLORS.white,
          ...FONTS.body2,
        },
        tabBarIndicatorStyle: {
          width: SIZES.h1 * 2.5,
          backgroundColor: COLORS.white,
        },
        tabBarStyle: { backgroundColor: COLORS.green },

        tabBarIcon: ({ focused, size }) => {
          let iconname;
          if (route.name === "Community") {
            iconname = (
              <Image
                source={icons.community}
                style={{
                  height: SIZES.h1,
                  tintColor: COLORS.white,
                  width: SIZES.h1,
                  marginTop: SIZES.h3,
                }}
              />
            );
          }
          return iconname;
        },
      })}
    >
      <Tab.Screen
        name="Community"
        component={Community}
        options={{ tabBarShowLabel: false }}
      />
>>>>>>> 6d47019cf42959e5353bcead84907c7b070210ad
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Call" component={Call} />
    </Tab.Navigator>
  );
};

<<<<<<< HEAD

  )
}

export default Toptab

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "green"

  }
})
=======
export default Toptab;

const styles = StyleSheet.create({});
>>>>>>> 6d47019cf42959e5353bcead84907c7b070210ad
