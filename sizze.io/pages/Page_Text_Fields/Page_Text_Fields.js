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
const Page_Text_Fields  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page9}    >
			<Text style = {noneModeStyles._Text_Fields}   >
				Text Fields
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._1__Outlined___d__Inactive_______}    >
				<View style = {noneModeStyles.style4}    >
					<View style = {noneModeStyles.style5}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
							<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Input_text}   >
					생년월일 6자리 입력
				</Text>
				<Text style = {noneModeStyles._Assistive_text}   >
					연령별 복용량 설정을 위한 확인란
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___c__Focused}    >
				<View style = {noneModeStyles.style9}    >
					<View style = {noneModeStyles.style10}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}   stroke = {"#B00020"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style11}    >
					<View style = {noneModeStyles.style12}   >
						<Svg style={{height: 16, width: 1}} viewBox = "0 0 1 16">
							<Path fill = {"black"}     d = "M0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5V15.5C1 15.7761 0.776142 16 0.5 16C0.223858 16 0 15.7761 0 15.5V0.5Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Input_text_2}   >
					텍스트를 입력해주세요.
				</Text>
				<Text style = {noneModeStyles._Assistive_text_2}   >
					잘못된 내용을 입력하셨습니다.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___b__Activated}    >
				<View style = {noneModeStyles.style16}    >
					<View style = {noneModeStyles.style17}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}   stroke = {"#00BDD3"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Assistive_text_3}   >
					텍스트를 입력해주세요.
				</Text>
				<View style = {noneModeStyles.style19}    >
					<View style = {noneModeStyles.style20}   >
						<Svg style={{height: 16, width: 1}} viewBox = "0 0 1 16">
							<Path fill = {"black"}     d = "M0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5V15.5C1 15.7761 0.776142 16 0.5 16C0.223858 16 0 15.7761 0 15.5V0.5Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Input_text_3}   >
					텍스트를 입력해주세요.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___e____}    >
				<View style = {noneModeStyles.style23}    >
					<View style = {noneModeStyles.style24}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}   stroke = {"#00BDD3"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<Text style = {noneModeStyles._Input_text_4}   >
					zoohee97@gmail.com
				</Text>
				<Text style = {noneModeStyles._Assistive_text_4}   >
					사용 가능한 이메일입니다.
				</Text>
				<View style = {noneModeStyles._1__Button___A__Small___c__red}    >
					<Text style = {noneModeStyles.___}   >
						중복 확인
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Outlined___d__Inactive}    >
				<View style = {noneModeStyles.style30}    >
					<View style = {noneModeStyles.style31}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
							<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style32}    >
				</View>
				<Text style = {noneModeStyles._Input_text_5}   >
					텍스트를 입력해주세요.
				</Text>
				<Text style = {noneModeStyles._Assistive_text_5}   >
					텍스트를 입력해주세요.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___d__Inactive___text_button}    >
				<View style = {noneModeStyles._1__Outlined___d__Inactive_2}    >
					<View style = {noneModeStyles.style37}    >
						<View style = {noneModeStyles.style38}   >
							<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
								<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
								<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style39}    >
					</View>
					<Text style = {noneModeStyles._Input_text_6}   >
						핸드폰 번호 입력
					</Text>
					<Text style = {noneModeStyles._Assistive_text_6}   >
						텍스트를 입력해주세요.
					</Text>
					<View style = {noneModeStyles._1__Button___A__Small___c__red_2}    >
						<Text style = {noneModeStyles.____2}   >
							인증번호 발송
						</Text>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Outlined___a__Inactive___text_time_button}    >
				<View style = {noneModeStyles._1__Outlined___a__Inactive}    >
					<View style = {noneModeStyles.style46}    >
						<View style = {noneModeStyles.style47}   >
							<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
								<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
								<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
							</Svg>
						</View>
					</View>
					<Text style = {noneModeStyles.____3}   >
						확인
					</Text>
					<View style = {noneModeStyles.style49}    >
					</View>
					<Text style = {noneModeStyles._Assistive_text_7}   >
						텍스트를 입력해주세요.
					</Text>
					<Text style = {noneModeStyles._03_00}   >
						03:00
					</Text>
					<Text style = {noneModeStyles._Input_text_7}   >
						인증번호 입력
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___c__red_3}    >
					<Text style = {noneModeStyles.____4}   >
						확인
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Filled___A__active___a__text_button}    >
				<View style = {noneModeStyles._Rectangle_330}    >
				</View>
				<Text style = {noneModeStyles._____________}   >
					01041808677
				</Text>
				<View style = {noneModeStyles._Rectangle_355}    >
				</View>
				<Text style = {noneModeStyles.____5}   >
					인증
				</Text>
			</View>
			<View style = {noneModeStyles._1__Filled___B__Inactive___c__caption}    >
				<View style = {noneModeStyles._1__Filled___Inactive}    >
					<View style = {noneModeStyles._Rectangle_330_2}    >
					</View>
					<Text style = {noneModeStyles.______________2}   >
						패스워드를 입력해주세요.
					</Text>
				</View>
				<Text style = {noneModeStyles._______________12_______}   >
					*숫자, 영문, 특수문자 12자 이내 조합
				</Text>
			</View>
			<View style = {noneModeStyles._1__Filled___B__Inactive}    >
				<View style = {noneModeStyles._1__Filled___Inactive_2}    >
					<View style = {noneModeStyles._Rectangle_330_3}    >
					</View>
					<Text style = {noneModeStyles.______________}   >
						패스워드를 입력해주세요.
					</Text>
				</View>
				<Text style = {noneModeStyles._______________12________2}   >
					*숫자, 영문, 특수문자 12자 이내 조합
				</Text>
			</View>
			<View style = {noneModeStyles._1__Filled___C__error}    >
				<View style = {noneModeStyles._Rectangle_330_4}    >
				</View>
				<Text style = {noneModeStyles._______________}   >
					**************
				</Text>
				<Text style = {noneModeStyles.______________3}   >
					*패스워드가 다릅니다.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Filled___A__active___a__text_button________}    >
				<View style = {noneModeStyles._1__Filled___Inactive_3}    >
					<View style = {noneModeStyles._Rectangle_330_5}    >
					</View>
					<Text style = {noneModeStyles._zoohee97_gmail_com}   >
						zoohee97@gmail.com
					</Text>
				</View>
				<Text style = {noneModeStyles.________________}   >
					*사용 가능한 이메일입니다.
				</Text>
				<View style = {noneModeStyles._Rectangle_354}    >
				</View>
				<Text style = {noneModeStyles.______}   >
					중복 확인
				</Text>
			</View>
			<View style = {noneModeStyles._1__Filled___B__Inactive___b__text_time_button}    >
				<View style = {noneModeStyles._1__Filled___Inactive_4}    >
					<View style = {noneModeStyles._Rectangle_330_6}    >
					</View>
					<Text style = {noneModeStyles.______________4}   >
						인증번호 입력
					</Text>
				</View>
				<Text style = {noneModeStyles._03_00_2}   >
					03:00
				</Text>
				<View style = {noneModeStyles._Rectangle_355_2}    >
				</View>
				<Text style = {noneModeStyles.____6}   >
					확인
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___F__text_list}    >
				<View style = {noneModeStyles.style89}    >
					<View style = {noneModeStyles.style90}   >
						<Svg style={{height: 56, width: 328}} viewBox = "0 0 328 56">
							<Path fill = {"white"}     d = "M0 28C0 12.536 12.536 0 28 0H300C315.464 0 328 12.536 328 28C328 43.464 315.464 56 300 56H28C12.536 56 0 43.464 0 28Z"/>
							<Path fill = {"white"}   stroke = {"black"} strokeWidth = {2} d = "M1 28C1 13.0883 13.0883 1 28 1H300C314.912 1 327 13.0883 327 28C327 42.9117 314.912 55 300 55H28C13.0883 55 1 42.9117 1 28Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___d__text}    >
					<Text style = {noneModeStyles.____7}   >
						KT
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___d__text_2}    >
					<Text style = {noneModeStyles.____8}   >
						SKT
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___d__text_3}    >
					<Text style = {noneModeStyles.____9}   >
						LG U+
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___A__Small___d__text_4}    >
					<Text style = {noneModeStyles.____10}   >
						알뜰폰
					</Text>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Text_Fields

const noneModeStyles = StyleSheet.create({
_page9: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Text_Fields: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 80,
	top: 80,
	color: "rgb(0, 0, 0)",
	fontSize: 72,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Line_6: {
	width: 1280,
	height: 0,
	position: "absolute",
	left: 80,
	top: 204,
	borderTopWidth: 4,
	borderRightWidth: 4,
	borderBottomWidth: 4,
	borderLeftWidth: 4,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_1__Outlined___d__Inactive_______: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 80,
	top: 315,
	},
style4: {
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 315},
	],
	},
style5: {
	},
_Input_text: {
	width: 180,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 9770},
		{translateY: 4074},
	],
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
	transform: [
		{translateX: 9770},
		{translateY: 4116},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___c__Focused: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 842,
	top: 244,
	},
style9: {
	position: "absolute",
	transform: [
		{translateX: 842},
		{translateY: 244},
	],
	},
style10: {
	},
style11: {
	position: "absolute",
	transform: [
		{translateX: 1013},
		{translateY: 264},
	],
	},
style12: {
	},
_Input_text_2: {
	width: 152,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 10532},
		{translateY: 4003},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Assistive_text_2: {
	width: 156,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 10532},
		{translateY: 4045},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___b__Activated: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 461,
	top: 244,
	},
style16: {
	position: "absolute",
	transform: [
		{translateX: 461},
		{translateY: 244},
	],
	},
style17: {
	},
_Assistive_text_3: {
	width: 218,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 10151},
		{translateY: 4045},
	],
	color: "rgba(0, 0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 632},
		{translateY: 264},
	],
	},
style20: {
	},
_Input_text_3: {
	width: 148,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 10151},
		{translateY: 4003},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___e____: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 461,
	top: 315,
	},
style23: {
	position: "absolute",
	transform: [
		{translateX: 461},
		{translateY: 315},
	],
	},
style24: {
	},
_Input_text_4: {
	width: 148,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 10151},
		{translateY: 4074},
	],
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Assistive_text_4: {
	width: 136,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 10151},
		{translateY: 4116},
	],
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
	transform: [
		{translateX: 10352},
		{translateY: 4068},
	],
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
_1__Outlined___d__Inactive: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 80,
	top: 244,
	},
style30: {
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 244},
	],
	},
style31: {
	},
style32: {
	position: "absolute",
	transform: [
		{translateX: 233},
		{translateY: 264},
	],
	},
_Input_text_5: {
	width: 214,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 9770},
		{translateY: 4003},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Assistive_text_5: {
	width: 199,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 9762},
		{translateY: 4045},
	],
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
	left: 461,
	top: 395,
	},
_1__Outlined___d__Inactive_2: {
	width: 328,
	height: 80,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 10127},
		{translateY: 4138},
	],
	},
style37: {
	position: "absolute",
	},
style38: {
	},
style39: {
	width: 1,
	height: 16,
	position: "absolute",
	left: 153,
	top: 20,
	},
_Input_text_6: {
	width: 168,
	height: 24,
	position: "absolute",
	left: 24,
	top: 16,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Assistive_text_6: {
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
_1__Button___A__Small___c__red_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(0, 189, 211)",
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
____2: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Outlined___a__Inactive___text_time_button: {
	width: 328,
	height: 80,
	position: "absolute",
	left: 461,
	top: 475,
	},
_1__Outlined___a__Inactive: {
	width: 328,
	height: 80,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 10127},
		{translateY: 4218},
	],
	},
style46: {
	position: "absolute",
	},
style47: {
	},
____3: {
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
style49: {
	width: 1,
	height: 16,
	position: "absolute",
	left: 153,
	top: 20,
	},
_Assistive_text_7: {
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
_Input_text_7: {
	width: 150,
	height: 24,
	position: "absolute",
	left: 24,
	top: 16,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Button___A__Small___c__red_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(0, 189, 211)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 10381},
		{translateY: 4228},
	],
	paddingTop: 10,
	paddingRight: 19,
	paddingBottom: 10,
	paddingLeft: 19,
	borderRadius: 18,
	},
____4: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Filled___A__active___a__text_button: {
	width: 328,
	height: 56,
	position: "absolute",
	left: 80,
	top: 1003,
	},
_Rectangle_330: {
	width: 328,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 9746},
		{translateY: 4746},
	],
	borderRadius: 8,
	},
_____________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9762},
		{translateY: 4766},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_355: {
	width: 80,
	height: 32,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	transform: [
		{translateX: 9986},
		{translateY: 4758},
	],
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 2,
	},
____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10013},
		{translateY: 4766},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Filled___B__Inactive___c__caption: {
	width: 328,
	height: 74,
	position: "absolute",
	left: 80,
	top: 827,
	},
_1__Filled___Inactive: {
	width: 328,
	height: 56,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 9746},
		{translateY: 4570},
	],
	},
_Rectangle_330_2: {
	width: 328,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 28,
	},
______________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 20},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_______________12_______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9770},
		{translateY: 4628},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Filled___B__Inactive: {
	width: 328,
	height: 74,
	position: "absolute",
	left: 461,
	top: 634,
	},
_1__Filled___Inactive_2: {
	width: 328,
	height: 56,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 10127},
		{translateY: 4377},
	],
	},
_Rectangle_330_3: {
	width: 328,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 28,
	},
______________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 20},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_______________12________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10143},
		{translateY: 4435},
	],
	color: "rgba(255, 255, 255, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Filled___C__error: {
	width: 328,
	height: 74,
	position: "absolute",
	left: 80,
	top: 915,
	},
_Rectangle_330_4: {
	width: 328,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 9746},
		{translateY: 4658},
	],
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(176, 0, 32)",
	borderRadius: 8,
	},
_______________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9762},
		{translateY: 4678},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
______________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9762},
		{translateY: 4716},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Filled___A__active___a__text_button________: {
	width: 328,
	height: 74,
	position: "absolute",
	left: 80,
	top: 739,
	},
_1__Filled___Inactive_3: {
	width: 328,
	height: 56,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 9746},
		{translateY: 4482},
	],
	},
_Rectangle_330_5: {
	width: 328,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	},
_zoohee97_gmail_com: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 20},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9762},
		{translateY: 4540},
	],
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_354: {
	width: 80,
	height: 32,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	transform: [
		{translateX: 9986},
		{translateY: 4494},
	],
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 2,
	},
______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9999},
		{translateY: 4502},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Filled___B__Inactive___b__text_time_button: {
	width: 328,
	height: 56,
	position: "absolute",
	left: 80,
	top: 1067,
	},
_1__Filled___Inactive_4: {
	width: 328,
	height: 56,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 9746},
		{translateY: 4810},
	],
	},
_Rectangle_330_6: {
	width: 328,
	height: 56,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	},
______________4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 20},
	],
	color: "rgba(0, 0, 0, 0.3)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_03_00_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9938},
		{translateY: 4830},
	],
	color: "rgba(0, 0, 0, 0.3)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_355_2: {
	width: 80,
	height: 32,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	transform: [
		{translateX: 9986},
		{translateY: 4822},
	],
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 2,
	},
____6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10013},
		{translateY: 4830},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___F__text_list: {
	width: 328,
	height: 56,
	position: "absolute",
	left: 842,
	top: 349,
	},
style89: {
	position: "absolute",
	transform: [
		{translateX: 842},
		{translateY: 349},
	],
	},
style90: {
	},
_1__Button___A__Small___d__text: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 10601},
		{translateY: 4104},
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
_1__Button___A__Small___d__text_2: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 10520},
		{translateY: 4104},
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
_1__Button___A__Small___d__text_3: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 10673},
		{translateY: 4104},
	],
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 7,
	paddingLeft: 16,
	},
____9: {
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
		{translateX: 10753},
		{translateY: 4104},
	],
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 7,
	paddingLeft: 16,
	},
____10: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
})

