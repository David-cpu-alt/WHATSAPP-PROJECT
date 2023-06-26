import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const RenderTemplate = ({ data }) => {
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.circle}>
                    <Image source={data.image1} style={{ height: SIZES.h1 * 1.3, width: SIZES.h2 * 1.8, marginTop: SIZES.h3, marginLeft: 20 }} />
                </View>
                <View style={{ marginTop: SIZES.h2 * 1, marginLeft: SIZES.h4 }}>
                    <Text style={{ ...FONTS.body6 }}>{data.Topic}</Text>
                    <Text>{data.Text}</Text>
                </View>
            </View>
            {/* flex direction view ends */}
        </View>
    )
}

export default RenderTemplate

const styles = StyleSheet.create({

    circle: {
        height: SIZES.h1 * 2.8,
        width: SIZES.h2 * 3.8,
        backgroundColor: COLORS.green,
        borderRadius: SIZES.base * 6,
        marginTop: SIZES.h3 * 0.8,
    }

})