
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NextStep({navigation}) {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height, backgroundColor:"white" }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack(); }}
                        style={{ marginLeft: 15}}
                    >
                        <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>
                        약 추가하기
                    </Text>
                    <Button
                        title="검색단계로 넘어가기"
                        onPress={navigation.navigate("마지막단계")}
                    />
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