
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import NextStep from './nextStep';
import SearchResult from './searchResult';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';


export default function AddDrug({ navigation }) {

    const [buttonVlaues, setButtonValues] = useState({
        button1: 1,
        button2: 0,
        button3: 0
    })

    const [checked, setChecked] = useState('first');
    const [checked2, setChecked2] = useState('first');
    const [checked3, setChecked3] = useState('first');
    const [hopital, setHospital] = useState();
    const [detail, setDetail] = useState();

    const SelectView = () => {
        return (
            (checked === 'first') ?

                <View style={[styles.header, { flexDirection: "row", paddingLeft: 15, alignItems: "center" }]}>
                    <View style={styles.buttonContainter}>
                        <RadioButton
                            value="first"
                            color="black"
                            status={checked2 === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked2('first')}
                        />
                        <Text style={styles.buttonText}>일반의약품</Text>
                    </View>
                    <View style={styles.buttonContainter}>
                        <RadioButton
                            value="second"
                            color="black"
                            status={checked2 === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked2('second')}
                        />
                        <Text style={styles.buttonText}>건강기능식품</Text>
                    </View>
                </View> :
                <View></View>
        );
    }

    const ImageRender1 = () => {
        return (
            (checked3 === 'first') ?
                <Image
                    style={styles.image}
                    source={require('../../assets/image/icon/1.png')}
                /> :
                <Image
                    style={styles.image}
                    source={require('../../assets/image/icon/4.png')}
                />
        )
    }

    const ImageRender2 = () => {
        return (
            (checked3 === 'second') ?
                <Image
                    style={styles.image}
                    source={require('../../assets/image/icon/2.png')}
                /> :
                <Image
                    style={styles.image}
                    source={require('../../assets/image/icon/5.png')}
                />
        )
    }

    const ImageRender3 = () => {
        return (
            (checked3 === 'third') ?
                <Image
                    style={styles.image}
                    source={require('../../assets/image/icon/3.png')}
                /> :
                <Image
                    style={styles.image}
                    source={require('../../assets/image/icon/6.png')}
                />
        )
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height, backgroundColor: "white" }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack(); }}
                        style={{ marginLeft: 15 }}
                    >
                        <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>
                        약 추가하기
                    </Text>
                </View>
                <View style={styles.header}>
                    <Text style={[styles.headerText, { marginTop: 50, }]}>복용하는 약이</Text>
                    <Text style={[styles.headerText, { color: "#26c7d9" }]}>처방약인가요<Text style={[styles.headerText, { marginLeft: 0 }]}>?</Text></Text>
                    <Text style={styles.headerSubText}   >
                        처방약이라면 혼합/단일/기타 중 선택해주세요.{'\n'}처방약이 아니라면 바로 의약품 검색 화면으로 넘어갑니다.
                    </Text>
                </View>
                <View style={[styles.header, { marginTop: 20, flexDirection: "row", paddingLeft: 15, alignItems: "center" }]}>
                    <View style={styles.buttonContainter}>
                        <RadioButton
                            value="first"
                            color="black"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <Text style={styles.buttonText}>처방약</Text>
                    </View>
                    <View style={styles.buttonContainter}>
                        <RadioButton
                            value="second"
                            color="black"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={styles.buttonText}>처방약이 아닙니다</Text>
                    </View>
                </View>

                <SelectView />
                <View style={[styles.header, { flexDirection: "row", paddingLeft: 15, alignItems: "center" }]}>
                    <View style={styles.imageContainer}>
                        <ImageRender1 />
                        <View style={styles.buttonContainter}>
                            <RadioButton
                                value="first"
                                color="black"
                                status={checked3 === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked3('first')}
                            />
                            <Text style={styles.buttonText}>혼합</Text>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <ImageRender2 />
                        <View style={styles.buttonContainter}>
                            <RadioButton
                                value="second"
                                color="black"
                                status={checked3 === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked3('second')}
                            />
                            <Text style={styles.buttonText}>단일</Text>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <ImageRender3 />
                        <View style={styles.buttonContainter}>
                            <RadioButton
                                value="third"
                                color="black"
                                status={checked3 === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked3('third')}
                            />
                            <Text style={styles.buttonText}>기타</Text>
                        </View>
                    </View>
                </View>
                <Text style={[styles.headerSubText, { fontSize: 10, marginTop: 10 }]}   >
                    *기타 - 점안액, 연고, 파우치 등 알약 제형이 아닌 다양한 형태의 의약품
                </Text>
                <View style={[styles.header, { marginTop: 30 }]}>
                    <Text style={[styles.headerText, { marginTop: 50, }]}>약을 처방받은</Text>
                    <Text style={[styles.headerText, { color: "#26c7d9" }]}>진료과를 선택<Text style={[styles.headerText, { marginLeft: 0 }]}>해주세요</Text></Text>
                    <Text style={styles.headerSubText}   >
                        진료과를 설정하시면 캘린더에 자동으로 반영됩니다.
                    </Text>
                </View>
                <View style={[styles.header, { marginTop: 30 }]}>
                    <Text style={styles.headerText2}>진료과 선택</Text>
                </View>
                <View style={{justifyContent: "center", height: 100, marginTop: 10, alignItems: "center"}}>
                <Picker
                    selectedValue={hopital}
                    onValueChange={(itemValue, itemIndex) =>
                        setHospital(itemValue)
                    }
                    style={{ height: 40, width: 328, margin: 3, borderColor: "#cccccc"}}
                >
                    <Picker.Item label="가정의학과" value="가정" />
                    <Picker.Item label="내과" value="내과" />
                    <Picker.Item label="마취통증의학과" value="마취" />
                    <Picker.Item label="비뇨기과" value="비뇨" />
                    <Picker.Item label="산부인과" value="산부" />
                    <Picker.Item label="신경과" value="신경" />
                    <Picker.Item label="소아청소년의학과" value="소아" />
                    <Picker.Item label="안과" value="안과" />
                    <Picker.Item label="영상의학과" value="영상" />
                    <Picker.Item label="외과" value="외과" />
                    <Picker.Item label="응급의학과" value="응급" />
                    <Picker.Item label="이비인후과" value="이비" />
                    <Picker.Item label="임상약리학과" value="임상" />
                    <Picker.Item label="정신건강의학과" value="정신" />
                    <Picker.Item label="직업환경의학과" value="직업" />
                    <Picker.Item label="치과" value="치과" />
                    <Picker.Item label="피부과" value="피부" />
                    <Picker.Item label="핵의학과" value="핵의" />
                </Picker><Picker
                    selectedValue={detail}
                    onValueChange={(itemValue, itemIndex) =>
                        setDetail(itemValue)
                    }
                    style={{ height: 40, width: 328, margin: 3, borderColor: "#cccccc"}}
                >
                    <Picker.Item label="간담췌외과" value="간담" />
                    <Picker.Item label="간이식/간담도외과" value="간이" />
                    <Picker.Item label="갑상선내분비외과" value="갑상" />
                    <Picker.Item label="구강악안면외과" value="구강" />
                    <Picker.Item label="내분비외과" value="내분" />
                    <Picker.Item label="대장항문외과" value="대장" />
                    <Picker.Item label="두경부외과" value="두경" />
                    <Picker.Item label="성형외과" value="성형" />
                </Picker>
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
        justifyContent: 'center',
    },
    titleText: {
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 19,
        margin: 10,
        fontWeight: "500",
        textAlign: "left",
    },
    header: {
        borderTopWidth: 1,
        borderTopColor: "#ececec",
    },
    headerText: {
        marginLeft: 24,
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 22,
        fontWeight: "700",
        textAlign: "left",
    },
    headerSubText: {
        color: "rgba(0, 0, 0, 0.698)",
        marginLeft: 24,
        fontSize: 12,
        marginTop: 30,
        fontWeight: "400",
        textAlign: "left",
    },
    buttonContainter: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        height: 80
    },
    buttonText: {
        color: "rgba(0, 0, 0, 0.698)",
        fontSize: 16,
        fontWeight: "400",
        margin: 12,
        marginLeft: 3
    },
    imageContainer: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 61,
        height: 69
    },
    headerText2: {
        marginTop: 24,
        marginLeft: 24,
        color: "rgba(0, 0, 0, 0.698)",
        fontSize: 18,
        fontWeight: "500",
    }
})