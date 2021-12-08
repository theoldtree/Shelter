import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import TransLargeBlueButton from './Components/buttons'
import Signin_Complete from './screens/signin/signin_complete';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <Signin_Complete/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderText: {
    color: "rgba(0, 0, 0, 0.95)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    marginLeft: 24,
    marginTop: 100,
    marginBottom: 18
  },
  HeaderText2: {
    color: "gray",
    fontSize: 16,
    marginLeft: 24,
    fontWeight: "400",
    textAlign: "left",
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: Dimensions.get("window").height*0.55
  }
});
