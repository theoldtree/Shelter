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
const Page_Tabs  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page16}    >
			<Text style = {noneModeStyles._Tabs}   >
				Tabs
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._Elements__1__Text_B__Inactive}    >
				<Text style = {noneModeStyles._____}   >
					탭 이름
				</Text>
				<View style = {noneModeStyles._Rectangle_217}    >
				</View>
			</View>
			<View style = {noneModeStyles._1__Scrollable_A__Text}    >
				<View style = {noneModeStyles._Rectangle_218}    >
				</View>
				<View style = {noneModeStyles._Frame_2}    >
					<View style = {noneModeStyles._Elements__1__Text_A__Active}    >
						<Text style = {noneModeStyles.______2}   >
							탭 이름
						</Text>
						<View style = {noneModeStyles._Rectangle_217_2}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Elements__1__Text_B__Inactive_2}    >
					<Text style = {noneModeStyles.______3}   >
						탭 이름
					</Text>
					<View style = {noneModeStyles._Rectangle_217_3}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._2__Fixed_A__Text}    >
				<View style = {noneModeStyles._Rectangle_219}    >
				</View>
				<View style = {noneModeStyles._Rectangle_220}    >
				</View>
				<View style = {noneModeStyles._Rectangle_221}    >
				</View>
				<View style = {noneModeStyles._Rectangle_222}    >
				</View>
				<View style = {noneModeStyles._Elements__1__Text_A__Active_2}    >
					<Text style = {noneModeStyles.______4}   >
						탭 이름
					</Text>
					<View style = {noneModeStyles._Rectangle_217_4}    >
					</View>
				</View>
				<View style = {noneModeStyles._Elements__1__Text_B__Inactive_3}    >
					<Text style = {noneModeStyles.______5}   >
						탭 이름
					</Text>
					<View style = {noneModeStyles._Rectangle_217_5}    >
					</View>
				</View>
				<View style = {noneModeStyles._Elements__1__Text_B__Inactive_4}    >
					<Text style = {noneModeStyles.______6}   >
						탭 이름
					</Text>
					<View style = {noneModeStyles._Rectangle_217_6}    >
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles.______7}   >
				탭 이름
			</Text>
			<View style = {noneModeStyles._Rectangle_338}    >
			</View>
			<View style = {noneModeStyles._Frame_37}    >
				<Text style = {noneModeStyles.______8}   >
					탭 이름
				</Text>
				<View style = {noneModeStyles._Rectangle_340}    >
				</View>
			</View>
			<View style = {noneModeStyles._Group_36}    >
				<Text style = {noneModeStyles.______9}   >
					탭 이름
				</Text>
				<Text style = {noneModeStyles.______10}   >
					탭 이름
				</Text>
				<View style = {noneModeStyles._Rectangle_338_2}    >
				</View>
				<View style = {noneModeStyles._Rectangle_340_2}    >
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Tabs

const noneModeStyles = StyleSheet.create({
_page16: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Tabs: {
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
_Elements__1__Text_B__Inactive: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 326,
	top: 335,
	paddingTop: 12,
	},
_____: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 10,
	position: "absolute",
	transform: [
		{translateX: 8472},
		{translateY: 4090},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_217: {
	width: 48,
	height: 2,
	backgroundColor: "rgb(0, 0, 0)",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 8472},
		{translateY: 4124},
	],
	},
_1__Scrollable_A__Text: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 75,
	top: 247,
	},
_Rectangle_218: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 8221},
		{translateY: 3990},
	],
	},
_Frame_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	transform: [
		{translateX: 8237},
		{translateY: 3990},
	],
	},
_Elements__1__Text_A__Active: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	paddingTop: 12,
	},
______2: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_217_2: {
	width: 164,
	height: 3,
	backgroundColor: "rgb(0, 152, 166)",
	flexShrink: 0,
	borderRadius: 1.5,
	},
_Elements__1__Text_B__Inactive_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	transform: [
		{translateX: 8455},
		{translateY: 3990},
	],
	paddingTop: 12,
	},
______3: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_217_3: {
	width: "100%",
	height: 2,
	backgroundColor: "rgb(0, 0, 0)",
	flexShrink: 0,
	},
_2__Fixed_A__Text: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 528,
	top: 247,
	},
_Rectangle_219: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 8674},
		{translateY: 3990},
	],
	},
_Rectangle_220: {
	width: 120,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 8674},
		{translateY: 3990},
	],
	},
_Rectangle_221: {
	width: 120,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 8794},
		{translateY: 3990},
	],
	},
_Rectangle_222: {
	width: 120,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 8914},
		{translateY: 3990},
	],
	},
_Elements__1__Text_A__Active_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	transform: [
		{translateX: 8652},
		{translateY: 3989.5},
	],
	paddingTop: 12,
	},
______4: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_217_4: {
	width: 164,
	height: 3,
	backgroundColor: "rgb(0, 152, 166)",
	flexShrink: 0,
	borderRadius: 1.5,
	},
_Elements__1__Text_B__Inactive_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	transform: [
		{translateX: 8830},
		{translateY: 3990},
	],
	paddingTop: 12,
	},
______5: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_217_5: {
	width: "100%",
	height: 2,
	backgroundColor: "rgb(0, 0, 0)",
	flexShrink: 0,
	},
_Elements__1__Text_B__Inactive_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	transform: [
		{translateX: 8950},
		{translateY: 3990},
	],
	paddingTop: 12,
	},
______6: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_217_6: {
	width: "100%",
	height: 2,
	backgroundColor: "rgb(0, 0, 0)",
	flexShrink: 0,
	},
______7: {
	width: 101,
	height: 24,
	position: "absolute",
	left: 273,
	top: 434,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_338: {
	width: 328,
	height: 4,
	backgroundColor: "rgb(237, 237, 237)",
	position: "absolute",
	left: 75,
	top: 464,
	borderRadius: 2,
	},
_Frame_37: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -645},
		{translateY: -366},
	],
	},
______8: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 6,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_340: {
	width: "100%",
	height: 4,
	backgroundColor: "rgb(0, 152, 166)",
	flexShrink: 0,
	borderRadius: 2,
	},
_Group_36: {
	width: 328,
	height: 34,
	position: "absolute",
	left: 75,
	top: 490,
	},
______9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 58,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
______10: {
	width: 101,
	height: 24,
	position: "absolute",
	left: 198,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_338_2: {
	width: 328,
	height: 4,
	backgroundColor: "rgb(237, 237, 237)",
	position: "absolute",
	left: 0,
	top: 30,
	borderRadius: 2,
	},
_Rectangle_340_2: {
	width: 164,
	height: 4,
	backgroundColor: "rgb(0, 152, 166)",
	position: "absolute",
	left: 0,
	top: 30,
	borderRadius: 2,
	},
})

