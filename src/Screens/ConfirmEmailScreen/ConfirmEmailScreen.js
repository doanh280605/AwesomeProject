import React, {useState} from 'react'
import {Alert, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
import Backward from '../../../assets/photo/backward.jpg'


const ConfirmEmailScreen = () => {
    // States: value that can be changed whenever the use type in new value
    const navigation = useNavigation();

    const {control, handleSubmit, watch} = useForm();

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    const verify = () => {
        navigation.navigate("HomeScreen")
    }
    
    const onResendPress = () => {
        console.warn("Resend Press")
    }

    const goBack = () => {
        navigation.goBack()
    }
    
    return (
        
        <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={goBack} style={styles.button}>
                <Image style={styles.photo} source={Backward} resizeMode="contain"/>
            </TouchableOpacity>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Your Email</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', alignSelf: 'stretch'}}>Username*</Text>
                <CustomInput 
                    placeholder="Enter your username"
                    control={control}
                    name="username"
                    rules={{
                        required: "Username is required!",
                    }}
                />
                <Text style={{ fontWeight: 'bold', alignSelf: 'stretch', color: 'black'}}>Confirmation Code*</Text>
                <CustomInput 
                    placeholder="Enter your confirmation code" 
                    name="code"
                    control={control}
                    rules={{
                        required: "Confirmation code is required!",
                    }}
                />
                <CustomButton 
                    text="Verify"
                    onPress={handleSubmit(verify)}
                    type="VERIFY"
                />
                <View style={styles.agreement}>
                    <View>
                        <TouchableOpacity onPress={onResendPress}>
                            <Text style={styles.footerText}> Resend Code </Text>
                        </TouchableOpacity>
                    </View>
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

    title: { 
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        color: '#051C60',
        marginTop: 50,
    },

    agreement:{
        width: "70%",
        justifyContent: "space-between",
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

export default ConfirmEmailScreen
