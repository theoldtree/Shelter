import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, Button, TouchableOpacity } from 'react-native';
import { Svg, Path } from "react-native-svg";
import DaySelctor from '../calendar/calendar';
import TakingDrugInfos from './takingDrugInfos';

const BEFORE_SCREEN = 0;
const AFTER_SCREEN = 1;
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").height;

export default function Main() {

    const [screen, setScreen] = useState(0);
    const [currentDate, setCurrentDate] = useState('');
    const [userInfo, setUserInfo] = useState('박밍꾸');
    const [drugInfos, setDrugInfos] = useState({
        drugSort:{master:2,healthCare:2,general:0,other:0},
        drugList:["락토핏 유산균","처방약","아이클리어","코자엑스큐"],
    });
    const [buttonInfos, setButtonInfos] = useState({
        breakfast: 1,
        lunch: 0,
        dinner: 0,
        midnight: 0,
        time: "06:30 ~ 08:30"
    });

    const buttonHandler1 = () => {
        setButtonInfos({
            breakfast: 1,
            lunch: 0,
            dinner: 0,
            midnight: 0,
            time: "06:30 ~ 08:30"
        })
    }
    const buttonHandler2 = () => {
        setButtonInfos({
            breakfast: 0,
            lunch: 1,
            dinner: 0,
            midnight: 0,
            time: "11:30 ~ 13:30"
        })
    }
    const buttonHandler3 = () => {
        setButtonInfos({
            breakfast: 0,
            lunch: 0,
            dinner: 1,
            midnight: 0,
            time: "17:30 ~ 19:30"
        })
    }
    const buttonHandler4 = () => {
        setButtonInfos({
            breakfast: 0,
            lunch: 0,
            dinner: 0,
            midnight: 1,
            time: "21:30 ~ 23:30"
        })
    }
    const screenHandler = () => {
        setScreen(0)
    }
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
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: HEIGHT, backgroundColor: "white" }}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: WIDTH, backgroundColor: "white" }}>
                <TouchableOpacity style={styles.drawer}>
                    <Svg style={{ height: 12, width: 20 }} viewBox="0 0 20 12">
                        <Path fill={"black"} d="M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z" />
                    </Svg>
                </TouchableOpacity>
                {
                    {
                        [BEFORE_SCREEN]: (
                            <View>
                                <View style={styles.header}>
                                    <TouchableOpacity
                                        onPress={() => setScreen(1)}
                                    >
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={styles.headerfont1}>
                                                {currentDate}
                                            </Text>
                                            <Svg style={{ height: 8, width: 12 }} viewBox="0 0 12 8">
                                                <Path fill={"black"} d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" />
                                            </Svg>
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.headerfont2}>
                                        {userInfo}님,
                                    </Text>
                                    <Text style={styles.headerfont3}>
                                        오늘도 건강관리 잊지마세요! 
                                    </Text>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        onPress={buttonHandler1}
                                    >
                                        <View style={[styles.buttonView, {
                                            backgroundColor: buttonInfos.breakfast ? "rgb(0, 189, 211)" : "white"
                                        }]}>
                                            <Text style={[styles.buttonText, {
                                                color: buttonInfos.breakfast ? "white" : "black"
                                            }]}>
                                                아침
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={buttonHandler2}
                                    >
                                        <View style={[styles.buttonView, {
                                            backgroundColor: buttonInfos.lunch ? "rgb(0, 189, 211)" : "white"
                                        }]}>
                                            <Text style={[styles.buttonText, {
                                                color: buttonInfos.lunch ? "white" : "black"
                                            }]}>
                                                점심
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={buttonHandler3}
                                    >
                                        <View style={[styles.buttonView, {
                                            backgroundColor: buttonInfos.dinner ? "rgb(0, 189, 211)" : "white"
                                        }]}>
                                            <Text style={[styles.buttonText, {
                                                color: buttonInfos.dinner ? "white" : "black"
                                            }]}>
                                                저녁
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={buttonHandler4}
                                    >
                                        <View style={[styles.buttonView, {
                                            backgroundColor: buttonInfos.midnight ? "rgb(0, 189, 211)" : "white"
                                        }]}>
                                            <Text style={[styles.buttonText, {
                                                color: buttonInfos.midnight ? "white" : "black"
                                            }]}>
                                                취침전
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ),
                        [AFTER_SCREEN]: (
                            <DaySelctor onPress={screenHandler}/>
                        ),
                    }[screen]
                }
                <TakingDrugInfos time={buttonInfos.time} drugInfos={drugInfos}/>
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
    drawer: {
        margin: 15,
        marginTop: 50
    },
    header: {
        marginLeft: 24,
        marginTop: 7,
    },
    headerfont1: {
        marginRight: 8,
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 24,
        fontWeight: "700",
    },
    headerfont2: {
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 24,
        marginTop: 105,
        fontWeight: "700",
        textAlign: 'left',
    },
    headerfont3: {
        color: "rgb(0, 0, 0)",
        fontSize: 16,
        marginTop: 7,
        fontWeight: "400",
        textAlign: 'left',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 45
    },
    buttonView: {
        width: 56,
        height: 32,
        margin: 15,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "400",
    }
})