import React, {useState} from 'react'
import {Alert, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import Backward from '../../../assets/photo/backward.jpg'


const ForgotPasswordScreen = () => {
    // States: value that can be changed whenever the use type in new value
    const navigation = useNavigation();
    const routes = useNavigationState(state => state.routes);
    const {control, handleSubmit} = useForm();

    const onSignInPress = () => {
        navigation.navigate("SignIn");
    }

    const confirm = () => {
        navigation.navigate('ResetPassword')
    }

    const goBack = () => {
        navigation.goBack();
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={goBack} style={styles.button}>
                <Image style={styles.photo} source={Backward} resizeMode="contain"/>
            </TouchableOpacity>
            <View style={styles.root}>
                {/** Props: parent pass components to its child, which is defined in CustomButton.js */}
                <Text style={styles.signUp}>Reset your password</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', alignSelf: 'stretch'}}>Username*</Text>
                <CustomInput 
                    placeholder="Enter your username"
                    control={control}
                    name="username"
                    rules={{
                        required: "Username is required!"
                    }}
                />
                <CustomButton 
                    text="Continue"
                    onPress={handleSubmit(confirm)}
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
        left: 16,
        flexDirection: 'row'
    },  

    photo: {
        width: 24,
        height: 24
    },
    text :{
        fontSize: 20,
        color: 'black'
    }
})

export default ForgotPasswordScreen
