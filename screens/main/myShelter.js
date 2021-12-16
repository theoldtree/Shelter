import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Myshelter() {


    return (
        <View style={styles.container}>
            <View style={{ marginLeft: 11, marginTop: 20 }}>
                <Text style={styles.contentText}>
                    마이쉘터
                </Text>
                <Text style={styles.contentText2}>
                    건강을 잘 유지하고 계시네요!
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
        marginLeft: 18,
        width: 328,
        height: 278,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ececec",
    },
    contentText: {
        fontSize: 24,
        fontWeight: "700",
    },
    contentText2: {
        color: "rgba(0, 0, 0, 0.698)",
        fontSize: 16,
        fontWeight: "400",
    }
})