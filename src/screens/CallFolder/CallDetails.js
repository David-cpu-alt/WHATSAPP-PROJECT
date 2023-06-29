import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, icons, SIZES, COLORS } from '../../constants'
const CallDetails = ({ route }) => {
    const { Topic, image2, image1 } = route.params.item
    console.log('lllllllllllll', Topic)
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: "row", marginTop: SIZES.h3, justifyContent: "space-between" }} >
                <Image source={icons.goback} style={{ height: "90%", width: "8%", marginLeft: SIZES.h1 * 0.3, marginTop: SIZES.h1 * 0.08 }} />
                <Text style={{ color: "white", ...FONTS.body2, marginRight: SIZES.h1 }}>Call info </Text>
                <Image source={icons.message} style={{ height: "100%", width: "8%", marginLeft: SIZES.h1 * 3, marginTop: SIZES.h1 * 0.08 }} />
                <Image source={icons.threedots} style={{ height: "90%", width: "7%", marginRight: SIZES.h1 * 0.1, marginTop: SIZES.h1 * 0.08 }} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", height: SIZES.h1 * 3, width: "100%", borderWidth: 1, borderBottomWidth: 1, borderTopWidth: 0, marginTop: SIZES.h3 * 1.5, borderLeftWidth: 0, borderRightWidth: 0, paddingBottom: SIZES.h1 }}>
                <View style={styles.profile}>
                    <Image source={image2} style={{ height: SIZES.h1 * 2.6, width: SIZES.h1 * 2.5, borderRadius: SIZES.base * 7.5 }} />
                </View>
                <View style={{ marginLeft: SIZES.h2 }}>
                    <Text >{Topic}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ maxWidth: 150 }} numberOfLines={1} ellipsizeMode="tail">Hey there! am using whatsapp  </Text>
                        <Image source={image1} style={{ height: SIZES.h1 * 1.0, width: SIZES.h2 * 1, marginLeft: SIZES.h3 * 1.8, bottom: SIZES.h5 }} />
                        <Image source={icons.videocall} style={{ height: SIZES.h1 * 1.0, width: SIZES.h2 * 1.2, marginLeft: SIZES.h3 * 2, bottom: SIZES.h5 }} />
                    </View>
                </View>

            </View>
            <Text style={{ marginTop: SIZES.h2, marginLeft: SIZES.h2 * 2 }}>Yesterday</Text>
            <View style={{ flexDirection: "row" }}>
                <Image source={icons.downleft} style={{ height: SIZES.h1 * 1.0, width: SIZES.h2 * 1.8, marginTop: SIZES.h1 }} />
                <View style={{ marginLeft: SIZES.h3 }}>
                    <Text style={{ marginTop: SIZES.h2 }}>Missed</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={icons.videocall} style={{ height: SIZES.h1 * 1.0, width: SIZES.h2 * 1.2, }} />
                        <Text style={{ marginTop: SIZES.h5 * 0.5, marginLeft: SIZES.h5 }}>23:12</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CallDetails

const styles = StyleSheet.create({
    page: {
        //marginTop: 30,
        backgroundColor: "grey",
        flex: 1,
        paddingHorizontal: SIZES.h5
    },
    profile: {
        height: SIZES.h1 * 2.2,
        width: SIZES.h2 * 3.0,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.base * 6,
        marginTop: SIZES.h3 * 0.8,

    }
})