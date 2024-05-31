import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../Screens/SignInScreen/SignInScreen'
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen'
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen'
import ResetPasswordScreen from '../Screens/ResetPasswordScreen'
import HomeScreen from '../Screens/HomeScreen'
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation