import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import Backward from '../../../assets/photo/backward.jpg'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <TouchableOpacity onPress={goBack} style={styles.button}>
            <Image style={styles.photo} source={Backward} resizeMode="contain"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 16,
        left: 16
    },  

    photo: {
        width: 24,
        height: 24
    }
})

export default HomeScreen