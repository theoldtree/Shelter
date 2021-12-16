
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NextStep({navigation}) {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height, backgroundColor:"white" }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>

                    <Text style={styles.titleText}>
                        약 추가하기
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 19,
        marginLeft: 10,
        fontWeight: "500",
        textAlign: "left",
    },
})