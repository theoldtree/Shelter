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
import {image______________________one_line_5_link} from './assets/imageLinks.js'
import {image______________________one_line_6_link} from './assets/imageLinks.js'
import {image______________________one_line_7_link} from './assets/imageLinks.js'
const Page_20________________O____  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page37}    >
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
							<View style = {noneModeStyles.style8}    >
								<View style = {noneModeStyles.style9}   >
									<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style10}    >
								<View style = {noneModeStyles.style11}   >
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
							<View style = {noneModeStyles.style19}    >
								<View style = {noneModeStyles.style20}   >
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
						<View style = {noneModeStyles.style33}    >
							<View style = {noneModeStyles.style34}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"black"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style35}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_373}    >
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_538}    >
			</View>
			<View style = {noneModeStyles._Rectangle_539}    >
			</View>
			<View style = {noneModeStyles._Large_Buttons}    >
				<View style = {noneModeStyles._Elevation}    >
				</View>
				<View style = {noneModeStyles._Container}    >
				</View>
				<View style = {noneModeStyles._Overlay}    >
				</View>
				<Text style = {noneModeStyles.___}   >
					다음으로 넘어가기
				</Text>
			</View>
			<View style = {noneModeStyles._Group_286}    >
				<Text style = {noneModeStyles.__________}   >
					처방약이 아닙니다
				</Text>
				<View style = {noneModeStyles._Toggle___ic}    >
					<View style = {noneModeStyles._ic_2}    >
						<View style = {noneModeStyles.style48}    >
							<View style = {noneModeStyles.style49}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style50}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_280}    >
				<Text style = {noneModeStyles.____}   >
					처방약
				</Text>
				<View style = {noneModeStyles._Toggle___ic_2}    >
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style55}    >
							<View style = {noneModeStyles.style56}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style57}    >
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles.________________}   >
				복용하는 약이 {'\n'}처방약인가요?
			</Text>
			<Text style = {noneModeStyles.__________________________________________________________}   >
				처방약이라면 혼합/단일/기타 중 선택해주세요.{'\n'}처방약이 아니라면 바로 의약품 검색 화면으로 넘어갑니다.
			</Text>
			<View style = {noneModeStyles._Group_283}    >
				<View style = {noneModeStyles._Group_279}    >
					<Text style = {noneModeStyles.____2}   >
						혼합
					</Text>
					<View style = {noneModeStyles._Toggle___ic_3}    >
						<View style = {noneModeStyles._ic_4}    >
							<View style = {noneModeStyles.style65}    >
								<View style = {noneModeStyles.style66}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style67}    >
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles.______________________one_line_5_container}    >
					<View style = {noneModeStyles.______________________one_line_5}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image______________________one_line_5_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_281}    >
				<Text style = {noneModeStyles.____3}   >
					단일
				</Text>
				<View style = {noneModeStyles._Toggle___ic_4}    >
					<View style = {noneModeStyles._ic_5}    >
						<View style = {noneModeStyles.style74}    >
							<View style = {noneModeStyles.style75}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style76}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles.______________________one_line_6_container}    >
				<View style = {noneModeStyles.______________________one_line_6}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image______________________one_line_6_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Group_282}    >
				<Text style = {noneModeStyles.____4}   >
					기타
				</Text>
				<View style = {noneModeStyles._Toggle___ic_5}    >
					<View style = {noneModeStyles._ic_6}    >
						<View style = {noneModeStyles.style83}    >
							<View style = {noneModeStyles.style84}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style85}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles.______________________one_line_7_container}    >
				<View style = {noneModeStyles.______________________one_line_7}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image______________________one_line_7_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles.___________________________________________}   >
				*혼합약 - 종이 봉지 형태로 처방 받는 약(가루약도 혼합약에 포함됩니다.)
			</Text>
			<Text style = {noneModeStyles._____________________1_________}   >
				*혼합약의 경우 자동으로 전문의약품 1개로 포함됩니다.
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_20________________O____

const noneModeStyles = StyleSheet.create({
_page37: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
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
style8: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style9: {
	},
style10: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style11: {
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
style19: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style20: {
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
style33: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style34: {
	},
style35: {
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
_Rectangle_538: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	left: 0,
	top: 264,
	},
_Rectangle_539: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	left: 0,
	top: 337,
	},
_Large_Buttons: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 34,
	top: 552,
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
_Group_286: {
	width: 154,
	height: 24,
	position: "absolute",
	left: 174,
	top: 289,
	},
__________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 32,
	top: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style48: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style49: {
	},
style50: {
	position: "absolute",
	},
_Group_280: {
	width: 77,
	height: 24,
	position: "absolute",
	left: 32,
	top: 289,
	},
____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 32,
	top: 0,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style55: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style56: {
	},
style57: {
	position: "absolute",
	},
________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 121,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 22,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
__________________________________________________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 201,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_283: {
	width: 62,
	height: 105,
	position: "absolute",
	left: 32,
	top: 362,
	},
_Group_279: {
	width: 62,
	height: 24,
	position: "absolute",
	left: 0,
	top: 81,
	},
____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 32,
	top: 0,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style65: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style66: {
	},
style67: {
	position: "absolute",
	},
______________________one_line_5_container: {
	width: 61,
	height: 69,
	position: "absolute",
	left: 1,
	top: 0,
	},
______________________one_line_5: {
	width: "100%",
	height: "100%",
	},
_Group_281: {
	width: 62,
	height: 24,
	position: "absolute",
	left: 148,
	top: 443,
	},
____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 32,
	top: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style74: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style75: {
	},
style76: {
	position: "absolute",
	},
______________________one_line_6_container: {
	width: 63,
	height: 69,
	position: "absolute",
	left: 148,
	top: 362,
	},
______________________one_line_6: {
	width: "100%",
	height: "100%",
	},
_Group_282: {
	width: 62,
	height: 24,
	position: "absolute",
	left: 265,
	top: 443,
	},
____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 32,
	top: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style83: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style84: {
	},
style85: {
	position: "absolute",
	},
______________________one_line_7_container: {
	width: 64,
	height: 69,
	position: "absolute",
	left: 264,
	top: 362,
	},
______________________one_line_7: {
	width: "100%",
	height: "100%",
	},
___________________________________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 34,
	top: 483,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____________________1_________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 34,
	top: 499,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
})

