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
import {image_______________________1_link} from './assets/imageLinks.js'
import {image___________1_link} from './assets/imageLinks.js'
import {image________2_link} from './assets/imageLinks.js'
const Page_43  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page40}    >
			<View style = {noneModeStyles._Rectangle_558}    >
			</View>
			<Text style = {noneModeStyles._FAQ}   >
				FAQ
			</Text>
			<Text style = {noneModeStyles.__________________}   >
				가장 궁금해 하시는 질문들이에요
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
						<View style = {noneModeStyles.style11}    >
							<View style = {noneModeStyles.style12}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"white"}     d = "M11.7878 1.78787L9.99997 0L0 9.99997L9.99997 19.9999L11.7878 18.2121L3.57575 9.99997L11.7878 1.78787Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style13}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___QnA_answer_}    >
				<View style = {noneModeStyles._Rectangle_553}    >
				</View>
				<Text style = {noneModeStyles.______________________________________________________________________________________________________________________________________________________}   >
					약의 제형은 냄새, 맛, 분진 등을 방지하기 위한 목적 또는 약의 붕해 속도에 따라 결정되기 때문에 가급적 처방받은 형태대로 복용하는 것이 가장 좋습니다. {'\n'}알약을 삼키기 어려우시다면 약을 입에 넣은 상태에서 물을 빨대로 드시면 조금 더 수월하게 복용하실 수 있습니다.
				</Text>
				<View style = {noneModeStyles._Group_302}    >
					<View style = {noneModeStyles._Group_301}    >
						<Text style = {noneModeStyles._Q____________________________}   >
							Q. 알약을 삼키기 어려운데 잘라서 복용해도 되나요? 
						</Text>
						<View style = {noneModeStyles._Navigation___ic_3}    >
							<View style = {noneModeStyles._ic_2}    >
								<View style = {noneModeStyles.style22}    >
									<View style = {noneModeStyles.style23}   >
										<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
											<Path fill = {"black"}     d = "M10.59 7.40991L6 2.82991L1.41 7.40991L1.68141e-08 5.99991L6 -8.76665e-05L12 5.99991L10.59 7.40991Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style24}    >
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_374}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___C__small_text_icon}    >
				<View style = {noneModeStyles._Rectangle_553_2}    >
				</View>
				<Text style = {noneModeStyles.______}   >
					Q. 복용 시간이 지나서 약을 복용해도 괜찮을까...
				</Text>
				<View style = {noneModeStyles._Navigation___ic_4}    >
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style31}    >
							<View style = {noneModeStyles.style32}   >
								<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
									<Path fill = {"black"}     d = "M1.41 -4.62904e-07L6 4.58L10.59 -6.16331e-08L12 1.41L6 7.41L-6.16331e-08 1.41L1.41 -4.62904e-07Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style33}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___C__small_text_icon_2}    >
				<View style = {noneModeStyles._Rectangle_553_3}    >
				</View>
				<Text style = {noneModeStyles._______2}   >
					Q. 눅눅해진 약을 먹어도 될까요?
				</Text>
				<View style = {noneModeStyles._Navigation___ic_5}    >
					<View style = {noneModeStyles._ic_4}    >
						<View style = {noneModeStyles.style39}    >
							<View style = {noneModeStyles.style40}   >
								<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
									<Path fill = {"black"}     d = "M1.41 -4.62904e-07L6 4.58L10.59 -6.16331e-08L12 1.41L6 7.41L-6.16331e-08 1.41L1.41 -4.62904e-07Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style41}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___C__small_text_icon_3}    >
				<View style = {noneModeStyles._Rectangle_553_4}    >
				</View>
				<Text style = {noneModeStyles._______3}   >
					Q. 유통기한이 지난 약을 먹었어요.
				</Text>
				<View style = {noneModeStyles._Navigation___ic_6}    >
					<View style = {noneModeStyles._ic_5}    >
						<View style = {noneModeStyles.style47}    >
							<View style = {noneModeStyles.style48}   >
								<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
									<Path fill = {"black"}     d = "M1.41 -4.62904e-07L6 4.58L10.59 -6.16331e-08L12 1.41L6 7.41L-6.16331e-08 1.41L1.41 -4.62904e-07Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style49}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___C__small_text_icon_4}    >
				<View style = {noneModeStyles._Rectangle_553_5}    >
				</View>
				<Text style = {noneModeStyles._______4}   >
					Q. 식후 30분 뒤에 복용해야 하는 이유가 있나요?
				</Text>
				<View style = {noneModeStyles._Navigation___ic_7}    >
					<View style = {noneModeStyles._ic_6}    >
						<View style = {noneModeStyles.style55}    >
							<View style = {noneModeStyles.style56}   >
								<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
									<Path fill = {"black"}     d = "M1.41 -4.62904e-07L6 4.58L10.59 -6.16331e-08L12 1.41L6 7.41L-6.16331e-08 1.41L1.41 -4.62904e-07Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style57}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___C__small_text_icon_5}    >
				<View style = {noneModeStyles._Rectangle_553_6}    >
				</View>
				<Text style = {noneModeStyles._______5}   >
					Q. 약을 주스와 같이 복용해도 되나요?
				</Text>
				<View style = {noneModeStyles._Navigation___ic_8}    >
					<View style = {noneModeStyles._ic_7}    >
						<View style = {noneModeStyles.style63}    >
							<View style = {noneModeStyles.style64}   >
								<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
									<Path fill = {"black"}     d = "M1.41 -4.62904e-07L6 4.58L10.59 -6.16331e-08L12 1.41L6 7.41L-6.16331e-08 1.41L1.41 -4.62904e-07Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style65}    >
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
							<View style = {noneModeStyles.style73}    >
								<View style = {noneModeStyles.style74}   >
									<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style75}    >
								<View style = {noneModeStyles.style76}   >
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
							<View style = {noneModeStyles.style84}    >
								<View style = {noneModeStyles.style85}   >
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
			<View style = {noneModeStyles._5__circle_list___active}    >
				<View style = {noneModeStyles._Ellipse_43}    >
				</View>
				<Text style = {noneModeStyles._____}   >
					약 복용
				</Text>
			</View>
			<View style = {noneModeStyles._5__circle_list___inactive}    >
				<View style = {noneModeStyles._Ellipse_43_2}    >
				</View>
				<Text style = {noneModeStyles.______2}   >
					약 보관
				</Text>
			</View>
			<View style = {noneModeStyles._5__circle_list___inactive_2}    >
				<View style = {noneModeStyles._Ellipse_43_3}    >
				</View>
				<Text style = {noneModeStyles.______3}   >
					상식
				</Text>
			</View>
			<View style = {noneModeStyles._5__circle_list___inactive_3}    >
				<View style = {noneModeStyles._Ellipse_43_4}    >
				</View>
				<Text style = {noneModeStyles.______4}   >
					앱 기능
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___FAQ______}    >
				<View style = {noneModeStyles._Rectangle_606}    >
				</View>
				<View style = {noneModeStyles._Group_300}    >
					<Text style = {noneModeStyles._______________}   >
						원하는 답변이 없으신가요?
					</Text>
					<Text style = {noneModeStyles._QnA_______}   >
						QnA로 가기 >>
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._______________________1_container}    >
				<View style = {noneModeStyles._______________________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_______________________1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles.___________1_container}    >
				<View style = {noneModeStyles.___________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image___________1_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._APP}   >
				APP
			</Text>
			<View style = {noneModeStyles.________2_container}    >
				<View style = {noneModeStyles.________2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image________2_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_43

const noneModeStyles = StyleSheet.create({
_page40: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(0, 189, 211)",
	},
_Rectangle_558: {
	width: 360,
	height: 691,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 209,
	},
_FAQ: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 113,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
__________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 153,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "500",
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
	backgroundColor: "rgb(0, 189, 211)",
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
style11: {
	position: "absolute",
	transform: [
		{translateY: 2.09998},
	],
	},
style12: {
	},
style13: {
	position: "absolute",
	},
_1__Cards___QnA_answer_: {
	width: 328,
	height: 184,
	position: "absolute",
	left: 16,
	top: 341,
	},
_Rectangle_553: {
	width: 328,
	height: 184,
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
______________________________________________________________________________________________________________________________________________________: {
	width: 280,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 64},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "300",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_302: {
	width: 328,
	height: 36,
	position: "absolute",
	transform: [
		{translateY: 12},
	],
	},
_Group_301: {
	width: 288,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 24},
	],
	},
_Q____________________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 4},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 264},
	],
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style22: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8},
	],
	},
style23: {
	},
style24: {
	position: "absolute",
	},
_Rectangle_374: {
	width: 328,
	height: 1,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 35},
	],
	},
_1__Single_Line___C__small_text_icon: {
	width: 328,
	height: 48,
	position: "absolute",
	left: 16,
	top: 533,
	},
_Rectangle_553_2: {
	width: 328,
	height: 48,
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
______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 12},
	],
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style31: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8.59009},
	],
	},
style32: {
	},
style33: {
	position: "absolute",
	},
_1__Single_Line___C__small_text_icon_2: {
	width: 328,
	height: 48,
	position: "absolute",
	left: 16,
	top: 589,
	},
_Rectangle_553_3: {
	width: 328,
	height: 48,
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
_______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 12},
	],
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style39: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8.59009},
	],
	},
style40: {
	},
style41: {
	position: "absolute",
	},
_1__Single_Line___C__small_text_icon_3: {
	width: 328,
	height: 48,
	position: "absolute",
	left: 16,
	top: 701,
	},
_Rectangle_553_4: {
	width: 328,
	height: 48,
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
_______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 12},
	],
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style47: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8.59009},
	],
	},
style48: {
	},
style49: {
	position: "absolute",
	},
_1__Single_Line___C__small_text_icon_4: {
	width: 328,
	height: 48,
	position: "absolute",
	left: 16,
	top: 757,
	},
_Rectangle_553_5: {
	width: 328,
	height: 48,
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
_______4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 12},
	],
	},
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style55: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8.59009},
	],
	},
style56: {
	},
style57: {
	position: "absolute",
	},
_1__Single_Line___C__small_text_icon_5: {
	width: 328,
	height: 48,
	position: "absolute",
	left: 16,
	top: 645,
	},
_Rectangle_553_6: {
	width: 328,
	height: 48,
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
_______5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 12},
	],
	},
_ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8.59009},
	],
	},
style64: {
	},
style65: {
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
style73: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style74: {
	},
style75: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style76: {
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
		{translateX: 3.0437},
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
style84: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style85: {
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
_5__circle_list___active: {
	width: 60,
	height: 84,
	position: "absolute",
	left: 24,
	top: 233,
	},
_Ellipse_43: {
	width: 60,
	height: 60,
	position: "absolute",
	},
_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 12},
		{translateY: 68},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_5__circle_list___inactive: {
	width: 60,
	height: 84,
	position: "absolute",
	left: 108,
	top: 233,
	},
_Ellipse_43_2: {
	width: 60,
	height: 60,
	position: "absolute",
	},
______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 12},
		{translateY: 68},
	],
	color: "rgba(0, 0, 0, 0.68)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_5__circle_list___inactive_2: {
	width: 60,
	height: 84,
	position: "absolute",
	left: 192,
	top: 233,
	},
_Ellipse_43_3: {
	width: 60,
	height: 60,
	position: "absolute",
	},
______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 68},
	],
	color: "rgba(0, 0, 0, 0.68)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_5__circle_list___inactive_3: {
	width: 60,
	height: 84,
	position: "absolute",
	left: 276,
	top: 233,
	},
_Ellipse_43_4: {
	width: 60,
	height: 60,
	position: "absolute",
	},
______4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 12},
		{translateY: 68},
	],
	color: "rgba(0, 0, 0, 0.68)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___FAQ______: {
	width: 304,
	height: 30,
	position: "absolute",
	left: 28,
	top: 829,
	},
_Rectangle_606: {
	width: 304,
	height: 30,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	borderRadius: 15,
	},
_Group_300: {
	width: 231,
	height: 17,
	position: "absolute",
	transform: [
		{translateX: 37},
		{translateY: 7},
	],
	},
_______________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 1},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_QnA_______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 141},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______________________1_container: {
	width: 42,
	height: 28,
	position: "absolute",
	left: 30,
	top: 250,
	},
_______________________1: {
	width: "100%",
	height: "100%",
	},
___________1_container: {
	width: 36,
	height: 31,
	position: "absolute",
	left: 120,
	top: 247,
	},
___________1: {
	width: "100%",
	height: "100%",
	},
_APP: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 289,
	top: 251,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
________2_container: {
	width: 33,
	height: 38,
	position: "absolute",
	left: 206,
	top: 244,
	},
________2: {
	width: "100%",
	height: "100%",
	},
})

