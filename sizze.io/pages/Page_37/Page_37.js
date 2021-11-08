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
const Page_37  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page51}    >
			<View style = {noneModeStyles._Rectangle_356}    >
			</View>
			<Text style = {noneModeStyles.____}   >
				박민석
			</Text>
			<Text style = {noneModeStyles._________}   >
				관리하는 튼튼이
			</Text>
			<Text style = {noneModeStyles._______}   >
				건강 게이지
			</Text>
			<Text style = {noneModeStyles._80_}   >
				80%
			</Text>
			<View style = {noneModeStyles._Rectangle_337}    >
			</View>
			<View style = {noneModeStyles._Group_24}    >
				<Text style = {noneModeStyles.___}   >
					케어
				</Text>
			</View>
			<View style = {noneModeStyles._Group_21}    >
				<Text style = {noneModeStyles.________}   >
					도움 및 설정
				</Text>
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
			</View>
			<View style = {noneModeStyles._Group_32}    >
				<View style = {noneModeStyles._Rectangle_331_2}    >
				</View>
				<View style = {noneModeStyles._Status_Bar_2}    >
					<View style = {noneModeStyles._Rectangle_235_2}    >
					</View>
					<View style = {noneModeStyles._Mode_Light_2}    >
						<Text style = {noneModeStyles._Time_2}   >
							9:41 AM
						</Text>
						<View style = {noneModeStyles._Right_Side_2}    >
							<View style = {noneModeStyles._Icon___Battery_2}    >
								<View style = {noneModeStyles._Body_2}    >
								</View>
								<View style = {noneModeStyles.style46}    >
									<View style = {noneModeStyles.style47}   >
										<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
											<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style48}    >
									<View style = {noneModeStyles.style49}   >
										<Svg style={{height: 8, width: 20}} viewBox = "0 0 20 8">
											<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M1 0H19C19.5523 0 20 0.447715 20 1V6.5C20 7.05228 19.5523 7.5 19 7.5H1C0.447715 7.5 0 7.05228 0 6.5V1C0 0.447715 0.447715 0 1 0Z"/>
										</Svg>
									</View>
								</View>
							</View>
							<Text style = {noneModeStyles._100__2}   >
								100%
							</Text>
							<View style = {noneModeStyles._Icon___Alarm_2}    >
								<View style = {noneModeStyles._Alarm_2}    >
								</View>
							</View>
							<View style = {noneModeStyles._Icon___Bluetooth_2}    >
								<View style = {noneModeStyles._Bluetooth_2}    >
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Left_Side_2}    >
							<View style = {noneModeStyles._Icon___Signal_2}    >
								<View style = {noneModeStyles.style57}    >
									<View style = {noneModeStyles.style58}   >
										<Svg style={{height: 10, width: 3}} viewBox = "0 0 3 10">
											<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M1 0H2C2.55228 0 3 0.447715 3 1V9C3 9.55229 2.55228 10 2 10H1C0.447715 10 0 9.55229 0 9V1C0 0.447715 0.447715 0 1 0Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles._Full_Bars_2}    >
								</View>
							</View>
							<Text style = {noneModeStyles._Carrier_2}   >
								Figma
							</Text>
							<View style = {noneModeStyles._Icon___WiFi_2}    >
								<View style = {noneModeStyles._Wi_Fi_2}    >
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_373}    >
			</View>
			<View style = {noneModeStyles._Rectangle_374}    >
			</View>
			<Text style = {noneModeStyles.______}   >
				마이페이지
			</Text>
			<View style = {noneModeStyles._1__Single_Line___B___icon}    >
				<View style = {noneModeStyles._Group_23}    >
					<View style = {noneModeStyles._Rectangle_360}    >
					</View>
					<Text style = {noneModeStyles.__________}   >
						타임라인
					</Text>
				</View>
				<View style = {noneModeStyles._Navigation___ic}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style72}    >
							<View style = {noneModeStyles.style73}   >
								<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
									<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style74}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___B___icon_2}    >
				<View style = {noneModeStyles._Group_23_2}    >
					<View style = {noneModeStyles._Rectangle_360_2}    >
					</View>
					<Text style = {noneModeStyles.___________2}   >
						상태알림
					</Text>
				</View>
				<View style = {noneModeStyles._Navigation___ic_2}    >
					<View style = {noneModeStyles._ic_2}    >
						<View style = {noneModeStyles.style81}    >
							<View style = {noneModeStyles.style82}   >
								<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
									<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style83}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___B___icon_3}    >
				<View style = {noneModeStyles._Group_23_3}    >
					<View style = {noneModeStyles._Rectangle_360_3}    >
					</View>
					<Text style = {noneModeStyles.___________3}   >
						공지사항
					</Text>
				</View>
				<View style = {noneModeStyles._Navigation___ic_3}    >
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style90}    >
							<View style = {noneModeStyles.style91}   >
								<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
									<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style92}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Action___ic}    >
				<View style = {noneModeStyles._ic_4}    >
					<View style = {noneModeStyles.style95}    >
						<View style = {noneModeStyles.style96}   >
							<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
								<Path fill = {"black"}     d = "M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style97}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___A__only_icon}    >
				<View style = {noneModeStyles._Group_6}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Rectangle_336}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic_4}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_5}    >
					<View style = {noneModeStyles._ic_5}    >
						<View style = {noneModeStyles.style105}    >
							<View style = {noneModeStyles.style106}   >
								<Svg style={{height: 12, width: 20}} viewBox = "0 0 20 12">
									<Path fill = {"black"}     d = "M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style107}    >
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_37

const noneModeStyles = StyleSheet.create({
_page51: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_356: {
	width: 360,
	height: 128,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 153,
	},
____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 128,
	top: 177,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 128,
	top: 205,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 128,
	top: 238,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_80_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 194,
	top: 233,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_337: {
	width: 80,
	height: 80,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 24,
	top: 177,
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Group_24: {
	width: 32.688,
	height: 16,
	position: "absolute",
	left: 27.2402,
	top: 306,
	},
___: {
	width: 32.688,
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_21: {
	width: 72.7598,
	height: 16,
	position: "absolute",
	left: 27.2402,
	top: 459,
	},
________: {
	width: 72.7598,
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
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
_Group_32: {
	width: 360,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_331_2: {
	width: 360,
	height: 24,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Status_Bar_2: {
	width: 360,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_235_2: {
	width: 360,
	height: 24,
	position: "absolute",
	},
_Mode_Light_2: {
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
_Time_2: {
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
_Right_Side_2: {
	width: 90.5,
	height: 16.3,
	position: "absolute",
	left: 244,
	top: 3,
	},
_Icon___Battery_2: {
	width: 26.5,
	height: 11.5,
	position: "absolute",
	top: "50%",
	right: 0,
	transform: [
		{translateY: -6.65002},
	],
	},
_Body_2: {
	width: 24,
	height: 11.5,
	position: "absolute",
	},
style46: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style47: {
	},
style48: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style49: {
	},
_100__2: {
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
_Icon___Alarm_2: {
	width: 14,
	height: 14,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 0,
	right: 76.5,
	},
_Alarm_2: {
	width: 10,
	height: 9.13,
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2.5},
	],
	},
_Icon___Bluetooth_2: {
	width: 14,
	height: 14,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 0,
	right: 61.5,
	},
_Bluetooth_2: {
	width: 6.94971,
	height: 11.7605,
	position: "absolute",
	transform: [
		{translateX: 3.04346},
		{translateY: 1.11975},
	],
	},
_Left_Side_2: {
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
_Icon___Signal_2: {
	width: 21,
	height: 14,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	marginRight: 4,
	},
style57: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style58: {
	},
_Full_Bars_2: {
	width: 12,
	height: 8,
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 4},
	],
	},
_Carrier_2: {
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
_Icon___WiFi_2: {
	width: 15,
	height: 14,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	},
_Wi_Fi_2: {
	width: 14.25,
	height: 10,
	position: "absolute",
	transform: [
		{translateY: 2},
	],
	},
_Rectangle_373: {
	width: 360,
	height: 1,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	left: 0,
	top: 434,
	},
_Rectangle_374: {
	width: 360,
	height: 1,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	left: 0,
	top: 281,
	},
______: {
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
_1__Single_Line___B___icon: {
	width: 360,
	height: 48,
	position: "absolute",
	left: 0,
	top: 330,
	},
_Group_23: {
	width: 360,
	height: 48,
	position: "absolute",
	},
_Rectangle_360: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
__________: {
	width: 143.226,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 27},
		{translateY: 12},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 312},
		{translateY: 12},
	],
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style72: {
	position: "absolute",
	transform: [
		{translateX: 8.58984},
		{translateY: 6},
	],
	},
style73: {
	},
style74: {
	position: "absolute",
	},
_1__Single_Line___B___icon_2: {
	width: 360,
	height: 48,
	position: "absolute",
	left: 0,
	top: 378,
	},
_Group_23_2: {
	width: 360,
	height: 48,
	position: "absolute",
	},
_Rectangle_360_2: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
___________2: {
	width: 143.226,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 27},
		{translateY: 12},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 312},
		{translateY: 12},
	],
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style81: {
	position: "absolute",
	transform: [
		{translateX: 8.58984},
		{translateY: 6},
	],
	},
style82: {
	},
style83: {
	position: "absolute",
	},
_1__Single_Line___B___icon_3: {
	width: 360,
	height: 48,
	position: "absolute",
	left: 0,
	top: 483,
	},
_Group_23_3: {
	width: 360,
	height: 48,
	position: "absolute",
	},
_Rectangle_360_3: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
___________3: {
	width: 143.226,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 27},
		{translateY: 12},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 312},
		{translateY: 12},
	],
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style90: {
	position: "absolute",
	transform: [
		{translateX: 8.58984},
		{translateY: 6},
	],
	},
style91: {
	},
style92: {
	position: "absolute",
	},
_Action___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 52,
	top: 205,
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style95: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
style96: {
	},
style97: {
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
_Navigation___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 17},
	],
	},
_Navigation___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 17},
	],
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style105: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 5.5},
	],
	},
style106: {
	},
style107: {
	position: "absolute",
	},
})

