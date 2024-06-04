import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import Backward from '../../../assets/photo/backward.jpg';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import db from '../../../db.json';
import DiemDanhScreen from '../DiemDanhScreen';
import App from '../../../App';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {

    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', paddingBottom: 10 }}>
                    Diem Danh: 
                </Text>
                <FlatList
                    data={db.user}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <TouchableOpacity
                            // Pass the data of the user to the next page: DiemDanhScreen so it can display the correct
                            //
                                onPress={() => navigation.navigate('DiemDanh', { userId: item.id })}
                                style={styles.name}
                            >
                                <Text style={styles.name}>{item.id}. {item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
}

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home Screen',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen 
                name="DiemDanh" 
                component={DiemDanhScreen} 
                options={{
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 16,
        left: 16,
    },
    photo: {
        width: 24,
        height: 24,
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
        fontSize: 20,
    },
});

export default AppNavigator;
