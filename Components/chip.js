import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';

export default function Chip({ name,company,drugSort }) {



    return (
        <View style={styles.container}>
            <Text>{name}{company}{drugSort}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 88,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
})