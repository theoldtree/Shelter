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
const Page_Date_Picker  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page19}    >
			<Text style = {noneModeStyles._Date_Picker}   >
				Date Picker
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._1__Day_Selection}    >
				<View style = {noneModeStyles._Rectangle_242}    >
				</View>
				<Text style = {noneModeStyles.______}   >
					날짜 선택
				</Text>
				<View style = {noneModeStyles._Divider__1_Line}    >
					<View style = {noneModeStyles._Rectangle_234}    >
					</View>
				</View>
				<View style = {noneModeStyles._Elements___1_Today}    >
					<View style = {noneModeStyles._Ellipse_12}    >
					</View>
					<View style = {noneModeStyles._Rectangle_243}    >
					</View>
					<Text style = {noneModeStyles.__}   >
						목
					</Text>
					<Text style = {noneModeStyles._25}   >
						25
					</Text>
					<Text style = {noneModeStyles.___}   >
						오늘
					</Text>
				</View>
				<View style = {noneModeStyles._Elements__2_Not_Today}    >
					<View style = {noneModeStyles._Ellipse_12_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_243_2}    >
					</View>
					<Text style = {noneModeStyles.___2}   >
						수
					</Text>
					<Text style = {noneModeStyles._24}   >
						24
					</Text>
					<Text style = {noneModeStyles.____2}   >
						오늘
					</Text>
				</View>
				<View style = {noneModeStyles._Elements__2_Not_Today_2}    >
					<View style = {noneModeStyles._Ellipse_12_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_243_3}    >
					</View>
					<Text style = {noneModeStyles.___3}   >
						금
					</Text>
					<Text style = {noneModeStyles._24_2}   >
						26
					</Text>
					<Text style = {noneModeStyles.____3}   >
						오늘
					</Text>
				</View>
				<View style = {noneModeStyles._Elements__2_Not_Today_3}    >
					<View style = {noneModeStyles._Ellipse_12_4}    >
					</View>
					<View style = {noneModeStyles._Rectangle_243_4}    >
					</View>
					<Text style = {noneModeStyles.___4}   >
						토
					</Text>
					<Text style = {noneModeStyles._24_3}   >
						27
					</Text>
					<Text style = {noneModeStyles.____4}   >
						오늘
					</Text>
				</View>
				<View style = {noneModeStyles._Elements__2_Not_Today_4}    >
					<View style = {noneModeStyles._Ellipse_12_5}    >
					</View>
					<View style = {noneModeStyles._Rectangle_243_5}    >
					</View>
					<Text style = {noneModeStyles.___5}   >
						일
					</Text>
					<Text style = {noneModeStyles._24_4}   >
						28
					</Text>
					<Text style = {noneModeStyles.____5}   >
						오늘
					</Text>
				</View>
				<View style = {noneModeStyles._Elements__2_Not_Today_5}    >
					<View style = {noneModeStyles._Ellipse_12_6}    >
					</View>
					<View style = {noneModeStyles._Rectangle_243_6}    >
					</View>
					<Text style = {noneModeStyles.___6}   >
						월
					</Text>
					<Text style = {noneModeStyles._24_5}   >
						29
					</Text>
					<Text style = {noneModeStyles.____6}   >
						오늘
					</Text>
				</View>
				<View style = {noneModeStyles._Elements__2_Not_Today_6}    >
					<View style = {noneModeStyles._Ellipse_12_7}    >
					</View>
					<View style = {noneModeStyles._Rectangle_243_7}    >
					</View>
					<Text style = {noneModeStyles.___7}   >
						화
					</Text>
					<Text style = {noneModeStyles._24_6}   >
						30
					</Text>
					<Text style = {noneModeStyles.____7}   >
						오늘
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Elements__2_Not_Today_7}    >
				<View style = {noneModeStyles._Ellipse_12_8}    >
				</View>
				<View style = {noneModeStyles._Rectangle_243_8}    >
				</View>
				<Text style = {noneModeStyles.___8}   >
					수
				</Text>
				<Text style = {noneModeStyles._24_7}   >
					24
				</Text>
				<Text style = {noneModeStyles.____8}   >
					오늘
				</Text>
			</View>
			<View style = {noneModeStyles._Elements___1_Today_2}    >
				<View style = {noneModeStyles._Ellipse_12_9}    >
				</View>
				<View style = {noneModeStyles._Rectangle_243_9}    >
				</View>
				<Text style = {noneModeStyles.___9}   >
					목
				</Text>
				<Text style = {noneModeStyles._25_2}   >
					25
				</Text>
				<Text style = {noneModeStyles.____9}   >
					오늘
				</Text>
			</View>
			<View style = {noneModeStyles._Rectangle_367}    >
			</View>
			<View style = {noneModeStyles._Date_Picker___B_______}    >
				<View style = {noneModeStyles._Rectangle_483}    >
				</View>
				<Text style = {noneModeStyles._2021__9_}   >
					2021년 9월
				</Text>
				<View style = {noneModeStyles._Group_277}    >
					<Text style = {noneModeStyles._12}   >
						12
					</Text>
					<Text style = {noneModeStyles._19}   >
						19
					</Text>
					<Text style = {noneModeStyles._26}   >
						26
					</Text>
					<Text style = {noneModeStyles._29}   >
						29
					</Text>
					<Text style = {noneModeStyles._5}   >
						5
					</Text>
				</View>
				<View style = {noneModeStyles._Group_275}    >
					<Text style = {noneModeStyles._14}   >
						14
					</Text>
					<Text style = {noneModeStyles._21}   >
						21
					</Text>
					<Text style = {noneModeStyles._28}   >
						28
					</Text>
					<Text style = {noneModeStyles._31}   >
						31
					</Text>
					<Text style = {noneModeStyles._7}   >
						7
					</Text>
				</View>
				<View style = {noneModeStyles._Group_274}    >
					<Text style = {noneModeStyles._15}   >
						15
					</Text>
					<Text style = {noneModeStyles._22}   >
						22
					</Text>
					<Text style = {noneModeStyles._29_2}   >
						29
					</Text>
					<Text style = {noneModeStyles._1}   >
						1
					</Text>
					<Text style = {noneModeStyles._8}   >
						8
					</Text>
				</View>
				<View style = {noneModeStyles._Group_273}    >
					<Text style = {noneModeStyles._16}   >
						16
					</Text>
					<Text style = {noneModeStyles._23}   >
						23
					</Text>
					<Text style = {noneModeStyles._30}   >
						30
					</Text>
					<Text style = {noneModeStyles._2}   >
						2
					</Text>
					<Text style = {noneModeStyles._9}   >
						9
					</Text>
				</View>
				<View style = {noneModeStyles._Group_272}    >
					<Text style = {noneModeStyles._17}   >
						17
					</Text>
					<Text style = {noneModeStyles._24_8}   >
						24
					</Text>
					<Text style = {noneModeStyles._1_2}   >
						1
					</Text>
					<Text style = {noneModeStyles._3}   >
						3
					</Text>
					<Text style = {noneModeStyles._10}   >
						10
					</Text>
				</View>
				<View style = {noneModeStyles._Group_271}    >
					<Text style = {noneModeStyles._18}   >
						18
					</Text>
					<Text style = {noneModeStyles._25_3}   >
						25
					</Text>
					<Text style = {noneModeStyles._2_2}   >
						2
					</Text>
					<Text style = {noneModeStyles._4}   >
						4
					</Text>
					<Text style = {noneModeStyles._11}   >
						11
					</Text>
				</View>
				<View style = {noneModeStyles._Group_276}    >
					<Text style = {noneModeStyles._13}   >
						13
					</Text>
					<Text style = {noneModeStyles._20}   >
						20
					</Text>
					<Text style = {noneModeStyles._27}   >
						27
					</Text>
					<Text style = {noneModeStyles._30_2}   >
						30
					</Text>
					<View style = {noneModeStyles._Rectangle_484}    >
					</View>
					<Text style = {noneModeStyles._6}   >
						6
					</Text>
				</View>
				<View style = {noneModeStyles._Group_278}    >
					<View style = {noneModeStyles._Navigation___ic}    >
						<View style = {noneModeStyles._ic}    >
							<View style = {noneModeStyles.style112}    >
								<View style = {noneModeStyles.style113}   >
									<Svg style={{height: 21, width: 11}} viewBox = "0 0 11 21">
										<Path fill = {"black"}     d = "M10.5 0L0 10.5L10.5 21V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style114}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Navigation___ic_2}    >
						<View style = {noneModeStyles._ic_2}    >
							<View style = {noneModeStyles.style117}    >
								<View style = {noneModeStyles.style118}   >
									<Svg style={{height: 21, width: 11}} viewBox = "0 0 11 21">
										<Path fill = {"black"}     d = "M0 21L10.5 10.5L0 0V21Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style119}    >
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_3}    >
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style122}    >
							<View style = {noneModeStyles.style123}   >
								<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
									<Path fill = {"black"}     d = "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style124}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Date_Picker___C___________________inactive}    >
				<View style = {noneModeStyles._Frame_160}    >
					<Text style = {noneModeStyles._2021__9__6_}   >
						2021년 9월 6일
					</Text>
					<View style = {noneModeStyles._Navigation___ic_4}    >
						<View style = {noneModeStyles._ic_4}    >
							<View style = {noneModeStyles.style130}    >
								<View style = {noneModeStyles.style131}   >
									<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
										<Path fill = {"black"}     d = "M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style132}    >
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Date_Picker___C___________________active}    >
				<View style = {noneModeStyles._Frame_160_2}    >
					<Text style = {noneModeStyles._2021__9__6__2}   >
						2021년 9월 6일
					</Text>
					<View style = {noneModeStyles._Navigation___ic_5}    >
						<View style = {noneModeStyles._ic_5}    >
							<View style = {noneModeStyles.style138}    >
								<View style = {noneModeStyles.style139}   >
									<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
										<Path fill = {"black"}     d = "M10.59 7.40991L6 2.82991L1.41 7.40991L1.23266e-07 5.99991L6 -8.82626e-05L12 5.99991L10.59 7.40991Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style140}    >
							</View>
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
				<View style = {noneModeStyles._Navigation___ic_6}    >
					<View style = {noneModeStyles._ic_6}    >
						<View style = {noneModeStyles.style174}    >
							<View style = {noneModeStyles.style175}   >
								<Svg style={{height: 10, width: 5}} viewBox = "0 0 5 10">
									<Path fill = {"black"}     d = "M5 0L0 5L5 10V0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style176}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_7}    >
					<View style = {noneModeStyles._ic_7}    >
						<View style = {noneModeStyles.style179}    >
							<View style = {noneModeStyles.style180}   >
								<Svg style={{height: 10, width: 5}} viewBox = "0 0 5 10">
									<Path fill = {"black"}     d = "M0 10L5 5L0 0V10Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style181}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_304}    >
					<View style = {noneModeStyles._Ellipse_14}    >
					</View>
					<Text style = {noneModeStyles.____10}   >
						오늘
					</Text>
				</View>
				<View style = {noneModeStyles._Group_85}    >
					<View style = {noneModeStyles._Rectangle_436_10}    >
					</View>
					<Text style = {noneModeStyles._4_2}   >
						4
					</Text>
				</View>
				<View style = {noneModeStyles._Group_99}    >
					<View style = {noneModeStyles._Rectangle_436_11}    >
					</View>
					<Text style = {noneModeStyles._11_2}   >
						11
					</Text>
				</View>
				<View style = {noneModeStyles._Group_106}    >
					<View style = {noneModeStyles._Rectangle_436_12}    >
					</View>
					<Text style = {noneModeStyles._18_2}   >
						18
					</Text>
				</View>
				<View style = {noneModeStyles._Group_113}    >
					<View style = {noneModeStyles._Rectangle_436_13}    >
					</View>
					<Text style = {noneModeStyles._25_4}   >
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
					<Text style = {noneModeStyles._5_2}   >
						5
					</Text>
				</View>
				<View style = {noneModeStyles._Rectangle_436_16}    >
				</View>
				<View style = {noneModeStyles._Group_107}    >
					<View style = {noneModeStyles._Rectangle_436_17}    >
					</View>
					<Text style = {noneModeStyles._19_2}   >
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
					<Text style = {noneModeStyles._6_2}   >
						6
					</Text>
				</View>
				<View style = {noneModeStyles._Group_101}    >
					<View style = {noneModeStyles._Rectangle_436_21}    >
					</View>
					<Text style = {noneModeStyles._13_2}   >
						13
					</Text>
				</View>
				<View style = {noneModeStyles._Group_108}    >
					<View style = {noneModeStyles._Rectangle_436_22}    >
					</View>
					<Text style = {noneModeStyles._20_2}   >
						20
					</Text>
				</View>
				<View style = {noneModeStyles._Group_115}    >
					<View style = {noneModeStyles._Rectangle_436_23}    >
					</View>
					<Text style = {noneModeStyles._27_2}   >
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
					<Text style = {noneModeStyles._7_2}   >
						7
					</Text>
				</View>
				<View style = {noneModeStyles._Group_102}    >
					<View style = {noneModeStyles._Rectangle_436_26}    >
					</View>
					<Text style = {noneModeStyles._14_2}   >
						14
					</Text>
				</View>
				<View style = {noneModeStyles._Group_109}    >
					<View style = {noneModeStyles._Rectangle_436_27}    >
					</View>
					<Text style = {noneModeStyles._21_2}   >
						21
					</Text>
				</View>
				<View style = {noneModeStyles._Group_116}    >
					<View style = {noneModeStyles._Rectangle_436_28}    >
					</View>
					<Text style = {noneModeStyles._28_2}   >
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
					<Text style = {noneModeStyles._8_2}   >
						8
					</Text>
				</View>
				<View style = {noneModeStyles._Group_103}    >
					<View style = {noneModeStyles._Rectangle_436_31}    >
					</View>
					<Text style = {noneModeStyles._15_2}   >
						15
					</Text>
				</View>
				<View style = {noneModeStyles._Group_110}    >
					<View style = {noneModeStyles._Rectangle_436_32}    >
					</View>
					<Text style = {noneModeStyles._22_2}   >
						22
					</Text>
				</View>
				<View style = {noneModeStyles._Group_117}    >
					<View style = {noneModeStyles._Rectangle_436_33}    >
					</View>
					<Text style = {noneModeStyles._29_3}   >
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
					<Text style = {noneModeStyles._9_2}   >
						9
					</Text>
				</View>
				<View style = {noneModeStyles._Group_104}    >
					<View style = {noneModeStyles._Rectangle_436_36}    >
					</View>
					<Text style = {noneModeStyles._16_2}   >
						16
					</Text>
				</View>
				<View style = {noneModeStyles._Group_111}    >
					<View style = {noneModeStyles._Rectangle_436_37}    >
					</View>
					<Text style = {noneModeStyles._23_2}   >
						23
					</Text>
				</View>
				<View style = {noneModeStyles._Group_118}    >
					<View style = {noneModeStyles._Rectangle_436_38}    >
					</View>
					<Text style = {noneModeStyles._30_3}   >
						30
					</Text>
				</View>
				<View style = {noneModeStyles._Group_97}    >
					<View style = {noneModeStyles._Rectangle_436_39}    >
					</View>
					<Text style = {noneModeStyles._2_3}   >
						2
					</Text>
				</View>
				<View style = {noneModeStyles._Group_91}    >
					<View style = {noneModeStyles._Rectangle_436_40}    >
					</View>
					<Text style = {noneModeStyles._10_2}   >
						10
					</Text>
				</View>
				<View style = {noneModeStyles._Group_105}    >
					<View style = {noneModeStyles._Rectangle_436_41}    >
					</View>
					<Text style = {noneModeStyles._17_2}   >
						17
					</Text>
				</View>
				<View style = {noneModeStyles._Group_112}    >
					<View style = {noneModeStyles._Rectangle_436_42}    >
					</View>
					<Text style = {noneModeStyles._24_9}   >
						24
					</Text>
				</View>
				<View style = {noneModeStyles._Group_119}    >
					<View style = {noneModeStyles._Rectangle_436_43}    >
					</View>
					<Text style = {noneModeStyles._31_2}   >
						31
					</Text>
				</View>
				<View style = {noneModeStyles._Group_98}    >
					<View style = {noneModeStyles._Rectangle_436_44}    >
					</View>
					<Text style = {noneModeStyles._3_2}   >
						3
					</Text>
				</View>
				<Text style = {noneModeStyles._12_2}   >
					12
				</Text>
				<Text style = {noneModeStyles._26_2}   >
					26
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Date_Picker

const noneModeStyles = StyleSheet.create({
_page19: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Date_Picker: {
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
_1__Day_Selection: {
	width: 360,
	height: 160,
	position: "absolute",
	left: 80,
	top: 283,
	},
_Rectangle_242: {
	width: 360,
	height: 160,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 9746},
		{translateY: 2161},
	],
	},
______: {
	width: 47,
	height: 20.7195,
	position: "absolute",
	transform: [
		{translateX: 9762},
		{translateY: 2179.42},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Divider__1_Line: {
	width: 328,
	height: 1.15112,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 9762},
		{translateY: 2209.35},
	],
	},
_Rectangle_234: {
	width: 328,
	height: 1.15112,
	backgroundColor: "rgba(0, 0, 0, 0.2)",
	position: "absolute",
	},
_Elements___1_Today: {
	width: 48,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 9810},
		{translateY: 2225},
	],
	},
_Ellipse_12: {
	width: 32,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 20},
	],
	},
_Rectangle_243: {
	width: 48,
	height: 72,
	position: "absolute",
	},
__: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 2},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_25: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 25},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
___: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 54},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Elements__2_Not_Today: {
	width: 48,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 9762},
		{translateY: 2225},
	],
	},
_Ellipse_12_2: {
	width: 32,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 20},
	],
	},
_Rectangle_243_2: {
	width: 48,
	height: 72,
	position: "absolute",
	},
___2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 2},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_24: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 25},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 54},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Elements__2_Not_Today_2: {
	width: 48,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 9858},
		{translateY: 2225},
	],
	},
_Ellipse_12_3: {
	width: 32,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 20},
	],
	},
_Rectangle_243_3: {
	width: 48,
	height: 72,
	position: "absolute",
	},
___3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 2},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_24_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 25},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 54},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Elements__2_Not_Today_3: {
	width: 48,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 9906},
		{translateY: 2225},
	],
	},
_Ellipse_12_4: {
	width: 32,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 20},
	],
	},
_Rectangle_243_4: {
	width: 48,
	height: 72,
	position: "absolute",
	},
___4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 2},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_24_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 25},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 54},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Elements__2_Not_Today_4: {
	width: 48,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 9954},
		{translateY: 2225},
	],
	},
_Ellipse_12_5: {
	width: 32,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 20},
	],
	},
_Rectangle_243_5: {
	width: 48,
	height: 72,
	position: "absolute",
	},
___5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 2},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_24_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 25},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 54},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Elements__2_Not_Today_5: {
	width: 48,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 10002},
		{translateY: 2225},
	],
	},
_Ellipse_12_6: {
	width: 32,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 20},
	],
	},
_Rectangle_243_6: {
	width: 48,
	height: 72,
	position: "absolute",
	},
___6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 2},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_24_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 25},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
____6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 54},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Elements__2_Not_Today_6: {
	width: 48,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 10050},
		{translateY: 2225},
	],
	},
_Ellipse_12_7: {
	width: 32,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 20},
	],
	},
_Rectangle_243_7: {
	width: 48,
	height: 72,
	position: "absolute",
	},
___7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 2},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_24_6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 25},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
____7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 54},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Elements__2_Not_Today_7: {
	width: 48,
	height: 72,
	position: "absolute",
	left: 482,
	top: 347,
	},
_Ellipse_12_8: {
	width: 32,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 10156},
		{translateY: 2245},
	],
	},
_Rectangle_243_8: {
	width: 48,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 10148},
		{translateY: 2225},
	],
	},
___8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10167},
		{translateY: 2227},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_24_7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10164},
		{translateY: 2250},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
____8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10163},
		{translateY: 2279},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Elements___1_Today_2: {
	width: 48,
	height: 72,
	position: "absolute",
	left: 530,
	top: 347,
	},
_Ellipse_12_9: {
	width: 32,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 10204},
		{translateY: 2245},
	],
	},
_Rectangle_243_9: {
	width: 48,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 10196},
		{translateY: 2225},
	],
	},
___9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10215},
		{translateY: 2227},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_25_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10212},
		{translateY: 2250},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
____9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10211},
		{translateY: 2279},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_367: {
	width: 360,
	height: 160,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 83,
	top: 464,
	},
_Date_Picker___B_______: {
	width: 328,
	height: 262,
	position: "absolute",
	left: 83,
	top: 1071,
	},
_Rectangle_483: {
	width: 328,
	height: 262,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 9749},
		{translateY: 2949},
	],
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_2021__9_: {
	width: 97,
	height: 33,
	position: "absolute",
	transform: [
		{translateX: 9794},
		{translateY: 2967.68},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_277: {
	width: 21.6445,
	height: 163.168,
	position: "absolute",
	transform: [
		{translateX: 9770.97},
		{translateY: 3032},
	],
	},
_12: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5991},
	],
	color: "rgb(242, 89, 75)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_19: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8989},
	],
	color: "rgb(242, 89, 75)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_26: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 133.198},
	],
	color: "rgb(242, 89, 75)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_29: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_5: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.65918},
		{translateY: 33.2993},
	],
	color: "rgb(242, 89, 75)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_275: {
	width: 19.9795,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 9864},
		{translateY: 3032},
	],
	},
_14: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_21: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_28: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 133.198},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_31: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_7: {
	width: 11.6553,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 4.99512},
		{translateY: 33.2993},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_274: {
	width: 21.6445,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 9906},
		{translateY: 3032},
	],
	},
_15: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_22: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_29_2: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 133.198},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.66016},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_8: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.66016},
		{translateY: 33.2993},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_273: {
	width: 19.9795,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 9950},
		{translateY: 3032},
	],
	},
_16: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_23: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_30: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 133.198},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.65918},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_9: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.65918},
		{translateY: 33.2993},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_272: {
	width: 19.9795,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 9992},
		{translateY: 3032},
	],
	},
_17: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_24_8: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1_2: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 4.99512},
		{translateY: 133.198},
	],
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_3: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 4.99512},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_10: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 33.2993},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_271: {
	width: 21.6445,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 10034},
		{translateY: 3032},
	],
	},
_18: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 66.5986},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_25_3: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 99.8984},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2_2: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.66016},
		{translateY: 133.198},
	],
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_4: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 6.66016},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_11: {
	width: 21.6445,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateY: 33.2993},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_276: {
	width: 26.6504,
	height: 163.167,
	position: "absolute",
	transform: [
		{translateX: 9815},
		{translateY: 3032},
	],
	},
_13: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 1.66406},
		{translateY: 66.5986},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_20: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 1.66406},
		{translateY: 99.8984},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_27: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 1.66406},
		{translateY: 133.198},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_30_2: {
	width: 19.9795,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 1.66406},
	],
	color: "rgba(0, 0, 0, 0.12)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_484: {
	width: 26.6504,
	height: 26.6499,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	transform: [
		{translateY: 29},
	],
	borderRadius: 13.325,
	},
_6: {
	width: 9.99023,
	height: 29.9695,
	position: "absolute",
	transform: [
		{translateX: 8.32422},
		{translateY: 33.2993},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_278: {
	width: 187.6,
	height: 49.2,
	position: "absolute",
	transform: [
		{translateX: 9749},
		{translateY: 2957},
	],
	},
_Navigation___ic: {
	width: 49.2002,
	height: 49.2,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
_ic: {
	width: 49.2002,
	height: 49.2,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style112: {
	position: "absolute",
	transform: [
		{translateX: 18.4502},
		{translateY: 14.3501},
	],
	},
style113: {
	},
style114: {
	position: "absolute",
	},
_Navigation___ic_2: {
	width: 49.2002,
	height: 49.2,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 138.399},
	],
	},
_ic_2: {
	width: 49.2002,
	height: 49.2,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style117: {
	position: "absolute",
	transform: [
		{translateX: 20.5},
		{translateY: 14.3501},
	],
	},
style118: {
	},
style119: {
	position: "absolute",
	},
_Navigation___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 10034},
		{translateY: 2970},
	],
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style122: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
style123: {
	},
style124: {
	position: "absolute",
	},
_Date_Picker___C___________________inactive: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 507,
	top: 464,
	},
_Frame_160: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 10173},
		{translateY: 2342},
	],
	},
_2021__9__6_: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 8,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Navigation___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style130: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8.59009},
	],
	},
style131: {
	},
style132: {
	position: "absolute",
	},
_Date_Picker___C___________________active: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 507,
	top: 504,
	},
_Frame_160_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 10173},
		{translateY: 2382},
	],
	},
_2021__9__6__2: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 8,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Navigation___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	flexShrink: 0,
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style138: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8},
	],
	},
style139: {
	},
style140: {
	position: "absolute",
	},
_Date_Picker___A___: {
	width: 328,
	height: 328,
	position: "absolute",
	left: 83,
	top: 703,
	},
_Group_128: {
	width: 328,
	height: 328,
	position: "absolute",
	transform: [
		{translateX: 9749},
		{translateY: 2581},
	],
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
		{translateX: 9752},
		{translateY: 2621},
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
		{translateX: 9798},
		{translateY: 2621},
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
		{translateX: 9844},
		{translateY: 2621},
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
		{translateX: 9890},
		{translateY: 2621},
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
		{translateX: 9752},
		{translateY: 2589},
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
		{translateX: 9936},
		{translateY: 2621},
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
		{translateX: 9982},
		{translateY: 2621},
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
		{translateX: 10028},
		{translateY: 2621},
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
	color: "rgb(0, 173, 192)",
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
		{translateX: 9806},
		{translateY: 2754},
	],
	borderRadius: 16,
	},
_Rectangle_438: {
	width: 309,
	height: 30,
	backgroundColor: "rgb(38, 199, 217)",
	position: "absolute",
	transform: [
		{translateX: 9758},
		{translateY: 2799},
	],
	borderRadius: 16,
	},
_Rectangle_439: {
	width: 78,
	height: 30,
	backgroundColor: "rgb(38, 199, 217)",
	position: "absolute",
	transform: [
		{translateX: 9758},
		{translateY: 2846},
	],
	borderRadius: 16,
	},
_Ellipse_15: {
	width: 30,
	height: 30,
	position: "absolute",
	transform: [
		{translateX: 9806},
		{translateY: 2754},
	],
	},
_Navigation___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 9846},
		{translateY: 2593},
	],
	},
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style174: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 7},
	],
	},
style175: {
	},
style176: {
	position: "absolute",
	},
_Navigation___ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 9955},
		{translateY: 2593},
	],
	},
_ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style179: {
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 7},
	],
	},
style180: {
	},
style181: {
	position: "absolute",
	},
_Group_304: {
	width: 30,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 9806},
		{translateY: 2846},
	],
	},
_Ellipse_14: {
	width: 30,
	height: 30,
	position: "absolute",
	},
____10: {
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
		{translateX: 9752},
		{translateY: 2699},
	],
	},
_Rectangle_436_10: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_4_2: {
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
		{translateX: 9752},
		{translateY: 2745},
	],
	},
_Rectangle_436_11: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_11_2: {
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
		{translateX: 9752},
		{translateY: 2791},
	],
	},
_Rectangle_436_12: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_18_2: {
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
		{translateX: 9752},
		{translateY: 2837},
	],
	},
_Rectangle_436_13: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_25_4: {
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
		{translateX: 9752},
		{translateY: 2653},
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
		{translateX: 9798},
		{translateY: 2699},
	],
	},
_Rectangle_436_15: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_5_2: {
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
		{translateX: 9798},
		{translateY: 2745},
	],
	},
_Group_107: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 9798},
		{translateY: 2791},
	],
	},
_Rectangle_436_17: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_19_2: {
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
		{translateX: 9798},
		{translateY: 2837},
	],
	},
_Group_93: {
	width: 46,
	height: 46,
	position: "absolute",
	transform: [
		{translateX: 9798},
		{translateY: 2653},
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
		{translateX: 9844},
		{translateY: 2699},
	],
	},
_Rectangle_436_20: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_6_2: {
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
		{translateX: 9844},
		{translateY: 2745},
	],
	},
_Rectangle_436_21: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_13_2: {
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
		{translateX: 9844},
		{translateY: 2791},
	],
	},
_Rectangle_436_22: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_20_2: {
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
		{translateX: 9844},
		{translateY: 2837},
	],
	},
_Rectangle_436_23: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_27_2: {
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
		{translateX: 9844},
		{translateY: 2653},
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
		{translateX: 9890},
		{translateY: 2699},
	],
	},
_Rectangle_436_25: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_7_2: {
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
		{translateX: 9890},
		{translateY: 2745},
	],
	},
_Rectangle_436_26: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_14_2: {
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
		{translateX: 9890},
		{translateY: 2791},
	],
	},
_Rectangle_436_27: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_21_2: {
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
		{translateX: 9890},
		{translateY: 2837},
	],
	},
_Rectangle_436_28: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_28_2: {
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
		{translateX: 9890},
		{translateY: 2653},
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
		{translateX: 9936},
		{translateY: 2699},
	],
	},
_Rectangle_436_30: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_8_2: {
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
		{translateX: 9936},
		{translateY: 2745},
	],
	},
_Rectangle_436_31: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_15_2: {
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
		{translateX: 9936},
		{translateY: 2791},
	],
	},
_Rectangle_436_32: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_22_2: {
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
		{translateX: 9936},
		{translateY: 2837},
	],
	},
_Rectangle_436_33: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_29_3: {
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
		{translateX: 9936},
		{translateY: 2653},
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
		{translateX: 9982},
		{translateY: 2699},
	],
	},
_Rectangle_436_35: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_9_2: {
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
		{translateX: 9982},
		{translateY: 2745},
	],
	},
_Rectangle_436_36: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_16_2: {
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
		{translateX: 9982},
		{translateY: 2791},
	],
	},
_Rectangle_436_37: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_23_2: {
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
		{translateX: 9982},
		{translateY: 2837},
	],
	},
_Rectangle_436_38: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_30_3: {
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
		{translateX: 9982},
		{translateY: 2653},
	],
	},
_Rectangle_436_39: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_2_3: {
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
		{translateX: 10028},
		{translateY: 2699},
	],
	},
_Rectangle_436_40: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_10_2: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 173, 192)",
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
		{translateX: 10028},
		{translateY: 2745},
	],
	},
_Rectangle_436_41: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_17_2: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 173, 192)",
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
		{translateX: 10028},
		{translateY: 2791},
	],
	},
_Rectangle_436_42: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_24_9: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 173, 192)",
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
		{translateX: 10028},
		{translateY: 2837},
	],
	},
_Rectangle_436_43: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_31_2: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 173, 192)",
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
		{translateX: 10028},
		{translateY: 2653},
	],
	},
_Rectangle_436_44: {
	width: 46,
	height: 46,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_3_2: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 15},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_12_2: {
	width: 23.4893,
	height: 15.6597,
	position: "absolute",
	transform: [
		{translateX: 9809},
		{translateY: 2760},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_26_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 9813},
		{translateY: 2852},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
})

