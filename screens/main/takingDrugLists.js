import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function TakingDrugLists({ drugInfos }) {

    const screenHandler = () => {
        navigation.navigate('약추가하기')
    }

    const DrugImage = ({ drug }) => {
        if (drug.drugSort === 0) {
            return (
                <Image
                    style={styles.imageContainer}
                    source={require('../../assets/drugImage0.png')}
                />
            );
        }
        else if (drug.drugSort === 1) {
            return (
                <Image
                    style={styles.imageContainer}
                    source={require('../../assets/drugImage1.png')}
                />
            );
        }
        else if (drug.drugSort === 2) {
            return (
                <Image
                    style={styles.imageContainer}
                    source={require('../../assets/drugImage2.png')}
                />
            );
        }
        else {
            return (
                <Image
                    style={styles.imageContainer}
                    source={require('../../assets/drugImage3.png')}
                />
            );
        }
    }

    const ChipImage = ({ drug }) => {
        if (drug.drugSort === 0) {
            return (
                <View style={[styles.chipView, { backgroundColor: "#f2594b" }]}>
                    <Text style={styles.chipFont}>전문</Text>
                </View>
            );
        }
        else if (drug.drugSort === 1) {
            return (
                <View style={[styles.chipView, { backgroundColor: "#f28526" }]}>
                    <Text style={styles.chipFont}>건강</Text>
                </View>
            );
        }
        else if (drug.drugSort === 2) {
            return (
                <View style={[styles.chipView, { backgroundColor: "#26c7d9" }]}>
                    <Text style={styles.chipFont}>일반</Text>
                </View>
            );
        }
        else {
            return (
                <View style={[styles.chipView, { backgroundColor: "#896af3" }]}>
                    <Text style={styles.chipFont}>일약외품</Text>
                </View>
            );
        }
    }


    return (
        <View>
            <Text style={styles.headerFont}>
                약 리스트
            </Text>
            <View style={styles.container}>
                {
                    drugInfos.map((drug, index) => {
                        return (
                            <View style={{ flexDirection: "row", alignItems: "center", width: 360, }}>
                                <DrugImage drug={drug} />
                                <View style={[{flexDirection:"column"},{width:180, justifyContent: "center"}]}>
                                    <Text style={styles.CompanyNameFont}>{drug.company}</Text>
                                    <Text style={styles.DrugNameFont}>{drug.name}</Text>
                                </View>
                                <ChipImage drug={drug} />
                            </View>
                        );
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
        borderRadius: 8,
        borderColor: "#ececec",
        alignItems: "center",
    },
    imageContainer: {
        width: 56,
        height: 56,
        margin: 15,
        marginLeft: 25,
        marginRight: 15,
    },
    headerFont: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "left",
        marginTop: 50,
        marginLeft: 25,
    },
    DrugNameFont:{
        fontSize: 14,
        fontWeight: "500",
        textAlign: "left"
    },
    CompanyNameFont:{
        fontSize: 10,
        fontWeight: "400",
        textAlign: "left"
    },
    chipView: {
        width: 56,
        height: 24,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    chipFont: {
        color: "white",
        fontSize: 12,
        fontWeight: "400"
    }
})