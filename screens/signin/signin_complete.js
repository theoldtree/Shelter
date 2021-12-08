import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import TransLargeBlueButton from '../../Components/buttons'

export default function Signin_Complete() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.HeaderText}   >
          쉘터를 사용할 {'\n'}준비가 완료되었습니다
        </Text>
        <Text style={styles.HeaderText2}   >
          메인 화면으로 이동합니다
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TransLargeBlueButton text={"확인"} />
      </View>
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
