import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";
import { FlatList } from "react-native";
import communityData from "../../components/CommunityData";
import { pic5, pic7 } from "../../constants/images";

const Community = () => {
  const firstData = () => {
    return (
      <View style={styles.box}>
        <View style={styles.imagebox}>
          <View></View>
          <Image
            source={icons.community}
            style={{ height: SIZES.h1, width: SIZES.h1 }}
          />
        </View>
        <Text style={{ ...FONTS.body2, fontWeight: "bold" }}>
          New community
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.page}>
      <View>
        <FlatList
          ListHeaderComponent={firstData}
          data={communityData}
          renderItem={({ item }) => {
            return (
              <View>
                {/* FIRSTBOX */}
                <View style={[styles.box, { marginBottom: SIZES.h5 / 2 }]}>
                  <View style={styles.imagebox}>
                    <Image
                      source={item.icon1}
                      style={{ height: SIZES.h1, width: SIZES.h1 }}
                    />
                  </View>
                  <Text
                    style={{
                      ...FONTS.body2,
                      fontWeight: "bold",
                      marginTop: SIZES.h5 / 1.3,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                {/* SECOND BOX */}
                <View
                  style={[
                    styles.box,
                    {
                      marginBottom: SIZES.h5 / 2,
                      height: SIZES.h1 * 7,
                      flexDirection: "column",
                    },
                  ]}
                >
                  {/* FIRSTLINE IN THE BOX */}
                  <View
                    style={{
                      flexDirection: "row",
                      //   justifyContent: "center",
                      alignItems: "center",
                      paddingRight: SIZES.h1 * 4,
                    }}
                  >
                    <View style={styles.imagebox2}>
                      <Image
                        source={item.icon2}
                        style={{ height: SIZES.h2, width: SIZES.h2 }}
                      />
                    </View>
                    <View>
                      <Text style={{ ...FONTS.h2, fontWeight: "bold" }}>
                        Announcements
                      </Text>
                      <Text numberOfLines={1} style={{ ...FONTS.h4 }}>
                        {item.text1}
                      </Text>
                    </View>
                  </View>
                  {/* LINE TWO OF THE BOX */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginHorizontal: SIZES.h5,
                      paddingTop: SIZES.h4,
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
                      <Text style={{ ...FONTS.h3, fontWeight: "bold" }}>
                        {item.name2}
                      </Text>
                      <Text numberOfLines={1}>{item.text2}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: SIZES.h5,
                      paddingTop: SIZES.h4,
                    }}
                  >
                    <Image
                      source={icons.right}
                      style={{ height: SIZES.h3, width: SIZES.h3 }}
                    />
                    <Text style={{ ...FONTS.h3, marginHorizontal: SIZES.h4 }}>
                      View all
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  box: {
    height: SIZES.h1 * 2.7,
    width: "100%",
    backgroundColor: COLORS.white,
    flexDirection: "row",
    paddingTop: SIZES.h5,
    marginBottom: SIZES.h5,
  },
  imagebox: {
    height: SIZES.h1 * 1.8,
    width: SIZES.h1 * 1.8,
    borderRadius: SIZES.h5,
    backgroundColor: COLORS.chocolate,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.h5,
  },
  imagebox2: {
    height: SIZES.h1 * 1.5,
    width: SIZES.h1 * 1.5,
    borderRadius: SIZES.h5,
    backgroundColor: COLORS.green,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.h5,
  },
});
