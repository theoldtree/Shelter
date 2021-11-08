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
const Page_31______________________________  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page32}    >
			<Text style = {noneModeStyles.__________________________}   >
				마지막으로 약에 대한{'\n'}추가 정보를 확인해주세요
			</Text>
			<Text style = {noneModeStyles.___________________________________________}   >
				자동 입력된 복용법과 복용량이 일치하는지 확인 후{'\n'}복용 기간을 설정해주세요.
			</Text>
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
			<View style = {noneModeStyles._1__Top_App_bar___B__icon_text}    >
				<View style = {noneModeStyles._Group_6}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Rectangle_336}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic}    >
						</View>
						<Text style = {noneModeStyles.____________}   >
							코자엑스큐정 5/5mg
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_2}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style35}    >
							<View style = {noneModeStyles.style36}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"black"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style37}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_373}    >
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_538}    >
			</View>
			<View style = {noneModeStyles._Rectangle_604}    >
			</View>
			<View style = {noneModeStyles._Large_Buttons}    >
				<View style = {noneModeStyles._Elevation}    >
				</View>
				<View style = {noneModeStyles._Container}    >
				</View>
				<View style = {noneModeStyles._Overlay}    >
				</View>
				<Text style = {noneModeStyles.___}   >
					저장하기
				</Text>
			</View>
			<Text style = {noneModeStyles.______}   >
				용법 용량
			</Text>
			<Text style = {noneModeStyles._______2}   >
				복용 기간
			</Text>
			<View style = {noneModeStyles._Group_298}    >
				<Text style = {noneModeStyles.__}   >
					일
				</Text>
				<Text style = {noneModeStyles.___2}   >
					회
				</Text>
				<Text style = {noneModeStyles.___3}   >
					정
				</Text>
				<View style = {noneModeStyles._Rectangle_601}    >
				</View>
				<View style = {noneModeStyles._Rectangle_602}    >
				</View>
				<View style = {noneModeStyles._Rectangle_603}    >
				</View>
				<Text style = {noneModeStyles._1}   >
					1
				</Text>
				<Text style = {noneModeStyles._1_2}   >
					1
				</Text>
				<Text style = {noneModeStyles._2}   >
					2
				</Text>
				<View style = {noneModeStyles._Navigation___ic_3}    >
					<View style = {noneModeStyles._ic_2}    >
						<View style = {noneModeStyles.style60}    >
							<View style = {noneModeStyles.style61}   >
								<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
									<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style62}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_4}    >
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style65}    >
							<View style = {noneModeStyles.style66}   >
								<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
									<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style67}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_5}    >
					<View style = {noneModeStyles._ic_4}    >
						<View style = {noneModeStyles.style70}    >
							<View style = {noneModeStyles.style71}   >
								<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
									<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style72}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_6}    >
					<View style = {noneModeStyles._ic_5}    >
						<View style = {noneModeStyles.style75}    >
							<View style = {noneModeStyles.style76}   >
								<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
									<Path fill = {"black"}     d = "M0 5L5 0L10 5H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style77}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_7}    >
					<View style = {noneModeStyles._ic_6}    >
						<View style = {noneModeStyles.style80}    >
							<View style = {noneModeStyles.style81}   >
								<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
									<Path fill = {"black"}     d = "M0 5L5 0L10 5H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style82}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_8}    >
					<View style = {noneModeStyles._ic_7}    >
						<View style = {noneModeStyles.style85}    >
							<View style = {noneModeStyles.style86}   >
								<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
									<Path fill = {"black"}     d = "M0 5L5 0L10 5H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style87}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Date_Picker___A___}    >
				<View style = {noneModeStyles._Group_128}    >
					<View style = {noneModeStyles._Rectangle_436}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_120}    >
					<View style = {noneModeStyles._Rectangle_436_2}    >
					</View>
					<Text style = {noneModeStyles._SUN}   >
						SUN
					</Text>
				</View>
				<View style = {noneModeStyles._Group_121}    >
					<View style = {noneModeStyles._Rectangle_436_3}    >
					</View>
					<Text style = {noneModeStyles._MON}   >
						MON
					</Text>
				</View>
				<View style = {noneModeStyles._Group_122}    >
					<View style = {noneModeStyles._Rectangle_436_4}    >
					</View>
					<Text style = {noneModeStyles._TUE}   >
						TUE
					</Text>
				</View>
				<View style = {noneModeStyles._Group_123}    >
					<View style = {noneModeStyles._Rectangle_436_5}    >
					</View>
					<Text style = {noneModeStyles._WED}   >
						WED
					</Text>
				</View>
				<View style = {noneModeStyles._Group_127}    >
					<View style = {noneModeStyles._Rectangle_436_6}    >
					</View>
					<Text style = {noneModeStyles._2021__07_}   >
						2021년 07월
					</Text>
				</View>
				<View style = {noneModeStyles._Group_124}    >
					<View style = {noneModeStyles._Rectangle_436_7}    >
					</View>
					<Text style = {noneModeStyles._THU}   >
						THU
					</Text>
				</View>
				<View style = {noneModeStyles._Group_125}    >
					<View style = {noneModeStyles._Rectangle_436_8}    >
					</View>
					<Text style = {noneModeStyles._FRI}   >
						FRI
					</Text>
				</View>
				<View style = {noneModeStyles._Group_126}    >
					<View style = {noneModeStyles._Rectangle_436_9}    >
					</View>
					<Text style = {noneModeStyles._SAT}   >
						SAT
					</Text>
				</View>
				<View style = {noneModeStyles._Rectangle_437}    >
				</View>
				<View style = {noneModeStyles._Rectangle_438}    >
				</View>
				<View style = {noneModeStyles._Rectangle_439}    >
				</View>
				<View style = {noneModeStyles._Ellipse_15}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic_9}    >
					<View style = {noneModeStyles._ic_8}    >
						<View style = {noneModeStyles.style121}    >
							<View style = {noneModeStyles.style122}   >
								<Svg style={{height: 10, width: 5}} viewBox = "0 0 5 10">
									<Path fill = {"black"}     d = "M5 0L0 5L5 10V0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style123}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_10}    >
					<View style = {noneModeStyles._ic_9}    >
						<View style = {noneModeStyles.style126}    >
							<View style = {noneModeStyles.style127}   >
								<Svg style={{height: 10, width: 5}} viewBox = "0 0 5 10">
									<Path fill = {"black"}     d = "M0 10L5 5L0 0V10Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style128}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_304}    >
					<View style = {noneModeStyles._Ellipse_14}    >
					</View>
					<Text style = {noneModeStyles.____2}   >
						오늘
					</Text>
				</View>
				<View style = {noneModeStyles._Group_85}    >
					<View style = {noneModeStyles._Rectangle_436_10}    >
					</View>
					<Text style = {noneModeStyles._4}   >
						4
					</Text>
				</View>
				<View style = {noneModeStyles._Group_99}    >
					<View style = {noneModeStyles._Rectangle_436_11}    >
					</View>
					<Text style = {noneModeStyles._11}   >
						11
					</Text>
				</View>
				<View style = {noneModeStyles._Group_106}    >
					<View style = {noneModeStyles._Rectangle_436_12}    >
					</View>
					<Text style = {noneModeStyles._18}   >
						18
					</Text>
				</View>
				<View style = {noneModeStyles._Group_113}    >
					<View style = {noneModeStyles._Rectangle_436_13}    >
					</View>
					<Text style = {noneModeStyles._25}   >
						25
					</Text>
				</View>
				<View style = {noneModeStyles._Group_92}    >
					<View style = {noneModeStyles._Rectangle_436_14}    >
					</View>
					<Text style = {noneModeStyles._0}   >
						0
					</Text>
				</View>
				<View style = {noneModeStyles._Group_86}    >
					<View style = {noneModeStyles._Rectangle_436_15}    >
					</View>
					<Text style = {noneModeStyles._5}   >
						5
					</Text>
				</View>
				<View style = {noneModeStyles._Rectangle_436_16}    >
				</View>
				<View style = {noneModeStyles._Group_107}    >
					<View style = {noneModeStyles._Rectangle_436_17}    >
					</View>
					<Text style = {noneModeStyles._19}   >
						19
					</Text>
				</View>
				<View style = {noneModeStyles._Rectangle_436_18}    >
				</View>
				<View style = {noneModeStyles._Group_93}    >
					<View style = {noneModeStyles._Rectangle_436_19}    >
					</View>
					<Text style = {noneModeStyles._0_2}   >
						0
					</Text>
				</View>
				<View style = {noneModeStyles._Group_87}    >
					<View style = {noneModeStyles._Rectangle_436_20}    >
					</View>
					<Text style = {noneModeStyles._6}   >
						6
					</Text>
				</View>
				<View style = {noneModeStyles._Group_101}    >
					<View style = {noneModeStyles._Rectangle_436_21}    >
					</View>
					<Text style = {noneModeStyles._13}   >
						13
					</Text>
				</View>
				<View style = {noneModeStyles._Group_108}    >
					<View style = {noneModeStyles._Rectangle_436_22}    >
					</View>
					<Text style = {noneModeStyles._20}   >
						20
					</Text>
				</View>
				<View style = {noneModeStyles._Group_115}    >
					<View style = {noneModeStyles._Rectangle_436_23}    >
					</View>
					<Text style = {noneModeStyles._27}   >
						27
					</Text>
				</View>
				<View style = {noneModeStyles._Group_94}    >
					<View style = {noneModeStyles._Rectangle_436_24}    >
					</View>
					<Text style = {noneModeStyles._0_3}   >
						0
					</Text>
				</View>
				<View style = {noneModeStyles._Group_88}    >
					<View style = {noneModeStyles._Rectangle_436_25}    >
					</View>
					<Text style = {noneModeStyles._7}   >
						7
					</Text>
				</View>
				<View style = {noneModeStyles._Group_102}    >
					<View style = {noneModeStyles._Rectangle_436_26}    >
					</View>
					<Text style = {noneModeStyles._14}   >
						14
					</Text>
				</View>
				<View style = {noneModeStyles._Group_109}    >
					<View style = {noneModeStyles._Rectangle_436_27}    >
					</View>
					<Text style = {noneModeStyles._21}   >
						21
					</Text>
				</View>
				<View style = {noneModeStyles._Group_116}    >
					<View style = {noneModeStyles._Rectangle_436_28}    >
					</View>
					<Text style = {noneModeStyles._28}   >
						28
					</Text>
				</View>
				<View style = {noneModeStyles._Group_95}    >
					<View style = {noneModeStyles._Rectangle_436_29}    >
					</View>
					<Text style = {noneModeStyles._0_4}   >
						0
					</Text>
				</View>
				<View style = {noneModeStyles._Group_89}    >
					<View style = {noneModeStyles._Rectangle_436_30}    >
					</View>
					<Text style = {noneModeStyles._8}   >
						8
					</Text>
				</View>
				<View style = {noneModeStyles._Group_103}    >
					<View style = {noneModeStyles._Rectangle_436_31}    >
					</View>
					<Text style = {noneModeStyles._15}   >
						15
					</Text>
				</View>
				<View style = {noneModeStyles._Group_110}    >
					<View style = {noneModeStyles._Rectangle_436_32}    >
					</View>
					<Text style = {noneModeStyles._22}   >
						22
					</Text>
				</View>
				<View style = {noneModeStyles._Group_117}    >
					<View style = {noneModeStyles._Rectangle_436_33}    >
					</View>
					<Text style = {noneModeStyles._29}   >
						29
					</Text>
				</View>
				<View style = {noneModeStyles._Group_96}    >
					<View style = {noneModeStyles._Rectangle_436_34}    >
					</View>
					<Text style = {noneModeStyles._1_3}   >
						1
					</Text>
				</View>
				<View style = {noneModeStyles._Group_90}    >
					<View style = {noneModeStyles._Rectangle_436_35}    >
					</View>
					<Text style = {noneModeStyles._9}   >
						9
					</Text>
				</View>
				<View style = {noneModeStyles._Group_104}    >
					<View style = {noneModeStyles._Rectangle_436_36}    >
					</View>
					<Text style = {noneModeStyles._16}   >
						16
					</Text>
				</View>
				<View style = {noneModeStyles._Group_111}    >
					<View style = {noneModeStyles._Rectangle_436_37}    >
					</View>
					<Text style = {noneModeStyles._23}   >
						23
					</Text>
				</View>
				<View style = {noneModeStyles._Group_118}    >
					<View style = {noneModeStyles._Rectangle_436_38}    >
					</View>
					<Text style = {noneModeStyles._30}   >
						30
					</Text>
				</View>
				<View style = {noneModeStyles._Group_97}    >
					<View style = {noneModeStyles._Rectangle_436_39}    >
					</View>
					<Text style = {noneModeStyles._2_2}   >
						2
					</Text>
				</View>
				<View style = {noneModeStyles._Group_91}    >
					<View style = {noneModeStyles._Rectangle_436_40}    >
					</View>
					<Text style = {noneModeStyles._10}   >
						10
					</Text>
				</View>
				<View style = {noneModeStyles._Group_105}    >
					<View style = {noneModeStyles._Rectangle_436_41}    >
					</View>
					<Text style = {noneModeStyles._17}   >
						17
					</Text>
				</View>
				<View style = {noneModeStyles._Group_112}    >
					<View style = {noneModeStyles._Rectangle_436_42}    >
					</View>
					<Text style = {noneModeStyles._24}   >
						24
					</Text>
				</View>
				<View style = {noneModeStyles._Group_119}    >
					<View style = {noneModeStyles._Rectangle_436_43}    >
					</View>
					<Text style = {noneModeStyles._31}   >
						31
					</Text>
				</View>
				<View style = {noneModeStyles._Group_98}    >
					<View style = {noneModeStyles._Rectangle_436_44}    >
					</View>
					<Text style = {noneModeStyles._3}   >
						3
					</Text>
				</View>
				<Text style = {noneModeStyles._12}   >
					12
				</Text>
				<Text style = {noneModeStyles._26}   >
					26
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B_Medium___active}    >
				<View style = {noneModeStyles._Rectangle_605}    >
				</View>
				<Text style = {noneModeStyles.____3}   >
					아침
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B_Medium___inactive}    >
				<View style = {noneModeStyles._Rectangle_605_2}    >
				</View>
				<Text style = {noneModeStyles.____4}   >
					점심
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B_Medium___active_2}    >
				<View style = {noneModeStyles._Rectangle_605_3}    >
				</View>
				<Text style = {noneModeStyles.____5}   >
					저녁
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B_Medium___inactive_2}    >
				<View style = {noneModeStyles._Rectangle_605_4}    >
				</View>
				<Text style = {noneModeStyles.____6}   >
					취침 전
				</Text>
			</View>
			<Text style = {noneModeStyles._14_____}   >
				14일간 복용
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_31______________________________

const noneModeStyles = StyleSheet.create({
_page32: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
__________________________: {
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
___________________________________________: {
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
style35: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style36: {
	},
style37: {
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
_Rectangle_604: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	left: 0,
	top: 537,
	},
_Large_Buttons: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 34,
	top: 1006,
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
______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 289,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 562,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_298: {
	width: 221,
	height: 88,
	position: "absolute",
	left: 69,
	top: 337,
	},
__: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 48,
	top: 32,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
___2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 127,
	top: 32,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
___3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 206,
	top: 32,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_601: {
	width: 40,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 24,
	borderRadius: 9,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_602: {
	width: 40,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 79,
	top: 24,
	borderRadius: 9,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_603: {
	width: 40,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 158,
	top: 24,
	borderRadius: 9,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_1: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 15,
	top: 31,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 94,
	top: 31,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 173,
	top: 31,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Navigation___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 8,
	top: 64,
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
		{translateX: 7},
		{translateY: 10},
	],
	},
style61: {
	},
style62: {
	position: "absolute",
	},
_Navigation___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 87,
	top: 64,
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style65: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style66: {
	},
style67: {
	position: "absolute",
	},
_Navigation___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 166,
	top: 64,
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style70: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style71: {
	},
style72: {
	position: "absolute",
	},
_Navigation___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 8,
	top: 0,
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style75: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 9},
	],
	},
style76: {
	},
style77: {
	position: "absolute",
	},
_Navigation___ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 87,
	top: 0,
	},
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style80: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 9},
	],
	},
style81: {
	},
style82: {
	position: "absolute",
	},
_Navigation___ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 166,
	top: 0,
	},
_ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style85: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 9},
	],
	},
style86: {
	},
style87: {
	position: "absolute",
	},
_Date_Picker___A___: {
	width: 328,
	height: 328,
	position: "absolute",
	left: 16,
	top: 602,
	},
_Group_128: {
	width: 328,
	height: 328,
	position: "absolute",
	},
_Rectangle_436: {
	width: 328,
	height: 328,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 21,
	},
_Group_120: {
	width: 46,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 40},
	],
	},
_Rectangle_436_2: {
	width: 46,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_SUN: {
	width: 32,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 8},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_121: {
	width: 46,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 49},
		{translateY: 40},
	],
	},
_Rectangle_436_3: {
	width: 46,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_MON: {
	width: 32,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_122: {
	width: 46,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 95},
		{translateY: 40},
	],
	},
_Rectangle_436_4: {
	width: 46,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_TUE: {
	width: 32,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_123: {
	width: 46,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 141},
		{translateY: 40},
	],
	},
_Rectangle_436_5: {
	width: 46,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_WED: {
	width: 32,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_127: {
	width: 322,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 8},
	],
	},
_Rectangle_436_6: {
	width: 322,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_2021__07_: {
	width: 224,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 49},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_124: {
	width: 46,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 187},
		{translateY: 40},
	],
	},
_Rectangle_436_7: {
	width: 46,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_THU: {
	width: 32,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_125: {
	width: 46,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 233},
		{translateY: 40},
	],
	},
_Rectangle_436_8: {
	width: 46,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_FRI: {
	width: 32,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_126: {
	width: 46,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 279},
		{translateY: 40},
	],
	},
_Rectangle_436_9: {
	width: 46,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_SAT: {
	width: 32,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 8},
	],
	color: "rgb(0, 152, 166)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_437: {
	width: 261,
	height: 30,
	backgroundColor: "rgb(38, 199, 217)",
	position: "absolute",
	transform: [
		{translateX: 57},
		{translateY: 173},
	],
	borderRadius: 16,
	},
_Rectangle_438: {
	width: 309,
	height: 30,
	backgroundColor: "rgb(38, 199, 217)",
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 218},
	],
	borderRadius: 16,
	},
_Rectangle_439: {
	width: 78,
	height: 30,
	backgroundColor: "rgb(38, 199, 217)",
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 265},
	],
	borderRadius: 16,
	},
_Ellipse_15: {
	width: 30,
	height: 30,
	position: "absolute",
	transform: [
		{translateX: 57},
		{translateY: 173},
	],
	},
_Navigation___ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 97},
		{translateY: 12},
	],
	},
_ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style121: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 7},
	],
	},
style122: {
	},
style123: {
	position: "absolute",
	},
_Navigation___ic_10: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 206},
		{translateY: 12},
	],
	},
_ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style126: {
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 7},
	],
	},
style127: {
	},
style128: {
	position: "absolute",
	},
_Group_304: {
	width: 30,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 57},
		{translateY: 265},
	],
	},
_Ellipse_14: {
	width: 30,
	height: 30,
	position: "absolute",
	},
____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 30},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_85: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 118},
	],
	},
_Rectangle_436_10: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_4: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_99: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 164},
	],
	},
_Rectangle_436_11: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_11: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_106: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 210},
	],
	},
_Rectangle_436_12: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_18: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_113: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 256},
	],
	},
_Rectangle_436_13: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_25: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_92: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 72},
	],
	},
_Rectangle_436_14: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_0: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgba(176, 0, 32, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_86: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 49},
		{translateY: 118},
	],
	},
_Rectangle_436_15: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_5: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_436_16: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 49},
		{translateY: 164},
	],
	},
_Group_107: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 49},
		{translateY: 210},
	],
	},
_Rectangle_436_17: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_19: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_436_18: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 49},
		{translateY: 256},
	],
	},
_Group_93: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 49},
		{translateY: 72},
	],
	},
_Rectangle_436_19: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_0_2: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgba(0, 0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_87: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 95},
		{translateY: 118},
	],
	},
_Rectangle_436_20: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_6: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_101: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 95},
		{translateY: 164},
	],
	},
_Rectangle_436_21: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_13: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_108: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 95},
		{translateY: 210},
	],
	},
_Rectangle_436_22: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_20: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_115: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 95},
		{translateY: 256},
	],
	},
_Rectangle_436_23: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_27: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_94: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 95},
		{translateY: 72},
	],
	},
_Rectangle_436_24: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_0_3: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgba(0, 0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_88: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 141},
		{translateY: 118},
	],
	},
_Rectangle_436_25: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_7: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_102: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 141},
		{translateY: 164},
	],
	},
_Rectangle_436_26: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_14: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_109: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 141},
		{translateY: 210},
	],
	},
_Rectangle_436_27: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_21: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_116: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 141},
		{translateY: 256},
	],
	},
_Rectangle_436_28: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_28: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_95: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 141},
		{translateY: 72},
	],
	},
_Rectangle_436_29: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_0_4: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgba(0, 0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_89: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 187},
		{translateY: 118},
	],
	},
_Rectangle_436_30: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_8: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_103: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 187},
		{translateY: 164},
	],
	},
_Rectangle_436_31: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_15: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_110: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 187},
		{translateY: 210},
	],
	},
_Rectangle_436_32: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_22: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_117: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 187},
		{translateY: 256},
	],
	},
_Rectangle_436_33: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_29: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_96: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 187},
		{translateY: 72},
	],
	},
_Rectangle_436_34: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_1_3: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_90: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 233},
		{translateY: 118},
	],
	},
_Rectangle_436_35: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_9: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_104: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 233},
		{translateY: 164},
	],
	},
_Rectangle_436_36: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_16: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_111: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 233},
		{translateY: 210},
	],
	},
_Rectangle_436_37: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_23: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_118: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 233},
		{translateY: 256},
	],
	},
_Rectangle_436_38: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_30: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_97: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 233},
		{translateY: 72},
	],
	},
_Rectangle_436_39: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_2_2: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_91: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 279},
		{translateY: 118},
	],
	},
_Rectangle_436_40: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_10: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 152, 166)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_105: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 279},
		{translateY: 164},
	],
	},
_Rectangle_436_41: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_17: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 152, 166)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_112: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 279},
		{translateY: 210},
	],
	},
_Rectangle_436_42: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_24: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 152, 166)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_119: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 279},
		{translateY: 256},
	],
	},
_Rectangle_436_43: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_31: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 152, 166)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_98: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 279},
		{translateY: 72},
	],
	},
_Rectangle_436_44: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_3: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 152, 166)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_12: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 60},
		{translateY: 179},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_26: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 64},
		{translateY: 271},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B_Medium___active: {
	width: 72,
	height: 48,
	position: "absolute",
	left: 24,
	top: 449,
	},
_Rectangle_605: {
	width: 72,
	height: 48,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 16},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B_Medium___inactive: {
	width: 72,
	height: 48,
	position: "absolute",
	left: 104,
	top: 449,
	},
_Rectangle_605_2: {
	width: 72,
	height: 48,
	position: "absolute",
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 189, 211)",
	borderRadius: 8,
	},
____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 16},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B_Medium___active_2: {
	width: 72,
	height: 48,
	position: "absolute",
	left: 184,
	top: 449,
	},
_Rectangle_605_3: {
	width: 72,
	height: 48,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 16},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B_Medium___inactive_2: {
	width: 72,
	height: 48,
	position: "absolute",
	left: 264,
	top: 449,
	},
_Rectangle_605_4: {
	width: 72,
	height: 48,
	position: "absolute",
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 189, 211)",
	borderRadius: 8,
	},
____6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 16},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_14_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 255,
	top: 562,
	color: "rgb(0, 189, 211)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "right",
	},
})

