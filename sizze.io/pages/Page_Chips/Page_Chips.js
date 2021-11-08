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
const Page_Chips  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page20}    >
			<Text style = {noneModeStyles._Chips}   >
				Chips
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._1__Outlined___A_Text___a_Active}    >
				<Text style = {noneModeStyles.______}   >
					필터 이름
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___A_Text___b_Inactive}    >
				<View style = {noneModeStyles._1__Outlined___A_Text___b_Inactive_2}    >
					<Text style = {noneModeStyles._______2}   >
						필터 이름
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Outlined___A_Text___a_Active_2}    >
				<Text style = {noneModeStyles._______3}   >
					일별
				</Text>
			</View>
			<View style = {noneModeStyles._1__Outlined___A_Text___b_Inactive_3}    >
				<View style = {noneModeStyles._1__Outlined___A_Text___b_Inactive_4}    >
					<Text style = {noneModeStyles._______4}   >
						주일별
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Outlined___A_Text___b_Inactive_5}    >
				<View style = {noneModeStyles._1__Outlined___A_Text___b_Inactive_6}    >
					<Text style = {noneModeStyles._______5}   >
						월별
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._2__Contained___A____}    >
				<View style = {noneModeStyles._Rectangle_537}    >
				</View>
				<Text style = {noneModeStyles.___}   >
					전문
				</Text>
			</View>
			<View style = {noneModeStyles._2__Contained___C____}    >
				<View style = {noneModeStyles._Rectangle_537_2}    >
				</View>
				<Text style = {noneModeStyles.____2}   >
					일반
				</Text>
			</View>
			<View style = {noneModeStyles._2__Contained___B____}    >
				<View style = {noneModeStyles._Rectangle_537_3}    >
				</View>
				<Text style = {noneModeStyles.____3}   >
					건강
				</Text>
			</View>
			<View style = {noneModeStyles._2__Contained___D______}    >
				<View style = {noneModeStyles._Rectangle_537_4}    >
				</View>
				<Text style = {noneModeStyles._____}   >
					의약외품
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Chips

const noneModeStyles = StyleSheet.create({
_page20: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Chips: {
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
_1__Outlined___A_Text___a_Active: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 80,
	top: 225,
	paddingTop: 7,
	paddingRight: 12,
	paddingBottom: 7,
	paddingLeft: 12,
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 132, 143)",
	borderRadius: 16,
	},
______: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 6718},
		{translateY: 2110},
	],
	color: "rgb(0, 132, 143)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___A_Text___b_Inactive: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 159,
	top: 225,
	},
_1__Outlined___A_Text___b_Inactive_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 6785},
		{translateY: 2103},
	],
	paddingTop: 7,
	paddingRight: 12,
	paddingBottom: 7,
	paddingLeft: 12,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 16,
	},
_______2: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(0, 0, 0, 0.68)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___A_Text___a_Active_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 80,
	top: 302,
	paddingTop: 7,
	paddingRight: 12,
	paddingBottom: 7,
	paddingLeft: 12,
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 132, 143)",
	borderRadius: 16,
	},
_______3: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(0, 132, 143)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___A_Text___b_Inactive_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 131,
	top: 302,
	},
_1__Outlined___A_Text___b_Inactive_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	paddingTop: 7,
	paddingRight: 12,
	paddingBottom: 7,
	paddingLeft: 12,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 16,
	},
_______4: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(0, 0, 0, 0.68)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Outlined___A_Text___b_Inactive_5: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 193,
	top: 302,
	},
_1__Outlined___A_Text___b_Inactive_6: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	paddingTop: 7,
	paddingRight: 12,
	paddingBottom: 7,
	paddingLeft: 12,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 16,
	},
_______5: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgba(0, 0, 0, 0.68)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2__Contained___A____: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 358},
	],
	},
_Rectangle_537: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(242, 89, 75)",
	position: "absolute",
	transform: [
		{translateX: 6706},
		{translateY: 2236},
	],
	borderRadius: 15,
	},
___: {
	width: 26.8335,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 6721},
		{translateY: 2240},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2__Contained___C____: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 208},
		{translateY: 358},
	],
	},
_Rectangle_537_2: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(38, 199, 217)",
	position: "absolute",
	transform: [
		{translateX: 6834},
		{translateY: 2236},
	],
	borderRadius: 15,
	},
____2: {
	width: 26.8335,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 6849},
		{translateY: 2240},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2__Contained___B____: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 144},
		{translateY: 358},
	],
	},
_Rectangle_537_3: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(242, 133, 38)",
	position: "absolute",
	transform: [
		{translateX: 6770},
		{translateY: 2236},
	],
	borderRadius: 15,
	},
____3: {
	width: 26.8335,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 6785},
		{translateY: 2240},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2__Contained___D______: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 272},
		{translateY: 358},
	],
	},
_Rectangle_537_4: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(137, 106, 243)",
	position: "absolute",
	transform: [
		{translateX: 6898},
		{translateY: 2236},
	],
	borderRadius: 15,
	},
_____: {
	width: 52.5,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 6900},
		{translateY: 2240},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
})

