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
const Page_Selection_Controls  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page10}    >
			<Text style = {noneModeStyles._Selection_Controls}   >
				Selection Controls
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._1__Radio_1__Selected_1__Enabled}    >
				<View style = {noneModeStyles.style4}    >
					<View style = {noneModeStyles.style5}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"#FEBC00"}     d = "M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style6}    >
				</View>
			</View>
			<View style = {noneModeStyles._1__Radio_2__Deselected_1__Enabled}    >
				<View style = {noneModeStyles.style8}    >
					<View style = {noneModeStyles.style9}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style10}    >
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Selection_Controls

const noneModeStyles = StyleSheet.create({
_page10: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Selection_Controls: {
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
_1__Radio_1__Selected_1__Enabled: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 81,
	top: 267,
	},
style4: {
	position: "absolute",
	transform: [
		{translateX: 83},
		{translateY: 269},
	],
	},
style5: {
	},
style6: {
	position: "absolute",
	transform: [
		{translateX: 81},
		{translateY: 267},
	],
	},
_1__Radio_2__Deselected_1__Enabled: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 81,
	top: 301,
	},
style8: {
	position: "absolute",
	transform: [
		{translateX: 83},
		{translateY: 303},
	],
	},
style9: {
	},
style10: {
	position: "absolute",
	transform: [
		{translateX: 81},
		{translateY: 301},
	],
	},
})

