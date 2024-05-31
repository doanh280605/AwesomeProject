import React, {useState} from 'react';
import { View, TouchableOpacity, Switch, StyleSheet, Text, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Remember  = () => {
    // States value
    const [click, setClick] = useState("false");

    const navigation = useNavigation();

    const forgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }
    return (
        <View style={styles.Remember}>
            <View style={styles.switch}>
                <Switch value = {click} onValueChange={setClick} trackColor={{true: "green", false: "gray"}} />
                <Text style={styles.rememberText}> Remember Me </Text> 
            </View>
            <View>
                <TouchableOpacity onPress={forgotPassword}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Remember: {
        width: "100%",
        paddingHordizontal: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8
    },
    switch:{
        flexDirection: "row",
        gap: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    forgetText: {
        fontSize: 13,
        color: 'orange'
    }
})

export default Remember