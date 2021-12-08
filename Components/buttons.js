import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function TransLargeBlueButton({onPress,text}){

    return(
        <TouchableOpacity
            onPress = {
                onPress
            }
        >
            <View style = {Styles.TLBButton}>
                <Text style={Styles.TLBButtonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
} 

const Styles = StyleSheet.create({
    TLBButton:{
        width: 292,
        height: 48,
        borderWidth: 1,
        paddingTop: 20,
        paddingRight: 28,
        paddingBottom: 20,
        paddingLeft: 28,
        borderRadius: 24,
        borderStyle: "solid",
        borderColor: "rgb(0, 189, 211)",
        justifyContent:'center',
        alignItems: 'center',
    },
    TLBButtonText:{
        color: "rgb(0, 189, 211)",
        fontSize: 14,
        fontWeight: "400",
    }
})