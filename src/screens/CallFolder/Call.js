import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RenderTemplate from '../../components/RenderTemplate'
import { COLORS, FONTS, SIZES, icons, images } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const calls = [
    {
        id: 1,
        Topic: "create call link",
        Text: "share a link for your whatsapp call",
        image1: icons.link,
        incomingcall: true
    },
    {
        id: 2,
        Topic: "Julius CSC",
        Text: "Today10:22",
        image1: icons.phone,
        incomingcall: false
    },
    {
        id: 3,
        Topic: "Abdulmuizz Hostel",
        Text: "Yesterday 21:51",
        image1: icons.phone,
        incomingcall: true
    },
    {
        id: 4,
        Topic: "My Sister",
        image1: icons.phone,
        incomingcall: false,
        image2: images.smiley
    },
    {
        id: 5,
        Topic: "My Sister",
        image1: icons.phone,
        incomingcall: false,
        image2: images.smiley
    },
    {
        id: 6,
        Topic: "My Sister",
        image1: icons.phone,
        incomingcall: false,
        image2: images.smiley
    },

    {
        id: 7,
        Topic: "My Sister",
        image1: icons.phone,
        incomingcall: false,
        image2: images.smiley
    }


]
const _renderheader = () => {
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                data={calls.slice(0, 1)}
                renderItem={({ item }) => <RenderTemplate data={item} />} />
            <Text style={{ marginTop: SIZES.h3, ...FONTS.body3, fontWeight: "bold" }}> Recent </Text>
        </View>
    )
}
const Call = ({ }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={_renderheader}
                data={calls.slice(1, 7)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("CallDetails", { item })} style={{ flexDirection: "row" }}>
                            <View style={styles.profile}>
                                <Image source={item.image2} style={{ height: SIZES.h1 * 2.6, width: SIZES.h1 * 2.5, borderRadius: SIZES.base * 7.5 }} />
                            </View>
                            {/* Profile view ends */}
                            <View style={{ marginTop: SIZES.h3 * 1.8, marginLeft: SIZES.h4, flex: 1 }}>
                                <Text>{item.Topic}</Text>
                                <View style={{ flexDirection: "row", }}>
                                    {item.incomingcall ?
                                        <Image source={icons.upright} style={{ height: SIZES.h1 * 0.5, width: SIZES.h2 * 0.8, marginTop: SIZES.h5 * 0.2 }} />
                                        :
                                        <Image source={icons.downleft} style={{ height: SIZES.h1 * 0.5, width: SIZES.h2 * 0.8, marginTop: SIZES.h5 * 0.2 }} />}
                                    <Text style={{ marginLeft: SIZES.h6 }}>{item.Text}</Text>
                                </View>
                            </View>
                            <Image source={item.image1} style={{ height: SIZES.h1 * 1.0, width: SIZES.h2 * 1.2, marginTop: SIZES.h1 * 1.2, }} />
                        </TouchableOpacity>
                    )
                }} />
            <View style={{
                position: "absolute", bottom: SIZES.h3 * 0.3,
                alignSelf: "center",
                alignItems: "center",
                left: SIZES.h1 * 7.5
            }}>
                <View style={{
                    height: SIZES.h1 * 2.2,
                    width: SIZES.h2 * 3.0,
                    backgroundColor: COLORS.green,
                    borderRadius: SIZES.base * 6,
                    marginBottom: SIZES.h3 * 0.8,
                    paddingTop: SIZES.h4,
                    alignSelf: "center",
                    alignItems: "center"

                }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Image source={icons.phone} style={{ height: SIZES.h1 * 1.0, width: SIZES.h2 * 1.2, marginTop: SIZES.h5 * 0.5 }} />
                        <Text style={{ color: "white", fontWeight: "bold", ...FONTS.body1, marginBottom: SIZES.h4, right: SIZES.h6 }}>+</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Call

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
    },
    profile: {
        height: SIZES.h1 * 2.2,
        width: SIZES.h2 * 3.0,
        backgroundColor: COLORS.grey,
        borderRadius: SIZES.base * 6,
        marginTop: SIZES.h3 * 0.8,

    }
})