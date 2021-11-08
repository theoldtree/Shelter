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
import {image_pills__2__1_link} from './assets/imageLinks.js'
import {image_Ellipse_1_link} from './assets/imageLinks.js'
import {image_Ellipse_1_2_link} from './assets/imageLinks.js'
import {image_Ellipse_1_3_link} from './assets/imageLinks.js'
import {image_Ellipse_1_4_link} from './assets/imageLinks.js'
const Page_17  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page39}    >
			<View style = {noneModeStyles._1__Cards___A__Rectangle___b__Left_flaticon_one_line}    >
				<View style = {noneModeStyles._Rectangle_345}    >
				</View>
				<Text style = {noneModeStyles._______}   >
					약 추가하기
				</Text>
				<View style = {noneModeStyles._pills__2__1_container}    >
					<View style = {noneModeStyles._pills__2__1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_pills__2__1_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line_____}    >
				<View style = {noneModeStyles._Rectangle_371}    >
				</View>
				<View style = {noneModeStyles._Ellipse_1_container}    >
					<View style = {noneModeStyles._Ellipse_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Group_7}    >
					<Text style = {noneModeStyles._____}   >
						락토핏 유산균
					</Text>
					<Text style = {noneModeStyles.____}   >
						종근당건강
					</Text>
				</View>
				<View style = {noneModeStyles._2__Contained___B____}    >
					<View style = {noneModeStyles._Rectangle_537}    >
					</View>
					<Text style = {noneModeStyles.___}   >
						건강
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line______2}    >
				<View style = {noneModeStyles._Rectangle_371_2}    >
				</View>
				<View style = {noneModeStyles._Ellipse_1_container_2}    >
					<View style = {noneModeStyles._Ellipse_1_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_1_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Group_7_2}    >
					<Text style = {noneModeStyles.______2}   >
						아이클리어 2.0
					</Text>
					<Text style = {noneModeStyles._____2}   >
						종근당건강
					</Text>
				</View>
				<View style = {noneModeStyles._2__Contained___B_____2}    >
					<View style = {noneModeStyles._Rectangle_537_2}    >
					</View>
					<Text style = {noneModeStyles.____2}   >
						건강
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_373}    >
			</View>
			<Text style = {noneModeStyles.______}   >
				마이 쉘터
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
							<View style = {noneModeStyles.style35}    >
								<View style = {noneModeStyles.style36}   >
									<Svg style={{height: 5, width: 2}} viewBox = "0 0 2 5">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0 0C0.908541 0.464442 1.53053 1.40959 1.53053 2.50001C1.53053 3.59043 0.908541 4.53558 0 5.00002V0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style37}    >
								<View style = {noneModeStyles.style38}   >
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
							<View style = {noneModeStyles.style46}    >
								<View style = {noneModeStyles.style47}   >
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
			<Text style = {noneModeStyles._________________}   >
				건강을 잘 유지하고 계시네요!
			</Text>
			<View style = {noneModeStyles._Group_205}    >
				<View style = {noneModeStyles._Rectangle_477}    >
				</View>
				<View style = {noneModeStyles._Group_176}    >
					<View style = {noneModeStyles._Union}    >
					</View>
					<View style = {noneModeStyles._Ellipse_35}    >
					</View>
					<Text style = {noneModeStyles._100__2}   >
						100%
					</Text>
					<View style = {noneModeStyles._Ellipse_30}    >
					</View>
					<View style = {noneModeStyles._Ellipse_36}    >
					</View>
					<View style = {noneModeStyles._Ellipse_37}    >
					</View>
					<View style = {noneModeStyles._Ellipse_38}    >
					</View>
					<View style = {noneModeStyles._Ellipse_39}    >
					</View>
					<View style = {noneModeStyles._Ellipse_40}    >
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_520}    >
				</View>
				<View style = {noneModeStyles._Union_2}    >
				</View>
				<View style = {noneModeStyles._Union_3}    >
				</View>
				<View style = {noneModeStyles._Group_174}    >
					<View style = {noneModeStyles._Rectangle_487}    >
					</View>
					<View style = {noneModeStyles._Rectangle_489}    >
					</View>
					<View style = {noneModeStyles._Rectangle_488}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_191}    >
					<View style = {noneModeStyles._Rectangle_521}    >
					</View>
					<View style = {noneModeStyles._Rectangle_522}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_192}    >
					<View style = {noneModeStyles._Rectangle_521_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_522_2}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_196}    >
					<View style = {noneModeStyles._Rectangle_521_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_522_3}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_198}    >
					<View style = {noneModeStyles._Rectangle_521_4}    >
					</View>
					<View style = {noneModeStyles._Rectangle_522_4}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_197}    >
					<View style = {noneModeStyles._Rectangle_521_5}    >
					</View>
					<View style = {noneModeStyles._Rectangle_522_5}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_199}    >
					<View style = {noneModeStyles._Rectangle_521_6}    >
					</View>
					<View style = {noneModeStyles._Rectangle_522_6}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_193}    >
					<View style = {noneModeStyles._Rectangle_521_7}    >
					</View>
					<View style = {noneModeStyles._Rectangle_522_7}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_194}    >
					<View style = {noneModeStyles._Rectangle_521_8}    >
					</View>
					<View style = {noneModeStyles._Rectangle_522_8}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_195}    >
					<View style = {noneModeStyles._Rectangle_521_9}    >
					</View>
					<View style = {noneModeStyles._Rectangle_522_9}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_178}    >
					<View style = {noneModeStyles._Rectangle_508}    >
					</View>
					<View style = {noneModeStyles._Group_181}    >
						<View style = {noneModeStyles._Group_180}    >
							<View style = {noneModeStyles._Group_179}    >
								<View style = {noneModeStyles._Rectangle_518}    >
								</View>
							</View>
							<View style = {noneModeStyles.style105}    >
								<View style = {noneModeStyles.style106}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style107}    >
								<View style = {noneModeStyles.style108}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_510}    >
					</View>
					<View style = {noneModeStyles._Rectangle_512}    >
					</View>
					<View style = {noneModeStyles._Rectangle_514}    >
					</View>
					<View style = {noneModeStyles._Rectangle_516}    >
					</View>
					<View style = {noneModeStyles._Rectangle_509}    >
					</View>
					<View style = {noneModeStyles._Rectangle_511}    >
					</View>
					<View style = {noneModeStyles._Rectangle_513}    >
					</View>
					<View style = {noneModeStyles._Rectangle_515}    >
					</View>
					<View style = {noneModeStyles._Rectangle_517}    >
					</View>
					<View style = {noneModeStyles._Group_182}    >
						<View style = {noneModeStyles._Group_180_2}    >
							<View style = {noneModeStyles._Group_179_2}    >
								<View style = {noneModeStyles._Rectangle_518_2}    >
								</View>
							</View>
							<View style = {noneModeStyles.style122}    >
								<View style = {noneModeStyles.style123}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style124}    >
								<View style = {noneModeStyles.style125}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_183}    >
						<View style = {noneModeStyles._Group_180_3}    >
							<View style = {noneModeStyles._Group_179_3}    >
								<View style = {noneModeStyles._Rectangle_518_3}    >
								</View>
							</View>
							<View style = {noneModeStyles.style130}    >
								<View style = {noneModeStyles.style131}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style132}    >
								<View style = {noneModeStyles.style133}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_184}    >
						<View style = {noneModeStyles._Group_180_4}    >
							<View style = {noneModeStyles._Group_179_4}    >
								<View style = {noneModeStyles._Rectangle_518_4}    >
								</View>
							</View>
							<View style = {noneModeStyles.style138}    >
								<View style = {noneModeStyles.style139}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style140}    >
								<View style = {noneModeStyles.style141}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_185}    >
						<View style = {noneModeStyles._Group_180_5}    >
							<View style = {noneModeStyles._Group_179_5}    >
								<View style = {noneModeStyles._Rectangle_518_5}    >
								</View>
							</View>
							<View style = {noneModeStyles.style146}    >
								<View style = {noneModeStyles.style147}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style148}    >
								<View style = {noneModeStyles.style149}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_186}    >
						<View style = {noneModeStyles._Group_180_6}    >
							<View style = {noneModeStyles._Group_179_6}    >
								<View style = {noneModeStyles._Rectangle_518_6}    >
								</View>
							</View>
							<View style = {noneModeStyles.style154}    >
								<View style = {noneModeStyles.style155}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style156}    >
								<View style = {noneModeStyles.style157}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_187}    >
						<View style = {noneModeStyles._Group_180_7}    >
							<View style = {noneModeStyles._Group_179_7}    >
								<View style = {noneModeStyles._Rectangle_518_7}    >
								</View>
							</View>
							<View style = {noneModeStyles.style162}    >
								<View style = {noneModeStyles.style163}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style164}    >
								<View style = {noneModeStyles.style165}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_188}    >
						<View style = {noneModeStyles._Group_180_8}    >
							<View style = {noneModeStyles._Group_179_8}    >
								<View style = {noneModeStyles._Rectangle_518_8}    >
								</View>
							</View>
							<View style = {noneModeStyles.style170}    >
								<View style = {noneModeStyles.style171}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style172}    >
								<View style = {noneModeStyles.style173}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_189}    >
						<View style = {noneModeStyles._Group_180_9}    >
							<View style = {noneModeStyles._Group_179_9}    >
								<View style = {noneModeStyles._Rectangle_518_9}    >
								</View>
							</View>
							<View style = {noneModeStyles.style178}    >
								<View style = {noneModeStyles.style179}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style180}    >
								<View style = {noneModeStyles.style181}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_190}    >
						<View style = {noneModeStyles._Group_180_10}    >
							<View style = {noneModeStyles._Group_179_10}    >
								<View style = {noneModeStyles._Rectangle_518_10}    >
								</View>
							</View>
							<View style = {noneModeStyles.style186}    >
								<View style = {noneModeStyles.style187}   >
									<Svg style={{height: 8, width: 28}} viewBox = "0 0 28 8">
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style188}    >
								<View style = {noneModeStyles.style189}   >
									<Svg style={{height: 29, width: 23}} viewBox = "0 0 23 29">
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line______3}    >
				<View style = {noneModeStyles._Rectangle_371_3}    >
				</View>
				<View style = {noneModeStyles._Ellipse_1_container_3}    >
					<View style = {noneModeStyles._Ellipse_1_3}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_1_3_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Group_7_3}    >
					<Text style = {noneModeStyles.______3}   >
						코자엑스큐
					</Text>
					<Text style = {noneModeStyles._____3}   >
						한국오가논
					</Text>
				</View>
				<View style = {noneModeStyles._2__Contained___A____}    >
					<View style = {noneModeStyles._Rectangle_537_3}    >
					</View>
					<Text style = {noneModeStyles.____3}   >
						전문
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line______4}    >
				<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line}    >
					<View style = {noneModeStyles._Rectangle_371_4}    >
					</View>
					<View style = {noneModeStyles._Ellipse_1_container_4}    >
						<View style = {noneModeStyles._Ellipse_1_4}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_1_4_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._Group_7_4}    >
						<Text style = {noneModeStyles.______4}   >
							처방약
						</Text>
						<Text style = {noneModeStyles._____4}   >
							약국
						</Text>
					</View>
					<View style = {noneModeStyles._Alert___ic}    >
						<View style = {noneModeStyles._ic}    >
							<View style = {noneModeStyles.style210}    >
							</View>
							<View style = {noneModeStyles.style211}    >
								<View style = {noneModeStyles.style212}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"#B00020"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._______2}   >
				약 리스트
			</Text>
			<View style = {noneModeStyles._4__small_box___inactive}    >
				<View style = {noneModeStyles._Rectangle_540}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic}    >
					<View style = {noneModeStyles._ic_2}    >
						<View style = {noneModeStyles.style218}    >
							<View style = {noneModeStyles.style219}   >
								<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
									<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style220}    >
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._______3}   >
					최근등록순
				</Text>
			</View>
			<View style = {noneModeStyles._1__Top_App_bar___A__only_icon}    >
				<View style = {noneModeStyles._Group_6}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Rectangle_336}    >
						</View>
						<View style = {noneModeStyles._Navigation___ic_2}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Navigation___ic_3}    >
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style229}    >
							<View style = {noneModeStyles.style230}   >
								<Svg style={{height: 12, width: 20}} viewBox = "0 0 20 12">
									<Path fill = {"black"}     d = "M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style231}    >
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_17

const noneModeStyles = StyleSheet.create({
_page39: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_1__Cards___A__Rectangle___b__Left_flaticon_one_line: {
	width: 328,
	height: 64,
	position: "absolute",
	left: 16,
	top: 818,
	},
_Rectangle_345: {
	width: 328,
	height: 64,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 96},
		{translateY: 24},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_pills__2__1_container: {
	width: 24,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 32},
		{translateY: 20},
	],
	},
_pills__2__1: {
	width: "100%",
	height: "100%",
	},
_1__Cards___A__Rectangle___a__Left_image_two_line_____: {
	width: 328,
	height: 88,
	position: "absolute",
	left: 16,
	top: 625,
	},
_Rectangle_371: {
	width: 328,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Ellipse_1_container: {
	width: 56,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 16},
	],
	},
_Ellipse_1: {
	width: "100%",
	height: "100%",
	},
_Group_7: {
	width: 81,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 96},
		{translateY: 28},
	],
	},
_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2__Contained___B____: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 248},
		{translateY: 32},
	],
	},
_Rectangle_537: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(242, 133, 38)",
	position: "absolute",
	borderRadius: 15,
	},
___: {
	width: 26.833,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 4},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Cards___A__Rectangle___a__Left_image_two_line______2: {
	width: 328,
	height: 88,
	position: "absolute",
	left: 16,
	top: 713,
	},
_Rectangle_371_2: {
	width: 328,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Ellipse_1_container_2: {
	width: 56,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 16},
	],
	},
_Ellipse_1_2: {
	width: "100%",
	height: "100%",
	},
_Group_7_2: {
	width: 88,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 96},
		{translateY: 28},
	],
	},
______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2__Contained___B_____2: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 248},
		{translateY: 32},
	],
	},
_Rectangle_537_2: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(242, 133, 38)",
	position: "absolute",
	borderRadius: 15,
	},
____2: {
	width: 26.833,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 4},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_Rectangle_373: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	left: 16,
	top: 809,
	},
______: {
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
style35: {
	width: 1.5,
	height: 4.90027,
	position: "absolute",
	top: 3.2998,
	right: 0,
	},
style36: {
	},
style37: {
	width: 20,
	height: 7.5,
	position: "absolute",
	top: 2,
	right: 4.5,
	},
style38: {
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
style46: {
	position: "absolute",
	transform: [
		{translateX: 15.5},
		{translateY: 2},
	],
	},
style47: {
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
_________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 147,
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_205: {
	width: 328,
	height: 278,
	position: "absolute",
	left: 16,
	top: 81,
	},
_Rectangle_477: {
	width: 328,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 110,
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 8,
	},
_Group_176: {
	width: 94,
	height: 94,
	position: "absolute",
	left: 234,
	top: 0,
	},
_Union: {
	width: 94,
	height: 94,
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Ellipse_35: {
	width: 84,
	height: 84,
	position: "absolute",
	left: 5,
	top: 5,
	},
_100__2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 16,
	top: 34,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Oxanium",
	textAlign: "left",
	},
_Ellipse_30: {
	width: 6,
	height: 6,
	position: "absolute",
	left: 38,
	top: 20,
	},
_Ellipse_36: {
	width: 6,
	height: 6,
	position: "absolute",
	left: 77,
	top: 37,
	},
_Ellipse_37: {
	width: 4,
	height: 4,
	position: "absolute",
	left: 32,
	top: 72,
	},
_Ellipse_38: {
	width: 4,
	height: 4,
	position: "absolute",
	left: 46,
	top: 15,
	},
_Ellipse_39: {
	width: 4,
	height: 4,
	position: "absolute",
	left: 71,
	top: 62,
	},
_Ellipse_40: {
	width: 4,
	height: 4,
	position: "absolute",
	left: 13,
	top: 35,
	},
_Rectangle_520: {
	width: 18,
	height: 6,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 272,
	top: 86,
	},
_Union_2: {
	width: 37,
	height: 58,
	position: "absolute",
	left: 248,
	top: 107,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Union_3: {
	width: 35,
	height: 56,
	position: "absolute",
	left: 248,
	top: 107,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Group_174: {
	width: 40,
	height: 18,
	position: "absolute",
	left: 261,
	top: 92,
	},
_Rectangle_487: {
	width: 40,
	height: 6,
	backgroundColor: "rgb(177, 177, 177)",
	position: "absolute",
	left: 0,
	top: 6,
	borderRadius: 5,
	},
_Rectangle_489: {
	width: 40,
	height: 6,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 5,
	},
_Rectangle_488: {
	width: 40,
	height: 6,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 12,
	borderRadius: 5,
	},
_Group_191: {
	width: 8,
	height: 14,
	position: "absolute",
	left: 228,
	top: 187,
	},
_Rectangle_521: {
	width: 8,
	height: 14,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_522: {
	width: 4,
	height: 14,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 2,
	top: 0,
	},
_Group_192: {
	width: 8,
	height: 14,
	position: "absolute",
	left: 180,
	top: 187,
	},
_Rectangle_521_2: {
	width: 8,
	height: 14,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_522_2: {
	width: 4,
	height: 14,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 2,
	top: 0,
	},
_Group_196: {
	width: 16,
	height: 8,
	position: "absolute",
	left: 200,
	top: 223,
	},
_Rectangle_521_3: {
	width: 16,
	height: 8,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_522_3: {
	width: 16,
	height: 4,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 2,
	},
_Group_198: {
	width: 16,
	height: 8,
	position: "absolute",
	left: 104,
	top: 223,
	},
_Rectangle_521_4: {
	width: 16,
	height: 8,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_522_4: {
	width: 16,
	height: 4,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 2,
	},
_Group_197: {
	width: 16,
	height: 8,
	position: "absolute",
	left: 152,
	top: 157,
	},
_Rectangle_521_5: {
	width: 16,
	height: 8,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_522_5: {
	width: 16,
	height: 4,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 2,
	},
_Group_199: {
	width: 16,
	height: 8,
	position: "absolute",
	left: 56,
	top: 157,
	},
_Rectangle_521_6: {
	width: 16,
	height: 8,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_522_6: {
	width: 16,
	height: 4,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 2,
	},
_Group_193: {
	width: 8,
	height: 14,
	position: "absolute",
	left: 132,
	top: 187,
	},
_Rectangle_521_7: {
	width: 8,
	height: 14,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_522_7: {
	width: 4,
	height: 14,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 2,
	top: 0,
	},
_Group_194: {
	width: 8,
	height: 14,
	position: "absolute",
	left: 84,
	top: 187,
	},
_Rectangle_521_8: {
	width: 8,
	height: 14,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_522_8: {
	width: 4,
	height: 14,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 2,
	top: 0,
	},
_Group_195: {
	width: 8,
	height: 14,
	position: "absolute",
	left: 36,
	top: 187,
	},
_Rectangle_521_9: {
	width: 8,
	height: 14,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_522_9: {
	width: 4,
	height: 14,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 2,
	top: 0,
	},
_Group_178: {
	width: 224,
	height: 120,
	position: "absolute",
	left: 24,
	top: 134,
	},
_Rectangle_508: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	},
_Group_181: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 3,
	top: 5,
	},
_Group_180: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style105: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style106: {
	},
style107: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style108: {
	},
_Rectangle_510: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 48,
	top: 0,
	borderRadius: 16,
	},
_Rectangle_512: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 96,
	top: 0,
	borderRadius: 16,
	},
_Rectangle_514: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 144,
	top: 0,
	borderRadius: 16,
	},
_Rectangle_516: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 192,
	top: 0,
	borderRadius: 16,
	},
_Rectangle_509: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 66,
	borderRadius: 16,
	},
_Rectangle_511: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 48,
	top: 66,
	borderRadius: 16,
	},
_Rectangle_513: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 96,
	top: 66,
	borderRadius: 16,
	},
_Rectangle_515: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 144,
	top: 66,
	borderRadius: 16,
	},
_Rectangle_517: {
	width: 32,
	height: 54,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 192,
	top: 66,
	borderRadius: 16,
	},
_Group_182: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 51,
	top: 5,
	},
_Group_180_2: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179_2: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518_2: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style122: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style123: {
	},
style124: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style125: {
	},
_Group_183: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 99,
	top: 5,
	},
_Group_180_3: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179_3: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518_3: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style130: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style131: {
	},
style132: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style133: {
	},
_Group_184: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 147,
	top: 5,
	},
_Group_180_4: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179_4: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518_4: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style138: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style139: {
	},
style140: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style141: {
	},
_Group_185: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 195,
	top: 5,
	},
_Group_180_5: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179_5: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518_5: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style146: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style147: {
	},
style148: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style149: {
	},
_Group_186: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 3,
	top: 71,
	},
_Group_180_6: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179_6: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518_6: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style154: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style155: {
	},
style156: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style157: {
	},
_Group_187: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 51,
	top: 71,
	},
_Group_180_7: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179_7: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518_7: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style162: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style163: {
	},
style164: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style165: {
	},
_Group_188: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 99,
	top: 71,
	},
_Group_180_8: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179_8: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518_8: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style170: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style171: {
	},
style172: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style173: {
	},
_Group_189: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 147,
	top: 71,
	},
_Group_180_9: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179_9: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518_9: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style178: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style179: {
	},
style180: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style181: {
	},
_Group_190: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 195,
	top: 71,
	},
_Group_180_10: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Group_179_10: {
	width: 26,
	height: 44,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_518_10: {
	width: 26,
	height: 44,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
style186: {
	width: 22,
	height: 2.2085,
	position: "absolute",
	left: 2,
	top: 21,
	},
style187: {
	},
style188: {
	width: 9,
	height: 15,
	position: "absolute",
	left: 3,
	top: 26,
	},
style189: {
	},
_1__Cards___A__Rectangle___a__Left_image_two_line______3: {
	width: 328,
	height: 88,
	position: "absolute",
	left: 16,
	top: 449,
	},
_Rectangle_371_3: {
	width: 328,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Ellipse_1_container_3: {
	width: 56,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 16},
	],
	},
_Ellipse_1_3: {
	width: "100%",
	height: "100%",
	},
_Group_7_3: {
	width: 65,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 96},
		{translateY: 28},
	],
	},
______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2__Contained___A____: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 248},
		{translateY: 32},
	],
	},
_Rectangle_537_3: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(242, 89, 75)",
	position: "absolute",
	borderRadius: 15,
	},
____3: {
	width: 26.833,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 4},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Cards___A__Rectangle___a__Left_image_two_line______4: {
	width: 328,
	height: 88,
	position: "absolute",
	left: 16,
	top: 537,
	},
_1__Cards___A__Rectangle___a__Left_image_two_line: {
	width: 328,
	height: 88,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	},
_Rectangle_371_4: {
	width: 328,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Ellipse_1_container_4: {
	width: 56,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 16},
	],
	},
_Ellipse_1_4: {
	width: "100%",
	height: "100%",
	},
_Group_7_4: {
	width: 39,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 96},
		{translateY: 28},
	],
	},
______4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 16},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Alert___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 264},
		{translateY: 32},
	],
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style210: {
	position: "absolute",
	},
style211: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style212: {
	},
_______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 32,
	top: 406,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_4__small_box___inactive: {
	width: 88,
	height: 32,
	position: "absolute",
	left: 240,
	top: 401,
	},
_Rectangle_540: {
	width: 88,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_Navigation___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 64},
		{translateY: 5},
	],
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style218: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style219: {
	},
style220: {
	position: "absolute",
	},
_______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 9},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
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
_Navigation___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 17},
	],
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style229: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 5.5},
	],
	},
style230: {
	},
style231: {
	position: "absolute",
	},
})

