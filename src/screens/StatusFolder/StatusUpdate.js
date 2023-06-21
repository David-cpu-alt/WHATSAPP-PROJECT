import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../../constants/theme";
import icons from "../../constants/icons";
import { pic6 } from "../../constants/images";

const StatusUpdate = ({ route, navigation }) => {
  console.log(route);
  const data = route.params.item;

  return (
    <View
      style={[
        styles.page,
        { backgroundColor: data.status ? COLORS.indigo : COLORS.black },
      ]}
    >
      <StatusBar
        backgroundColor={data.status ? COLORS.indigo : "#000"}
        barStyle="dark-content"
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.h5,
          marginBottom: SIZES.h4,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.backarrow}
            style={{
              height: SIZES.h2,
              width: SIZES.h2,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("StatusUpdate")}
          style={styles.image}
        >
          <Image
            source={pic6}
            style={{
              height: SIZES.h1 * 2,
              width: SIZES.h1 * 2,
              borderRadius: SIZES.h1,
            }}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{ ...FONTS.h3, fontWeight: "bold", color: COLORS.white }}
          >
            {data.name}
          </Text>
          <Text style={{ color: COLORS.white }}>{data.time}</Text>
        </View>
      </View>
      <View>
        <View>
          {data.status ? (
            <View
              style={{
                height: "95%",
                backgroundColor: COLORS.indigo,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ ...FONTS.body2c, color: COLORS.white }}>
                {data.text}
              </Text>
            </View>
          ) : (
            <View>
              <Image
                source={data.image}
                style={{ height: "90%", width: "100%" }}
              />
            </View>
          )}
          {data.status ? null : (
            <View style={{ paddingHorizontal: SIZES.h3 }}>
              <Text
                style={{ ...FONTS.h3, fontWeight: "bold", color: COLORS.white }}
              >
                {data.text2}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default StatusUpdate;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: SIZES.h5,
  },
  image: {
    borderColor: COLORS.white,
    borderWidth: SIZES.h5 / 3,
    borderRadius: SIZES.h1 * 3,
    marginHorizontal: SIZES.h5,
  },
});
