import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function StateAlram() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { navigation.goBack() }}
                style={{ marginLeft: 15, marginTop: 24 }}
            >
                <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>
                상태알림
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 60
    },
    headerText: {
        marginTop: 60,
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 24,
        marginLeft: 24,
        fontWeight: "700",
        textAlign: "left",
    },
})