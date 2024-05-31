import React, {useEffect, useState} from 'react'
import {Alert, View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity} from 'react-native'
import Logo from '../../../assets/photo/logo-FIS.png'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton'
import Remember from '../../Components/CustomButton/Remeber'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onSignInPress = () => {
        navigation.navigate('HomeScreen')
    }

    const onGooglePress = () => {
        console.warn("Google Sign In")
    }

    const onFacebookPress = () => {
        console.warn("Facebook Sign In")
    }

    const signUp = () => {
        navigation.navigate('SignUp')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo}
                    style={[styles.logo, {height: height  * 0.3}]}
                    resizeMode='contain'
                />

                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername} 
                />
                <CustomInput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry
                />

                <Remember />

                <CustomButton 
                    text="Sign In"
                    onPress={onSignInPress}
                />

                <CustomButton 
                    text="Sign in with Google"
                    onPress={onGooglePress}
                    type='GOOGLE'
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />

                <CustomButton 
                    text="Sign in with Facebook"
                    onPress={onFacebookPress}
                    type='FACEBOOK'
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />

                <View style={styles.remember}>
                    <View>
                        <Text styles={styles.footerText}>Don't Have Account?</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={signUp}>
                            <Text style={styles.signup}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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
    },
    
    footerText: {
        textAlign: 'center',
        color: 'gray'
    },

    signup: {
        color: 'orange',
    },
    remember: {
        width: '70%',
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8
    }
})

export default SignInScreen