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
import {image_image_11_link} from './assets/imageLinks.js'
const Page_5  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page57}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._1__Button___C__Circle___a__white}    >
					<View style = {noneModeStyles._Ellipse_24}    >
					</View>
					<View style = {noneModeStyles._Navigation___ic}    >
						<View style = {noneModeStyles._ic}    >
							<View style = {noneModeStyles._layer_5af80e}    >
								<View style = {noneModeStyles._layer_4a12eb}   >
									<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
										<Path fill = {"#00848F"}     d = "M-7.88347e-05 18.2121L1.7878 20L11.7878 10L1.7878 4.92176e-05L-7.73989e-05 1.78792L8.21202 10L-7.88347e-05 18.2121Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_efce98}    >
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._1__Button___C__Circle___b__line}    >
					<View style = {noneModeStyles._Ellipse_24_2}    >
					</View>
					<View style = {noneModeStyles._Navigation___ic_2}    >
						<View style = {noneModeStyles._ic_2}    >
							<View style = {noneModeStyles._layer_c1fa02}    >
								<View style = {noneModeStyles._layer_b2df15}   >
									<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
										<Path fill = {"white"}     d = "M11.7878 1.78788L9.99997 1.74845e-06L-1.74845e-06 9.99997L9.99997 20L11.7878 18.2121L3.57575 9.99998L11.7878 1.78788Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_43bfdf}    >
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._2p}    >
					<View style = {noneModeStyles._Ellipse_25}    >
					</View>
					<View style = {noneModeStyles._Ellipse_26}    >
					</View>
					<View style = {noneModeStyles._Ellipse_27}    >
					</View>
				</View>
				<Text style = {noneModeStyles._______________}   >
					건강기능식품부터 처방약까지
				</Text>
				<Text style = {noneModeStyles.____________________}   >
					내가 복용하는 약 한 눈에 확인하기
				</Text>
				<View style = {noneModeStyles._image_11_container}    >
					<View style = {noneModeStyles._image_11}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_11_link}}/>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_5

const noneModeStyles = StyleSheet.create({
_page57: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(0, 189, 211)",
	},
_viewport: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(0, 189, 211)",
	},
_1__Button___C__Circle___a__white: {
	width: 36,
	height: 36,
	position: "absolute",
	left: 292,
	top: 564,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.1)",
	shadowRadius: 4,
	},
_Ellipse_24: {
	width: 36,
	height: 36,
	position: "absolute",
	},
_Navigation___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 6},
	],
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_layer_5af80e: {
	position: "absolute",
	transform: [
		{translateX: 12.3301},
		{translateY: 2.09985},
	],
	},
_layer_4a12eb: {
	},
_layer_efce98: {
	position: "absolute",
	},
_1__Button___C__Circle___b__line: {
	width: 36,
	height: 36,
	position: "absolute",
	left: 36,
	top: 564,
	},
_Ellipse_24_2: {
	width: 36,
	height: 36,
	position: "absolute",
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_Navigation___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 6},
	],
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_layer_c1fa02: {
	position: "absolute",
	transform: [
		{translateY: 2.1001},
	],
	},
_layer_b2df15: {
	},
_layer_43bfdf: {
	position: "absolute",
	},
_2p: {
	width: 68,
	height: 12,
	position: "absolute",
	left: 146,
	top: 576,
	},
_Ellipse_25: {
	width: 12,
	height: 12,
	position: "absolute",
	},
_Ellipse_26: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 28},
	],
	},
_Ellipse_27: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 56},
	],
	},
_______________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 58,
	top: 68,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 54,
	top: 96,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "300",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_image_11_container: {
	width: 239.354,
	height: 370,
	position: "absolute",
	left: 60,
	top: 152,
	},
_image_11: {
	width: "100%",
	height: "100%",
	borderRadius: 8,
	},
})

