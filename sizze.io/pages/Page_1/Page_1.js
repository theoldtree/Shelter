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
import {image____________1_link} from './assets/imageLinks.js'
import {image__________________5_link} from './assets/imageLinks.js'
const Page_1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page53}    >
			<View style = {noneModeStyles.____________1_container}    >
				<View style = {noneModeStyles.____________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image____________1_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Shelter}   >
				Shelter
			</Text>
			<View style = {noneModeStyles.__________________5_container}    >
				<View style = {noneModeStyles.__________________5}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image__________________5_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_1

const noneModeStyles = StyleSheet.create({
_page53: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(0, 189, 211)",
	},
____________1_container: {
	width: 106,
	height: 20,
	position: "absolute",
	left: 714,
	top: -168,
	},
____________1: {
	width: "100%",
	height: "100%",
	},
_Shelter: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 117,
	top: 333,
	color: "rgb(255, 255, 255)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "Oxanium",
	textAlign: "center",
	},
__________________5_container: {
	width: 70,
	height: 63.0535,
	position: "absolute",
	left: 145,
	top: 262,
	},
__________________5: {
	width: "100%",
	height: "100%",
	},
})

