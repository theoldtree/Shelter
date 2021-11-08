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
import {image__________4_________1_link} from './assets/imageLinks.js'
import {image_H2O_________2_link} from './assets/imageLinks.js'
import {image_H2O_________3_link} from './assets/imageLinks.js'
import {image________________________1_link} from './assets/imageLinks.js'
const Page_3  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page59}    >
			<View style = {noneModeStyles.__________4_________1_container}    >
				<View style = {noneModeStyles.__________4_________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image__________4_________1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._H2O_________2_container}    >
				<View style = {noneModeStyles._H2O_________2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_H2O_________2_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._H2O_________3_container}    >
				<View style = {noneModeStyles._H2O_________3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_H2O_________3_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles.____________}   >
				독이 될 수 있습니다
			</Text>
			<Text style = {noneModeStyles.________________________________}   >
				잘못된 보관으로 손상된 약 복용 시{'\n'}우리 몸에 약이 아닌
			</Text>
			<View style = {noneModeStyles.________________________1_container}    >
				<View style = {noneModeStyles.________________________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image________________________1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___a__white}    >
				<Text style = {noneModeStyles.___}   >
					다음
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___f__text_icon_inactive_}    >
				<View style = {noneModeStyles._Group_143}    >
					<Text style = {noneModeStyles.____2}   >
						Skip
					</Text>
					<View style = {noneModeStyles._Navigation___ic}    >
						<View style = {noneModeStyles._ic}    >
							<View style = {noneModeStyles.style18}    >
								<View style = {noneModeStyles.style19}   >
									<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
										<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style20}    >
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_3

const noneModeStyles = StyleSheet.create({
_page59: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(0, 189, 211)",
	},
__________4_________1_container: {
	width: 246,
	height: 437,
	position: "absolute",
	left: 114,
	top: 203,
	},
__________4_________1: {
	width: "100%",
	height: "100%",
	},
_H2O_________2_container: {
	width: 55,
	height: 62,
	position: "absolute",
	left: 289,
	top: 283,
	},
_H2O_________2: {
	width: "100%",
	height: "100%",
	},
_H2O_________3_container: {
	width: 127,
	height: 123,
	position: "absolute",
	left: 145,
	top: 251,
	},
_H2O_________3: {
	width: "100%",
	height: "100%",
	},
____________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 135,
	top: 122,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "right",
	},
________________________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 76,
	top: 66,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "300",
	fontFamily: "Noto Sans KR",
	textAlign: "right",
	},
________________________1_container: {
	width: 351,
	height: 457,
	position: "absolute",
	left: 0,
	top: 183,
	},
________________________1: {
	width: "100%",
	height: "100%",
	},
_1__Button___A__Small___a__white: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 264,
	top: 191,
	paddingTop: 10,
	paddingRight: 19,
	paddingBottom: 10,
	paddingLeft: 19,
	borderRadius: 18,
	},
___: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___A__Small___f__text_icon_inactive_: {
	width: 50,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 32,
	top: 584,
	},
_Group_143: {
	width: 50,
	height: 24,
	position: "absolute",
	},
____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: -2},
		{translateY: 3},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Navigation___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 26},
	],
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style18: {
	position: "absolute",
	transform: [
		{translateX: 8.58984},
		{translateY: 6},
	],
	},
style19: {
	},
style20: {
	position: "absolute",
	},
})

