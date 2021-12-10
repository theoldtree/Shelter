import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

export default function Calendar({onPress}){
    return(
        <View style = {styles.container}>
            <Button
                title="touch"
                onPress={onPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      margin: 3,
      marginLeft:18,
      width: 328,
      height: 258,
      borderRadius: 8,
      shadowOffset: {
          width: 0,
          height: 1
      },
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowRadius: 2,
    },
})