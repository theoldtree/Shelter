import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function MyPage({ navigation }) {

    const TimlinePageHandler = () => {navigation.navigate("타임라인")}
    const StateAlarmPageHandler = () => {navigation.navigate("상태알림")}
    const ConfirmPageHandler = () => {navigation.navigate("공지사항")}

    const PageHandler = ({ text, onPress }) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ margin: 24, fontSize: 16, fontWeight: "400" }}>{text}</Text>
                <TouchableOpacity onPress={onPress} style={{ marginRight: 24 }}>
                    <AntDesign name="right" size={17} color="black" />
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                마이페이지
            </Text>
            <View style={styles.profileContainer}>
                <View style={styles.profile}>
                    <Image
                        style={styles.profile}
                        source={require('../../assets/image/icon/mypage.png')}
                    />
                </View>
                <View style={styles.profileInfoBox}>
                    <Text style={[styles.contentText, { fontSize: 18 }]}>박민석</Text>
                    <Text style={styles.contentText}>관리하는 튼튼이</Text>
                    <View style={{ flexDirection: "row", marginTop: 30 }}>
                        <Text style={styles.contentText}>건강게이지  </Text>
                        <Text style={[styles.contentText, { fontSize: 16 }]}>80% </Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonHeaderFont}>케어</Text>
                <PageHandler text={"타임라인"} onPress={TimlinePageHandler} />
                <PageHandler text={"상태알림"} onPress={StateAlarmPageHandler} />
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonHeaderFont}>도움 및 설정</Text>
                <PageHandler text={"공지사항"} onPress={ConfirmPageHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        backgroundColor: '#fff',
        marginBottom: 60
    },
    headerText: {
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 24,
        marginLeft: 24,
        fontWeight: "700",
        textAlign: "left",
    },
    profileContainer: {
        width: 360,
        height: 128,
        alignItems: "center",
        flexDirection: "row",
    },
    profile: {
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ececec",
        marginLeft: 24,
        marginRight: 24
    },
    profileImage: {
        width: 24,
        height: 24
    },
    profileInfoBox: {
        height: 128,
        justifyContent: "center"
    },
    contentText: {
        fontSize: 12,
        fontWeight: "400",
        textAlign: "left"
    },
    buttonContainer: {
        width: 360,
        borderTopWidth: 1,
        borderTopColor: "#ececec"
    },
    buttonHeaderFont: {
        color: "rgba(0, 0, 0, 0.35)",
        fontSize: 14,
        fontWeight: "500",
        marginTop: 24,
        marginLeft: 24
    }
})