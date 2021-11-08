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
import {image_____1_link} from './assets/imageLinks.js'
import {image_____1_2_link} from './assets/imageLinks.js'
const Page_Lists  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page13}    >
			<Text style = {noneModeStyles._Lists}   >
				Lists
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2}    >
				<View style = {noneModeStyles._Rectangle_236}    >
				</View>
				<Text style = {noneModeStyles.____}   >
					리스트
				</Text>
				<View style = {noneModeStyles._Divider__1_Line}    >
					<View style = {noneModeStyles._Rectangle_234}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2_2}    >
				<View style = {noneModeStyles._Rectangle_236_2}    >
				</View>
				<Text style = {noneModeStyles._____2}   >
					리스트
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_2}    >
					<View style = {noneModeStyles._Rectangle_234_2}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line__A_Subtitle2_3}    >
				<View style = {noneModeStyles._Rectangle_236_3}    >
				</View>
				<Text style = {noneModeStyles._____3}   >
					이용약관
				</Text>
				<View style = {noneModeStyles._Divider__1_Line_3}    >
					<View style = {noneModeStyles._Rectangle_234_3}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___Inactive}    >
				<View style = {noneModeStyles._Rectangle_421}    >
				</View>
				<Text style = {noneModeStyles._____4}   >
					진료과
				</Text>
				<View style = {noneModeStyles._Navigation___ic}    >
					<View style = {noneModeStyles._ic}    >
						<View style = {noneModeStyles.style23}    >
							<View style = {noneModeStyles.style24}   >
								<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
									<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style25}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___Active_______}    >
				<View style = {noneModeStyles._Rectangle_426}    >
				</View>
				<Text style = {noneModeStyles.______}   >
					내분비내과
				</Text>
				<View style = {noneModeStyles._Rectangle_427}    >
				</View>
				<Text style = {noneModeStyles._____}   >
					노년내과
				</Text>
				<View style = {noneModeStyles._Rectangle_428}    >
				</View>
				<Text style = {noneModeStyles._______}   >
					류마티스내과
				</Text>
				<View style = {noneModeStyles._Rectangle_429}    >
				</View>
				<Text style = {noneModeStyles._______2}   >
					소화기내과
				</Text>
				<View style = {noneModeStyles._Rectangle_430}    >
				</View>
				<Text style = {noneModeStyles.____________}   >
					순환기내과(심장내과)
				</Text>
				<View style = {noneModeStyles._Rectangle_431}    >
				</View>
				<Text style = {noneModeStyles.______2}   >
					신장내과
				</Text>
				<View style = {noneModeStyles._Rectangle_432}    >
				</View>
				<Text style = {noneModeStyles.________2}   >
					혈액종양내과
				</Text>
				<View style = {noneModeStyles._Rectangle_433}    >
				</View>
				<Text style = {noneModeStyles.______3}   >
					일반내과
				</Text>
				<View style = {noneModeStyles._Rectangle_434}    >
				</View>
				<Text style = {noneModeStyles.________3}   >
					알레르기내과
				</Text>
				<View style = {noneModeStyles._Rectangle_435}    >
				</View>
				<Text style = {noneModeStyles._______3}   >
					호흡기내과
				</Text>
				<View style = {noneModeStyles._2__Two_Line___Inactive}    >
					<Text style = {noneModeStyles.______4}   >
						세부사항
					</Text>
					<View style = {noneModeStyles._Rectangle_421_2}    >
					</View>
					<Text style = {noneModeStyles._____5}   >
						진료과
					</Text>
					<View style = {noneModeStyles._Navigation___ic_2}    >
						<View style = {noneModeStyles._ic_2}    >
							<View style = {noneModeStyles.style53}    >
								<View style = {noneModeStyles.style54}   >
									<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
										<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style55}    >
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic}    >
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style58}    >
							<View style = {noneModeStyles.style59}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style60}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_2}    >
					<View style = {noneModeStyles._ic_4}    >
						<View style = {noneModeStyles.style63}    >
							<View style = {noneModeStyles.style64}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style65}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_3}    >
					<View style = {noneModeStyles._ic_5}    >
						<View style = {noneModeStyles.style68}    >
							<View style = {noneModeStyles.style69}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style70}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_4}    >
					<View style = {noneModeStyles._ic_6}    >
						<View style = {noneModeStyles.style73}    >
							<View style = {noneModeStyles.style74}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style75}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_5}    >
					<View style = {noneModeStyles._ic_7}    >
						<View style = {noneModeStyles.style78}    >
							<View style = {noneModeStyles.style79}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style80}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_6}    >
					<View style = {noneModeStyles._ic_8}    >
						<View style = {noneModeStyles.style83}    >
							<View style = {noneModeStyles.style84}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style85}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_7}    >
					<View style = {noneModeStyles._ic_9}    >
						<View style = {noneModeStyles.style88}    >
							<View style = {noneModeStyles.style89}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style90}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_8}    >
					<View style = {noneModeStyles._ic_10}    >
						<View style = {noneModeStyles.style93}    >
							<View style = {noneModeStyles.style94}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style95}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_9}    >
					<View style = {noneModeStyles._ic_11}    >
						<View style = {noneModeStyles.style98}    >
							<View style = {noneModeStyles.style99}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style100}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_10}    >
					<View style = {noneModeStyles._ic_12}    >
						<View style = {noneModeStyles.style103}    >
							<View style = {noneModeStyles.style104}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style105}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___Active________2}    >
				<View style = {noneModeStyles._Rectangle_421_3}    >
				</View>
				<Text style = {noneModeStyles._______4}   >
					간담췌외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_4}    >
				</View>
				<Text style = {noneModeStyles.__________}   >
					간이식/간담도외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_5}    >
				</View>
				<Text style = {noneModeStyles._________}   >
					갑상선내분비외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_6}    >
				</View>
				<Text style = {noneModeStyles.________}   >
					구강악안면외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_7}    >
				</View>
				<Text style = {noneModeStyles._______5}   >
					내분비외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_8}    >
				</View>
				<Text style = {noneModeStyles.________4}   >
					대장항문외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_9}    >
				</View>
				<Text style = {noneModeStyles.______5}   >
					소아외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_10}    >
				</View>
				<Text style = {noneModeStyles.______6}   >
					성형외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_11}    >
				</View>
				<Text style = {noneModeStyles._______6}   >
					두경부외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_12}    >
				</View>
				<Text style = {noneModeStyles.______7}   >
					수부외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_13}    >
				</View>
				<Text style = {noneModeStyles.__________2}   >
					신/췌장이식외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_14}    >
				</View>
				<Text style = {noneModeStyles.______8}   >
					신경외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_15}    >
				</View>
				<Text style = {noneModeStyles.______9}   >
					심장외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_16}    >
				</View>
				<Text style = {noneModeStyles.______10}   >
					외상외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_17}    >
				</View>
				<Text style = {noneModeStyles._______7}   >
					위장관외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_18}    >
				</View>
				<Text style = {noneModeStyles.______11}   >
					이식외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_19}    >
				</View>
				<Text style = {noneModeStyles.______12}   >
					유방외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_20}    >
				</View>
				<Text style = {noneModeStyles.______13}   >
					일반외과
				</Text>
				<View style = {noneModeStyles._2__Two_Line___Inactive_2}    >
					<Text style = {noneModeStyles.______14}   >
						세부사항
					</Text>
					<View style = {noneModeStyles._Rectangle_421_21}    >
					</View>
					<Text style = {noneModeStyles._____6}   >
						진료과
					</Text>
					<View style = {noneModeStyles._Navigation___ic_3}    >
						<View style = {noneModeStyles._ic_13}    >
							<View style = {noneModeStyles.style149}    >
								<View style = {noneModeStyles.style150}   >
									<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
										<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style151}    >
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_11}    >
					<View style = {noneModeStyles._ic_14}    >
						<View style = {noneModeStyles.style154}    >
							<View style = {noneModeStyles.style155}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style156}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_12}    >
					<View style = {noneModeStyles._ic_15}    >
						<View style = {noneModeStyles.style159}    >
							<View style = {noneModeStyles.style160}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style161}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_13}    >
					<View style = {noneModeStyles._ic_16}    >
						<View style = {noneModeStyles.style164}    >
							<View style = {noneModeStyles.style165}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style166}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_14}    >
					<View style = {noneModeStyles._ic_17}    >
						<View style = {noneModeStyles.style169}    >
							<View style = {noneModeStyles.style170}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style171}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_15}    >
					<View style = {noneModeStyles._ic_18}    >
						<View style = {noneModeStyles.style174}    >
							<View style = {noneModeStyles.style175}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style176}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_16}    >
					<View style = {noneModeStyles._ic_19}    >
						<View style = {noneModeStyles.style179}    >
							<View style = {noneModeStyles.style180}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style181}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_17}    >
					<View style = {noneModeStyles._ic_20}    >
						<View style = {noneModeStyles.style184}    >
							<View style = {noneModeStyles.style185}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style186}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_18}    >
					<View style = {noneModeStyles._ic_21}    >
						<View style = {noneModeStyles.style189}    >
							<View style = {noneModeStyles.style190}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style191}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_19}    >
					<View style = {noneModeStyles._ic_22}    >
						<View style = {noneModeStyles.style194}    >
							<View style = {noneModeStyles.style195}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style196}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_20}    >
					<View style = {noneModeStyles._ic_23}    >
						<View style = {noneModeStyles.style199}    >
							<View style = {noneModeStyles.style200}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style201}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_21}    >
					<View style = {noneModeStyles._ic_24}    >
						<View style = {noneModeStyles.style204}    >
							<View style = {noneModeStyles.style205}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style206}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_22}    >
					<View style = {noneModeStyles._ic_25}    >
						<View style = {noneModeStyles.style209}    >
							<View style = {noneModeStyles.style210}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style211}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_23}    >
					<View style = {noneModeStyles._ic_26}    >
						<View style = {noneModeStyles.style214}    >
							<View style = {noneModeStyles.style215}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style216}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_24}    >
					<View style = {noneModeStyles._ic_27}    >
						<View style = {noneModeStyles.style219}    >
							<View style = {noneModeStyles.style220}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style221}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_25}    >
					<View style = {noneModeStyles._ic_28}    >
						<View style = {noneModeStyles.style224}    >
							<View style = {noneModeStyles.style225}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style226}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_26}    >
					<View style = {noneModeStyles._ic_29}    >
						<View style = {noneModeStyles.style229}    >
							<View style = {noneModeStyles.style230}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style231}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_27}    >
					<View style = {noneModeStyles._ic_30}    >
						<View style = {noneModeStyles.style234}    >
							<View style = {noneModeStyles.style235}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style236}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_28}    >
					<View style = {noneModeStyles._ic_31}    >
						<View style = {noneModeStyles.style239}    >
							<View style = {noneModeStyles.style240}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style241}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_422}    >
				</View>
				<View style = {noneModeStyles._Rectangle_423}    >
				</View>
				<View style = {noneModeStyles._Rectangle_424}    >
				</View>
				<View style = {noneModeStyles._Rectangle_425}    >
				</View>
				<Text style = {noneModeStyles.______15}   >
					정형외과
				</Text>
				<Text style = {noneModeStyles._______8}   >
					족부의학과
				</Text>
				<Text style = {noneModeStyles.______16}   >
					혈관외과
				</Text>
				<Text style = {noneModeStyles.______17}   >
					흉부외과
				</Text>
				<View style = {noneModeStyles._Toggle___ic_29}    >
					<View style = {noneModeStyles._ic_32}    >
						<View style = {noneModeStyles.style252}    >
							<View style = {noneModeStyles.style253}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style254}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_30}    >
					<View style = {noneModeStyles._ic_33}    >
						<View style = {noneModeStyles.style257}    >
							<View style = {noneModeStyles.style258}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style259}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_31}    >
					<View style = {noneModeStyles._ic_34}    >
						<View style = {noneModeStyles.style262}    >
							<View style = {noneModeStyles.style263}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"#00ADC0"}     d = "M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style264}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_32}    >
					<View style = {noneModeStyles._ic_35}    >
						<View style = {noneModeStyles.style267}    >
							<View style = {noneModeStyles.style268}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style269}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___Active____}    >
				<View style = {noneModeStyles._Rectangle_421_22}    >
				</View>
				<Text style = {noneModeStyles._______9}   >
					가정의학과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_23}    >
				</View>
				<Text style = {noneModeStyles.___}   >
					내과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_24}    >
				</View>
				<Text style = {noneModeStyles._________2}   >
					마취통증의학과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_25}    >
				</View>
				<Text style = {noneModeStyles.______18}   >
					비뇨기과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_26}    >
				</View>
				<Text style = {noneModeStyles.______19}   >
					산부인과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_27}    >
				</View>
				<Text style = {noneModeStyles._____7}   >
					신경과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_28}    >
				</View>
				<Text style = {noneModeStyles._______10}   >
					영상의학과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_29}    >
				</View>
				<Text style = {noneModeStyles.____2}   >
					안과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_30}    >
				</View>
				<Text style = {noneModeStyles.__________3}   >
					소아청소년의학과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_31}    >
				</View>
				<Text style = {noneModeStyles.____3}   >
					외과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_32}    >
				</View>
				<Text style = {noneModeStyles._______11}   >
					응급의학과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_33}    >
				</View>
				<Text style = {noneModeStyles._______12}   >
					이비인후과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_34}    >
				</View>
				<Text style = {noneModeStyles.________5}   >
					임상약리학과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_35}    >
				</View>
				<Text style = {noneModeStyles._________3}   >
					정신건강의학과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_36}    >
				</View>
				<Text style = {noneModeStyles._________4}   >
					직업환경의학과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_37}    >
				</View>
				<Text style = {noneModeStyles._____8}   >
					피부과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_38}    >
				</View>
				<Text style = {noneModeStyles.____4}   >
					치과
				</Text>
				<View style = {noneModeStyles._Rectangle_421_39}    >
				</View>
				<Text style = {noneModeStyles.______20}   >
					핵의학과
				</Text>
				<View style = {noneModeStyles._2__Two_Line___Inactive_3}    >
					<View style = {noneModeStyles._Rectangle_421_40}    >
					</View>
					<Text style = {noneModeStyles._____9}   >
						진료과
					</Text>
					<View style = {noneModeStyles._Navigation___ic_4}    >
						<View style = {noneModeStyles._ic_36}    >
							<View style = {noneModeStyles.style312}    >
								<View style = {noneModeStyles.style313}   >
									<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
										<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style314}    >
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Toggle___ic_33}    >
					<View style = {noneModeStyles._ic_37}    >
						<View style = {noneModeStyles.style317}    >
							<View style = {noneModeStyles.style318}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style319}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_83}    >
					<View style = {noneModeStyles._Toggle___ic_34}    >
						<View style = {noneModeStyles._ic_38}    >
							<View style = {noneModeStyles.style323}    >
								<View style = {noneModeStyles.style324}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style325}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_35}    >
						<View style = {noneModeStyles._ic_39}    >
							<View style = {noneModeStyles.style328}    >
								<View style = {noneModeStyles.style329}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style330}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_36}    >
						<View style = {noneModeStyles._ic_40}    >
							<View style = {noneModeStyles.style333}    >
								<View style = {noneModeStyles.style334}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style335}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_37}    >
						<View style = {noneModeStyles._ic_41}    >
							<View style = {noneModeStyles.style338}    >
								<View style = {noneModeStyles.style339}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style340}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_38}    >
						<View style = {noneModeStyles._ic_42}    >
							<View style = {noneModeStyles.style343}    >
								<View style = {noneModeStyles.style344}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style345}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_39}    >
						<View style = {noneModeStyles._ic_43}    >
							<View style = {noneModeStyles.style348}    >
								<View style = {noneModeStyles.style349}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style350}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_40}    >
						<View style = {noneModeStyles._ic_44}    >
							<View style = {noneModeStyles.style353}    >
								<View style = {noneModeStyles.style354}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style355}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_41}    >
						<View style = {noneModeStyles._ic_45}    >
							<View style = {noneModeStyles.style358}    >
								<View style = {noneModeStyles.style359}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style360}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_42}    >
						<View style = {noneModeStyles._ic_46}    >
							<View style = {noneModeStyles.style363}    >
								<View style = {noneModeStyles.style364}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"#00ADC0"}     d = "M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style365}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_43}    >
						<View style = {noneModeStyles._ic_47}    >
							<View style = {noneModeStyles.style368}    >
								<View style = {noneModeStyles.style369}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style370}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_44}    >
						<View style = {noneModeStyles._ic_48}    >
							<View style = {noneModeStyles.style373}    >
								<View style = {noneModeStyles.style374}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style375}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_45}    >
						<View style = {noneModeStyles._ic_49}    >
							<View style = {noneModeStyles.style378}    >
								<View style = {noneModeStyles.style379}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style380}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_46}    >
						<View style = {noneModeStyles._ic_50}    >
							<View style = {noneModeStyles.style383}    >
								<View style = {noneModeStyles.style384}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style385}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_47}    >
						<View style = {noneModeStyles._ic_51}    >
							<View style = {noneModeStyles.style388}    >
								<View style = {noneModeStyles.style389}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style390}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_48}    >
						<View style = {noneModeStyles._ic_52}    >
							<View style = {noneModeStyles.style393}    >
								<View style = {noneModeStyles.style394}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style395}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_49}    >
						<View style = {noneModeStyles._ic_53}    >
							<View style = {noneModeStyles.style398}    >
								<View style = {noneModeStyles.style399}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style400}    >
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Toggle___ic_50}    >
						<View style = {noneModeStyles._ic_54}    >
							<View style = {noneModeStyles.style403}    >
								<View style = {noneModeStyles.style404}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style405}    >
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._3__toggle___c__choice}    >
				<Text style = {noneModeStyles._____10}   >
					처방약
				</Text>
				<View style = {noneModeStyles._Toggle___ic_51}    >
					<View style = {noneModeStyles._ic_55}    >
						<View style = {noneModeStyles.style410}    >
							<View style = {noneModeStyles.style411}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"#26C7D9"}     d = "M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style412}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._3__toggle___b__inactive}    >
				<Text style = {noneModeStyles._____11}   >
					처방약
				</Text>
				<View style = {noneModeStyles._Toggle___ic_52}    >
					<View style = {noneModeStyles._ic_56}    >
						<View style = {noneModeStyles.style417}    >
							<View style = {noneModeStyles.style418}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style419}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._3__toggle___a__active}    >
				<Text style = {noneModeStyles._____12}   >
					처방약
				</Text>
				<View style = {noneModeStyles._Toggle___ic_53}    >
					<View style = {noneModeStyles._ic_57}    >
						<View style = {noneModeStyles.style424}    >
							<View style = {noneModeStyles.style425}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style426}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___B___icon}    >
				<View style = {noneModeStyles._Group_23}    >
					<View style = {noneModeStyles._Rectangle_360}    >
					</View>
					<Text style = {noneModeStyles.___________2}   >
						나의 약 타임라인
					</Text>
				</View>
				<View style = {noneModeStyles._Navigation___ic_5}    >
					<View style = {noneModeStyles._ic_58}    >
						<View style = {noneModeStyles.style433}    >
							<View style = {noneModeStyles.style434}   >
								<Svg style={{height: 12, width: 8}} viewBox = "0 0 8 12">
									<Path fill = {"black"}     d = "M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style435}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._2__Two_Line___A__Left_Image___b__complete}    >
				<View style = {noneModeStyles._Group_225}    >
					<View style = {noneModeStyles._Rectangle_546}    >
					</View>
					<View style = {noneModeStyles._Rectangle_374}    >
					</View>
				</View>
				<Text style = {noneModeStyles._____13}   >
					브랜드
				</Text>
				<Text style = {noneModeStyles._2021_06_01___2021_07_23}   >
					2021.06.01 ~ 2021.07.23
				</Text>
				<Text style = {noneModeStyles.______21}   >
					약 이름
				</Text>
				<Text style = {noneModeStyles._100_}   >
					100%
				</Text>
				<View style = {noneModeStyles._Ellipse_42}    >
				</View>
			</View>
			<View style = {noneModeStyles._2__Two_Line___A__Left_Image___a__ing}    >
				<View style = {noneModeStyles._Group_225_2}    >
					<View style = {noneModeStyles._Rectangle_546_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_374_2}    >
					</View>
				</View>
				<Text style = {noneModeStyles._____14}   >
					브랜드
				</Text>
				<Text style = {noneModeStyles._2021_06_01___2021_07_23_2}   >
					2021.06.01 ~ 2021.07.23
				</Text>
				<Text style = {noneModeStyles.______22}   >
					약 이름
				</Text>
				<Text style = {noneModeStyles._80_}   >
					80%
				</Text>
				<View style = {noneModeStyles._Ellipse_42_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._2__Two_Line___A__Left_Image___c__fail}    >
				<View style = {noneModeStyles._Group_225_3}    >
					<View style = {noneModeStyles._Rectangle_546_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_374_3}    >
					</View>
				</View>
				<Text style = {noneModeStyles._____15}   >
					브랜드
				</Text>
				<Text style = {noneModeStyles._2021_06_01___2021_07_23_3}   >
					2021.06.01 ~ 2021.07.23
				</Text>
				<Text style = {noneModeStyles.______23}   >
					약 이름
				</Text>
				<Text style = {noneModeStyles._45_}   >
					45%
				</Text>
				<View style = {noneModeStyles._Ellipse_42_3}    >
				</View>
			</View>
			<View style = {noneModeStyles._4__small_box___inactive}    >
				<View style = {noneModeStyles._Rectangle_540}    >
				</View>
				<View style = {noneModeStyles._Navigation___ic_6}    >
					<View style = {noneModeStyles._ic_59}    >
						<View style = {noneModeStyles.style467}    >
							<View style = {noneModeStyles.style468}   >
								<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
									<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style469}    >
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._______13}   >
					최근등록순
				</Text>
			</View>
			<View style = {noneModeStyles._4__small_box___active}    >
				<View style = {noneModeStyles._Group_230}    >
					<View style = {noneModeStyles._Rectangle_547}    >
					</View>
					<Text style = {noneModeStyles.______24}   >
						오름차순
					</Text>
				</View>
				<View style = {noneModeStyles._Group_231}    >
					<View style = {noneModeStyles._Rectangle_547_2}    >
					</View>
					<Text style = {noneModeStyles.______25}   >
						내림차순
					</Text>
				</View>
				<View style = {noneModeStyles._Group_232}    >
					<View style = {noneModeStyles._Rectangle_547_3}    >
					</View>
					<Text style = {noneModeStyles._______14}   >
						최근등록순
					</Text>
				</View>
				<View style = {noneModeStyles._Group_217}    >
					<View style = {noneModeStyles._Rectangle_540_2}    >
					</View>
					<View style = {noneModeStyles._Navigation___ic_7}    >
						<View style = {noneModeStyles._ic_60}    >
							<View style = {noneModeStyles.style485}    >
								<View style = {noneModeStyles.style486}   >
									<Svg style={{height: 5, width: 10}} viewBox = "0 0 10 5">
										<Path fill = {"black"}     d = "M0 0L5 5L10 0H0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style487}    >
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._______15}   >
						최근등록순
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___C__small_text_icon}    >
				<View style = {noneModeStyles._Rectangle_553}    >
				</View>
				<Text style = {noneModeStyles._______16}   >
					질문 사항
				</Text>
				<View style = {noneModeStyles._Navigation___ic_8}    >
					<View style = {noneModeStyles._ic_61}    >
						<View style = {noneModeStyles.style494}    >
							<View style = {noneModeStyles.style495}   >
								<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
									<Path fill = {"black"}     d = "M1.41 -4.62904e-07L6 4.58L10.59 -6.16331e-08L12 1.41L6 7.41L-6.16331e-08 1.41L1.41 -4.62904e-07Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style496}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Single_Line___B__small_text}    >
				<View style = {noneModeStyles._Rectangle_553_2}    >
				</View>
				<Text style = {noneModeStyles._______17}   >
					질문 사항
				</Text>
			</View>
			<View style = {noneModeStyles._5__circle_list___active}    >
				<View style = {noneModeStyles._Ellipse_43}    >
				</View>
				<Text style = {noneModeStyles.______26}   >
					약 복용
				</Text>
			</View>
			<View style = {noneModeStyles._5__circle_list___inactive}    >
				<View style = {noneModeStyles._Ellipse_43_2}    >
				</View>
				<Text style = {noneModeStyles.______27}   >
					앱 기능
				</Text>
			</View>
			<View style = {noneModeStyles._menu}    >
				<View style = {noneModeStyles._Group_262}    >
					<View style = {noneModeStyles._Rectangle_595}    >
					</View>
					<Text style = {noneModeStyles.______28}   >
						마이쉘터
					</Text>
				</View>
				<View style = {noneModeStyles._Action___ic}    >
					<View style = {noneModeStyles._____1_container}    >
						<View style = {noneModeStyles._____1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_____1_link}}/>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._menu_active_}    >
				<View style = {noneModeStyles._Group_262_2}    >
					<View style = {noneModeStyles._Rectangle_595_2}    >
					</View>
					<Text style = {noneModeStyles.______29}   >
						마이쉘터
					</Text>
				</View>
				<View style = {noneModeStyles._Action___ic_2}    >
					<View style = {noneModeStyles._____1_container_2}    >
						<View style = {noneModeStyles._____1_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_____1_2_link}}/>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Lists

const noneModeStyles = StyleSheet.create({
_page13: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Lists: {
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
_1__Single_Line__A_Subtitle2: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 80,
	top: 282,
	},
_Rectangle_236: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4025},
	],
	},
____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 650},
		{translateY: 4037},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Divider__1_Line: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4072},
	],
	},
_Rectangle_234: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.2)",
	position: "absolute",
	},
_1__Single_Line__A_Subtitle2_2: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 80,
	top: 346,
	},
_Rectangle_236_2: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4089},
	],
	},
_____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 650},
		{translateY: 4101},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Divider__1_Line_2: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 634},
		{translateY: 4136},
	],
	},
_Rectangle_234_2: {
	width: 344,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	},
_1__Single_Line__A_Subtitle2_3: {
	width: 360,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 80,
	top: 582,
	},
_Rectangle_236_3: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 12},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Divider__1_Line_3: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 47},
	],
	},
_Rectangle_234_3: {
	width: 360,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.2)",
	position: "absolute",
	},
_1__Single_Line___Inactive: {
	width: 328,
	height: 40,
	position: "absolute",
	left: 463,
	top: 302,
	},
_Rectangle_421: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4045},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 8,
	},
_____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1026},
		{translateY: 4053},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1304},
		{translateY: 4053},
	],
	},
_ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style23: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style24: {
	},
style25: {
	position: "absolute",
	},
_1__Single_Line___Active_______: {
	width: 328,
	height: 460,
	position: "absolute",
	left: 1133,
	top: 354,
	},
_Rectangle_426: {
	width: 328,
	height: 80,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4117},
	],
	},
______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4165},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_427: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4197},
	],
	},
_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4205},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_428: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4237},
	],
	},
_______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4245},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_429: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4277},
	],
	},
_______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4285},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_430: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4317},
	],
	},
____________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4325},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_431: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4357},
	],
	},
______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4365},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_432: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4477},
	],
	},
________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4485},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_433: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4437},
	],
	},
______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4445},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_434: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4397},
	],
	},
________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4405},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_435: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4517},
	],
	},
_______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1727},
		{translateY: 4525},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2__Two_Line___Inactive: {
	width: 328,
	height: 60,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 1679},
		{translateY: 4097},
	],
	},
______4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_2: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateY: 20},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 8,
	},
_____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 28},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Navigation___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 295},
		{translateY: 28},
	],
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style53: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style54: {
	},
style55: {
	position: "absolute",
	},
_Toggle___ic: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4365},
	],
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style58: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style59: {
	},
style60: {
	position: "absolute",
	},
_Toggle___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4165},
	],
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style64: {
	},
style65: {
	position: "absolute",
	},
_Toggle___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4205},
	],
	},
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style68: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style69: {
	},
style70: {
	position: "absolute",
	},
_Toggle___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4245},
	],
	},
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style73: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style74: {
	},
style75: {
	position: "absolute",
	},
_Toggle___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4285},
	],
	},
_ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style78: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style79: {
	},
style80: {
	position: "absolute",
	},
_Toggle___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4325},
	],
	},
_ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style83: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style84: {
	},
style85: {
	position: "absolute",
	},
_Toggle___ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4405},
	],
	},
_ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style88: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style89: {
	},
style90: {
	position: "absolute",
	},
_Toggle___ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4445},
	],
	},
_ic_10: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style93: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style94: {
	},
style95: {
	position: "absolute",
	},
_Toggle___ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4485},
	],
	},
_ic_11: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style98: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style99: {
	},
style100: {
	position: "absolute",
	},
_Toggle___ic_10: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1695},
		{translateY: 4525},
	],
	},
_ic_12: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style103: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style104: {
	},
style105: {
	position: "absolute",
	},
_1__Single_Line___Active________2: {
	width: 328,
	height: 940,
	position: "absolute",
	left: 797,
	top: 354,
	},
_Rectangle_421_3: {
	width: 328,
	height: 80,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4117},
	],
	},
_______4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4165},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_4: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4197},
	],
	},
__________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4205},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_5: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4237},
	],
	},
_________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4245},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_6: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4277},
	],
	},
________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4285},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_7: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4317},
	],
	},
_______5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4325},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_8: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4357},
	],
	},
________4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4365},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_9: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4477},
	],
	},
______5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4485},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_10: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4437},
	],
	},
______6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4445},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_11: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4397},
	],
	},
_______6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4405},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_12: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4517},
	],
	},
______7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4525},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_13: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4557},
	],
	},
__________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4565},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_14: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4597},
	],
	},
______8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4605},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_15: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4637},
	],
	},
______9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4645},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_16: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4677},
	],
	},
______10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4685},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_17: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4717},
	],
	},
_______7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4725},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_18: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4797},
	],
	},
______11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4805},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_19: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4757},
	],
	},
______12: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4765},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_20: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4837},
	],
	},
______13: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4845},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2__Two_Line___Inactive_2: {
	width: 328,
	height: 60,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4097},
	],
	},
______14: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_21: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateY: 20},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 8,
	},
_____6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 28},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
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
		{translateX: 295},
		{translateY: 28},
	],
	},
_ic_13: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style149: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style150: {
	},
style151: {
	position: "absolute",
	},
_Toggle___ic_11: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4365},
	],
	},
_ic_14: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style154: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style155: {
	},
style156: {
	position: "absolute",
	},
_Toggle___ic_12: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4165},
	],
	},
_ic_15: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style159: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style160: {
	},
style161: {
	position: "absolute",
	},
_Toggle___ic_13: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4205},
	],
	},
_ic_16: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style164: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style165: {
	},
style166: {
	position: "absolute",
	},
_Toggle___ic_14: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4245},
	],
	},
_ic_17: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style169: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style170: {
	},
style171: {
	position: "absolute",
	},
_Toggle___ic_15: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4285},
	],
	},
_ic_18: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style174: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style175: {
	},
style176: {
	position: "absolute",
	},
_Toggle___ic_16: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4325},
	],
	},
_ic_19: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style179: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style180: {
	},
style181: {
	position: "absolute",
	},
_Toggle___ic_17: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4405},
	],
	},
_ic_20: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style184: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style185: {
	},
style186: {
	position: "absolute",
	},
_Toggle___ic_18: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4445},
	],
	},
_ic_21: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style189: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style190: {
	},
style191: {
	position: "absolute",
	},
_Toggle___ic_19: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4485},
	],
	},
_ic_22: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style194: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style195: {
	},
style196: {
	position: "absolute",
	},
_Toggle___ic_20: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4525},
	],
	},
_ic_23: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style199: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style200: {
	},
style201: {
	position: "absolute",
	},
_Toggle___ic_21: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4565},
	],
	},
_ic_24: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style204: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style205: {
	},
style206: {
	position: "absolute",
	},
_Toggle___ic_22: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4605},
	],
	},
_ic_25: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style209: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style210: {
	},
style211: {
	position: "absolute",
	},
_Toggle___ic_23: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4645},
	],
	},
_ic_26: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style214: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style215: {
	},
style216: {
	position: "absolute",
	},
_Toggle___ic_24: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4685},
	],
	},
_ic_27: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style219: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style220: {
	},
style221: {
	position: "absolute",
	},
_Toggle___ic_25: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4725},
	],
	},
_ic_28: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style224: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style225: {
	},
style226: {
	position: "absolute",
	},
_Toggle___ic_26: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4765},
	],
	},
_ic_29: {
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
		{translateY: 2},
	],
	},
style230: {
	},
style231: {
	position: "absolute",
	},
_Toggle___ic_27: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4805},
	],
	},
_ic_30: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style234: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style235: {
	},
style236: {
	position: "absolute",
	},
_Toggle___ic_28: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4845},
	],
	},
_ic_31: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style239: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style240: {
	},
style241: {
	position: "absolute",
	},
_Rectangle_422: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4877},
	],
	},
_Rectangle_423: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4917},
	],
	},
_Rectangle_424: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4957},
	],
	},
_Rectangle_425: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1343},
		{translateY: 4997},
	],
	},
______15: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4885},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4925},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______16: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 4965},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______17: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1391},
		{translateY: 5005},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_29: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4885},
	],
	},
_ic_32: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style252: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style253: {
	},
style254: {
	position: "absolute",
	},
_Toggle___ic_30: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4925},
	],
	},
_ic_33: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style257: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style258: {
	},
style259: {
	position: "absolute",
	},
_Toggle___ic_31: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 4965},
	],
	},
_ic_34: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style262: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style263: {
	},
style264: {
	position: "absolute",
	},
_Toggle___ic_32: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1359},
		{translateY: 5005},
	],
	},
_ic_35: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style267: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style268: {
	},
style269: {
	position: "absolute",
	},
_1__Single_Line___Active____: {
	width: 328,
	height: 760,
	position: "absolute",
	left: 463,
	top: 374,
	},
_Rectangle_421_22: {
	width: 328,
	height: 80,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4117},
	],
	},
_______9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4165},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_23: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4197},
	],
	},
___: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4205},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_24: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4237},
	],
	},
_________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4245},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_25: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4277},
	],
	},
______18: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4285},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_26: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4317},
	],
	},
______19: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4325},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_27: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4357},
	],
	},
_____7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4365},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_28: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4477},
	],
	},
_______10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4485},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_29: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4437},
	],
	},
____2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4445},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_30: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4397},
	],
	},
__________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4405},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_31: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4517},
	],
	},
____3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4525},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_32: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4557},
	],
	},
_______11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4565},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_33: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4597},
	],
	},
_______12: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4605},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_34: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4637},
	],
	},
________5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4645},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_35: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4677},
	],
	},
_________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4685},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_36: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4717},
	],
	},
_________4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4725},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_37: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4797},
	],
	},
_____8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4805},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_38: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4757},
	],
	},
____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4765},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_421_39: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4837},
	],
	},
______20: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1057},
		{translateY: 4845},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2__Two_Line___Inactive_3: {
	width: 328,
	height: 40,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4117},
	],
	},
_Rectangle_421_40: {
	width: 328,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 8,
	},
_____9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
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
		{translateX: 295},
		{translateY: 8},
	],
	},
_ic_36: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style312: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style313: {
	},
style314: {
	position: "absolute",
	},
_Toggle___ic_33: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1025},
		{translateY: 4365},
	],
	},
_ic_37: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style317: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style318: {
	},
style319: {
	position: "absolute",
	},
_Group_83: {
	width: 24,
	height: 704,
	position: "absolute",
	transform: [
		{translateX: 1025},
		{translateY: 4165},
	],
	},
_Toggle___ic_34: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
_ic_38: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style323: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style324: {
	},
style325: {
	position: "absolute",
	},
_Toggle___ic_35: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 40},
	],
	},
_ic_39: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style328: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style329: {
	},
style330: {
	position: "absolute",
	},
_Toggle___ic_36: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 80},
	],
	},
_ic_40: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style333: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style334: {
	},
style335: {
	position: "absolute",
	},
_Toggle___ic_37: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 120},
	],
	},
_ic_41: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style338: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style339: {
	},
style340: {
	position: "absolute",
	},
_Toggle___ic_38: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 160},
	],
	},
_ic_42: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style343: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style344: {
	},
style345: {
	position: "absolute",
	},
_Toggle___ic_39: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 240},
	],
	},
_ic_43: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style348: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style349: {
	},
style350: {
	position: "absolute",
	},
_Toggle___ic_40: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 280},
	],
	},
_ic_44: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style353: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style354: {
	},
style355: {
	position: "absolute",
	},
_Toggle___ic_41: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 320},
	],
	},
_ic_45: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style358: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style359: {
	},
style360: {
	position: "absolute",
	},
_Toggle___ic_42: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 360},
	],
	},
_ic_46: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style363: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style364: {
	},
style365: {
	position: "absolute",
	},
_Toggle___ic_43: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 400},
	],
	},
_ic_47: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style368: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style369: {
	},
style370: {
	position: "absolute",
	},
_Toggle___ic_44: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 440},
	],
	},
_ic_48: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style373: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style374: {
	},
style375: {
	position: "absolute",
	},
_Toggle___ic_45: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 480},
	],
	},
_ic_49: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style378: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style379: {
	},
style380: {
	position: "absolute",
	},
_Toggle___ic_46: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 520},
	],
	},
_ic_50: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style383: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style384: {
	},
style385: {
	position: "absolute",
	},
_Toggle___ic_47: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 560},
	],
	},
_ic_51: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style388: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style389: {
	},
style390: {
	position: "absolute",
	},
_Toggle___ic_48: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 600},
	],
	},
_ic_52: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style393: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style394: {
	},
style395: {
	position: "absolute",
	},
_Toggle___ic_49: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 640},
	],
	},
_ic_53: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style398: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style399: {
	},
style400: {
	position: "absolute",
	},
_Toggle___ic_50: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 680},
	],
	},
_ic_54: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style403: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style404: {
	},
style405: {
	position: "absolute",
	},
_3__toggle___c__choice: {
	width: 160,
	height: 24,
	position: "absolute",
	left: 80,
	top: 497,
	},
_____10: {
	width: 128,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 658},
		{translateY: 4240},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_51: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4240},
	],
	},
_ic_55: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style410: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style411: {
	},
style412: {
	position: "absolute",
	},
_3__toggle___b__inactive: {
	width: 160,
	height: 24,
	position: "absolute",
	left: 80,
	top: 466,
	},
_____11: {
	width: 128,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 658},
		{translateY: 4209},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_52: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4209},
	],
	},
_ic_56: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style417: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style418: {
	},
style419: {
	position: "absolute",
	},
_3__toggle___a__active: {
	width: 160,
	height: 24,
	position: "absolute",
	left: 80,
	top: 436,
	},
_____12: {
	width: 128,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 658},
		{translateY: 4179},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Toggle___ic_53: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4179},
	],
	},
_ic_57: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style424: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style425: {
	},
style426: {
	position: "absolute",
	},
_1__Single_Line___B___icon: {
	width: 360,
	height: 48,
	position: "absolute",
	left: 80,
	top: 1176,
	},
_Group_23: {
	width: 360,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4919},
	],
	},
_Rectangle_360: {
	width: 360,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
___________2: {
	width: 143.226,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 27},
		{translateY: 12},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
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
		{translateX: 938},
		{translateY: 4931},
	],
	},
_ic_58: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style433: {
	position: "absolute",
	transform: [
		{translateX: 8.59003},
		{translateY: 6},
	],
	},
style434: {
	},
style435: {
	position: "absolute",
	},
_2__Two_Line___A__Left_Image___b__complete: {
	width: 360,
	height: 112,
	position: "absolute",
	left: 80,
	top: 822,
	},
_Group_225: {
	width: 360,
	height: 112,
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4565},
	],
	},
_Rectangle_546: {
	width: 360,
	height: 112,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Rectangle_374: {
	width: 360,
	height: 1.0835,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 110.917},
	],
	},
_____13: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 744},
		{translateY: 4592},
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
		{translateX: 744},
		{translateY: 4640},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______21: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 744},
		{translateY: 4608},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_100_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 920},
		{translateY: 4608},
	],
	color: "rgb(139, 166, 41)",
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
		{translateX: 650},
		{translateY: 4589},
	],
	},
_2__Two_Line___A__Left_Image___a__ing: {
	width: 360,
	height: 112,
	position: "absolute",
	left: 80,
	top: 942,
	},
_Group_225_2: {
	width: 360,
	height: 112,
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4685},
	],
	},
_Rectangle_546_2: {
	width: 360,
	height: 112,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Rectangle_374_2: {
	width: 360,
	height: 1.0835,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 110.917},
	],
	},
_____14: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 744},
		{translateY: 4712},
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
		{translateX: 744},
		{translateY: 4760},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______22: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 744},
		{translateY: 4728},
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
		{translateX: 929},
		{translateY: 4728},
	],
	color: "rgb(0, 0, 0)",
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
		{translateX: 650},
		{translateY: 4709},
	],
	},
_2__Two_Line___A__Left_Image___c__fail: {
	width: 360,
	height: 112,
	position: "absolute",
	left: 80,
	top: 702,
	},
_Group_225_3: {
	width: 360,
	height: 112,
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4445},
	],
	},
_Rectangle_546_3: {
	width: 360,
	height: 112,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Rectangle_374_3: {
	width: 360,
	height: 1.0835,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 110.917},
	],
	},
_____15: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 744},
		{translateY: 4472},
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
		{translateX: 744},
		{translateY: 4520},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______23: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 744},
		{translateY: 4488},
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
		{translateX: 929},
		{translateY: 4488},
	],
	color: "rgb(176, 0, 32)",
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
		{translateX: 650},
		{translateY: 4469},
	],
	},
_4__small_box___inactive: {
	width: 88,
	height: 32,
	position: "absolute",
	left: 80,
	top: 1294,
	},
_Rectangle_540: {
	width: 88,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 5037},
	],
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 2,
	},
_Navigation___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 690},
		{translateY: 5042},
	],
	},
_ic_59: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style467: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style468: {
	},
style469: {
	position: "absolute",
	},
_______13: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 634},
		{translateY: 5046},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_4__small_box___active: {
	width: 88,
	height: 128,
	position: "absolute",
	left: 182,
	top: 1294,
	},
_Group_230: {
	width: 88,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 728},
		{translateY: 5069},
	],
	},
_Rectangle_547: {
	width: 88,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
______24: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_231: {
	width: 88,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 728},
		{translateY: 5101},
	],
	},
_Rectangle_547_2: {
	width: 88,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
______25: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_232: {
	width: 88,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 728},
		{translateY: 5133},
	],
	},
_Rectangle_547_3: {
	width: 88,
	height: 32,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_______14: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_217: {
	width: 88,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 728},
		{translateY: 5037},
	],
	},
_Rectangle_540_2: {
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
_Navigation___ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 64},
		{translateY: 5},
	],
	},
_ic_60: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style485: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style486: {
	},
style487: {
	position: "absolute",
	},
_______15: {
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
_1__Single_Line___C__small_text_icon: {
	width: 328,
	height: 48,
	position: "absolute",
	left: 80,
	top: 1120,
	},
_Rectangle_553: {
	width: 328,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4863},
	],
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_______16: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 650},
		{translateY: 4879},
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
		{translateX: 914},
		{translateY: 4875},
	],
	},
_ic_61: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style494: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8.58984},
	],
	},
style495: {
	},
style496: {
	position: "absolute",
	},
_1__Single_Line___B__small_text: {
	width: 328,
	height: 48,
	position: "absolute",
	left: 80,
	top: 1070,
	},
_Rectangle_553_2: {
	width: 328,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 626},
		{translateY: 4813},
	],
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_______17: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 650},
		{translateY: 4829},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_5__circle_list___active: {
	width: 60,
	height: 84,
	position: "absolute",
	left: 463,
	top: 1176,
	},
_Ellipse_43: {
	width: 60,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 1009},
		{translateY: 4919},
	],
	},
______26: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1021},
		{translateY: 4987},
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
	left: 555,
	top: 1176,
	},
_Ellipse_43_2: {
	width: 60,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 1101},
		{translateY: 4919},
	],
	},
______27: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 1113},
		{translateY: 4987},
	],
	color: "rgba(0, 0, 0, 0.68)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_menu: {
	width: 224,
	height: 40,
	position: "absolute",
	left: 464,
	top: 1330,
	},
_Group_262: {
	width: 224,
	height: 40,
	position: "absolute",
	transform: [
		{translateX: 1010},
		{translateY: 5073},
	],
	},
_Rectangle_595: {
	width: 224,
	height: 40,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 4,
	},
______28: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
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
		{translateX: 1026},
		{translateY: 5081},
	],
	},
_____1_container: {
	width: 24,
	height: 24,
	position: "absolute",
	},
_____1: {
	width: "100%",
	height: "100%",
	},
_menu_active_: {
	width: 224,
	height: 40,
	position: "absolute",
	left: 464,
	top: 1374,
	},
_Group_262_2: {
	width: 224,
	height: 40,
	position: "absolute",
	transform: [
		{translateX: 1010},
		{translateY: 5117},
	],
	},
_Rectangle_595_2: {
	width: 224,
	height: 40,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	borderRadius: 4,
	},
______29: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 8},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Action___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 1026},
		{translateY: 5125},
	],
	},
_____1_container_2: {
	width: 24,
	height: 24,
	position: "absolute",
	},
_____1_2: {
	width: "100%",
	height: "100%",
	},
})

