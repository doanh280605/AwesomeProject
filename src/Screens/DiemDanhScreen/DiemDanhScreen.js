import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import db from '../../../db.json';

function DiemDanhScreen() {
    const route = useRoute();
    const { userId } = route.params;

    const [data, setData] = useState(db.user.find(user => user.id === userId));

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {data && (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'green', paddingBottom: 10 }}>
                        Check-in time:
                    </Text>
                    <Text style={styles.name}>{data.id + '. ' + data.name}</Text>
                    <Text style={styles.entryTime}>Entry Time: {data.entryTime}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        color: 'blue',
    },
    entryTime: {
        fontSize: 16,
        color: 'orange',
    },
});

export default DiemDanhScreen;