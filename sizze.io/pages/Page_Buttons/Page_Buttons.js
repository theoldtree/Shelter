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
const Page_Buttons  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page21}    >
			<View style = {noneModeStyles._Large_Buttons}    >
			</View>
			<Text style = {noneModeStyles._Buttons}   >
				Buttons
			</Text>
			<Text style = {noneModeStyles._Large_Buttons_2}   >
				Large Buttons
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___d__text}    >
				<Text style = {noneModeStyles.___}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___d__text_2}    >
				<Text style = {noneModeStyles.____2}   >
					회원가입
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___d__text_3}    >
				<Text style = {noneModeStyles.____3}   >
					ID/PW 찾기
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___e__text_icon_active_}    >
				<Text style = {noneModeStyles.____4}   >
					버튼
				</Text>
				<View style = {noneModeStyles._Navigation___ic}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style15}    >
							<View style = {noneModeStyles.style16}   >
								<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
									<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style17}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___f__text_icon_inactive_}    >
				<View style = {noneModeStyles._Group_143}    >
					<Text style = {noneModeStyles.____5}   >
						버튼
					</Text>
					<View style = {noneModeStyles._Navigation___ic_2}    >
						<View style = {noneModeStyles._ic_2}    >
							<View style = {noneModeStyles.style23}    >
								<View style = {noneModeStyles.style24}   >
									<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
										<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style25}    >
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Large_Buttons_3}    >
				<View style = {noneModeStyles._Elevation}    >
				</View>
				<View style = {noneModeStyles._Container}    >
				</View>
				<View style = {noneModeStyles._Overlay}    >
				</View>
				<Text style = {noneModeStyles.____6}   >
					로그인
				</Text>
			</View>
			<View style = {noneModeStyles._Large_Buttons_4}    >
				<View style = {noneModeStyles._Elevation_2}    >
				</View>
				<View style = {noneModeStyles._Container_2}    >
				</View>
				<View style = {noneModeStyles._Overlay_2}    >
				</View>
				<Text style = {noneModeStyles.____7}   >
					다음
				</Text>
			</View>
			<View style = {noneModeStyles._Large_Buttons_5}    >
				<View style = {noneModeStyles._Elevation_3}    >
				</View>
				<Text style = {noneModeStyles.____8}   >
					페이스북 로그인
				</Text>
			</View>
			<View style = {noneModeStyles._Large_Buttons_6}    >
				<View style = {noneModeStyles._Elevation_4}    >
				</View>
				<Text style = {noneModeStyles.____9}   >
					네이버 로그인
				</Text>
			</View>
			<View style = {noneModeStyles._Large_Buttons_7}    >
				<View style = {noneModeStyles._Elevation_5}    >
				</View>
				<Text style = {noneModeStyles.____10}   >
					카카오 로그인
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___c__red}    >
				<Text style = {noneModeStyles.____11}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___c__red_line}    >
				<Text style = {noneModeStyles.____12}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___b__inactive}    >
				<Text style = {noneModeStyles.____13}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___A__Small___a__white}    >
				<Text style = {noneModeStyles.____14}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B__Medium___a__solid}    >
				<View style = {noneModeStyles._Rectangle_394}    >
				</View>
				<Text style = {noneModeStyles.____15}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B__Medium___a__solid___rounded}    >
				<View style = {noneModeStyles._Rectangle_394_2}    >
				</View>
				<Text style = {noneModeStyles.____16}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B__Medium___c__line}    >
				<View style = {noneModeStyles._Rectangle_394_3}    >
				</View>
				<Text style = {noneModeStyles.____17}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B__Medium___c__line___rounded}    >
				<View style = {noneModeStyles._Rectangle_394_4}    >
				</View>
				<Text style = {noneModeStyles.____18}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B__Medium___b__inactive}    >
				<View style = {noneModeStyles._Rectangle_394_5}    >
				</View>
				<Text style = {noneModeStyles.____19}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B__Medium___b__inactive___rounded}    >
				<View style = {noneModeStyles._Rectangle_394_6}    >
				</View>
				<Text style = {noneModeStyles.____20}   >
					버튼
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___C__Circle___b__line}    >
				<View style = {noneModeStyles._Ellipse_24}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic_3}    >
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style75}    >
							<View style = {noneModeStyles.style76}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"white"}     d = "M11.7878 1.78788L9.99997 1.74845e-06L-1.74845e-06 9.99997L9.99997 20L11.7878 18.2121L3.57575 9.99998L11.7878 1.78788Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style77}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button___C__Circle___a__white}    >
				<View style = {noneModeStyles._Ellipse_24_2}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic_4}    >
					<View style = {noneModeStyles._ic_4}    >
						<View style = {noneModeStyles.style82}    >
							<View style = {noneModeStyles.style83}   >
								<Svg style={{height: 20, width: 12}} viewBox = "0 0 12 20">
									<Path fill = {"#00848F"}     d = "M-7.88347e-05 18.2121L1.7878 20L11.7878 10L1.7878 4.92176e-05L-7.73989e-05 1.78792L8.21202 10L-7.88347e-05 18.2121Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style84}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button____________________inactive_}    >
				<View style = {noneModeStyles._Rectangle_446}    >
				</View>
				<Text style = {noneModeStyles.___________}   >
					약관 전체 동의하기
				</Text>
				<View style = {noneModeStyles._Action___ic}    >
					<View style = {noneModeStyles._ic_5}    >
						<View style = {noneModeStyles.style90}    >
						</View>
						<View style = {noneModeStyles.style91}    >
							<View style = {noneModeStyles.style92}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button____________________active_}    >
				<View style = {noneModeStyles._Rectangle_447}    >
				</View>
				<Text style = {noneModeStyles.____________2}   >
					약관 전체 동의하기
				</Text>
				<View style = {noneModeStyles._Action___ic_2}    >
					<View style = {noneModeStyles._ic_6}    >
						<View style = {noneModeStyles.style98}    >
						</View>
						<View style = {noneModeStyles.style99}    >
							<View style = {noneModeStyles.style100}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button___D__A_little_Small___a__active}    >
				<Text style = {noneModeStyles._SKT}   >
					SKT
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___D__A_little_Small___b__inactive}    >
				<Text style = {noneModeStyles._KT}   >
					KT
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___D__A_little_Small___b__inactive__80_}    >
				<Text style = {noneModeStyles._KT_2}   >
					KT
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button_________________inactive_}    >
				<Text style = {noneModeStyles.________________}   >
					[필수] 쉘터서비스 이용약관
				</Text>
				<View style = {noneModeStyles._Action___ic_3}    >
					<View style = {noneModeStyles._ic_7}    >
						<View style = {noneModeStyles.style111}    >
						</View>
						<View style = {noneModeStyles.style112}    >
							<View style = {noneModeStyles.style113}   >
								<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
									<Path fill = {"black"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button_________________active_}    >
				<Text style = {noneModeStyles._________________2}   >
					[필수] 쉘터서비스 이용약관
				</Text>
				<View style = {noneModeStyles._Action___ic_4}    >
					<View style = {noneModeStyles._ic_8}    >
						<View style = {noneModeStyles.style118}    >
						</View>
						<View style = {noneModeStyles.style119}    >
							<View style = {noneModeStyles.style120}   >
								<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
									<Path fill = {"#26C7D9"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button____________________inactive__2}    >
				<Text style = {noneModeStyles.____________}   >
					필수 약관 전체 동의
				</Text>
				<View style = {noneModeStyles._Action___ic_5}    >
					<View style = {noneModeStyles._ic_9}    >
						<View style = {noneModeStyles.style125}    >
						</View>
						<View style = {noneModeStyles.style126}    >
							<View style = {noneModeStyles.style127}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button____________________active__2}    >
				<Text style = {noneModeStyles._____________2}   >
					필수 약관 전체 동의
				</Text>
				<View style = {noneModeStyles._Action___ic_6}    >
					<View style = {noneModeStyles._ic_10}    >
						<View style = {noneModeStyles.style132}    >
						</View>
						<View style = {noneModeStyles.style133}    >
							<View style = {noneModeStyles.style134}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"#00BDD3"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Button___B_Medium___active}    >
				<View style = {noneModeStyles._Rectangle_605}    >
				</View>
				<Text style = {noneModeStyles.____21}   >
					아침
				</Text>
			</View>
			<View style = {noneModeStyles._1__Button___B_Medium___inactive}    >
				<View style = {noneModeStyles._Rectangle_605_2}    >
				</View>
				<Text style = {noneModeStyles.____22}   >
					아침
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
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Buttons

const noneModeStyles = StyleSheet.create({
_page21: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Large_Buttons: {
	width: 1176,
	height: 552,
	overflow: "hidden",
	position: "absolute",
	left: 64,
	top: 358,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(123, 97, 255)",
	borderRadius: 5,
	},
_Buttons: {
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
_Large_Buttons_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 80,
	top: 267,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
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
_1__Button___A__Small___d__text: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 80,
	top: 989,
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 7,
	paddingLeft: 16,
	},
___: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 3682},
		{translateY: 2875},
	],
	color: "rgb(0, 0, 0)",
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
	left: 80,
	top: 1097,
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 7,
	paddingLeft: 16,
	},
____2: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
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
	left: 269,
	top: 1097,
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 7,
	paddingLeft: 16,
	},
____3: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___A__Small___e__text_icon_active_: {
	width: 50,
	height: 24,
	position: "absolute",
	left: 198,
	top: 993,
	},
____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 3784},
		{translateY: 2874},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Navigation___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 3810},
		{translateY: 2871},
	],
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 8.59009},
		{translateY: 6},
	],
	},
style16: {
	},
style17: {
	position: "absolute",
	},
_1__Button___A__Small___f__text_icon_inactive_: {
	width: 50,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 260,
	top: 993,
	},
_Group_143: {
	width: 50,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 3846},
		{translateY: 2871},
	],
	},
____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Navigation___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 26},
	],
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style23: {
	position: "absolute",
	transform: [
		{translateX: 8.59009},
		{translateY: 6},
	],
	},
style24: {
	},
style25: {
	position: "absolute",
	},
_Large_Buttons_3: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 79,
	top: 1049,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
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
____6: {
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
_Large_Buttons_4: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 79,
	top: 1417,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Elevation_2: {
	width: 292,
	height: 48,
	position: "absolute",
	borderRadius: 8,
	},
_Container_2: {
	width: 292,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 24,
	},
_Overlay_2: {
	width: 292,
	height: 48,
	position: "absolute",
	borderRadius: 8,
	},
____7: {
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
_Large_Buttons_5: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 79,
	top: 1205,
	},
_Elevation_3: {
	width: 292,
	height: 48,
	position: "absolute",
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 24,
	},
____8: {
	width: 100,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 96},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Large_Buttons_6: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 79,
	top: 1261,
	},
_Elevation_4: {
	width: 292,
	height: 48,
	position: "absolute",
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 24,
	},
____9: {
	width: 100,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 96},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Large_Buttons_7: {
	width: 292,
	height: 48,
	position: "absolute",
	left: 79,
	top: 1317,
	},
_Elevation_5: {
	width: 292,
	height: 48,
	position: "absolute",
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 24,
	},
____10: {
	width: 100,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 96},
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___A__Small___c__red: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(0, 189, 211)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 488,
	top: 1069,
	paddingTop: 10,
	paddingRight: 19,
	paddingBottom: 10,
	paddingLeft: 19,
	borderRadius: 18,
	},
____11: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 4093},
		{translateY: 2957},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___A__Small___c__red_line: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 488,
	top: 1029,
	paddingTop: 10,
	paddingRight: 19,
	paddingBottom: 10,
	paddingLeft: 19,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 18,
	},
____12: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 4093},
		{translateY: 2917},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___A__Small___b__inactive: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 488,
	top: 989,
	paddingTop: 10,
	paddingRight: 19,
	paddingBottom: 10,
	paddingLeft: 19,
	borderRadius: 18,
	},
____13: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 4093},
		{translateY: 2877},
	],
	color: "rgba(255, 255, 255, 0.698)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___A__Small___a__white: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 488,
	top: 949,
	paddingTop: 10,
	paddingRight: 19,
	paddingBottom: 10,
	paddingLeft: 19,
	borderRadius: 18,
	},
____14: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 4093},
		{translateY: 2837},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___a__solid: {
	width: 144,
	height: 48,
	position: "absolute",
	left: 488,
	top: 1121,
	},
_Rectangle_394: {
	width: 144,
	height: 48,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	transform: [
		{translateX: 4074},
		{translateY: 2999},
	],
	borderRadius: 24,
	},
____15: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4133},
		{translateY: 3015},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___a__solid___rounded: {
	width: 128,
	height: 48,
	position: "absolute",
	left: 488,
	top: 1451,
	},
_Rectangle_394_2: {
	width: 128,
	height: 48,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	transform: [
		{translateX: 4074},
		{translateY: 3329},
	],
	borderRadius: 24,
	},
____16: {
	width: 30,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 4123},
		{translateY: 3345},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___c__line: {
	width: 144,
	height: 48,
	position: "absolute",
	left: 488,
	top: 1181,
	},
_Rectangle_394_3: {
	width: 144,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 4074},
		{translateY: 3059},
	],
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 189, 211)",
	borderRadius: 24,
	},
____17: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4133},
		{translateY: 3075},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___c__line___rounded: {
	width: 128,
	height: 48,
	position: "absolute",
	left: 488,
	top: 1511,
	},
_Rectangle_394_4: {
	width: 128,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 4074},
		{translateY: 3389},
	],
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 189, 211)",
	borderRadius: 24,
	},
____18: {
	width: 30,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 4123},
		{translateY: 3405},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___b__inactive: {
	width: 144,
	height: 48,
	position: "absolute",
	left: 652,
	top: 1121,
	},
_Rectangle_394_5: {
	width: 144,
	height: 48,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 4238},
		{translateY: 2999},
	],
	borderRadius: 8,
	},
____19: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4297},
		{translateY: 3015},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___b__inactive___rounded: {
	width: 128,
	height: 48,
	position: "absolute",
	left: 652,
	top: 1451,
	},
_Rectangle_394_6: {
	width: 128,
	height: 48,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 4238},
		{translateY: 3329},
	],
	borderRadius: 24,
	},
____20: {
	width: 30,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 4287},
		{translateY: 3345},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___C__Circle___b__line: {
	width: 36,
	height: 36,
	position: "absolute",
	left: 488,
	top: 1253,
	},
_Ellipse_24: {
	width: 36,
	height: 36,
	position: "absolute",
	transform: [
		{translateX: 4074},
		{translateY: 3131},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_Navigation___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 4085},
		{translateY: 3137},
	],
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style75: {
	position: "absolute",
	transform: [
		{translateY: 2.1001},
	],
	},
style76: {
	},
style77: {
	position: "absolute",
	},
_1__Button___C__Circle___a__white: {
	width: 36,
	height: 36,
	position: "absolute",
	left: 744,
	top: 1253,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Ellipse_24_2: {
	width: 36,
	height: 36,
	position: "absolute",
	transform: [
		{translateX: 4330},
		{translateY: 3131},
	],
	},
_Navigation___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 4331},
		{translateY: 3137},
	],
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style82: {
	position: "absolute",
	transform: [
		{translateX: 12.3301},
		{translateY: 2.09985},
	],
	},
style83: {
	},
style84: {
	position: "absolute",
	},
_1__Button____________________inactive_: {
	width: 328,
	height: 56,
	position: "absolute",
	left: 896,
	top: 945,
	},
_Rectangle_446: {
	width: 328,
	height: 56,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 4482},
		{translateY: 2823},
	],
	borderRadius: 8,
	},
___________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4498},
		{translateY: 2839},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 4770},
		{translateY: 2839},
	],
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style90: {
	position: "absolute",
	},
style91: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style92: {
	},
_1__Button____________________active_: {
	width: 328,
	height: 56,
	position: "absolute",
	left: 896,
	top: 1009,
	},
_Rectangle_447: {
	width: 328,
	height: 56,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	transform: [
		{translateX: 4482},
		{translateY: 2887},
	],
	borderRadius: 8,
	},
____________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4498},
		{translateY: 2903},
	],
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 4770},
		{translateY: 2903},
	],
	},
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style98: {
	position: "absolute",
	},
style99: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style100: {
	},
_1__Button___D__A_little_Small___a__active: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(0, 189, 211)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 488,
	top: 1341,
	paddingTop: 20,
	paddingRight: 28,
	paddingBottom: 20,
	paddingLeft: 28,
	borderRadius: 28,
	},
_SKT: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 4102},
		{translateY: 3239},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "center",
	},
_1__Button___D__A_little_Small___b__inactive: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 584,
	top: 1343,
	paddingTop: 18,
	paddingRight: 32,
	paddingBottom: 18,
	paddingLeft: 32,
	borderRadius: 28,
	},
_KT: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 4202},
		{translateY: 3239},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "center",
	},
_1__Button___D__A_little_Small___b__inactive__80_: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 671,
	top: 1343,
	paddingTop: 18,
	paddingRight: 31,
	paddingBottom: 18,
	paddingLeft: 31,
	borderRadius: 28,
	},
_KT_2: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	position: "absolute",
	transform: [
		{translateX: 4288},
		{translateY: 3239},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "center",
	},
_1__Button_________________inactive_: {
	width: 296,
	height: 32,
	position: "absolute",
	left: 896,
	top: 1073,
	},
________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4482},
		{translateY: 2955},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 4754},
		{translateY: 2955},
	],
	},
_ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style111: {
	position: "absolute",
	},
style112: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style113: {
	},
_1__Button_________________active_: {
	width: 296,
	height: 32,
	position: "absolute",
	left: 896,
	top: 1105,
	},
_________________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4482},
		{translateY: 2987},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 4754},
		{translateY: 2987},
	],
	},
_ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style118: {
	position: "absolute",
	},
style119: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style120: {
	},
_1__Button____________________inactive__2: {
	width: 296,
	height: 24,
	position: "absolute",
	left: 896,
	top: 1153,
	},
____________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4482},
		{translateY: 3031},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 20,
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
		{translateX: 4754},
		{translateY: 3031},
	],
	},
_ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style125: {
	position: "absolute",
	},
style126: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style127: {
	},
_1__Button____________________active__2: {
	width: 296,
	height: 24,
	position: "absolute",
	left: 896,
	top: 1185,
	},
_____________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4482},
		{translateY: 3063},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 4754},
		{translateY: 3063},
	],
	},
_ic_10: {
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
		{translateX: 2},
		{translateY: 2},
	],
	},
style134: {
	},
_1__Button___B_Medium___active: {
	width: 72,
	height: 48,
	position: "absolute",
	left: 896,
	top: 1241,
	},
_Rectangle_605: {
	width: 72,
	height: 48,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	transform: [
		{translateX: 4482},
		{translateY: 3119},
	],
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
____21: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4505},
		{translateY: 3135},
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
	left: 896,
	top: 1296,
	},
_Rectangle_605_2: {
	width: 72,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 4482},
		{translateY: 3174},
	],
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(0, 189, 211)",
	borderRadius: 8,
	},
____22: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 4505},
		{translateY: 3190},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___FAQ______: {
	width: 304,
	height: 30,
	position: "absolute",
	left: 896,
	top: 1361,
	},
_Rectangle_606: {
	width: 304,
	height: 30,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	transform: [
		{translateX: 4482},
		{translateY: 3239},
	],
	borderRadius: 15,
	},
_Group_300: {
	width: 231,
	height: 17,
	position: "absolute",
	transform: [
		{translateX: 4519},
		{translateY: 3246},
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
})

