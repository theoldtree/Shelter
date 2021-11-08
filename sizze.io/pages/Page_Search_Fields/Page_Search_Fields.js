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
import {image________1_link} from './assets/imageLinks.js'
import {image________1_2_link} from './assets/imageLinks.js'
import {image________1_3_link} from './assets/imageLinks.js'
const Page_Search_Fields  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page14}    >
			<Text style = {noneModeStyles._Search_Fields}   >
				Search Fields
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._1__Outlined_a__Inavtive}    >
				<View style = {noneModeStyles._Rectangle_206}    >
				</View>
				<Text style = {noneModeStyles.______________}   >
					약 이름을 검색해보세요.
				</Text>
				<View style = {noneModeStyles.________1_container}    >
					<View style = {noneModeStyles.________1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image________1_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Outlined_a__Inacvtive}    >
				<View style = {noneModeStyles._Rectangle_206_2}    >
				</View>
				<Text style = {noneModeStyles._______________2}   >
					약 이름을 검색해보세요.
				</Text>
				<View style = {noneModeStyles.________1_container_2}    >
					<View style = {noneModeStyles.________1_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image________1_2_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Outlined_a__acvtive}    >
				<View style = {noneModeStyles._Rectangle_206_3}    >
				</View>
				<Text style = {noneModeStyles._______________3}   >
					약 이름을 검색해보세요.
				</Text>
				<View style = {noneModeStyles.________1_container_3}    >
					<View style = {noneModeStyles.________1_3}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image________1_3_link}}/>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Search_Fields

const noneModeStyles = StyleSheet.create({
_page14: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Search_Fields: {
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
_1__Outlined_a__Inavtive: {
	width: 328,
	height: 40,
	position: "absolute",
	left: 80,
	top: 269,
	},
_Rectangle_206: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5186},
		{translateY: 4012},
	],
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 189, 211)",
	borderRadius: 20,
	},
______________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5202},
		{translateY: 4020},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
________1_container: {
	width: 24,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 368},
		{translateY: 277},
	],
	},
________1: {
	width: "100%",
	height: "100%",
	},
_1__Outlined_a__Inacvtive: {
	width: 328,
	height: 40,
	position: "absolute",
	left: 80,
	top: 324,
	},
_Rectangle_206_2: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateX: 5186},
		{translateY: 4067},
	],
	borderRadius: 20,
	},
_______________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5210},
		{translateY: 4075},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
________1_container_2: {
	width: 24,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 368},
		{translateY: 332},
	],
	},
________1_2: {
	width: "100%",
	height: "100%",
	},
_1__Outlined_a__acvtive: {
	width: 328,
	height: 40,
	position: "absolute",
	left: 80,
	top: 372,
	},
_Rectangle_206_3: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateX: 5186},
		{translateY: 4115},
	],
	borderRadius: 20,
	},
_______________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5210},
		{translateY: 4123},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
________1_container_3: {
	width: 24,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 368},
		{translateY: 380},
	],
	},
________1_3: {
	width: "100%",
	height: "100%",
	},
})

