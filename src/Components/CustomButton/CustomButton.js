import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const CustomButton = ({onPress, text, type='PRIMARY'}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
        justifyContent: 'center'
    },

    container_GOOGLE: {
        marginTop: 50,
    },

    container_FACEBOOK: {
        marginTop: 10
    },

    text_PRIMARY:{
        color: 'white'
    },  

    text: {
        fontWeight: 'bold',
        color: 'black', 
        alignItems: 'center'
    }
})

export default CustomButton