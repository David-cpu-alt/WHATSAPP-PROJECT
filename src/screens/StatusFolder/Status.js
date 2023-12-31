import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import statusData from "../../components/StatusData";
import StatusMute from "../../components/StatusMute";
import StatusIcons from "../../components/StatusIcons";

const Status = ({ navigation }) => {
  const Status1 = () => {
    return (
      <View>
        <FlatList
          data={statusData.slice(0, 1)}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("StatusUpdate", { item })}
                  style={{ flexDirection: "row", marginVertical: SIZES.h4 }}
                >
                  <View style={styles.image}>
                    <Image
                      source={item.image}
                      style={{
                        height: SIZES.h1 * 2.28,
                        width: SIZES.h1 * 2.28,
                        borderRadius: SIZES.h1 * 2,
                      }}
                    />
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
        <View>
          <Text style={{ ...FONTS.h3, fontWeight: "bold", color: COLORS.grey }}>
            Recent Updates
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <View
        style={{
          position: "absolute",
          top: 450,
          bottom: 0,
          left: 280,
          right: 0,
          zIndex: 2,
        }}
      >
        <StatusIcons />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={Status1}
          ListFooterComponent={StatusMute}
          data={statusData.slice(2, 11)}
          renderItem={({ item }) => {
            return (
              <View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("StatusUpdate", { item })
                    }
                    style={{
                      flexDirection: "row",
                      marginVertical: SIZES.h4,
                      alignItems: "center",
                    }}
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
                        <Text style={{ ...FONTS.h5, color: COLORS.white }}>
                          {item.text}
                        </Text>
                      ) : (
                        <Image
                          source={item.image}
                          style={{
                            height: SIZES.h1 * 2.25,
                            width: SIZES.h1 * 2.25,
                            borderRadius: SIZES.h1 * 2,
                          }}
                        />
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
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.h2,
  },
  image: {
    borderColor: COLORS.green3,
    borderWidth: SIZES.h5 / 4,
    borderRadius: SIZES.h1 * 6,
    height: SIZES.h1 * 2.6,
    width: SIZES.h1 * 2.6,
    justifyContent: "center",
    alignItems: "center",
  },
});
