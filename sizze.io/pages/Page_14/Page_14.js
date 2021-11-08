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
const Page_14  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._Date_Picker___C___________________active}    >
				<View style = {noneModeStyles._Frame_160}    >
					<Text style = {noneModeStyles._2021__9__6_}   >
						2021년 9월 6일
					</Text>
					<View style = {noneModeStyles._Navigation___ic}    >
						<View style = {noneModeStyles._ic}    >
							<View style = {noneModeStyles.style6}    >
								<View style = {noneModeStyles.style7}   >
									<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
										<Path fill = {"black"}     d = "M10.59 7.41003L6 2.83003L1.41 7.41003L1.23266e-07 6.00003L6 3.38077e-05L12 6.00003L10.59 7.41003Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style8}    >
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___A__only_icon}    >
				<View style = {noneModeStyles._Group_6}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Rectangle_336}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic_2}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_3}    >
					<View style = {noneModeStyles._ic_2}    >
						<View style = {noneModeStyles.style16}    >
							<View style = {noneModeStyles.style17}   >
								<Svg style={{height: 12, width: 20}} viewBox = "0 0 20 12">
									<Path fill = {"black"}     d = "M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style18}    >
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
							<View style = {noneModeStyles.style26}    >
								<View style = {noneModeStyles.style27}   >
									<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style28}    >
								<View style = {noneModeStyles.style29}   >
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
							<View style = {noneModeStyles.style37}    >
								<View style = {noneModeStyles.style38}   >
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
			<Text style = {noneModeStyles.________________}   >
				오늘도 건강관리 잊지마세요!
			</Text>
			<View style = {noneModeStyles._Group_265}    >
				<View style = {noneModeStyles._Rectangle_559}    >
				</View>
				<Text style = {noneModeStyles.___}   >
					아침
				</Text>
			</View>
			<Text style = {noneModeStyles.____2}   >
				점심
			</Text>
			<Text style = {noneModeStyles.____3}   >
				저녁
			</Text>
			<Text style = {noneModeStyles._____}   >
				취침 전
			</Text>
			<Text style = {noneModeStyles.______}   >
				박밍꾸님,
			</Text>
			<View style = {noneModeStyles._Date_Picker___B_______}    >
				<View style = {noneModeStyles._Rectangle_483}    >
				</View>
				<Text style = {noneModeStyles._2021__9_}   >
					2021년 9월
				</Text>
				<View style = {noneModeStyles._Group_277}    >
					<Text style = {noneModeStyles._12}   >
						12
					</Text>
					<Text style = {noneModeStyles._19}   >
						19
					</Text>
					<Text style = {noneModeStyles._26}   >
						26
					</Text>
					<Text style = {noneModeStyles._29}   >
						29
					</Text>
					<Text style = {noneModeStyles._5}   >
						5
					</Text>
				</View>
				<View style = {noneModeStyles._Group_275}    >
					<Text style = {noneModeStyles._14}   >
						14
					</Text>
					<Text style = {noneModeStyles._21}   >
						21
					</Text>
					<Text style = {noneModeStyles._28}   >
						28
					</Text>
					<Text style = {noneModeStyles._31}   >
						31
					</Text>
					<Text style = {noneModeStyles._7}   >
						7
					</Text>
				</View>
				<View style = {noneModeStyles._Group_274}    >
					<Text style = {noneModeStyles._15}   >
						15
					</Text>
					<Text style = {noneModeStyles._22}   >
						22
					</Text>
					<Text style = {noneModeStyles._29_2}   >
						29
					</Text>
					<Text style = {noneModeStyles._1}   >
						1
					</Text>
					<Text style = {noneModeStyles._8}   >
						8
					</Text>
				</View>
				<View style = {noneModeStyles._Group_273}    >
					<Text style = {noneModeStyles._16}   >
						16
					</Text>
					<Text style = {noneModeStyles._23}   >
						23
					</Text>
					<Text style = {noneModeStyles._30}   >
						30
					</Text>
					<Text style = {noneModeStyles._2}   >
						2
					</Text>
					<Text style = {noneModeStyles._9}   >
						9
					</Text>
				</View>
				<View style = {noneModeStyles._Group_272}    >
					<Text style = {noneModeStyles._17}   >
						17
					</Text>
					<Text style = {noneModeStyles._24}   >
						24
					</Text>
					<Text style = {noneModeStyles._1_2}   >
						1
					</Text>
					<Text style = {noneModeStyles._3}   >
						3
					</Text>
					<Text style = {noneModeStyles._10}   >
						10
					</Text>
				</View>
				<View style = {noneModeStyles._Group_271}    >
					<Text style = {noneModeStyles._18}   >
						18
					</Text>
					<Text style = {noneModeStyles._25}   >
						25
					</Text>
					<Text style = {noneModeStyles._2_2}   >
						2
					</Text>
					<Text style = {noneModeStyles._4}   >
						4
					</Text>
					<Text style = {noneModeStyles._11}   >
						11
					</Text>
				</View>
				<View style = {noneModeStyles._Group_276}    >
					<Text style = {noneModeStyles._13}   >
						13
					</Text>
					<Text style = {noneModeStyles._20}   >
						20
					</Text>
					<Text style = {noneModeStyles._27}   >
						27
					</Text>
					<Text style = {noneModeStyles._30_2}   >
						30
					</Text>
					<View style = {noneModeStyles._Rectangle_484}    >
					</View>
					<Text style = {noneModeStyles._6}   >
						6
					</Text>
				</View>
				<View style = {noneModeStyles._Group_278}    >
					<View style = {noneModeStyles._Navigation___ic_4}    >
						<View style = {noneModeStyles._ic_3}    >
							<View style = {noneModeStyles.style100}    >
								<View style = {noneModeStyles.style101}   >
									<Svg style={{height: 21, width: 11}} viewBox = "0 0 11 21">
										<Path fill = {"black"}     d = "M10.5 0L0 10.5L10.5 21V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style102}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Navigation___ic_5}    >
						<View style = {noneModeStyles._ic_4}    >
							<View style = {noneModeStyles.style105}    >
								<View style = {noneModeStyles.style106}   >
									<Svg style={{height: 21, width: 11}} viewBox = "0 0 11 21">
										<Path fill = {"black"}     d = "M0 21L10.5 10.5L0 0V21Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style107}    >
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_6}    >
					<View style = {noneModeStyles._ic_5}    >
						<View style = {noneModeStyles.style110}    >
							<View style = {noneModeStyles.style111}   >
								<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
									<Path fill = {"black"}     d = "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style112}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards____________}    >
				<View style = {noneModeStyles._Group_246}    >
					<View style = {noneModeStyles._Group_244}    >
						<View style = {noneModeStyles._Group_238}    >
							<View style = {noneModeStyles._Group_233}    >
								<View style = {noneModeStyles._Rectangle_548}    >
								</View>
								<View style = {noneModeStyles._Rectangle_549}    >
								</View>
								<Text style = {noneModeStyles._06_30___08_30}   >
									06:30 ~ 08:30
								</Text>
								<View style = {noneModeStyles._Alert___ic}    >
									<View style = {noneModeStyles._ic_6}    >
										<View style = {noneModeStyles.style123}    >
											<View style = {noneModeStyles.style124}   >
												<Svg style={{height: 20, width: 16}} viewBox = "0 0 16 20">
													<Path fill = {"#FDC959"}     d = "M8 19.5C9.1 19.5 10 18.6 10 17.5H6C6 18.6 6.89 19.5 8 19.5ZM14 13.5V8.5C14 5.43 12.36 2.86 9.5 2.18V1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5V2.18C3.63 2.86 2 5.42 2 8.5V13.5L0 15.5V16.5H16V15.5L14 13.5Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Group_237}    >
								<View style = {noneModeStyles._Rectangle_548_2}    >
								</View>
							</View>
							<View style = {noneModeStyles._Group_238_2}    >
								<View style = {noneModeStyles._Rectangle_548_3}    >
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.________}   >
							락토핏 유산균
						</Text>
						<Text style = {noneModeStyles.____}   >
							처방약
						</Text>
						<Text style = {noneModeStyles._______2_0}   >
							아이클리어 2.0
						</Text>
						<Text style = {noneModeStyles._______2}   >
							코자엑스큐
						</Text>
						<View style = {noneModeStyles._Action___ic}    >
							<View style = {noneModeStyles._ic_7}    >
								<View style = {noneModeStyles.style135}    >
								</View>
								<View style = {noneModeStyles.style136}    >
									<View style = {noneModeStyles.style137}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"#8BA629"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_2}    >
							<View style = {noneModeStyles._ic_8}    >
								<View style = {noneModeStyles.style140}    >
								</View>
								<View style = {noneModeStyles.style141}    >
									<View style = {noneModeStyles.style142}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"black"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_3}    >
							<View style = {noneModeStyles._ic_9}    >
								<View style = {noneModeStyles.style145}    >
								</View>
								<View style = {noneModeStyles.style146}    >
									<View style = {noneModeStyles.style147}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"#8BA629"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_4}    >
							<View style = {noneModeStyles._ic_10}    >
								<View style = {noneModeStyles.style150}    >
								</View>
								<View style = {noneModeStyles.style151}    >
									<View style = {noneModeStyles.style152}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"black"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_267}    >
					<View style = {noneModeStyles._Rectangle_586}    >
					</View>
					<Text style = {noneModeStyles.____4}   >
						전문
					</Text>
					<Text style = {noneModeStyles._2_3}   >
						2
					</Text>
				</View>
				<View style = {noneModeStyles._Group_268}    >
					<View style = {noneModeStyles._Rectangle_588}    >
					</View>
					<Text style = {noneModeStyles.____5}   >
						일반
					</Text>
					<Text style = {noneModeStyles._0}   >
						0
					</Text>
				</View>
				<View style = {noneModeStyles._Group_266}    >
					<View style = {noneModeStyles._Rectangle_587}    >
					</View>
					<Text style = {noneModeStyles._2_4}   >
						2
					</Text>
					<Text style = {noneModeStyles.______2}   >
						건강기능
					</Text>
				</View>
				<View style = {noneModeStyles._Group_269}    >
					<View style = {noneModeStyles._Rectangle_589}    >
					</View>
					<Text style = {noneModeStyles._0_2}   >
						0
					</Text>
					<Text style = {noneModeStyles.______3}   >
						의약외품
					</Text>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_14

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Date_Picker___C___________________active: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 24,
	top: 112,
	},
_Frame_160: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	},
_2021__9__6_: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 8,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Navigation___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style6: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8},
	],
	},
style7: {
	},
style8: {
	position: "absolute",
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
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
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
_Navigation___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 17},
	],
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style16: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 5.5},
	],
	},
style17: {
	},
style18: {
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
style26: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style27: {
	},
style28: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style29: {
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
style37: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style38: {
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
________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 250,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_265: {
	width: 56,
	height: 32,
	position: "absolute",
	left: 40,
	top: 328,
	},
_Rectangle_559: {
	width: 56,
	height: 32,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	},
___: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 13,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 123,
	top: 332,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 193,
	top: 332,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 263,
	top: 332,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 216,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Date_Picker___B_______: {
	width: 328,
	height: 262,
	position: "absolute",
	left: 16,
	top: 105,
	},
_Rectangle_483: {
	width: 328,
	height: 262,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_2021__9_: {
	width: 97,
	height: 33,
	position: "absolute",
	transform: [
		{translateX: 45},
		{translateY: 18.6803},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_277: {
	width: 21.6445,
	height: 163.168,
	position: "absolute",
	transform: [
		{translateX: 21.9697},
		{translateY: 83},
	],
	},
_12: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5991},
	],
	color: "rgb(242, 89, 75)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_19: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8989},
	],
	color: "rgb(242, 89, 75)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_26: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 133.198},
	],
	color: "rgb(242, 89, 75)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_29: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_5: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.65918},
		{translateY: 33.2993},
	],
	color: "rgb(242, 89, 75)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_275: {
	width: 19.9795,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 115},
		{translateY: 83},
	],
	},
_14: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_21: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_28: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 133.198},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_31: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_7: {
	width: 11.6553,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 4.99512},
		{translateY: 33.2993},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_274: {
	width: 21.6445,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 157},
		{translateY: 83},
	],
	},
_15: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_22: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_29_2: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 133.198},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.66016},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_8: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.66016},
		{translateY: 33.2993},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_273: {
	width: 19.9795,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 201},
		{translateY: 83},
	],
	},
_16: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_23: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_30: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 133.198},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.65918},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_9: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.65918},
		{translateY: 33.2993},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_272: {
	width: 19.9795,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 243},
		{translateY: 83},
	],
	},
_17: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_24: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1_2: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 4.99512},
		{translateY: 133.198},
	],
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_3: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 4.99512},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_10: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 33.2993},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_271: {
	width: 21.6445,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 285},
		{translateY: 83},
	],
	},
_18: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_25: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2_2: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.66016},
		{translateY: 133.198},
	],
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_4: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.66016},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_11: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 33.2993},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_276: {
	width: 26.6504,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 66},
		{translateY: 83},
	],
	},
_13: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 1.66406},
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_20: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 1.66406},
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_27: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 1.66406},
		{translateY: 133.198},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_30_2: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 1.66406},
	],
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_484: {
	width: 26.6504,
	height: 26.6499,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	transform: [
		{translateY: 29},
	],
	borderRadius: 13.325,
	},
_6: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 8.32422},
		{translateY: 33.2993},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_278: {
	width: 187.6,
	height: 49.2,
	position: "absolute",
	transform: [
		{translateY: 8},
	],
	},
_Navigation___ic_4: {
	width: 49.2002,
	height: 49.2,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
_ic_3: {
	width: 49.2002,
	height: 49.2,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style100: {
	position: "absolute",
	transform: [
		{translateX: 18.4502},
		{translateY: 14.35},
	],
	},
style101: {
	},
style102: {
	position: "absolute",
	},
_Navigation___ic_5: {
	width: 49.2002,
	height: 49.2,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 138.399},
	],
	},
_ic_4: {
	width: 49.2002,
	height: 49.2,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style105: {
	position: "absolute",
	transform: [
		{translateX: 20.5},
		{translateY: 14.35},
	],
	},
style106: {
	},
style107: {
	position: "absolute",
	},
_Navigation___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 285},
		{translateY: 21},
	],
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style110: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
style111: {
	},
style112: {
	position: "absolute",
	},
_1__Cards____________: {
	width: 328,
	height: 233,
	position: "absolute",
	left: 16,
	top: 375,
	},
_Group_246: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Group_244: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Group_238: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Group_233: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Rectangle_548: {
	width: 164,
	height: 233,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: -1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_Rectangle_549: {
	width: 164,
	height: 233,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 164},
	],
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: -1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_06_30___08_30: {
	width: 84,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Alert___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 16},
	],
	},
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style123: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 2.5},
	],
	},
style124: {
	},
_Group_237: {
	width: 164,
	height: 184,
	position: "absolute",
	transform: [
		{translateY: 49},
	],
	},
_Rectangle_548_2: {
	width: 164,
	height: 184,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_Group_238_2: {
	width: 164,
	height: 184,
	position: "absolute",
	transform: [
		{translateX: 164},
		{translateY: 49},
	],
	},
_Rectangle_548_3: {
	width: 164,
	height: 184,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 97},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 121},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______2_0: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 145},
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
		{translateX: 180},
		{translateY: 169},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 93},
	],
	},
_ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style135: {
	position: "absolute",
	},
style136: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style137: {
	},
_Action___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 117},
	],
	},
_ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style140: {
	position: "absolute",
	},
style141: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style142: {
	},
_Action___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 141},
	],
	},
_ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style145: {
	position: "absolute",
	},
style146: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style147: {
	},
_Action___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 165},
	],
	},
_ic_10: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style150: {
	position: "absolute",
	},
style151: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style152: {
	},
_Group_267: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 14},
		{translateY: 65},
	],
	},
_Rectangle_586: {
	width: 64,
	height: 72,
	backgroundColor: "rgb(242, 89, 75)",
	position: "absolute",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 14},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_268: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 14},
		{translateY: 145},
	],
	},
_Rectangle_588: {
	width: 64,
	height: 72,
	backgroundColor: "rgb(38, 199, 217)",
	position: "absolute",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_0: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 14},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_266: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 86},
		{translateY: 65},
	],
	},
_Rectangle_587: {
	width: 64,
	height: 72,
	backgroundColor: "rgb(242, 133, 38)",
	position: "absolute",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_2_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 14},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_269: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 86},
		{translateY: 145},
	],
	},
_Rectangle_589: {
	width: 64,
	height: 72,
	backgroundColor: "rgb(137, 106, 243)",
	position: "absolute",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_0_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 14},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
})

