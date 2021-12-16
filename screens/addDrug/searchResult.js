
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Platform, TouchableOpacity, Button, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

export default function SearchResult({ route, navigation }) {


    const [datas, setDatas] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [list, setList] = useState(null);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        const fetchDatas = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고

                console.log(route.params.uri)
                setDatas(null);
                setError(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    route.params.uri
                );
                setDatas(response); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                console.log(e)
                console.log(route.params.uri)
                setError(e);
            }
            setLoading(false);
        };

        fetchDatas();
    }, []);

    if (loading) return <Text>로딩중..</Text>;
    if (error) return <Text>에러가 발생했습니다</Text>;


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height, backgroundColor: "white" }}>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button
                            onPress={() => {
                                console.log("--------------------------")
                                console.log("---------list--------")
                                setList(datas.data.body.items)
                            }}
                            title="데이터 가져오기"
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            onPress={() => {
                                console.log("--------------------------")
                                console.log("---------console--------")
                                setStatus(true)
                                console.log(list)
                            }}
                            title="데이터 보기"
                        />
                    </View>
                </View>
                {
                    status ?
                        (
                            (list===undefined)|(list===null)?
                            <View>
                                <Text style={{ fontSize: 20, marginLeft: 20 }}>검색된 데이터가 없습니다</Text>
                            </View>:
                            list.map(drug => {
                                return (
                                    <TouchableOpacity
                                        onPress={()=>navigation.push("약 추가하기",{drug})}
                                    >
                                        <View style={styles.drugContainer}>
                                            <Text style={{ fontSize: 10, marginTop: 6 }}>
                                                {drug.entpName}
                                            </Text>
                                            <Text style={{ fontSize: 14, margin: 6 }}>
                                                {drug.itemName}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        ) :
                        (   
                            <View></View>
                        )
                }
            </ScrollView>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    titleText: {
        color: "rgba(0, 0, 0, 0.95)",
        fontSize: 19,
        marginLeft: 10,
        fontWeight: "500",
        textAlign: "left",
    },
    buttonView: {
        margin: 30
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    drugContainer: {
        paddingLeft: 24,
        borderBottomColor: "#ececec",
        borderBottomWidth: 1
    }
})