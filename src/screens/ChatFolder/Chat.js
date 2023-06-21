import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'


const Chat = () => {
    return (
        <View style={styles.page}> 
            <View></View>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})