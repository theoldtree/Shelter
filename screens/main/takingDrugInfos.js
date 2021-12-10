import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, Button, TouchableOpacity } from 'react-native';
import { Svg, Path } from "react-native-svg";

export default function TakingDrugInfos({ time, drugInfos }) {
    return (
        <View>
            <View style={[styles.rowContianer, { marginLeft: 18 }]}>
                <View style={styles.upperInnerContainer}>
                </View>
                <View style={styles.upperInnerContainer}>
                    <Text style={styles.contentfont}>
                        {time}
                    </Text>
                    <Svg style={{ height: 20, width: 16, marginLeft: 30 }} viewBox="0 0 16 20">
                        <Path fill={"#FDC959"} d="M8 19.5C9.1 19.5 10 18.6 10 17.5H6C6 18.6 6.89 19.5 8 19.5ZM14 13.5V8.5C14 5.43 12.36 2.86 9.5 2.18V1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5V2.18C3.63 2.86 2 5.42 2 8.5V13.5L0 15.5V16.5H16V15.5L14 13.5Z" />
                    </Svg>
                </View>
            </View>
            <View style={[styles.rowContianer, { marginLeft: 18 }]}>
                <View style={[styles.downInnerContainer, { alignItems: "center" }]}>
                    <View style={[styles.rowContianer]}>
                        <View style={[styles.labelView, { backgroundColor: "rgb(235, 56, 33)" }]}>
                            <Text style={styles.labelNumber}>{drugInfos.drugSort.master}</Text>
                            <Text style={styles.labelText}>전문</Text>
                        </View>
                        <View style={[styles.labelView, { backgroundColor: "rgb(38, 199, 217)" }]}>
                            <Text style={styles.labelNumber}>{drugInfos.drugSort.healthCare}</Text>
                            <Text style={styles.labelText}>건강기능</Text>
                        </View>
                    </View>
                    <View style={styles.rowContianer}>
                        <View style={[styles.labelView, { backgroundColor: "rgb(242, 133, 38)" }]}>
                            <Text style={styles.labelNumber}>{drugInfos.drugSort.general}</Text>
                            <Text style={styles.labelText}>일반</Text>
                        </View>
                        <View style={[styles.labelView, { backgroundColor: "rgb(137, 106, 243)" }]}>
                            <Text style={styles.labelNumber}>{drugInfos.drugSort.other}</Text>
                            <Text style={styles.labelText}>의약약품</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.downInnerContainer}>
                    {
                        drugInfos.drugList.map((drug,index) => {
                            return (
                                <View key={index.key} style={styles.drugView}>
                                    <Text style={styles.drugFont}>
                                        {drug}
                                    </Text>
                                    <Svg style={{ height: 14, width: 18, paddingRight: 17 }} viewBox="0 0 18 14">
                                        <Path fill={"#8BA629"} d="M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z" />
                                    </Svg>
                                </View>
                            );
                        })
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContianer: {
        flexDirection: "row",
    },
    downContainer: {
        flexDirection: "column"
    },
    upperInnerContainer: {
        width: 164,
        height: 55,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowRadius: 2,
        alignItems: "center",
        flexDirection: "row"
    },
    labelView: {
        backgroundColor: "rgb(38, 199, 217)",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowRadius: 2,
        width: 64,
        height: 80,
        borderRadius: 4,
        margin: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    labelText: {
        color: "rgb(255, 255, 255)",
        fontSize: 12,
        fontWeight: "400",
        marginTop: 6,
    },
    labelNumber: {
        shadowColor: "rgba(0, 0, 0, 0.25)",
        color: "rgb(255, 255, 255)",
        fontSize: 24,
        fontWeight: "700",
        marginTop: 10,
    },
    downInnerContainer: {
        width: 164,
        height: 220,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowRadius: 2,
        flexDirection: "column",
        marginTop: 1,
        justifyContent: "center"
    },
    contentfont: {
        color: "black",
        fontSize: 14,
        fontWeight: "400",
        marginLeft: 10,
    },
    drugFont: {
        color: "rgba(0, 0, 0, 0.698)",
        fontSize: 12,
        fontWeight: "400",
        margin: 6
    },
    drugView: {
        paddingLeft: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})