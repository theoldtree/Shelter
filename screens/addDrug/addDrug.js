
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddDrug({navigation}) {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height, backgroundColor: "white" }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("main") }}
                        style={{ marginLeft: 15 }}
                    >
                        <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>
                        약 추가하기
                    </Text>
                </View>
                <Text>복용하는 약이</Text>
                <Text style={{color:"#26c7d9"}}>처방약인가요<Text style={{color:"black"}}>?</Text></Text>
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