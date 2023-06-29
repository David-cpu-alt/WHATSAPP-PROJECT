import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import icons from "../constants/icons";
import { FlatList } from "react-native";
import communityData from "./CommunityData";
import { pic5, pic7 } from "../constants/images";

const CommunityBox = () => {
  return (
    <View>
      <FlatList
        data={communityData}
        renderItem={({ item }) => {
          return (
            <View>
              {/* SECOND BOX */}
              <View
                style={[
                  styles.box,
                  {
                    // marginBottom: SIZES.h5,
                    height: SIZES.h1 * 7,
                    flexDirection: "column",
                  },
                ]}
              >
                {/* FIRSTLINE IN THE BOX */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: SIZES.h1 * 1.588,
                  }}
                >
                  <View style={styles.imagebox2}>
                    <Image
                      source={item.icon2}
                      style={{
                        height: SIZES.h2,
                        width: SIZES.h2,
                        tintColor: COLORS.green,
                      }}
                    />
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ ...FONTS.body2, fontWeight: "bold" }}>
                        Announcements
                      </Text>
                      <Text
                        style={{
                          ...FONTS.body3,
                          color: COLORS.grey,
                          fontWeight: "bold",
                        }}
                      >
                        12/17/22
                      </Text>
                    </View>
                    <Text
                      numberOfLines={1}
                      style={{
                        ...FONTS.body3,
                        color: COLORS.grey,
                        fontWeight: "bold",
                      }}
                    >
                      Shola bch: {item.text1}
                    </Text>
                  </View>
                </View>
                {/* LINE TWO OF THE BOX */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    // marginHorizontal: SIZES.h5,
                    paddingRight: SIZES.h1 * 2,
                    paddingTop: SIZES.h1,
                  }}
                >
                  <Image
                    source={pic7}
                    style={{
                      height: SIZES.h1 * 1.5,
                      width: SIZES.h1 * 1.5,
                      borderRadius: SIZES.h1,
                      marginRight: SIZES.h5 * 1.2,
                    }}
                  />
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ ...FONTS.h3, fontWeight: "bold" }}>
                        {item.name2}
                      </Text>
                      <Text
                        style={{
                          ...FONTS.body3,
                          color: COLORS.grey,
                          fontWeight: "bold",
                        }}
                      >
                        Yesterday
                      </Text>
                    </View>
                    <Text
                      numberOfLines={1}
                      style={{
                        ...FONTS.body3,
                        color: COLORS.grey,
                        fontWeight: "bold",
                      }}
                    >
                      SHOLA: {item.text2}
                    </Text>
                  </View>
                  <View>
                    {/* LINES IN BOX */}
                    <CommunityBox />
                  </View>
                  {/* VIEW  */}
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: SIZES.h5,
                      paddingTop: SIZES.h1,
                    }}
                  >
                    <Image
                      source={icons.right}
                      style={{
                        height: SIZES.h3,
                        width: SIZES.h3,
                        tintColor: COLORS.grey,
                      }}
                    />
                    <Text
                      style={{
                        ...FONTS.h3,
                        marginHorizontal: SIZES.h1,
                        color: COLORS.grey,
                        fontWeight: "bold",
                      }}
                    >
                      View all
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CommunityBox;

const styles = StyleSheet.create({
  imagebox2: {
    height: SIZES.h1 * 1.5,
    width: SIZES.h1 * 1.5,
    borderRadius: SIZES.h5,
    backgroundColor: COLORS.lightgreen,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.h5,
  },
  imagebox: {
    height: SIZES.h1 * 1.8,
    width: SIZES.h1 * 1.8,
    borderRadius: SIZES.h5,
    backgroundColor: COLORS.grey,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.h5,
  },
  box: {
    height: SIZES.h1 * 2.7,
    width: "100%",
    backgroundColor: COLORS.white,
    flexDirection: "row",
    paddingTop: SIZES.h5,
    marginBottom: SIZES.h5,
    paddingLeft: SIZES.h5 / 1.5,
  },
});
