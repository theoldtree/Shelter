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
const Page_8  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page58}    >
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
								<View style = {noneModeStyles.style10}    >
									<View style = {noneModeStyles.style11}   >
										<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
											<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
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
			</View>
			<Text style = {noneModeStyles.___________}   >
				로그인을 해주세요.
			</Text>
			<Text style = {noneModeStyles._______}   >
				아이디 찾기
			</Text>
			<Text style = {noneModeStyles.________}   >
				비밀번호 찾기
			</Text>
			<Text style = {noneModeStyles._____}   >
				회원가입
			</Text>
			<View style = {noneModeStyles._1__Outlined___b__Activated}    >
				<View style = {noneModeStyles.style32}    >
					<View style = {noneModeStyles.style33}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}   stroke = {"#00BDD3"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style34}    >
					<View style = {noneModeStyles.style35}   >
						<Svg style={{height: 16, width: 1}} viewBox = "0 0 1 16">
							<Path fill = {"black"}     d = "M0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5V15.5C1 15.7761 0.776142 16 0.5 16C0.223858 16 0 15.7761 0 15.5V0.5Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Input_text}   >
					zoohee97@gmail.com
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___d__Inactive}    >
				<View style = {noneModeStyles.style38}    >
					<View style = {noneModeStyles.style39}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
							<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style40}    >
				</View>
				<Text style = {noneModeStyles._Input_text_2}   >
					비밀번호
				</Text>
				<Text style = {noneModeStyles._Assistive_text}   >
					텍스트를 입력해주세요.
				</Text>
			</View>
			<View style = {noneModeStyles._Rectangle_538}    >
			</View>
			<View style = {noneModeStyles._Rectangle_539}    >
			</View>
			<View style = {noneModeStyles._Large_Buttons}    >
				<View style = {noneModeStyles._Elevation}    >
				</View>
				<Text style = {noneModeStyles.___}   >
					로그인
				</Text>
			</View>
			<Text style = {noneModeStyles._________________}   >
				쉘터에 오신 것을{'\n'}환영합니다.
			</Text>
			<View style = {noneModeStyles._Group_151}    >
				<View style = {noneModeStyles._Ellipse_28}    >
				</View>
				<View style = {noneModeStyles._kakao_talk}    >
					<View style = {noneModeStyles._kakao_talk_2}    >
						<View style = {noneModeStyles.style53}    >
							<View style = {noneModeStyles.style54}   >
								<Svg style={{height: 13, width: 14}} viewBox = "0 0 14 13">
									<Path fill = {"black"}     d = "M6.99737 0C3.13331 0 0 2.48589 0 5.55358C0 7.53699 1.30905 9.27447 3.28051 10.2609L2.57078 12.8129C2.57078 12.8129 2.55764 12.9319 2.63387 12.9769C2.7101 13.0218 2.8021 12.9874 2.8021 12.9874C3.02291 12.9557 5.35186 11.3081 5.75929 11.0225C6.16147 11.0807 6.57942 11.1098 7.00263 11.1098C10.8667 11.1098 14 8.62391 14 5.55622C14 2.48853 10.8614 0 6.99737 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style55}    >
							<View style = {noneModeStyles.style56}   >
								<Svg style={{height: 4, width: 11}} viewBox = "0 0 11 4">
									<Path fill = {"#FFE812"}     d = "M1.50802 3.7957C1.27239 3.7957 1.08112 3.61164 1.08112 3.38573V0.839461H0.415814C0.18573 0.839461 0 0.652604 0 0.421125C0 0.189646 0.188502 0.00278937 0.415814 0.00278937H2.59745C2.82753 0.00278937 3.01326 0.189646 3.01326 0.421125C3.01326 0.652604 2.82476 0.839461 2.59745 0.839461H1.93215V3.38573C1.93215 3.60885 1.7381 3.7957 1.50525 3.7957H1.50802ZM5.24203 3.79013C5.06461 3.79013 4.92878 3.71761 4.8872 3.60048L4.67652 3.0427H3.37918L3.1685 3.60048C3.12692 3.71761 2.99109 3.79013 2.81367 3.79013C2.71942 3.79013 2.62794 3.7706 2.54201 3.73435C2.42558 3.67857 2.31192 3.53076 2.44221 3.12636L3.45957 0.429492C3.53164 0.223113 3.75064 0.0111559 4.02785 0.00557807C4.30506 2.60272e-07 4.52683 0.223113 4.59613 0.429492L5.61349 3.12636C5.74377 3.53076 5.63012 3.68415 5.51369 3.73435C5.43053 3.77339 5.33628 3.79013 5.24203 3.79013ZM4.45198 2.28411L4.02785 1.06815L3.60372 2.28411H4.45198ZM6.29819 3.73435C6.07642 3.73435 5.89069 3.55865 5.89069 3.3439V0.429492C5.89069 0.192435 6.08474 0 6.32591 0C6.56709 0 6.76113 0.195224 6.76113 0.429492V2.94509H7.66483C7.8866 2.94509 8.07233 3.12079 8.07233 3.33553C8.07233 3.55028 7.88937 3.72598 7.66483 3.72598L6.29819 3.73435ZM8.23588 3.36063V0.432281C8.23588 0.195224 8.42993 0.00278937 8.66279 0.00278937C8.89564 0.00278937 9.08969 0.198013 9.08969 0.432281V1.35262L10.2817 0.15339C10.4129 0.0213818 10.661 0.0329538 10.8112 0.184068C10.9523 0.326018 10.9889 0.565956 10.8417 0.71675L9.86587 1.69287L10.9137 3.08732C11.0545 3.26864 11.0204 3.55106 10.8306 3.68415C10.6434 3.82359 10.3685 3.77711 10.2346 3.60048L9.23661 2.27017L9.08969 2.41798V3.35227C9.08969 3.90877 8.23588 3.9302 8.23588 3.36063Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Facebook}    >
				<View style = {noneModeStyles._Oval}    >
				</View>
				<View style = {noneModeStyles.style59}    >
					<View style = {noneModeStyles.style60}   >
						<Svg style={{height: 14, width: 7}} viewBox = "0 0 7 14">
							<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M4.654 13.9993H1.55082V7.38867H0V4.84123H1.55082V3.31307C1.55082 1.23637 2.42635 0 4.91402 0H6.98488V2.54744H5.69098C4.7223 2.54744 4.65788 2.90302 4.65788 3.56751L4.654 4.84123H6.99963L6.72486 7.38867H4.654V13.9993Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Google_Plus}    >
				<View style = {noneModeStyles._Oval_2}    >
				</View>
				<View style = {noneModeStyles._G_}    >
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_8

const noneModeStyles = StyleSheet.create({
_page58: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
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
style10: {
	width: 1.5,
	height: 4.90027,
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
___________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 201,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 40,
	top: 425,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 148,
	top: 425,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 269,
	top: 425,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___b__Activated: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 16,
	top: 261,
	},
style32: {
	position: "absolute",
	},
style33: {
	},
style34: {
	width: 1,
	height: 16,
	position: "absolute",
	left: 171,
	top: 20,
	},
style35: {
	},
_Input_text: {
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
_1__Outlined___d__Inactive: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 16,
	top: 345,
	},
style38: {
	position: "absolute",
	},
style39: {
	},
style40: {
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
_Rectangle_538: {
	width: 1,
	height: 11,
	backgroundColor: "rgba(0, 0, 0, 0.35)",
	position: "absolute",
	left: 128,
	top: 432,
	},
_Rectangle_539: {
	width: 1,
	height: 11,
	backgroundColor: "rgba(0, 0, 0, 0.35)",
	position: "absolute",
	left: 249,
	top: 432,
	},
_Large_Buttons: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 34,
	top: 552,
	},
_Elevation: {
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
___: {
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
_________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 121,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Noto Sans",
	textAlign: "left",
	},
_Group_151: {
	width: 32,
	height: 32,
	position: "absolute",
	left: 84,
	top: 480,
	},
_Ellipse_28: {
	width: 32,
	height: 32,
	position: "absolute",
	left: 0,
	top: 0,
	},
_kakao_talk: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 8.5},
	],
	},
_kakao_talk_2: {
	width: 14,
	height: 13,
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 1.5},
	],
	},
style53: {
	position: "absolute",
	},
style54: {
	},
style55: {
	position: "absolute",
	transform: [
		{translateX: 1.69824},
		{translateY: 3.89014},
	],
	},
style56: {
	},
_Facebook: {
	width: 32,
	height: 32,
	position: "absolute",
	left: 164,
	top: 480,
	},
_Oval: {
	width: 32,
	height: 32,
	position: "absolute",
	left: 0,
	top: 0,
	},
style59: {
	width: 6.56445,
	height: 13.1282,
	position: "absolute",
	left: 12.7178,
	top: 9.43604,
	},
style60: {
	},
_Google_Plus: {
	width: 32,
	height: 32,
	position: "absolute",
	left: 244,
	top: 480,
	},
_Oval_2: {
	width: 32,
	height: 32,
	position: "absolute",
	left: 0,
	top: 0,
	},
_G_: {
	width: 16,
	height: 9.84619,
	position: "absolute",
	left: 8.20508,
	top: 11.0769,
	},
})

