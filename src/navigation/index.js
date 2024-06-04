import React, {useState} from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../Screens/SignInScreen/SignInScreen'
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen'
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen'
import ResetPasswordScreen from '../Screens/ResetPasswordScreen'
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import DiemDanhScreen from '../Screens/DiemDanhScreen/DiemDanhScreen'
import HomeScreen from '../Screens/Home Screen'
import AppNavigator from '../Screens/Home Screen'

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
    // custom logic
    return true;
};

export default function Navigation() {
    const isSignedIn = getIsSignedIn();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {isSignedIn ? (
                    <>
                        <Stack.Screen name="HomeScreen" component={AppNavigator} />
                        <Stack.Screen name="DiemDanh" component={DiemDanhScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="SignIn" component={SignInScreen}/>
                        <Stack.Screen name="SignUp" component={SignUpScreen}/>
                        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
                        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
