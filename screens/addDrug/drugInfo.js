import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function DrugInfo({ route }) {
    const Info = () => {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>
                    {route.params.drug.entpName}
                </Text>
                <Text style={styles.headerText2}>
                    {route.params.drug.itemName}
                </Text>
                <View style={{ flexDirection: "row", alignItems: 'center', borderBottomColor: "#ececec", borderBottomWidth: 1, width: WIDTH * 0.75, margin: 3 }}>
                    <Text style={styles.contentText}>효과효능</Text>
                    <Text style={styles.contentText2}>{route.params.drug.efcyQesitm}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', borderBottomColor: "#ececec", borderBottomWidth: 1, width: WIDTH * 0.75, margin: 3 }}>
                    <Text style={styles.contentText}>복용방법</Text>
                    <Text style={styles.contentText2}>{route.params.drug.useMethodQesitm}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', borderBottomColor: "#ececec", borderBottomWidth: 1, width: WIDTH * 0.75, margin: 3 }}>
                    <Text style={styles.contentText}>보관방법</Text>
                    <Text style={styles.contentText2}>{route.params.drug.depositMethodQesitm}</Text>
                </View>
            </ScrollView>
        );
    }

    const SideEffect = () => {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>
                    {route.params.drug.entpName}
                </Text>
                <Text style={styles.headerText2}>
                    {route.params.drug.itemName}
                </Text>
                <View style={{ flexDirection: "row", alignItems: 'center', borderBottomColor: "#ececec", borderBottomWidth: 1, width: WIDTH * 0.75, margin: 3 }}>
                    <Text style={styles.contentText}>부작용</Text>
                    <Text style={styles.contentText2}>{route.params.drug.seQesitm}</Text>
                </View>
            </ScrollView >
        );
    }
    return (
        <Tab.Navigator>
            <Tab.Screen name="기본정보" component={Info} />
            <Tab.Screen name="부작용" component={SideEffect} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    headerText: {
        fontSize: 14,
        fontWeight: "400",
        marginLeft: 24,
        marginTop: 30
    },
    headerText2: {
        fontSize: 24,
        fontWeight: "500",
        marginLeft: 24,
        marginTop: 10,
        marginBottom: 35
    },
    contentText: {
        color: "rgba(0, 0, 0, 0.698)",
        fontSize: 12,
        fontWeight: "400",
        marginLeft: 24
    },
    contentText2: {
        color: "rgba(0, 0, 0, 0.698)",
        fontSize: 14,
        fontWeight: "400",
        marginLeft: 24,
        marginBottom: 10
    }
})