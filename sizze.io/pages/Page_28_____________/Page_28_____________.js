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
import {image____________2021_08_26_______11_13_1_link} from './assets/imageLinks.js'
const Page_28_____________  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page27}    >
			<View style = {noneModeStyles._Rectangle_393}    >
			</View>
			<View style = {noneModeStyles.____________2021_08_26_______11_13_1_container}    >
				<View style = {noneModeStyles.____________2021_08_26_______11_13_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image____________2021_08_26_______11_13_1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Group_31}    >
				<View style = {noneModeStyles._Rectangle_331}    >
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
								<View style = {noneModeStyles.style13}    >
									<View style = {noneModeStyles.style14}   >
										<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
											<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style15}    >
									<View style = {noneModeStyles.style16}   >
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
								<View style = {noneModeStyles.style24}    >
									<View style = {noneModeStyles.style25}   >
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
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___I__icon_text_transparency0}    >
				<View style = {noneModeStyles._Rectangle_336}    >
				</View>
				<View style = {noneModeStyles._Rectangle_444}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style35}    >
							<View style = {noneModeStyles.style36}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"black"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style37}    >
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles.____________}   >
					약 추가하기
				</Text>
			</View>
			<View style = {noneModeStyles._Large_Buttons}    >
				<View style = {noneModeStyles._Elevation}    >
				</View>
				<View style = {noneModeStyles._Container}    >
				</View>
				<View style = {noneModeStyles._Overlay}    >
				</View>
				<Text style = {noneModeStyles.___}   >
					선택하기
				</Text>
			</View>
			<View style = {noneModeStyles._1__Cards___medicine_card_______inactive_}    >
				<View style = {noneModeStyles._Union}    >
				</View>
				<Text style = {noneModeStyles.____}   >
					부작용
				</Text>
			</View>
			<View style = {noneModeStyles._1__Cards___medicine_card_______}    >
				<View style = {noneModeStyles._Union_2}    >
				</View>
				<Text style = {noneModeStyles._____}   >
					코자엑스큐정 5/50mg
				</Text>
				<Text style = {noneModeStyles._____2}   >
					한국오가논
				</Text>
				<View style = {noneModeStyles._Group_132}    >
					<View style = {noneModeStyles._Rectangle_374}    >
					</View>
					<View style = {noneModeStyles._Rectangle_375}    >
					</View>
					<Text style = {noneModeStyles.______}   >
						효과 효능
					</Text>
					<Text style = {noneModeStyles._______2}   >
						복용 방법
					</Text>
					<Text style = {noneModeStyles._______3}   >
						혈압강하제
					</Text>
					<Text style = {noneModeStyles._0_____}   >
						1알 / 일
					</Text>
					<View style = {noneModeStyles._Group_287}    >
						<Text style = {noneModeStyles._______4}   >
							보관 방법
						</Text>
						<Text style = {noneModeStyles.____________1_30__}   >
							기밀용기, 실온보관(1~30℃)
						</Text>
					</View>
					<Text style = {noneModeStyles.____30_}   >
						식후 30분
					</Text>
				</View>
				<View style = {noneModeStyles._Large_Buttons_2}    >
					<View style = {noneModeStyles._2_Outlined_A__Text_a__Large_Enabled}    >
						<View style = {noneModeStyles._Elevation_2}    >
						</View>
						<Text style = {noneModeStyles.____2}   >
							추가하기
						</Text>
					</View>
				</View>
				<Text style = {noneModeStyles._______5}   >
					기본 정보
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_28_____________

const noneModeStyles = StyleSheet.create({
_page27: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_393: {
	width: 360,
	height: 295,
	backgroundColor: "rgb(174, 196, 231)",
	position: "absolute",
	left: 0,
	top: 24,
	},
____________2021_08_26_______11_13_1_container: {
	width: 360,
	height: 181,
	position: "absolute",
	left: 0,
	top: 44,
	},
____________2021_08_26_______11_13_1: {
	width: "100%",
	height: "100%",
	},
_Group_31: {
	width: 360,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_331: {
	width: 360,
	height: 24,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
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
style13: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style14: {
	},
style15: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style16: {
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
		{translateX: 3.04346},
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
style24: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style25: {
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
_1__Top_App_bar___I__icon_text_transparency0: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 0,
	top: 24,
	},
_Rectangle_336: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Rectangle_444: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 56},
	],
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
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style35: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style36: {
	},
style37: {
	position: "absolute",
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
_Large_Buttons: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 34,
	top: 638,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 8,
	},
_Elevation: {
	width: 292,
	height: 48,
	position: "absolute",
	borderRadius: 8,
	},
_Container: {
	width: 292,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 24,
	},
_Overlay: {
	width: 292,
	height: 48,
	position: "absolute",
	borderRadius: 8,
	},
___: {
	width: 161,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 65},
		{translateY: 16},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Cards___medicine_card_______inactive_: {
	width: 360,
	height: 416,
	position: "absolute",
	left: 0,
	top: 225,
	},
_Union: {
	width: 360,
	height: 416,
	position: "absolute",
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 251},
		{translateY: 24},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Cards___medicine_card_______: {
	width: 360,
	height: 416,
	position: "absolute",
	left: 0,
	top: 225,
	},
_Union_2: {
	width: 360,
	height: 416,
	position: "absolute",
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_____: {
	width: 318,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 106},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 32,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____2: {
	width: 65,
	height: 23.9363,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 81.9312},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_132: {
	width: 328,
	height: 130,
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 162},
	],
	},
_Rectangle_374: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 32},
	],
	},
_Rectangle_375: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 97},
	],
	},
______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 45},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_0_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 41},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_287: {
	width: 237,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 106},
	],
	},
_______4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____________1_30__: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 72},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____30_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 65},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Large_Buttons_2: {
	width: 292,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 37},
		{translateY: 328},
	],
	},
_2_Outlined_A__Text_a__Large_Enabled: {
	width: 292,
	height: 48,
	position: "absolute",
	},
_Elevation_2: {
	width: 292,
	height: 48,
	position: "absolute",
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 189, 211)",
	borderRadius: 24,
	},
____2: {
	width: 100,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 96},
		{translateY: 16},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_______5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 62},
		{translateY: 24},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
})

