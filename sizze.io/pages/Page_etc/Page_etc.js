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
const Page_etc  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page7}    >
			<Text style = {noneModeStyles._etc}   >
				etc
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._Status_Bar}    >
				<View style = {noneModeStyles._Rectangle_235}    >
				</View>
				<View style = {noneModeStyles._Mode_Light}    >
					<Text style = {noneModeStyles._Time}   >
						9:41 AM
					</Text>
					<View style = {noneModeStyles._Right_Side}    >
						<View style = {noneModeStyles._Icon___Battery}    >
							<View style = {noneModeStyles._Body}    >
							</View>
							<View style = {noneModeStyles.style10}    >
								<View style = {noneModeStyles.style11}   >
									<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908518 0.46443 1.53049 1.40955 1.53049 2.49995C1.53049 3.59034 0.908518 4.53547 0 4.9999V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style12}    >
								<View style = {noneModeStyles.style13}   >
									<Svg style={{height: 8, width: 20}} viewBox = "0 0 20 8">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M1 0H19C19.5523 0 20 0.447715 20 1V6.5C20 7.05228 19.5523 7.5 19 7.5H1C0.447715 7.5 0 7.05228 0 6.5V1C0 0.447715 0.447715 0 1 0Z"/>
									</Svg>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles._100_}   >
							100%
						</Text>
						<View style = {noneModeStyles._Icon___Alarm}    >
							<View style = {noneModeStyles._Alarm}    >
							</View>
						</View>
						<View style = {noneModeStyles._Icon___Bluetooth}    >
							<View style = {noneModeStyles._Bluetooth}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Left_Side}    >
						<View style = {noneModeStyles._Icon___Signal}    >
							<View style = {noneModeStyles.style21}    >
								<View style = {noneModeStyles.style22}   >
									<Svg style={{height: 10, width: 3}} viewBox = "0 0 3 10">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M1 0H2C2.55228 0 3 0.447715 3 1V9C3 9.55229 2.55228 10 2 10H1C0.447715 10 0 9.55229 0 9V1C0 0.447715 0.447715 0 1 0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._Full_Bars}    >
							</View>
						</View>
						<Text style = {noneModeStyles._Carrier}   >
							Figma
						</Text>
						<View style = {noneModeStyles._Icon___WiFi}    >
							<View style = {noneModeStyles._Wi_Fi}    >
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1p}    >
				<View style = {noneModeStyles._Ellipse_25}    >
				</View>
				<View style = {noneModeStyles._Ellipse_26}    >
				</View>
				<View style = {noneModeStyles._Ellipse_27}    >
				</View>
			</View>
			<View style = {noneModeStyles._2p}    >
				<View style = {noneModeStyles._Ellipse_25_2}    >
				</View>
				<View style = {noneModeStyles._Ellipse_26_2}    >
				</View>
				<View style = {noneModeStyles._Ellipse_27_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._3p}    >
				<View style = {noneModeStyles._Ellipse_25_3}    >
				</View>
				<View style = {noneModeStyles._Ellipse_26_3}    >
				</View>
				<View style = {noneModeStyles._Ellipse_27_3}    >
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_etc

const noneModeStyles = StyleSheet.create({
_page7: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_etc: {
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
_Status_Bar: {
	width: 360,
	height: 24,
	position: "absolute",
	left: 80,
	top: 276,
	},
_Rectangle_235: {
	width: 360,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 12786},
		{translateY: 4019},
	],
	},
_Mode_Light: {
	width: 340,
	height: 19,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 12796},
		{translateY: 4021},
	],
	},
_Time: {
	width: 49,
	height: 15.2,
	position: "absolute",
	left: "50%",
	transform: [
		{translateX: -25},
		{translateY: 2.8501},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "600",
	lineHeight: 16,
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Right_Side: {
	width: 90.5,
	height: 16.3,
	position: "absolute",
	left: 244,
	top: 3,
	},
_Icon___Battery: {
	width: 26.5,
	height: 11.5,
	position: "absolute",
	top: "50%",
	right: 0,
	transform: [
		{translateY: -6.65002},
	],
	},
_Body: {
	width: 24,
	height: 11.5,
	position: "absolute",
	},
style10: {
	width: 1.5,
	height: 4.90039,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style11: {
	},
style12: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style13: {
	},
_100_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: 0.300049,
	right: 29.5,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "right",
	},
_Icon___Alarm: {
	width: 14,
	height: 14,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 0,
	right: 76.5,
	},
_Alarm: {
	width: 10,
	height: 9.12988,
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2.5},
	],
	},
_Icon___Bluetooth: {
	width: 14,
	height: 14,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 0,
	right: 61.5,
	},
_Bluetooth: {
	width: 6.94922,
	height: 11.7605,
	position: "absolute",
	transform: [
		{translateX: 3.04395},
		{translateY: 1.11963},
	],
	},
_Left_Side: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 4,
	top: 3,
	},
_Icon___Signal: {
	width: 21,
	height: 14,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	marginRight: 4,
	},
style21: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style22: {
	},
_Full_Bars: {
	width: 12,
	height: 8,
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 4},
	],
	},
_Carrier: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 4,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "left",
	},
_Icon___WiFi: {
	width: 15,
	height: 14,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Wi_Fi: {
	width: 14.25,
	height: 10,
	position: "absolute",
	transform: [
		{translateY: 2},
	],
	},
_1p: {
	width: 68,
	height: 12,
	position: "absolute",
	left: 95,
	top: 326,
	},
_Ellipse_25: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 12801},
		{translateY: 4069},
	],
	},
_Ellipse_26: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 12829},
		{translateY: 4069},
	],
	},
_Ellipse_27: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 12857},
		{translateY: 4069},
	],
	},
_2p: {
	width: 68,
	height: 12,
	position: "absolute",
	left: 95,
	top: 346,
	},
_Ellipse_25_2: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 12801},
		{translateY: 4089},
	],
	},
_Ellipse_26_2: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 12829},
		{translateY: 4089},
	],
	},
_Ellipse_27_2: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 12857},
		{translateY: 4089},
	],
	},
_3p: {
	width: 68,
	height: 12,
	position: "absolute",
	left: 95,
	top: 366,
	},
_Ellipse_25_3: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 12801},
		{translateY: 4109},
	],
	},
_Ellipse_26_3: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 12829},
		{translateY: 4109},
	],
	},
_Ellipse_27_3: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 12857},
		{translateY: 4109},
	],
	},
})

