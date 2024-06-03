import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import Backward from '../../../assets/photo/backward.jpg';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import db from '../../../db.json';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    const goBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.container}>
                <FlatList
                    data={db.user}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <TouchableOpacity
                            // Pass the data of the user to the next page: DiemDanhScreen so it can display the correct
                            // informatio
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

function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Diem Danh',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
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

export default App;
