import React, {useEffect, useState} from 'react'
import {Alert, View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity} from 'react-native'
import Logo from '../../../assets/photo/logo-FIS.png'
import { useForm, Controller} from 'react-hook-form'
import {Auth} from 'aws-amplify'
const SignInScreen = () => {

    const {height} = useWindowDimensions();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo}
                    style={[styles.logo, {height: height  * 0.3}]}
                    resizeMode='contain'
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }, 
    logo:{
        width: '70%',
        maxHeight: 200,
        maxWidth: 300,
    }
})

export default SignInScreen