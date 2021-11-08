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
const Page_9  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page50}    >
			<View style = {noneModeStyles._1__Outlined___d__Inactive___info}    >
				<View style = {noneModeStyles.style2}    >
					<View style = {noneModeStyles.style3}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
							<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Input_text}   >
					패스워드를 입력해주세요.
				</Text>
				<Text style = {noneModeStyles._Assistive_text}   >
					*숫자, 영문, 특수문자 12자 이내 조합
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___d__Inactive}    >
				<View style = {noneModeStyles.style7}    >
					<View style = {noneModeStyles.style8}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
							<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style9}    >
				</View>
				<Text style = {noneModeStyles._Input_text_2}   >
					패스워드를 한 번 더 입력해주세요.
				</Text>
				<Text style = {noneModeStyles._Assistive_text_2}   >
					텍스트를 입력해주세요.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___e____}    >
				<View style = {noneModeStyles.style13}    >
					<View style = {noneModeStyles.style14}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}   stroke = {"#00BDD3"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Input_text_3}   >
					zoohee97@gmail.com
				</Text>
				<Text style = {noneModeStyles._Assistive_text_3}   >
					사용 가능한 이메일입니다.
				</Text>
				<View style = {noneModeStyles._1__Button___A__Small___c__red}    >
					<Text style = {noneModeStyles.___}   >
						중복 확인
					</Text>
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
								<View style = {noneModeStyles.style28}    >
									<View style = {noneModeStyles.style29}   >
										<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
											<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style30}    >
									<View style = {noneModeStyles.style31}   >
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
								<View style = {noneModeStyles.style39}    >
									<View style = {noneModeStyles.style40}   >
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
			<View style = {noneModeStyles._1__Button___A__Small___f__text_icon_inactive_}    >
				<View style = {noneModeStyles._Group_143}    >
					<Text style = {noneModeStyles.____2}   >
						다음
					</Text>
					<View style = {noneModeStyles._Navigation___ic}    >
						<View style = {noneModeStyles._ic}    >
							<View style = {noneModeStyles.style50}    >
								<View style = {noneModeStyles.style51}   >
									<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
										<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style52}    >
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
						<View style = {noneModeStyles.style60}    >
							<View style = {noneModeStyles.style61}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"black"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style62}    >
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._____}   >
				회원가입
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_9

const noneModeStyles = StyleSheet.create({
_page50: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_1__Outlined___d__Inactive___info: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 16,
	top: 261,
	},
style2: {
	position: "absolute",
	},
style3: {
	},
_Input_text: {
	width: 180,
	height: 24,
	position: "absolute",
	left: 24,
	top: 16,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Assistive_text: {
	width: 191,
	height: 16,
	position: "absolute",
	left: 24,
	top: 58,
	color: "rgba(0, 0, 0, 0.68)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___d__Inactive: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 16,
	top: 345,
	},
style7: {
	position: "absolute",
	},
style8: {
	},
style9: {
	width: 1,
	height: 16,
	position: "absolute",
	left: 153,
	top: 20,
	},
_Input_text_2: {
	width: 214,
	height: 24,
	position: "absolute",
	left: 24,
	top: 16,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Assistive_text_2: {
	width: 199,
	height: 16,
	position: "absolute",
	left: 16,
	top: 58,
	color: "rgba(0, 0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___e____: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 16,
	top: 177,
	},
style13: {
	position: "absolute",
	},
style14: {
	},
_Input_text_3: {
	width: 148,
	height: 24,
	position: "absolute",
	left: 24,
	top: 16,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Assistive_text_3: {
	width: 136,
	height: 16,
	position: "absolute",
	left: 24,
	top: 58,
	color: "rgb(0, 189, 211)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Button___A__Small___c__red: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(0, 189, 211)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 225,
	top: 10,
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
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
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
style28: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style29: {
	},
style30: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style31: {
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
style39: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style40: {
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
_1__Button___A__Small___f__text_icon_inactive_: {
	width: 50,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 294,
	top: 576,
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
style50: {
	position: "absolute",
	transform: [
		{translateX: 8.58984},
		{translateY: 6},
	],
	},
style51: {
	},
style52: {
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
style60: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style61: {
	},
style62: {
	position: "absolute",
	},
_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 121,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
})

