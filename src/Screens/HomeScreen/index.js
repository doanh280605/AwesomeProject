import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList} from 'react-native'
import Backward from '../../../assets/photo/backward.jpg'
import { useNavigation } from '@react-navigation/native'

const contacts = [
    { name: 'Nhan vien 1', key: '1' },
    { name: 'Nhan vien 2', key: '2' },
    // Add more contacts as needed
  ];

const HomeScreen = () => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack()
    }

    const nhanVien = () => {
        navigation.navigate("DiemDanh");
    }
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <TouchableOpacity onPress={goBack} style={styles.button}>
                <Image style={styles.photo} source={Backward} resizeMode="contain"/>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.title}>Diem Danh</Text>
                <FlatList
                    data={contacts}
                    renderItem={({ item }) => (
                    <View style={styles.item}>
                        <TouchableOpacity onPress={nhanVien} style={styles.name}>
                            <Text style={styles.name}>{item.key}. {item.name}</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                />
            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 16,
        left: 16
    },  

    photo: {
        width: 24,
        height: 24
    }, 

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        color: 'blue',
        marginTop: 50,
    },

    container: {
        flex: 1,
        paddingTop: 22,
       
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        fontSize: 18,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    name: {
        color: 'black',
        fontSize: 20
    },
})

export default HomeScreen