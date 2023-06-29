import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import Toptab from "../../../navigator/Toptab";
const HomeScreen = () => {
<<<<<<< HEAD
    return (
        <View style={styles.page}>


            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: SIZES.h1 * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body2, }}> Whatsapp</Text>
                    <Image source={icons.camera} style={{ height: "80%", width: "7%", marginTop: SIZES.h6, marginLeft: SIZES.h1 * 4, marginTop: SIZES.h1 * 0.08 }} />
                    <Image source={icons.search} style={{ height: "80%", width: "7%", marginLeft: SIZES.h1 * 1, marginTop: SIZES.h1 * 0.08 }} />
                    <Image source={icons.threedots} style={{ height: "80%", width: "7%", marginLeft: SIZES.h1 * 1, marginTop: SIZES.h1 * 0.08 }} />
                </View>
                {/* flex direction ends */}
            </View>
            <Toptab />
=======
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#008069" barStyle="light-content" />
>>>>>>> 6d47019cf42959e5353bcead84907c7b070210ad

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: SIZES.h5,
            paddingHorizontal: SIZES.h5,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}> Whatsapp</Text>
          <Image
            source={icons.camera}
            style={{
              height: "80%",
              width: "7%",
              marginTop: SIZES.h6,
              marginLeft: SIZES.h1 * 4,
              marginTop: SIZES.h1 * 0.08,
            }}
          />
          <Image
            source={icons.search}
            style={{
              height: "80%",
              width: "7%",
              marginLeft: SIZES.h1 * 1,
              marginTop: SIZES.h1 * 0.08,
            }}
          />
          <Image
            source={icons.threedots}
            style={{
              height: "80%",
              width: "7%",
              marginLeft: SIZES.h1 * 1,
              marginTop: SIZES.h1 * 0.08,
            }}
          />
        </View>
        {/* flex direction ends */}
        <Toptab />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
<<<<<<< HEAD
    page: { flex: 1, },
    container: {
        // height: "50%",
        width: SIZES.h1 * 13,
        backgroundColor: COLORS.green,

    },


})
=======
  page: { flex: 1 },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.green,
  },
});
>>>>>>> 6d47019cf42959e5353bcead84907c7b070210ad
