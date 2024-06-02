import React from 'react'
import {View, Text} from 'react-native'
import Backward from '../../../assets/photo/backward.jpg'
import { useNavigation } from '@react-navigation/native'

const DiemDanhScreen = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }
    <View>

    </View>
}

export default DiemDanhScreen