import { FlatList, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
const calls = [
    {
        id: 1,
        Topic: "create call link",
        Text: "share a link for your whatsapp call"
    },
    {
        id: 2,
        Topic: "Julius CSC",
        Text: "Today10:22"

    },
    {
        id: 2,
        Topic: "Abdulmuizz Hostel",
        Text: "Yesterday,21:51"

    }

]

const _renderheader = () => {
    return (
        <View>
            <FlatList
                data={calls.slice(0, 1)}
                renderItem={({ item }) => <RenderTemplate data={calls} />} />
        </View>
    )
}

const Call = () => {
    return (
        <View>
            <FlatList />
        </View>
    )
}

export default Call

const styles = StyleSheet.create({})