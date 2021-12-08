import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Signin_Complete from './screens/signin/signin_complete';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/main';

export default function App() {
	const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="shelter" options={{headerShown: false}} component={Signin_Complete}/>
        <Stack.Screen name="main" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
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
