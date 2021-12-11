import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function TakingDrugLists(){

    
    return(
        <View style = {styles.container}>
            <Text>
                myshelter
            </Text>
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
})