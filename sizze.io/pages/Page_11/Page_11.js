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
const Page_11  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page48}    >
			<View style = {noneModeStyles._1__Button____________________inactive_}    >
				<View style = {noneModeStyles._Rectangle_446}    >
				</View>
				<Text style = {noneModeStyles.___________}   >
					약관 전체 동의하기
				</Text>
				<View style = {noneModeStyles._Action___ic}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style6}    >
						</View>
						<View style = {noneModeStyles.style7}    >
							<View style = {noneModeStyles.style8}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
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
								<View style = {noneModeStyles.style18}    >
									<View style = {noneModeStyles.style19}   >
										<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
											<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style20}    >
									<View style = {noneModeStyles.style21}   >
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
								<View style = {noneModeStyles.style29}    >
									<View style = {noneModeStyles.style30}   >
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
			<View style = {noneModeStyles._1__Button___A__Small___e__text_icon_active_}    >
				<Text style = {noneModeStyles.___}   >
					다음
				</Text>
				<View style = {noneModeStyles._Navigation___ic}    >
					<View style = {noneModeStyles._ic_2}    >
						<View style = {noneModeStyles.style39}    >
							<View style = {noneModeStyles.style40}   >
								<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
									<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style41}    >
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
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style49}    >
							<View style = {noneModeStyles.style50}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"black"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style51}    >
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles.______}   >
				약관 동의
			</Text>
			<View style = {noneModeStyles._1__Button_________________active_}    >
				<Text style = {noneModeStyles.________________}   >
					[필수] 쉘터서비스 이용약관
				</Text>
				<View style = {noneModeStyles._Action___ic_2}    >
					<View style = {noneModeStyles._ic_4}    >
						<View style = {noneModeStyles.style57}    >
						</View>
						<View style = {noneModeStyles.style58}    >
							<View style = {noneModeStyles.style59}   >
								<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
									<Path fill = {"#00BDD3"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button_________________active__2}    >
				<Text style = {noneModeStyles._________________2}   >
					[선택] 혜택 및 이벤트 푸시 알림
				</Text>
				<View style = {noneModeStyles._Action___ic_3}    >
					<View style = {noneModeStyles._ic_5}    >
						<View style = {noneModeStyles.style64}    >
						</View>
						<View style = {noneModeStyles.style65}    >
							<View style = {noneModeStyles.style66}   >
								<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
									<Path fill = {"#00BDD3"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button_________________active__3}    >
				<Text style = {noneModeStyles._________________3}   >
					[필수] 개인정보 수집 및 이용 동의
				</Text>
				<View style = {noneModeStyles._Action___ic_4}    >
					<View style = {noneModeStyles._ic_6}    >
						<View style = {noneModeStyles.style71}    >
						</View>
						<View style = {noneModeStyles.style72}    >
							<View style = {noneModeStyles.style73}   >
								<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
									<Path fill = {"#00BDD3"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button_________________active__4}    >
				<Text style = {noneModeStyles._________________4}   >
					[필수] 본인확인 서비스 이용약관
				</Text>
				<View style = {noneModeStyles._Action___ic_5}    >
					<View style = {noneModeStyles._ic_7}    >
						<View style = {noneModeStyles.style78}    >
						</View>
						<View style = {noneModeStyles.style79}    >
							<View style = {noneModeStyles.style80}   >
								<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
									<Path fill = {"#00BDD3"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button_________________active__5}    >
				<Text style = {noneModeStyles._________________5}   >
					[필수] 본인확인 서비스 이용약관
				</Text>
				<View style = {noneModeStyles._Action___ic_6}    >
					<View style = {noneModeStyles._ic_8}    >
						<View style = {noneModeStyles.style85}    >
						</View>
						<View style = {noneModeStyles.style86}    >
							<View style = {noneModeStyles.style87}   >
								<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
									<Path fill = {"#00BDD3"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button_________________active__6}    >
				<Text style = {noneModeStyles._________________6}   >
					[필수] 통신사 이용약관
				</Text>
				<View style = {noneModeStyles._Action___ic_7}    >
					<View style = {noneModeStyles._ic_9}    >
						<View style = {noneModeStyles.style92}    >
						</View>
						<View style = {noneModeStyles.style93}    >
							<View style = {noneModeStyles.style94}   >
								<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
									<Path fill = {"#00BDD3"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button____________________active_}    >
				<Text style = {noneModeStyles.____________}   >
					필수 약관 전체 동의
				</Text>
				<View style = {noneModeStyles._Action___ic_8}    >
					<View style = {noneModeStyles._ic_10}    >
						<View style = {noneModeStyles.style99}    >
						</View>
						<View style = {noneModeStyles.style100}    >
							<View style = {noneModeStyles.style101}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"#00BDD3"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button____________________inactive__2}    >
				<Text style = {noneModeStyles._____________2}   >
					혜택/이벤트 수신 동의 (선택)
				</Text>
				<View style = {noneModeStyles._Action___ic_9}    >
					<View style = {noneModeStyles._ic_11}    >
						<View style = {noneModeStyles.style106}    >
						</View>
						<View style = {noneModeStyles.style107}    >
							<View style = {noneModeStyles.style108}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_11

const noneModeStyles = StyleSheet.create({
_page48: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_1__Button____________________inactive_: {
	width: 328,
	height: 56,
	position: "absolute",
	left: 16,
	top: 177,
	},
_Rectangle_446: {
	width: 328,
	height: 56,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	borderRadius: 8,
	},
___________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 16},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 20,
	fontWeight: "500",
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
		{translateY: 16},
	],
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
	},
style7: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style8: {
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
style18: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style19: {
	},
style20: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style21: {
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
style29: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style30: {
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
_1__Button___A__Small___e__text_icon_active_: {
	width: 50,
	height: 24,
	position: "absolute",
	left: 294,
	top: 616,
	},
___: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	color: "rgb(0, 0, 0)",
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
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style39: {
	position: "absolute",
	transform: [
		{translateX: 8.58984},
		{translateY: 6},
	],
	},
style40: {
	},
style41: {
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
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style49: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style50: {
	},
style51: {
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
_1__Button_________________active_: {
	width: 296,
	height: 32,
	position: "absolute",
	left: 32,
	top: 305,
	},
________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 272},
		{translateY: 4},
	],
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style57: {
	position: "absolute",
	},
style58: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style59: {
	},
_1__Button_________________active__2: {
	width: 296,
	height: 32,
	position: "absolute",
	left: 32,
	top: 537,
	},
_________________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 272},
		{translateY: 4},
	],
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style64: {
	position: "absolute",
	},
style65: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style66: {
	},
_1__Button_________________active__3: {
	width: 296,
	height: 32,
	position: "absolute",
	left: 32,
	top: 337,
	},
_________________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 272},
		{translateY: 4},
	],
	},
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style71: {
	position: "absolute",
	},
style72: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style73: {
	},
_1__Button_________________active__4: {
	width: 296,
	height: 32,
	position: "absolute",
	left: 32,
	top: 369,
	},
_________________4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 272},
		{translateY: 4},
	],
	},
_ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style78: {
	position: "absolute",
	},
style79: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style80: {
	},
_1__Button_________________active__5: {
	width: 296,
	height: 32,
	position: "absolute",
	left: 32,
	top: 433,
	},
_________________5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 272},
		{translateY: 4},
	],
	},
_ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style85: {
	position: "absolute",
	},
style86: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style87: {
	},
_1__Button_________________active__6: {
	width: 296,
	height: 32,
	position: "absolute",
	left: 32,
	top: 401,
	},
_________________6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 272},
		{translateY: 4},
	],
	},
_ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style92: {
	position: "absolute",
	},
style93: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style94: {
	},
_1__Button____________________active_: {
	width: 296,
	height: 24,
	position: "absolute",
	left: 32,
	top: 265,
	},
____________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 272},
	],
	},
_ic_10: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style99: {
	position: "absolute",
	},
style100: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style101: {
	},
_1__Button____________________inactive__2: {
	width: 296,
	height: 24,
	position: "absolute",
	left: 32,
	top: 497,
	},
_____________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 272},
	],
	},
_ic_11: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style106: {
	position: "absolute",
	},
style107: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style108: {
	},
})

