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
const Page_10  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page49}    >
			<View style = {noneModeStyles._Rectangle_331}    >
			</View>
			<View style = {noneModeStyles._1__Outlined___d__Inactive}    >
				<View style = {noneModeStyles.style3}    >
					<View style = {noneModeStyles.style4}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
							<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style5}    >
				</View>
				<Text style = {noneModeStyles._Input_text}   >
					성명
				</Text>
				<Text style = {noneModeStyles._Assistive_text}   >
					텍스트를 입력해주세요.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___d__Inactive___text_button}    >
				<View style = {noneModeStyles._1__Outlined___d__Inactive_2}    >
					<View style = {noneModeStyles.style10}    >
						<View style = {noneModeStyles.style11}   >
							<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
								<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
								<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style12}    >
					</View>
					<Text style = {noneModeStyles._Input_text_2}   >
						‘-’없이 핸드폰 번호만 입력
					</Text>
					<Text style = {noneModeStyles._Assistive_text_2}   >
						텍스트를 입력해주세요.
					</Text>
					<View style = {noneModeStyles._1__Button___A__Small___b__inactive}    >
						<Text style = {noneModeStyles.___}   >
							인증번호 발송
						</Text>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Outlined___d__Inactive_______}    >
				<View style = {noneModeStyles.style18}    >
					<View style = {noneModeStyles.style19}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
							<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Input_text_3}   >
					생년월일 6자리 입력
				</Text>
				<Text style = {noneModeStyles._Assistive_text_3}   >
					*연령별 복용량 설정을 위한 확인란
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___a__Inactive___text_time_button}    >
				<View style = {noneModeStyles._1__Outlined___a__Inactive}    >
					<View style = {noneModeStyles.style24}    >
						<View style = {noneModeStyles.style25}   >
							<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
								<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
								<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
							</Svg>
						</View>
					</View>
					<Text style = {noneModeStyles.____2}   >
						확인
					</Text>
					<View style = {noneModeStyles.style27}    >
					</View>
					<Text style = {noneModeStyles._Assistive_text_4}   >
						*연령별 복용량 설정을 위한 확인란
					</Text>
					<Text style = {noneModeStyles._03_00}   >
						03:00
					</Text>
					<Text style = {noneModeStyles._Input_text_4}   >
						인증번호 입력
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___b__inactive_2}    >
					<Text style = {noneModeStyles.____3}   >
						확인
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Group_31}    >
				<View style = {noneModeStyles._Rectangle_331_2}    >
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
								<View style = {noneModeStyles.style42}    >
									<View style = {noneModeStyles.style43}   >
										<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
											<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style44}    >
									<View style = {noneModeStyles.style45}   >
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
								<View style = {noneModeStyles.style53}    >
									<View style = {noneModeStyles.style54}   >
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
					<Text style = {noneModeStyles.____4}   >
						다음
					</Text>
					<View style = {noneModeStyles._Navigation___ic}    >
						<View style = {noneModeStyles._ic}    >
							<View style = {noneModeStyles.style64}    >
								<View style = {noneModeStyles.style65}   >
									<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
										<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style66}    >
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
						<View style = {noneModeStyles.style74}    >
							<View style = {noneModeStyles.style75}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"black"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style76}    >
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles.______}   >
				본인 인증
			</Text>
			<View style = {noneModeStyles._1__Outlined___F__text_list}    >
				<View style = {noneModeStyles.style79}    >
					<View style = {noneModeStyles.style80}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
							<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___d__text}    >
					<Text style = {noneModeStyles.____5}   >
						KT
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___d__text_2}    >
					<Text style = {noneModeStyles.____6}   >
						SKT
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___d__text_3}    >
					<Text style = {noneModeStyles.____7}   >
						LG U+
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___d__text_4}    >
					<Text style = {noneModeStyles.____8}   >
						알뜰폰
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button___D__A_little_Small___a__active}    >
				<Text style = {noneModeStyles._SKT}   >
					SKT
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_10

const noneModeStyles = StyleSheet.create({
_page49: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_331: {
	width: 360,
	height: 24,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_1__Outlined___d__Inactive: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 16,
	top: 177,
	},
style3: {
	position: "absolute",
	},
style4: {
	},
style5: {
	width: 1,
	height: 16,
	position: "absolute",
	left: 153,
	top: 20,
	},
_Input_text: {
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
_Assistive_text: {
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
_1__Outlined___d__Inactive___text_button: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 16,
	top: 429,
	},
_1__Outlined___d__Inactive_2: {
	width: 328,
	height: 80,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	},
style10: {
	position: "absolute",
	},
style11: {
	},
style12: {
	width: 1,
	height: 16,
	position: "absolute",
	left: 153,
	top: 20,
	},
_Input_text_2: {
	width: 168,
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
_1__Button___A__Small___b__inactive: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 200,
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
	color: "rgba(255, 255, 255, 0.698)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Outlined___d__Inactive_______: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 16,
	top: 261,
	},
style18: {
	position: "absolute",
	},
style19: {
	},
_Input_text_3: {
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
_Assistive_text_3: {
	width: 191,
	height: 16,
	position: "absolute",
	left: 24,
	top: 58,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___a__Inactive___text_time_button: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 16,
	top: 513,
	},
_1__Outlined___a__Inactive: {
	width: 328,
	height: 80,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	},
style24: {
	position: "absolute",
	},
style25: {
	},
____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 267},
		{translateY: 20},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
style27: {
	width: 1,
	height: 16,
	position: "absolute",
	left: 153,
	top: 20,
	},
_Assistive_text_4: {
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
_03_00: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 192},
		{translateY: 21},
	],
	color: "rgba(0, 0, 0, 0.3)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Input_text_4: {
	width: 150,
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
_1__Button___A__Small___b__inactive_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 254},
		{translateY: 10},
	],
	paddingTop: 10,
	paddingRight: 19,
	paddingBottom: 10,
	paddingLeft: 19,
	borderRadius: 18,
	},
____3: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(255, 255, 255, 0.698)",
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
_Rectangle_331_2: {
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
style42: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style43: {
	},
style44: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style45: {
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
style53: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style54: {
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
	top: 616,
	},
_Group_143: {
	width: 50,
	height: 24,
	position: "absolute",
	},
____4: {
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
style64: {
	position: "absolute",
	transform: [
		{translateX: 8.58984},
		{translateY: 6},
	],
	},
style65: {
	},
style66: {
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
style74: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style75: {
	},
style76: {
	position: "absolute",
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
_1__Outlined___F__text_list: {
	width: 328,
	height: 56,
	position: "absolute",
	left: 16,
	top: 345,
	},
style79: {
	position: "absolute",
	},
style80: {
	},
_1__Button___A__Small___d__text: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 93},
		{translateY: 12},
	],
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 7,
	paddingLeft: 16,
	},
____5: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___A__Small___d__text_2: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 12},
		{translateY: 12},
	],
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 7,
	paddingLeft: 16,
	},
____6: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___A__Small___d__text_3: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 165},
		{translateY: 12},
	],
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 7,
	paddingLeft: 16,
	},
____7: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___A__Small___d__text_4: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 245},
		{translateY: 12},
	],
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 7,
	paddingLeft: 16,
	},
____8: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___D__A_little_Small___a__active: {
	width: 82,
	height: "auto",
	backgroundColor: "rgb(0, 189, 211)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 16,
	top: 345,
	paddingTop: 20,
	paddingRight: 28,
	paddingBottom: 20,
	paddingLeft: 28,
	borderRadius: 28,
	},
_SKT: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "center",
	},
})

