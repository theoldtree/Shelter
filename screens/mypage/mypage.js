import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function MyPage(){

    
    return(
        <View style = {styles.container}>
            <Text>
                mypage
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