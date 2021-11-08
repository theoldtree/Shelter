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
const Page_41  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page44}    >
			<Text style = {noneModeStyles._QnA}   >
				QnA
			</Text>
			<Text style = {noneModeStyles.______________}   >
				궁금한 것이 있으신가요?
			</Text>
			<View style = {noneModeStyles._1__Top_App_bar___A__only_icon}    >
				<View style = {noneModeStyles._Group_6}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Rectangle_336}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_2}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style10}    >
							<View style = {noneModeStyles.style11}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"white"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style12}    >
						</View>
					</View>
				</View>
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
							<View style = {noneModeStyles.style20}    >
								<View style = {noneModeStyles.style21}   >
									<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style22}    >
								<View style = {noneModeStyles.style23}   >
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
							<View style = {noneModeStyles.style31}    >
								<View style = {noneModeStyles.style32}   >
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
			<View style = {noneModeStyles._Rectangle_558}    >
			</View>
			<Text style = {noneModeStyles._________}   >
				이전 검색 기록
			</Text>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2}    >
				<View style = {noneModeStyles._Rectangle_236}    >
				</View>
				<Text style = {noneModeStyles.____}   >
					약을 냉장고에 보관해도 되나요?
				</Text>
				<View style = {noneModeStyles._Divider__1_Line}    >
					<View style = {noneModeStyles._Rectangle_234}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2_2}    >
				<View style = {noneModeStyles._Rectangle_236_2}    >
				</View>
				<Text style = {noneModeStyles._____2}   >
					우유와 약을 같이 복용해도 될까요?
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_2}    >
					<View style = {noneModeStyles._Rectangle_234_2}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2_3}    >
				<View style = {noneModeStyles._Rectangle_236_3}    >
				</View>
				<Text style = {noneModeStyles._____3}   >
					알약을 부숴서 복용해도 괜찮을까요?
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_3}    >
					<View style = {noneModeStyles._Rectangle_234_3}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2_4}    >
				<View style = {noneModeStyles._Rectangle_236_4}    >
				</View>
				<Text style = {noneModeStyles._____4}   >
					약을 떨어뜨렸어요 힝구티밍구티
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_4}    >
					<View style = {noneModeStyles._Rectangle_234_4}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Outlined_a__Inavtive}    >
				<View style = {noneModeStyles._Rectangle_206}    >
				</View>
				<Text style = {noneModeStyles._______________2}   >
					궁금한 사항을 검색해주세요.
				</Text>
				<View style = {noneModeStyles.________1_container}    >
					<View style = {noneModeStyles.________1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image________1_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_374}    >
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_41

const noneModeStyles = StyleSheet.create({
_page44: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(0, 189, 211)",
	},
_QnA: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 113,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 153,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Top_App_bar___A__only_icon: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 0,
	top: 24,
	},
_Group_6: {
	width: 360,
	height: 57,
	position: "absolute",
	},
_Group_5: {
	width: 360,
	height: 57,
	position: "absolute",
	},
_Rectangle_336: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	},
_Navigation___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 17},
	],
	},
_Navigation___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 17},
	],
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style10: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style11: {
	},
style12: {
	position: "absolute",
	},
_Status_Bar: {
	width: 360,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_235: {
	width: 360,
	height: 24,
	position: "absolute",
	},
_Mode_Light: {
	width: 340,
	height: 19,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 2},
	],
	},
_Time: {
	width: 49,
	height: 15.2,
	position: "absolute",
	left: "50%",
	transform: [
		{translateX: -25},
		{translateY: 2.84998},
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
style20: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style21: {
	},
style22: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style23: {
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
	height: 9.13,
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
	width: 6.94971,
	height: 11.7605,
	position: "absolute",
	transform: [
		{translateX: 3.0437},
		{translateY: 1.11975},
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
style31: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style32: {
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
_Rectangle_558: {
	width: 360,
	height: 431,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 209,
	},
_________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 324,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Single_Line__A_Subtitle2: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 364,
	},
_Rectangle_236: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 12},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Divider__1_Line: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 47},
	],
	},
_Rectangle_234: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	},
_1__Single_Line__A_Subtitle2_2: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 460,
	},
_Rectangle_236_2: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 12},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Divider__1_Line_2: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 47},
	],
	},
_Rectangle_234_2: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	},
_1__Single_Line__A_Subtitle2_3: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 412,
	},
_Rectangle_236_3: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 12},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Divider__1_Line_3: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 47},
	],
	},
_Rectangle_234_3: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	},
_1__Single_Line__A_Subtitle2_4: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 508,
	},
_Rectangle_236_4: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 12},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Divider__1_Line_4: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 47},
	],
	},
_Rectangle_234_4: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	},
_1__Outlined_a__Inavtive: {
	width: 328,
	height: 40,
	position: "absolute",
	left: 16,
	top: 233,
	},
_Rectangle_206: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 189, 211)",
	borderRadius: 20,
	},
_______________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 8},
	],
	color: "rgba(0, 0, 0, 0.35)",
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
		{translateX: 288},
		{translateY: 8},
	],
	},
________1: {
	width: "100%",
	height: "100%",
	},
_Rectangle_374: {
	width: 360,
	height: 1,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	left: 0,
	top: 297,
	},
})

