import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image__________________________1_link} from './assets/imageLinks.js'
const Page_7  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page55}    >
			<View style = {noneModeStyles.__________________________1_container}    >
				<View style = {noneModeStyles.__________________________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image__________________________1_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles.___________}   >
				쉘터와 함께 하세요
			</Text>
			<Text style = {noneModeStyles.__________________}   >
				건강을 지키는 새로운 한 발자국
			</Text>
			<View style = {noneModeStyles._Large_Buttons}    >
				<View style = {noneModeStyles._Elevation}    >
				</View>
				<View style = {noneModeStyles._Container}    >
				</View>
				<View style = {noneModeStyles._Overlay}    >
				</View>
				<Text style = {noneModeStyles.___}   >
					시작하기
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_7

const noneModeStyles = StyleSheet.create({
_page55: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(0, 189, 211)",
	},
__________________________1_container: {
	width: 360,
	height: 542,
	position: "absolute",
	left: 0,
	top: 98,
	},
__________________________1: {
	width: "100%",
	height: "100%",
	},
___________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 86,
	top: 98,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
__________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 64,
	top: 66,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "300",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Large_Buttons: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 34,
	top: 552,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.1)",
	shadowRadius: 8,
	},
_Elevation: {
	width: 292,
	height: 48,
	position: "absolute",
	borderRadius: 8,
	},
_Container: {
	width: 292,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 24,
	},
_Overlay: {
	width: 292,
	height: 48,
	position: "absolute",
	borderRadius: 8,
	},
___: {
	width: 161,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 65},
		{translateY: 16},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
})

