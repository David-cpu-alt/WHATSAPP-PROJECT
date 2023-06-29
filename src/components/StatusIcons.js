import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../constants/icons";
import { COLORS, SIZES } from "../constants/theme";

const StatusIcons = () => {
  return (
    <View>
      <TouchableOpacity style={styles.boxctn}>
        <Image
          source={icons.pen}
          style={{
            height: SIZES.h2,
            width: SIZES.h2,
            tintColor: COLORS.chocolate,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxctn1}>
        <Image
          source={icons.ca}
          style={{ height: SIZES.h2, width: SIZES.h2, tintColor: COLORS.white }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default StatusIcons;

const styles = StyleSheet.create({
  boxctn: {
    height: SIZES.h1 * 1.8,
    width: SIZES.h1 * 1.8,
    borderRadius: SIZES.h1,
    backgroundColor: COLORS.grey,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SIZES.h5,

    elevation: SIZES.h5,
  },

  boxctn1: {
    height: SIZES.h1 * 2,
    width: SIZES.h1 * 2,
    borderRadius: SIZES.h1,
    backgroundColor: COLORS.green,
    alignItems: "center",
    justifyContent: "center",
    elevation: SIZES.h5 * 2,
  },
});
