import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Confirm() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    style={{ marginLeft: 15, marginTop: 24 }}
                >
                    <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    FAQ
                </Text>
                <Text style={styles.headerText2}>
                    가장 궁금해하시는 질문들이에요
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#26c7d9",
    },
    header: {
        backgroundColor: "#26c7d9",
        height: 220
    },
    headerText: {
        marginTop: 60,
        color: "white",
        fontSize: 24,
        marginLeft: 24,
        fontWeight: "700",
        textAlign: "left",
    },
    headerText2 :{
        marginTop: 10,
        color: "white",
        fontSize: 22,
        marginLeft: 24,
        fontWeight: "400",
        textAlign: "left",
    }
})