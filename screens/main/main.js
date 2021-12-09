import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, Button, TouchableOpacity } from 'react-native';
import { Svg, Path } from "react-native-svg";
import { Octicons } from '@expo/vector-icons';

const BEFORE_SCREEN = 0;
const AFTER_SCREEN = 1;

export default function Main() {

    const [screen, setScreen] = useState(0);
    const [currentDate, setCurrentDate] = useState('');
    const [info, setInfo] = useState('박밍꾸');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        setCurrentDate(
            year + '년 ' + month + '월 ' + date + '일 '
        );
        var name = ''
    }, []);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
                {
                    {
                        [BEFORE_SCREEN]: (
                            <View style={styles.header}>
                                <TouchableOpacity
                                    onPress={()=>setScreen(1)}
                                >
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text style={styles.headerfont1}>
                                            {currentDate}
                                        </Text>
									<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
										<Path fill = {"black"}     d = "M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z"/>
									</Svg>
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.headerfont2}>
                                    {info}님,
                                </Text>
                                <Text style={styles.headerfont3}>
                                    오늘도 건강관리 잊지마세요!
                                </Text>
                            </View>
                        ),
                        [AFTER_SCREEN]: (
                            <Text>
                                {currentDate}
                                <Button
                                    onPress={()=>setScreen(0)}
                                />
                            </Text>
                        ),
                    }[screen]
                }
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
    header: {
        position: "absolute",
        left: 24,
        top: 112,
    },
    headerfont1: {
        marginRight: 8,
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 24,
        fontWeight: "700",
    },
    headerfont2:{
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 24,
        marginTop: 70,
        fontWeight: "700",
        textAlign: 'left'
    },
    headerfont3: {
        color: "rgb(0, 0, 0)",
        fontSize: 16,
        fontWeight: "400",
        textAlign: 'left'
    }
})