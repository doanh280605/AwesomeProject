import React, {useState} from 'react'
import {Alert, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import Backward from '../../../assets/photo/backward.jpg'
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ResetPasswordScreen = () => {
    // States: value that can be changed whenever the use type in new value

    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSignInPress = () => {
        navigation.navigate("SignIn");
    }

    const onSubmitPress = () => {
        navigation.navigate('SignIn')
    }

    const goBack = () => {
        navigation.goBack();
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <TouchableOpacity onPress={goBack} style={styles.button}>
                    <Image style={styles.photo} source={Backward} resizeMode="contain"/>
                </TouchableOpacity>
                {/** Props: parent pass components to its child, which is defined in CustomButton.js */}
                <Text style={styles.signUp}>Reset your password</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', marginRight: 280}}>Confimation Code*</Text>
                <CustomInput 
                    placeholder="Enter your confirmation code"
                    name="code"
                    control={control}
                    rules={{
                        required: "Confirmation code is required!"
                    }}
                />
                <Text style={{ fontWeight: 'bold', color: 'black', marginRight: 333}}>Password*</Text>
                <CustomInput 
                    placeholder="Enter your new password"
                    name="password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: "New password is required!",
                        minLength: {
                            value: 4, 
                            message: "Password should be at least 4 characters long!"
                        }}
                    }
                />
                <CustomButton 
                    text="Confirm"
                    onPress={handleSubmit(onSubmitPress)}
                    type="VERIFY"
                />
               
                <View style={styles.agreement}>
                    <View>
                        <TouchableOpacity onPress={onSignInPress}>
                            <Text style={styles.signup}> Back to Sign In</Text>
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

    footerText: {
        textAlign: "center",
        color: "red"
    },

    signup: {
        color: 'blue'
    },  

    signUp: { 
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        color: '#051C60',
        marginTop: 50,
    },

    agreement:{
        justifyContent: 'center',
        flexDirection: 'row'
    },
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

export default ResetPasswordScreen
