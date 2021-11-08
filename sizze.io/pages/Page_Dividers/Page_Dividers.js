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
const Page_Dividers  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page15}    >
			<Text style = {noneModeStyles._Dividers}   >
				Dividers
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._Divider__1_Line}    >
				<View style = {noneModeStyles._Rectangle_234}    >
				</View>
			</View>
			<View style = {noneModeStyles._Divider_2_Rec}    >
				<View style = {noneModeStyles._Rectangle_241}    >
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Dividers

const noneModeStyles = StyleSheet.create({
_page15: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Dividers: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 80,
	top: 80,
	color: "rgb(0, 0, 0)",
	fontSize: 72,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Line_6: {
	width: 1280,
	height: 0,
	position: "absolute",
	left: 80,
	top: 204,
	borderTopWidth: 4,
	borderRightWidth: 4,
	borderBottomWidth: 4,
	borderLeftWidth: 4,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Divider__1_Line: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 80,
	top: 290,
	},
_Rectangle_234: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.2)",
	position: "absolute",
	transform: [
		{translateX: 11266},
		{translateY: 2168},
	],
	},
_Divider_2_Rec: {
	width: 360,
	height: 8,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 80,
	top: 327,
	},
_Rectangle_241: {
	width: 360,
	height: 8,
	backgroundColor: "rgba(0, 0, 0, 0.2)",
	position: "absolute",
	transform: [
		{translateX: 11266},
		{translateY: 2205},
	],
	},
})

