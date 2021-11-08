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
import {image________________________1_link} from './assets/imageLinks.js'
const Page_2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page54}    >
			<View style = {noneModeStyles.________________________1_container}    >
				<View style = {noneModeStyles.________________________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image________________________1_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles.___________________________________medicine_}   >
				약병을 개봉하면 곰팡이와 박테리아{'\n'}그리고 습기에 노출되는 약(medicine)
			</Text>
			<Text style = {noneModeStyles.__________}   >
				과연 안전할까요?
			</Text>
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
							<View style = {noneModeStyles.style12}    >
								<View style = {noneModeStyles.style13}   >
									<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
										<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style14}    >
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_2

const noneModeStyles = StyleSheet.create({
_page54: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(0, 189, 211)",
	},
________________________1_container: {
	width: 350,
	height: 457,
	position: "absolute",
	left: 10,
	top: 183,
	},
________________________1: {
	width: "100%",
	height: "100%",
	},
___________________________________medicine_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 32,
	top: 66,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "300",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
__________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 32,
	top: 122,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Button___A__Small___a__white: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 32,
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
	left: 278,
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
style12: {
	position: "absolute",
	transform: [
		{translateX: 8.58984},
		{translateY: 6},
	],
	},
style13: {
	},
style14: {
	position: "absolute",
	},
})

