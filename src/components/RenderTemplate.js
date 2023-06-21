import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const RenderTemplate = ({ data }) => {
    return (
        <View style={styles.page}>
            <View style={styles.circle}></View>
        </View>
    )
}

export default RenderTemplate

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white
    }

})