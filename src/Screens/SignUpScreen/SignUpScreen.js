import React from 'react'
import {Alert,View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native'
import CustomButton from '../../Components/CustomButton'
import CustomInput from '../../Components/CustomInput'
import Backward from '../../../assets/photo/backward.jpg'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const SignUpScreen = () => {
    const navigation = useNavigation();
    const routes = useNavigationState(state => state.routes);
    const {control, handleSubmit, watch} = useForm();

    const pwd = watch('password')

    const googleSignIn = () => {
        console.warn("Google Sign In");
    }
    
    const facebookSignIn = () => {
        console.warn("Facebook Sign In");
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    const confirmEmail = () => {
        navigation.navigate('ConfirmEmail')
    }

    const goBack = () => {
        navigation.goBack();
    }

    const getPreviousRouteName = () => {
        if (routes.length > 1) {
            return routes[routes.length - 2].name;
        }
        return null;
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <TouchableOpacity onPress={goBack} style={styles.button}>
                    <Image style={styles.photo} source={Backward} resizeMode="contain"/>
                    <Text style={styles.text}>{getPreviousRouteName()}</Text>
                </TouchableOpacity>
                {/** Props: parent pass components to its child, which is defined in CustomButton.js */}
                <Text style={styles.signUp}>Sign Up</Text>
                <CustomInput 
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: "Username required!",
                        minLength: {
                            value: 3, 
                            message: "Username should be at least 3 characters long!"
                        },
                        maxLength: {
                            value: 10,
                            message: "Username shouldn't be too long!"
                        }
                    }}
                />
                <CustomInput 
                    placeholder="Email"
                    name="email"
                    control={control}    
                    rules={{
                        required: 'Email required!',
                        pattern: {value: EMAIL_REGEX, message: "Invalid Email!"},
                    }}
                />
                <CustomInput 
                    placeholder="Password" 
                    name="password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Password required!',
                        minLength: {
                            value: 4,
                            message: 'Password should be at least 4 characters long!'
                        }
                    }}
                />

                <CustomInput 
                    placeholder="Confirm Password"
                    name="confirm-password"
                    control={control}
                    secureTextEntry
                    rules={{
                        validate: value => value === pwd || "Password does not match!"
                    }}
                />

                <CustomButton 
                    text="Sign up"
                    onPress={handleSubmit(confirmEmail)}
                />
                <Text>By registering, you confirm that you accept our </Text>
                <View style={styles.agreement}>
                    <Text>
                        <TouchableOpacity onPress={() => Alert.alert("Terms of Use")}>
                            <Text style={styles.terms}>Terms of Use</Text>
                        </TouchableOpacity> </Text>
                        <Text>
                            and 
                        </Text>
                    <Text>
                        <TouchableOpacity onPress={() => Alert.alert("Privacy Policy")}>
                            <Text style={styles.terms}> Privacy Policy</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
                <CustomButton 
                    text="Sign up with Google"
                    onPress={googleSignIn}
                    type="GOOGLE"
                />

                <CustomButton 
                    text="Sign up with Facebook"
                    onPress={facebookSignIn}
                    type="FACEBOOK"
                />
                <View style={styles.agreement}>
                    <View>
                        <Text style={styles.footerText}>Have An Account? </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={onSignInPress}>
                            <Text style={styles.signup}> Sign In</Text>
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
        backgroundColor: 'transparent'
    },
    footerText: {
        textAlign: "center",
        color: "gray"
    },
    signup: {
        color: "blue",
    }, 
    rememberView : {
        width : "70%",
        paddingHorizontal : 50,
        justifyContent: "space-between",
        alignItems : "center",
        flexDirection : "row",
        marginBottom : 8
    },
    signUp: { 
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        color: '#051C60',
        marginTop: 50,
    },
    terms: {
        color: '#f08080',
        justifyContent: 'center'
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
        fontSize: 15,
        color: 'black'
    }
})

export default SignUpScreen