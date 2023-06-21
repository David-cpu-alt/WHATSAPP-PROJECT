import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import Toptab from '../../../navigator/Toptab'
const HomeScreen = () => {
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

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: { flex: 1, },
    container: {
        // height: "50%",
        width: SIZES.h1 * 13,
        backgroundColor: COLORS.green,

    },


})