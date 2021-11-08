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
const Page_App_Bars  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page60}    >
			<Text style = {noneModeStyles._App_bars}   >
				App bars
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___H__icon_text_icon_icon_transparency0}    >
				<View style = {noneModeStyles._Group_6}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Rectangle_336}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic}    >
						</View>
						<Text style = {noneModeStyles.____________}   >
							텍스트를 입력하세요.
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_2}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style11}    >
						</View>
						<View style = {noneModeStyles.style12}    >
							<View style = {noneModeStyles.style13}   >
								<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
									<Path fill = {"black"}     d = "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Content___ic}    >
					<View style = {noneModeStyles._ic_2}    >
						<View style = {noneModeStyles.style16}    >
							<View style = {noneModeStyles.style17}   >
								<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
									<Path fill = {"black"}     d = "M0 15.0422V19H3.95778L15.6306 7.32718L11.6728 3.36939L0 15.0422ZM18.6913 4.26649C19.1029 3.85488 19.1029 3.18997 18.6913 2.77836L16.2216 0.308707C15.81 -0.102902 15.1451 -0.102902 14.7335 0.308707L12.8021 2.24011L16.7599 6.19789L18.6913 4.26649Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style18}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Action___ic}    >
					<View style = {noneModeStyles._Content___ic_2}    >
						<View style = {noneModeStyles._ic_3}    >
							<View style = {noneModeStyles.style22}    >
								<View style = {noneModeStyles.style23}   >
									<Svg style={{height: 18, width: 14}} viewBox = "0 0 14 18">
										<Path fill = {"black"}     d = "M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style24}    >
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_373}    >
				</View>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___G__icon_text_icon_transparency0}    >
				<View style = {noneModeStyles._Rectangle_336_2}    >
				</View>
				<View style = {noneModeStyles._Rectangle_444}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic_3}    >
					<View style = {noneModeStyles._ic_4}    >
						<View style = {noneModeStyles.style31}    >
						</View>
						<View style = {noneModeStyles.style32}    >
							<View style = {noneModeStyles.style33}   >
								<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
									<Path fill = {"black"}     d = "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_4}    >
					<View style = {noneModeStyles._ic_5}    >
						<View style = {noneModeStyles.style36}    >
							<View style = {noneModeStyles.style37}   >
								<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
									<Path fill = {"black"}     d = "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style38}    >
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._____________2}   >
					텍스트를 입력하세요.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___I__icon_text_transparency0}    >
				<View style = {noneModeStyles._Rectangle_336_3}    >
				</View>
				<View style = {noneModeStyles._Rectangle_444_2}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic_5}    >
					<View style = {noneModeStyles._ic_6}    >
						<View style = {noneModeStyles.style45}    >
							<View style = {noneModeStyles.style46}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"black"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style47}    >
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._____________3}   >
					텍스트를 입력하세요.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___F__text}    >
				<View style = {noneModeStyles._Rectangle_336_4}    >
				</View>
				<View style = {noneModeStyles._Rectangle_444_3}    >
				</View>
				<Text style = {noneModeStyles._____________4}   >
					텍스트를 입력하세요.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___E__icon_text_icon}    >
				<View style = {noneModeStyles._Rectangle_336_5}    >
				</View>
				<View style = {noneModeStyles._Rectangle_444_4}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic_6}    >
					<View style = {noneModeStyles._ic_7}    >
						<View style = {noneModeStyles.style58}    >
						</View>
						<View style = {noneModeStyles.style59}    >
							<View style = {noneModeStyles.style60}   >
								<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
									<Path fill = {"black"}     d = "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_7}    >
					<View style = {noneModeStyles._ic_8}    >
						<View style = {noneModeStyles.style63}    >
							<View style = {noneModeStyles.style64}   >
								<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
									<Path fill = {"black"}     d = "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style65}    >
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._____________5}   >
					텍스트를 입력하세요.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___D__icon_icon_icon}    >
				<View style = {noneModeStyles._Group_6_2}    >
					<View style = {noneModeStyles._Group_5_2}    >
						<View style = {noneModeStyles._Rectangle_336_6}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic_8}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_9}    >
					<View style = {noneModeStyles._ic_9}    >
						<View style = {noneModeStyles.style74}    >
						</View>
						<View style = {noneModeStyles.style75}    >
							<View style = {noneModeStyles.style76}   >
								<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
									<Path fill = {"black"}     d = "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Action___ic_2}    >
					<View style = {noneModeStyles._ic_10}    >
						<View style = {noneModeStyles.style79}    >
						</View>
						<View style = {noneModeStyles.style80}    >
							<View style = {noneModeStyles.style81}   >
								<Svg style={{height: 19, width: 20}} viewBox = "0 0 20 19">
									<Path fill = {"black"}     d = "M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Action___ic_3}    >
					<View style = {noneModeStyles._ic_11}    >
						<View style = {noneModeStyles.style84}    >
						</View>
						<View style = {noneModeStyles.style85}    >
							<View style = {noneModeStyles.style86}   >
								<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
									<Path fill = {"black"}     d = "M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___C__icon_text_icon_icon}    >
				<View style = {noneModeStyles._Rectangle_336_7}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic_10}    >
					<View style = {noneModeStyles._ic_12}    >
						<View style = {noneModeStyles.style91}    >
							<View style = {noneModeStyles.style92}   >
								<Svg style={{height: 12, width: 20}} viewBox = "0 0 20 12">
									<Path fill = {"black"}     d = "M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style93}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Action___ic_4}    >
					<View style = {noneModeStyles._ic_13}    >
						<View style = {noneModeStyles.style96}    >
							<View style = {noneModeStyles.style97}   >
								<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
									<Path fill = {"black"}     d = "M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34649 13.3791 6.68954C13.3791 2.99486 10.3842 0 6.68954 0C2.99486 0 0 2.99486 0 6.68954C0 10.3842 2.99486 13.3791 6.68954 13.3791C8.34649 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25215 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25215 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25215 9.25215 11.3208 6.68954 11.3208Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style98}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Alert___ic}    >
					<View style = {noneModeStyles._ic_14}    >
						<View style = {noneModeStyles.style101}    >
						</View>
						<View style = {noneModeStyles.style102}    >
							<View style = {noneModeStyles.style103}   >
								<Svg style={{height: 20, width: 16}} viewBox = "0 0 16 20">
									<Path fill = {"black"}     d = "M8 19.5C9.1 19.5 10 18.6 10 17.5H6C6 18.6 6.9 19.5 8 19.5ZM14 13.5V8.5C14 5.43 12.37 2.86 9.5 2.18V1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5V2.18C3.64 2.86 2 5.42 2 8.5V13.5L0 15.5V16.5H16V15.5L14 13.5ZM12 14.5H4V8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5V14.5Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._____________6}   >
					텍스트를 입력하세요.
				</Text>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___B__icon_text}    >
				<View style = {noneModeStyles._Group_6_3}    >
					<View style = {noneModeStyles._Group_5_3}    >
						<View style = {noneModeStyles._Rectangle_336_8}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic_11}    >
						</View>
						<Text style = {noneModeStyles._____________7}   >
							텍스트를 입력하세요.
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_12}    >
					<View style = {noneModeStyles._ic_15}    >
						<View style = {noneModeStyles.style113}    >
						</View>
						<View style = {noneModeStyles.style114}    >
							<View style = {noneModeStyles.style115}   >
								<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
									<Path fill = {"black"}     d = "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_373_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___A__only_icon}    >
				<View style = {noneModeStyles._Group_6_4}    >
					<View style = {noneModeStyles._Group_5_4}    >
						<View style = {noneModeStyles._Rectangle_336_9}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic_13}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_14}    >
					<View style = {noneModeStyles._ic_16}    >
						<View style = {noneModeStyles.style124}    >
							<View style = {noneModeStyles.style125}   >
								<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
									<Path fill = {"black"}     d = "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style126}    >
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_App_Bars

const noneModeStyles = StyleSheet.create({
_page60: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_App_bars: {
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
_1__Top_App_bar___H__icon_text_icon_icon_transparency0: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 80,
	top: 727,
	},
_Group_6: {
	width: 360,
	height: 57,
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2605},
	],
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
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 17},
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
		{translateX: 642},
		{translateY: 2622},
	],
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style11: {
	position: "absolute",
	},
style12: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
style13: {
	},
_Content___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 914},
		{translateY: 2622},
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
		{translateX: 3},
		{translateY: 2.99756},
	],
	},
style17: {
	},
style18: {
	position: "absolute",
	},
_Action___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 946},
		{translateY: 2622},
	],
	},
_Content___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style22: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 3},
	],
	},
style23: {
	},
style24: {
	position: "absolute",
	},
_Rectangle_373: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2661},
	],
	},
_1__Top_App_bar___G__icon_text_icon_transparency0: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 80,
	top: 658,
	},
_Rectangle_336_2: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2536},
	],
	},
_Rectangle_444: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2592},
	],
	},
_Navigation___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 642},
		{translateY: 2553},
	],
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style31: {
	position: "absolute",
	},
style32: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
style33: {
	},
_Navigation___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 946},
		{translateY: 2553},
	],
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style36: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
style37: {
	},
style38: {
	position: "absolute",
	},
_____________2: {
	width: 182,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 682},
		{translateY: 2552},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Top_App_bar___I__icon_text_transparency0: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 80,
	top: 796,
	},
_Rectangle_336_3: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2674},
	],
	},
_Rectangle_444_2: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2730},
	],
	},
_Navigation___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 642},
		{translateY: 2691},
	],
	},
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style45: {
	position: "absolute",
	transform: [
		{translateY: 2.1001},
	],
	},
style46: {
	},
style47: {
	position: "absolute",
	},
_____________3: {
	width: 182,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 682},
		{translateY: 2690},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Top_App_bar___F__text: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 80,
	top: 589,
	},
_Rectangle_336_4: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2467},
	],
	},
_Rectangle_444_3: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2523},
	],
	},
_____________4: {
	width: 182,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 715},
		{translateY: 2483},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Top_App_bar___E__icon_text_icon: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 80,
	top: 520,
	},
_Rectangle_336_5: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2398},
	],
	},
_Rectangle_444_4: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2454},
	],
	},
_Navigation___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 642},
		{translateY: 2415},
	],
	},
_ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style58: {
	position: "absolute",
	},
style59: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
style60: {
	},
_Navigation___ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 946},
		{translateY: 2415},
	],
	},
_ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
style64: {
	},
style65: {
	position: "absolute",
	},
_____________5: {
	width: 182,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 682},
		{translateY: 2414},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Top_App_bar___D__icon_icon_icon: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 80,
	top: 451,
	},
_Group_6_2: {
	width: 360,
	height: 57,
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2329},
	],
	},
_Group_5_2: {
	width: 360,
	height: 57,
	position: "absolute",
	},
_Rectangle_336_6: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Navigation___ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 17},
	],
	},
_Navigation___ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 642},
		{translateY: 2346},
	],
	},
_ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style74: {
	position: "absolute",
	},
style75: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
style76: {
	},
_Action___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 914},
		{translateY: 2346},
	],
	},
_ic_10: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style79: {
	position: "absolute",
	},
style80: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
style81: {
	},
_Action___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 946},
		{translateY: 2346},
	],
	},
_ic_11: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style84: {
	position: "absolute",
	},
style85: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style86: {
	},
_1__Top_App_bar___C__icon_text_icon_icon: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 80,
	top: 382,
	},
_Rectangle_336_7: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2260},
	],
	},
_Navigation___ic_10: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 642},
		{translateY: 2277},
	],
	},
_ic_12: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style91: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 5.5},
	],
	},
style92: {
	},
style93: {
	position: "absolute",
	},
_Action___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 914},
		{translateY: 2277},
	],
	},
_ic_13: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style96: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style97: {
	},
style98: {
	position: "absolute",
	},
_Alert___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 946},
		{translateY: 2277},
	],
	},
_ic_14: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style101: {
	position: "absolute",
	},
style102: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 2.5},
	],
	},
style103: {
	},
_____________6: {
	width: 182,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 682},
		{translateY: 2276},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Top_App_bar___B__icon_text: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 80,
	top: 313,
	},
_Group_6_3: {
	width: 360,
	height: 57,
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2191},
	],
	},
_Group_5_3: {
	width: 360,
	height: 57,
	position: "absolute",
	},
_Rectangle_336_8: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Navigation___ic_11: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 17},
	],
	},
_____________7: {
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
_Navigation___ic_12: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 642},
		{translateY: 2208},
	],
	},
_ic_15: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style113: {
	position: "absolute",
	},
style114: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
style115: {
	},
_Rectangle_373_2: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2247},
	],
	},
_1__Top_App_bar___A__only_icon: {
	width: 360,
	height: 57,
	position: "absolute",
	left: 80,
	top: 244,
	},
_Group_6_4: {
	width: 360,
	height: 57,
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 2122},
	],
	},
_Group_5_4: {
	width: 360,
	height: 57,
	position: "absolute",
	},
_Rectangle_336_9: {
	width: 360,
	height: 57,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Navigation___ic_13: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 17},
	],
	},
_Navigation___ic_14: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 642},
		{translateY: 2139},
	],
	},
_ic_16: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style124: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
style125: {
	},
style126: {
	position: "absolute",
	},
})

