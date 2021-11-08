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
const Page_Bottom_Navigation  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page22}    >
			<Text style = {noneModeStyles._Bottom_navigation}   >
				Bottom navigation
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._Elements___A__On_Surface___a__Small___Active}    >
				<View style = {noneModeStyles._Rectangle_244}    >
				</View>
				<View style = {noneModeStyles._ic}    >
					<View style = {noneModeStyles.style6}    >
						<View style = {noneModeStyles.style7}   >
							<Svg style={{height: 17, width: 20}} viewBox = "0 0 20 17">
								<Path fill = {"black"}     d = "M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style8}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Elements___A__On_Surface___a__Small___Inactive}    >
				<View style = {noneModeStyles._Rectangle_246}    >
				</View>
				<View style = {noneModeStyles._ic_2}    >
					<View style = {noneModeStyles.style12}    >
						<View style = {noneModeStyles.style13}   >
							<Svg style={{height: 17, width: 20}} viewBox = "0 0 20 17">
								<Path fill = {"black"}     d = "M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style14}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Elements___A__On_Surface___a__Medium___Active}    >
				<View style = {noneModeStyles._Rectangle_245}    >
				</View>
				<View style = {noneModeStyles._ic_3}    >
					<View style = {noneModeStyles.style18}    >
						<View style = {noneModeStyles.style19}   >
							<Svg style={{height: 17, width: 20}} viewBox = "0 0 20 17">
								<Path fill = {"black"}     d = "M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style20}    >
					</View>
				</View>
				<Text style = {noneModeStyles.__}   >
					홈
				</Text>
			</View>
			<View style = {noneModeStyles._Elements___A__On_Surface___a__Medium___Inactive}    >
				<View style = {noneModeStyles._Rectangle_247}    >
				</View>
				<View style = {noneModeStyles._ic_4}    >
					<View style = {noneModeStyles.style25}    >
						<View style = {noneModeStyles.style26}   >
							<Svg style={{height: 17, width: 20}} viewBox = "0 0 20 17">
								<Path fill = {"black"}     d = "M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style27}    >
					</View>
				</View>
				<Text style = {noneModeStyles.___2}   >
					홈
				</Text>
			</View>
			<View style = {noneModeStyles._1__Four_up}    >
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Bottom_Navigation

const noneModeStyles = StyleSheet.create({
_page22: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Bottom_navigation: {
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
_Elements___A__On_Surface___a__Small___Active: {
	width: 90,
	height: 56,
	position: "absolute",
	left: 498,
	top: 474,
	},
_Rectangle_244: {
	width: 90,
	height: 56,
	backgroundColor: "rgb(237, 237, 237)",
	position: "absolute",
	transform: [
		{translateX: 2564},
		{translateY: 2352},
	],
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 2597},
		{translateY: 2368},
	],
	},
style6: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
style7: {
	},
style8: {
	position: "absolute",
	},
_Elements___A__On_Surface___a__Small___Inactive: {
	width: 90,
	height: 56,
	position: "absolute",
	left: 603,
	top: 474,
	},
_Rectangle_246: {
	width: 90,
	height: 56,
	backgroundColor: "rgb(237, 237, 237)",
	position: "absolute",
	transform: [
		{translateX: 2669},
		{translateY: 2352},
	],
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 2702},
		{translateY: 2368},
	],
	},
style12: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
style13: {
	},
style14: {
	position: "absolute",
	},
_Elements___A__On_Surface___a__Medium___Active: {
	width: 90,
	height: 64,
	position: "absolute",
	left: 498,
	top: 385,
	},
_Rectangle_245: {
	width: 90,
	height: 64,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 2564},
		{translateY: 2263},
	],
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 2597},
		{translateY: 2274},
	],
	},
style18: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
style19: {
	},
style20: {
	position: "absolute",
	},
__: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 2603},
		{translateY: 2298},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Elements___A__On_Surface___a__Medium___Inactive: {
	width: 90,
	height: 64,
	position: "absolute",
	left: 603,
	top: 385,
	},
_Rectangle_247: {
	width: 90,
	height: 64,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 2669},
		{translateY: 2263},
	],
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 2702},
		{translateY: 2274},
	],
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
style26: {
	},
style27: {
	position: "absolute",
	},
___2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 2708},
		{translateY: 2298},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Four_up: {
	width: 392,
	height: 272,
	overflow: "hidden",
	position: "absolute",
	left: 101,
	top: 274,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(123, 97, 255)",
	borderRadius: 5,
	},
})

