import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import statusData from "./StatusData";
import { FONTS, SIZES, COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const StatusMute = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Text style={{ ...FONTS.body2a, fontWeight: "bold" }}>
          Muted Updates
        </Text>
      </View>
      <FlatList
        data={statusData.slice(12, 14)}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("StatusUpdate", { item })}
                style={{ flexDirection: "row", marginVertical: SIZES.h4 }}
              >
                <View
                  style={[
                    styles.image,
                    {
                      backgroundColor: item.status ? COLORS.indigo : null,
                    },
                  ]}
                >
                  {item.status ? (
                    <View>
                      <Text style={{ ...FONTS.h5, color: COLORS.white }}>
                        {item.text}
                      </Text>
                    </View>
                  ) : (
                    <View>
                      <Image
                        source={item.image}
                        style={{
                          height: SIZES.h1 * 2.29,
                          width: SIZES.h1 * 2.29,
                          borderRadius: SIZES.h1 * 2,
                        }}
                      />
                    </View>
                  )}
                </View>
                <View style={{ marginHorizontal: SIZES.h5 }}>
                  <Text style={{ ...FONTS.body2a, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.h4,
                      color: COLORS.chocolateBackground,
                      fontWeight: "bold",
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default StatusMute;

const styles = StyleSheet.create({
  image: {
    borderColor: COLORS.green,
    borderWidth: SIZES.h5 / 3,
    borderRadius: SIZES.h1 * 6,
    height: SIZES.h1 * 2.6,
    width: SIZES.h1 * 2.6,
    justifyContent: "center",
    alignItems: "center",
  },
});
