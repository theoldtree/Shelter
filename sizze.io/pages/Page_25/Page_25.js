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
const Page_25  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page38}    >
			<View style = {noneModeStyles._1__Outlined_a__acvtive}    >
				<View style = {noneModeStyles._Rectangle_206}    >
				</View>
				<Text style = {noneModeStyles.______________}   >
					한국오가논 코자엑스큐
				</Text>
				<View style = {noneModeStyles.________1_container}    >
					<View style = {noneModeStyles.________1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image________1_link}}/>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles.________}   >
				약 이름 검색
			</Text>
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
							<View style = {noneModeStyles.style14}    >
								<View style = {noneModeStyles.style15}   >
									<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style16}    >
								<View style = {noneModeStyles.style17}   >
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
							<View style = {noneModeStyles.style25}    >
								<View style = {noneModeStyles.style26}   >
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
			<View style = {noneModeStyles._1__Top_App_bar___B__icon_text}    >
				<View style = {noneModeStyles._Group_6}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Rectangle_336}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic}    >
						</View>
						<Text style = {noneModeStyles.____________}   >
							약 추가하기
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_2}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style39}    >
							<View style = {noneModeStyles.style40}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"black"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style41}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_373}    >
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2}    >
				<View style = {noneModeStyles._Rectangle_236}    >
				</View>
				<Text style = {noneModeStyles.____}   >
					한국오가논 ㅣ 코자엑스큐정 5/50mg
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
					한국엠에스디 ㅣ 코자정 100mg
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
					한국오가논 ㅣ 코자엑스큐정10/50mg
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
					한국엠에스디 ㅣ 코자플러스에프정
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_4}    >
					<View style = {noneModeStyles._Rectangle_234_4}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2_5}    >
				<View style = {noneModeStyles._Rectangle_236_5}    >
				</View>
				<Text style = {noneModeStyles._____5}   >
					한국오가논 ㅣ 코자엑스큐정 5/100mg
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_5}    >
					<View style = {noneModeStyles._Rectangle_234_5}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2_6}    >
				<View style = {noneModeStyles._Rectangle_236_6}    >
				</View>
				<Text style = {noneModeStyles._____6}   >
					한국엠에스디 ㅣ 코자플러스정
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_6}    >
					<View style = {noneModeStyles._Rectangle_234_6}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2_7}    >
				<View style = {noneModeStyles._Rectangle_236_7}    >
				</View>
				<Text style = {noneModeStyles._____7}   >
					한국엠에스디 ㅣ 코자정
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_7}    >
					<View style = {noneModeStyles._Rectangle_234_7}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2_8}    >
				<View style = {noneModeStyles._Rectangle_236_8}    >
				</View>
				<Text style = {noneModeStyles._____8}   >
					한국엠에스디 ㅣ 코자플러스프로정
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_8}    >
					<View style = {noneModeStyles._Rectangle_234_8}    >
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_25

const noneModeStyles = StyleSheet.create({
_page38: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_1__Outlined_a__acvtive: {
	width: 328,
	height: 40,
	position: "absolute",
	left: 16,
	top: 169,
	},
_Rectangle_206: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	borderRadius: 20,
	},
______________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 8},
	],
	color: "rgba(0, 0, 0, 0.698)",
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
________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 113,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
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
style14: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style15: {
	},
style16: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style17: {
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
	width: 6.94922,
	height: 11.7605,
	position: "absolute",
	transform: [
		{translateX: 3.04395},
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
style25: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style26: {
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
_1__Top_App_bar___B__icon_text: {
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
	backgroundColor: "rgb(255, 255, 255)",
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
____________: {
	width: 182,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
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
style39: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style40: {
	},
style41: {
	position: "absolute",
	},
_Rectangle_373: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 56},
	],
	},
_1__Single_Line__A_Subtitle2: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 217,
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
	top: 409,
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
	top: 313,
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
	top: 505,
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
_1__Single_Line__A_Subtitle2_5: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 265,
	},
_Rectangle_236_5: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_____5: {
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
_Divider__1_Line_5: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 47},
	],
	},
_Rectangle_234_5: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	},
_1__Single_Line__A_Subtitle2_6: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 457,
	},
_Rectangle_236_6: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_____6: {
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
_Divider__1_Line_6: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 47},
	],
	},
_Rectangle_234_6: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	},
_1__Single_Line__A_Subtitle2_7: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 361,
	},
_Rectangle_236_7: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_____7: {
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
_Divider__1_Line_7: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 47},
	],
	},
_Rectangle_234_7: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	},
_1__Single_Line__A_Subtitle2_8: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 553,
	},
_Rectangle_236_8: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_____8: {
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
_Divider__1_Line_8: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 47},
	],
	},
_Rectangle_234_8: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	},
})

