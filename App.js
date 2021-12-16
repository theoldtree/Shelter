import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Signin_Complete from './screens/signin/signin_complete';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/main/main';
import MyPage from './screens/mypage/mypage';
import Reserve from './screens/calendar/calendar';
import AddDrug from './screens/addDrug/addDrug';
import Confirm from './screens/mypage/confirm';
import StateAlram from './screens/mypage/stateAlarm';
import TimeLine from './screens/mypage/timeLine';
import NextStep from './screens/addDrug/nextStep';
import SearchResult from './screens/addDrug/searchResult';
import DrugInfo from './screens/addDrug/drugInfo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const  TabMain = () => {
    return(
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            iconStyle: { width: "100%", height: "100%" },
          }}>
          <Tab.Screen
            name="main"
            component={Main}
            options={{ tabBarVisible: false }}
          />
          <Tab.Screen
            name="location"
            component={Locate}
            options={{ tabBarVisible: false }}
          />
          <Tab.Screen
            name="reservation"
            component={Reserve}
            options={{ tabBarVisible: false }}
          />
          <Tab.Screen
            name="mypage"
            component={MyPage}
            options={{ tabBarVisible: false }}
          />
        </Tab.Navigator>
    );
}
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="shelter" options={{ headerShown: false }} component={Signin_Complete} />
        <Stack.Screen name="main" options={{ headerShown: false }} component={Main} />
        <Stack.Screen name="약추가하기" component={AddDrug} />
        <Stack.Screen name="다음단계" options={{ headerShown: false }} component={NextStep} />
        <Stack.Screen name="검색결과" component={SearchResult} />
        <Stack.Screen name="공지사항" options={{ headerShown: false }} component={Confirm} />
        <Stack.Screen name="상태알림" options={{ headerShown: false }} component={StateAlram} />
        <Stack.Screen name="타임라인" options={{ headerShown: false }} component={TimeLine} />
        <Stack.Screen name="약 추가하기" component={DrugInfo}/>
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
    marginTop: Dimensions.get("window").height * 0.55
  }
});
