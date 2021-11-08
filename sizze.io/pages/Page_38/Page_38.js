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
const Page_38  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page47}    >
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
								<View style = {noneModeStyles.style36}    >
									<View style = {noneModeStyles.style37}   >
										<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
											<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style38}    >
									<View style = {noneModeStyles.style39}   >
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
								<View style = {noneModeStyles.style47}    >
									<View style = {noneModeStyles.style48}   >
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
			<Text style = {noneModeStyles._____}   >
				타임라인
			</Text>
			<View style = {noneModeStyles._1__Top_App_bar___A__only_icon}    >
				<View style = {noneModeStyles._Group_6}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Rectangle_336}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_2}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style61}    >
							<View style = {noneModeStyles.style62}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"black"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style63}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._2__Two_Line___A__Left_Image___a__ing}    >
				<View style = {noneModeStyles._Group_225}    >
					<View style = {noneModeStyles._Rectangle_546}    >
					</View>
					<View style = {noneModeStyles._Rectangle_374}    >
					</View>
				</View>
				<Text style = {noneModeStyles.____}   >
					브랜드
				</Text>
				<Text style = {noneModeStyles._2021_06_01___2021_07_23}   >
					2021.06.01 ~ 2021.07.23
				</Text>
				<Text style = {noneModeStyles.______2}   >
					약 이름
				</Text>
				<Text style = {noneModeStyles._80_}   >
					80%
				</Text>
				<View style = {noneModeStyles._Ellipse_42}    >
				</View>
			</View>
			<View style = {noneModeStyles._2__Two_Line___A__Left_Image___b__complete}    >
				<View style = {noneModeStyles._Group_225_2}    >
					<View style = {noneModeStyles._Rectangle_546_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_374_2}    >
					</View>
				</View>
				<Text style = {noneModeStyles._____2}   >
					브랜드
				</Text>
				<Text style = {noneModeStyles._2021_06_01___2021_07_23_2}   >
					2021.06.01 ~ 2021.07.23
				</Text>
				<Text style = {noneModeStyles.______3}   >
					약 이름
				</Text>
				<Text style = {noneModeStyles._100__3}   >
					100%
				</Text>
				<View style = {noneModeStyles._Ellipse_42_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._2__Two_Line___A__Left_Image___b__complete_2}    >
				<View style = {noneModeStyles._Group_225_3}    >
					<View style = {noneModeStyles._Rectangle_546_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_374_3}    >
					</View>
				</View>
				<Text style = {noneModeStyles._____3}   >
					브랜드
				</Text>
				<Text style = {noneModeStyles._2021_06_01___2021_07_23_3}   >
					2021.06.01 ~ 2021.07.23
				</Text>
				<Text style = {noneModeStyles.______4}   >
					약 이름
				</Text>
				<Text style = {noneModeStyles._100__4}   >
					100%
				</Text>
				<View style = {noneModeStyles._Ellipse_42_3}    >
				</View>
			</View>
			<View style = {noneModeStyles._2__Two_Line___A__Left_Image___b__complete_3}    >
				<View style = {noneModeStyles._Group_225_4}    >
					<View style = {noneModeStyles._Rectangle_546_4}    >
					</View>
					<View style = {noneModeStyles._Rectangle_374_4}    >
					</View>
				</View>
				<Text style = {noneModeStyles._____4}   >
					브랜드
				</Text>
				<Text style = {noneModeStyles._2021_06_01___2021_07_23_4}   >
					2021.06.01 ~ 2021.07.23
				</Text>
				<Text style = {noneModeStyles.______5}   >
					약 이름
				</Text>
				<Text style = {noneModeStyles._100__5}   >
					100%
				</Text>
				<View style = {noneModeStyles._Ellipse_42_4}    >
				</View>
			</View>
			<View style = {noneModeStyles._2__Two_Line___A__Left_Image___c__fail}    >
				<View style = {noneModeStyles._Group_225_5}    >
					<View style = {noneModeStyles._Rectangle_546_5}    >
					</View>
					<View style = {noneModeStyles._Rectangle_374_5}    >
					</View>
				</View>
				<Text style = {noneModeStyles._____5}   >
					브랜드
				</Text>
				<Text style = {noneModeStyles._2021_06_01___2021_07_23_5}   >
					2021.06.01 ~ 2021.07.23
				</Text>
				<Text style = {noneModeStyles.______6}   >
					약 이름
				</Text>
				<Text style = {noneModeStyles._45_}   >
					45%
				</Text>
				<View style = {noneModeStyles._Ellipse_42_5}    >
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_38

const noneModeStyles = StyleSheet.create({
_page47: {
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
style36: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style37: {
	},
style38: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style39: {
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
style47: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style48: {
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
_____: {
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
style61: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style62: {
	},
style63: {
	position: "absolute",
	},
_2__Two_Line___A__Left_Image___a__ing: {
	width: 360,
	height: 112,
	position: "absolute",
	left: 0,
	top: 170,
	},
_Group_225: {
	width: 360,
	height: 112,
	position: "absolute",
	},
_Rectangle_546: {
	width: 360,
	height: 112,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Rectangle_374: {
	width: 360,
	height: 1.08325,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 110.917},
	],
	},
____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 27},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2021_06_01___2021_07_23: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 75},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 43},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_80_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 303},
		{translateY: 43},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Ellipse_42: {
	width: 70,
	height: 70,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 24},
	],
	},
_2__Two_Line___A__Left_Image___b__complete: {
	width: 360,
	height: 112,
	position: "absolute",
	left: 0,
	top: 282,
	},
_Group_225_2: {
	width: 360,
	height: 112,
	position: "absolute",
	},
_Rectangle_546_2: {
	width: 360,
	height: 112,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Rectangle_374_2: {
	width: 360,
	height: 1.08325,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 110.917},
	],
	},
_____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 27},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2021_06_01___2021_07_23_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 75},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 43},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_100__3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 294},
		{translateY: 43},
	],
	color: "rgb(139, 166, 41)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Ellipse_42_2: {
	width: 70,
	height: 70,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 24},
	],
	},
_2__Two_Line___A__Left_Image___b__complete_2: {
	width: 360,
	height: 112,
	position: "absolute",
	left: 0,
	top: 506,
	},
_Group_225_3: {
	width: 360,
	height: 112,
	position: "absolute",
	},
_Rectangle_546_3: {
	width: 360,
	height: 112,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Rectangle_374_3: {
	width: 360,
	height: 1.08325,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 110.917},
	],
	},
_____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 27},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2021_06_01___2021_07_23_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 75},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 43},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_100__4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 294},
		{translateY: 43},
	],
	color: "rgb(139, 166, 41)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Ellipse_42_3: {
	width: 70,
	height: 70,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 24},
	],
	},
_2__Two_Line___A__Left_Image___b__complete_3: {
	width: 360,
	height: 112,
	position: "absolute",
	left: 0,
	top: 618,
	},
_Group_225_4: {
	width: 360,
	height: 112,
	position: "absolute",
	},
_Rectangle_546_4: {
	width: 360,
	height: 112,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Rectangle_374_4: {
	width: 360,
	height: 1.08325,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 110.917},
	],
	},
_____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 27},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2021_06_01___2021_07_23_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 75},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 43},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_100__5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 294},
		{translateY: 43},
	],
	color: "rgb(139, 166, 41)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Ellipse_42_4: {
	width: 70,
	height: 70,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 24},
	],
	},
_2__Two_Line___A__Left_Image___c__fail: {
	width: 360,
	height: 112,
	position: "absolute",
	left: 0,
	top: 394,
	},
_Group_225_5: {
	width: 360,
	height: 112,
	position: "absolute",
	},
_Rectangle_546_5: {
	width: 360,
	height: 112,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Rectangle_374_5: {
	width: 360,
	height: 1.08325,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 110.917},
	],
	},
_____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 27},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2021_06_01___2021_07_23_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 75},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 43},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_45_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 303},
		{translateY: 43},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Ellipse_42_5: {
	width: 70,
	height: 70,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 24},
	],
	},
})

