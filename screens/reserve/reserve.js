import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Reserve(){
    return(
        <View style = {styles.container}>
            <Text>
                reserve
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
})