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
const Page_16  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page5}    >
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
						<View style = {noneModeStyles.style8}    >
							<View style = {noneModeStyles.style9}   >
								<Svg style={{height: 12, width: 20}} viewBox = "0 0 20 12">
									<Path fill = {"black"}     d = "M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style10}    >
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles.________________}   >
				오늘도 건강관리 잊지마세요!
			</Text>
			<View style = {noneModeStyles._Group_265}    >
				<View style = {noneModeStyles._Rectangle_559}    >
				</View>
				<Text style = {noneModeStyles.___}   >
					아침
				</Text>
			</View>
			<Text style = {noneModeStyles.____2}   >
				점심
			</Text>
			<Text style = {noneModeStyles.____3}   >
				저녁
			</Text>
			<Text style = {noneModeStyles._____}   >
				취침 전
			</Text>
			<Text style = {noneModeStyles.______}   >
				박밍꾸님,
			</Text>
			<View style = {noneModeStyles._Group_161}    >
				<View style = {noneModeStyles._Group_160}    >
					<Text style = {noneModeStyles._2021__9__6_}   >
						2021년 9월 6일
					</Text>
					<View style = {noneModeStyles._Navigation___ic_3}    >
						<View style = {noneModeStyles._ic_2}    >
							<View style = {noneModeStyles.style24}    >
								<View style = {noneModeStyles.style25}   >
									<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
										<Path fill = {"black"}     d = "M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style26}    >
							</View>
						</View>
					</View>
				</View>
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
							<View style = {noneModeStyles.style34}    >
								<View style = {noneModeStyles.style35}   >
									<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style36}    >
								<View style = {noneModeStyles.style37}   >
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
							<View style = {noneModeStyles.style45}    >
								<View style = {noneModeStyles.style46}   >
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
			<View style = {noneModeStyles._1__Cards____________}    >
				<View style = {noneModeStyles._Group_246}    >
					<View style = {noneModeStyles._Group_244}    >
						<View style = {noneModeStyles._Group_238}    >
							<View style = {noneModeStyles._Group_233}    >
								<View style = {noneModeStyles._Rectangle_548}    >
								</View>
								<View style = {noneModeStyles._Rectangle_549}    >
								</View>
								<Text style = {noneModeStyles._06_30___08_30}   >
									06:30 ~ 08:30
								</Text>
								<View style = {noneModeStyles._Alert___ic}    >
									<View style = {noneModeStyles._ic_3}    >
										<View style = {noneModeStyles.style61}    >
											<View style = {noneModeStyles.style62}   >
												<Svg style={{height: 20, width: 16}} viewBox = "0 0 16 20">
													<Path fill = {"#FDC959"}     d = "M8 19.5C9.1 19.5 10 18.6 10 17.5H6C6 18.6 6.89 19.5 8 19.5ZM14 13.5V8.5C14 5.43 12.36 2.86 9.5 2.18V1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5V2.18C3.63 2.86 2 5.42 2 8.5V13.5L0 15.5V16.5H16V15.5L14 13.5Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Group_237}    >
								<View style = {noneModeStyles._Rectangle_548_2}    >
								</View>
							</View>
							<View style = {noneModeStyles._Group_238_2}    >
								<View style = {noneModeStyles._Rectangle_548_3}    >
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.________}   >
							락토핏 유산균
						</Text>
						<Text style = {noneModeStyles.____}   >
							처방약
						</Text>
						<Text style = {noneModeStyles._______2_0}   >
							아이클리어 2.0
						</Text>
						<Text style = {noneModeStyles._______2}   >
							코자엑스큐
						</Text>
						<View style = {noneModeStyles._Action___ic}    >
							<View style = {noneModeStyles._ic_4}    >
								<View style = {noneModeStyles.style73}    >
								</View>
								<View style = {noneModeStyles.style74}    >
									<View style = {noneModeStyles.style75}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"#8BA629"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_2}    >
							<View style = {noneModeStyles._ic_5}    >
								<View style = {noneModeStyles.style78}    >
								</View>
								<View style = {noneModeStyles.style79}    >
									<View style = {noneModeStyles.style80}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"black"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_3}    >
							<View style = {noneModeStyles._ic_6}    >
								<View style = {noneModeStyles.style83}    >
								</View>
								<View style = {noneModeStyles.style84}    >
									<View style = {noneModeStyles.style85}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"#8BA629"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_4}    >
							<View style = {noneModeStyles._ic_7}    >
								<View style = {noneModeStyles.style88}    >
								</View>
								<View style = {noneModeStyles.style89}    >
									<View style = {noneModeStyles.style90}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"black"}     d = "M5.7274 10.8412L1.43185 6.5456L0 7.97745L5.7274 13.7048L18.0004 1.43185L16.5686 0L5.7274 10.8412Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_267}    >
					<View style = {noneModeStyles._Rectangle_586}    >
					</View>
					<Text style = {noneModeStyles.____4}   >
						전문
					</Text>
					<Text style = {noneModeStyles._2}   >
						2
					</Text>
				</View>
				<View style = {noneModeStyles._Group_268}    >
					<View style = {noneModeStyles._Rectangle_588}    >
					</View>
					<Text style = {noneModeStyles.____5}   >
						일반
					</Text>
					<Text style = {noneModeStyles._0}   >
						0
					</Text>
				</View>
				<View style = {noneModeStyles._Group_266}    >
					<View style = {noneModeStyles._Rectangle_587}    >
					</View>
					<Text style = {noneModeStyles._2_2}   >
						2
					</Text>
					<Text style = {noneModeStyles.______2}   >
						건강기능
					</Text>
				</View>
				<View style = {noneModeStyles._Group_269}    >
					<View style = {noneModeStyles._Rectangle_589}    >
					</View>
					<Text style = {noneModeStyles._0_2}   >
						0
					</Text>
					<Text style = {noneModeStyles.______3}   >
						의약외품
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_481}    >
			</View>
			<View style = {noneModeStyles._Group_264}    >
				<View style = {noneModeStyles._Rectangle_477}    >
				</View>
				<View style = {noneModeStyles._Group_262}    >
					<Text style = {noneModeStyles.____________}   >
						어떤 약을 드셨나요?
					</Text>
					<Text style = {noneModeStyles._______3}   >
						아침약 중
					</Text>
				</View>
				<Text style = {noneModeStyles._______4}   >
					전체 선택
				</Text>
				<View style = {noneModeStyles._Action___ic_5}    >
					<View style = {noneModeStyles._ic_8}    >
						<View style = {noneModeStyles.style116}    >
						</View>
						<View style = {noneModeStyles.style117}    >
							<View style = {noneModeStyles.style118}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_482}    >
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___a__solid}    >
					<View style = {noneModeStyles._Rectangle_394}    >
					</View>
					<Text style = {noneModeStyles.____6}   >
						저장
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___c__line}    >
					<View style = {noneModeStyles._Rectangle_394_2}    >
					</View>
					<Text style = {noneModeStyles.____7}   >
						취소
					</Text>
				</View>
				<View style = {noneModeStyles._Group_261}    >
					<View style = {noneModeStyles._Rectangle_593}    >
					</View>
					<View style = {noneModeStyles._Group_247}    >
						<Text style = {noneModeStyles._________2}   >
							락토핏 유산균
						</Text>
						<View style = {noneModeStyles._Toggle___ic}    >
							<View style = {noneModeStyles._ic_9}    >
								<View style = {noneModeStyles.style132}    >
								</View>
								<View style = {noneModeStyles.style133}    >
									<View style = {noneModeStyles.style134}   >
										<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
											<Path fill = {"#8BA629"}     d = "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_248}    >
						<Text style = {noneModeStyles._______2_0_2}   >
							아이클리어 2.0
						</Text>
						<View style = {noneModeStyles._Toggle___ic_2}    >
							<View style = {noneModeStyles._ic_10}    >
								<View style = {noneModeStyles.style139}    >
								</View>
								<View style = {noneModeStyles.style140}    >
									<View style = {noneModeStyles.style141}   >
										<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
											<Path fill = {"#8BA629"}     d = "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._______5}   >
						전문의약품
					</Text>
				</View>
				<View style = {noneModeStyles._Group_263}    >
					<View style = {noneModeStyles._Rectangle_594}    >
					</View>
					<View style = {noneModeStyles._Group_249}    >
						<Text style = {noneModeStyles._____2}   >
							처방약
						</Text>
						<View style = {noneModeStyles._Toggle___ic_3}    >
							<View style = {noneModeStyles._ic_11}    >
								<View style = {noneModeStyles.style149}    >
								</View>
								<View style = {noneModeStyles.style150}    >
									<View style = {noneModeStyles.style151}   >
										<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
											<Path fill = {"black"}     d = "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_250}    >
						<Text style = {noneModeStyles._______6}   >
							코자엑스큐
						</Text>
						<View style = {noneModeStyles._Toggle___ic_4}    >
							<View style = {noneModeStyles._ic_12}    >
								<View style = {noneModeStyles.style156}    >
								</View>
								<View style = {noneModeStyles.style157}    >
									<View style = {noneModeStyles.style158}   >
										<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
											<Path fill = {"black"}     d = "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._______}   >
						건강기능식품
					</Text>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_16

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
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
style8: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 5.5},
	],
	},
style9: {
	},
style10: {
	position: "absolute",
	},
________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 250,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_265: {
	width: 56,
	height: 32,
	position: "absolute",
	left: 40,
	top: 328,
	},
_Rectangle_559: {
	width: 56,
	height: 32,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	},
___: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 13,
	top: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 123,
	top: 332,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 193,
	top: 332,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 263,
	top: 332,
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 26,
	top: 216,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_161: {
	width: 194,
	height: 32,
	position: "absolute",
	left: 24,
	top: 112,
	},
_Group_160: {
	width: 194,
	height: 32,
	position: "absolute",
	left: 0,
	top: 0,
	},
_2021__9__6_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Navigation___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 170,
	top: 4,
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style24: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8.58997},
	],
	},
style25: {
	},
style26: {
	position: "absolute",
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
style34: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style35: {
	},
style36: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style37: {
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
style45: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style46: {
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
_1__Cards____________: {
	width: 328,
	height: 233,
	position: "absolute",
	left: 16,
	top: 375,
	},
_Group_246: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Group_244: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Group_238: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Group_233: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Rectangle_548: {
	width: 164,
	height: 233,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: -1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_Rectangle_549: {
	width: 164,
	height: 233,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 164},
	],
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: -1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_06_30___08_30: {
	width: 84,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Alert___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 16},
	],
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style61: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 2.5},
	],
	},
style62: {
	},
_Group_237: {
	width: 164,
	height: 184,
	position: "absolute",
	transform: [
		{translateY: 49},
	],
	},
_Rectangle_548_2: {
	width: 164,
	height: 184,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_Group_238_2: {
	width: 164,
	height: 184,
	position: "absolute",
	transform: [
		{translateX: 164},
		{translateY: 49},
	],
	},
_Rectangle_548_3: {
	width: 164,
	height: 184,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 97},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 121},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______2_0: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 145},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 169},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
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
		{translateY: 93},
	],
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style73: {
	position: "absolute",
	},
style74: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style75: {
	},
_Action___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 117},
	],
	},
_ic_5: {
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
_Action___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 141},
	],
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
	},
style84: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style85: {
	},
_Action___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 165},
	],
	},
_ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style88: {
	position: "absolute",
	},
style89: {
	position: "absolute",
	transform: [
		{translateX: 3.40039},
		{translateY: 5.6001},
	],
	},
style90: {
	},
_Group_267: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 14},
		{translateY: 65},
	],
	},
_Rectangle_586: {
	width: 64,
	height: 72,
	backgroundColor: "rgb(242, 89, 75)",
	position: "absolute",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 14},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_268: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 14},
		{translateY: 145},
	],
	},
_Rectangle_588: {
	width: 64,
	height: 72,
	backgroundColor: "rgb(38, 199, 217)",
	position: "absolute",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_0: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 14},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_266: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 86},
		{translateY: 65},
	],
	},
_Rectangle_587: {
	width: 64,
	height: 72,
	backgroundColor: "rgb(242, 133, 38)",
	position: "absolute",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_2_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 14},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_269: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 86},
		{translateY: 145},
	],
	},
_Rectangle_589: {
	width: 64,
	height: 72,
	backgroundColor: "rgb(137, 106, 243)",
	position: "absolute",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_0_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 14},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_481: {
	width: 360,
	height: 640,
	backgroundColor: "rgba(0, 0, 0, 0.35)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_264: {
	width: 312,
	height: 496,
	position: "absolute",
	left: 24,
	top: 81,
	},
_Rectangle_477: {
	width: 312,
	height: 496,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_Group_262: {
	width: 199,
	height: 66,
	position: "absolute",
	left: 24,
	top: 32,
	},
____________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 34},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 24,
	fontWeight: "300",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 29},
		{translateY: 384},
	],
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 261},
		{translateY: 384},
	],
	},
_ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style116: {
	position: "absolute",
	},
style117: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style118: {
	},
_Rectangle_482: {
	width: 296,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 370},
	],
	},
_1__Button___B__Medium___a__solid: {
	width: 128,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 164},
		{translateY: 424},
	],
	},
_Rectangle_394: {
	width: 128,
	height: 48,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	borderRadius: 24,
	},
____6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 50.4443},
		{translateY: 16},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___c__line: {
	width: 128,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 20},
		{translateY: 424},
	],
	},
_Rectangle_394_2: {
	width: 128,
	height: 48,
	position: "absolute",
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 189, 211)",
	borderRadius: 24,
	},
____7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 50.4443},
		{translateY: 16},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_261: {
	width: 288,
	height: 120,
	position: "absolute",
	left: 12,
	top: 106,
	},
_Rectangle_593: {
	width: 288,
	height: 120,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Group_247: {
	width: 113,
	height: 24,
	position: "absolute",
	left: 20,
	top: 48,
	},
_________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 32},
	],
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
_ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style132: {
	position: "absolute",
	},
style133: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style134: {
	},
_Group_248: {
	width: 119,
	height: 24,
	position: "absolute",
	left: 20,
	top: 80,
	},
_______2_0_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 32},
	],
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
_ic_10: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style139: {
	position: "absolute",
	},
style140: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style141: {
	},
_______5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 21,
	top: 17,
	color: "rgb(242, 89, 75)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Group_263: {
	width: 288,
	height: 120,
	position: "absolute",
	left: 12,
	top: 234,
	},
_Rectangle_594: {
	width: 288,
	height: 120,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Group_249: {
	width: 71,
	height: 24,
	position: "absolute",
	left: 21,
	top: 48,
	},
_____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 32},
	],
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
_ic_11: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style149: {
	position: "absolute",
	},
style150: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style151: {
	},
_Group_250: {
	width: 97,
	height: 24,
	position: "absolute",
	left: 21,
	top: 80,
	},
_______6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 32},
	],
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
_ic_12: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style156: {
	position: "absolute",
	},
style157: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style158: {
	},
_______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 21,
	top: 16,
	color: "rgb(242, 133, 38)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
})

