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
import {image___________1_link} from './assets/imageLinks.js'
import {image____________1_link} from './assets/imageLinks.js'
import {image________1_link} from './assets/imageLinks.js'
import {image___________1_2_link} from './assets/imageLinks.js'
const Page_Icons  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page8}    >
			<Text style = {noneModeStyles._Icons}   >
				Icons
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<Text style = {noneModeStyles._Typography}   >
				Navigation{'\n'}Toggle{'\n'}Alert{'\n'}Action{'\n'}Content{'\n'}None
			</Text>
			<View style = {noneModeStyles._ic}    >
			</View>
			<View style = {noneModeStyles._Edit}    >
				<View style = {noneModeStyles.style6}    >
					<View style = {noneModeStyles.style7}   >
						<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
							<Path fill = {"black"}     d = "M15.4141 0C15.1581 0 14.902 0.0979687 14.707 0.292969L12.707 2.29297L11.293 3.70703L0 15V19H4L18.707 4.29297C19.098 3.90197 19.098 3.26891 18.707 2.87891L16.1211 0.292969C15.9261 0.0979687 15.6701 0 15.4141 0ZM15.4141 2.41406L16.5859 3.58594L15.293 4.87891L14.1211 3.70703L15.4141 2.41406ZM12.707 5.12109L13.8789 6.29297L3.17188 17H2V15.8281L12.707 5.12109Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Remove}    >
				<View style = {noneModeStyles.style9}    >
					<View style = {noneModeStyles.style10}   >
						<Svg style={{height: 20, width: 18}} viewBox = "0 0 18 20">
							<Path fill = {"black"}     d = "M7 0L6 1H0V3H1.10938L2.89258 18.2559V18.2637C3.0236 19.2503 3.88032 20 4.875 20H13.123C14.1177 20 14.9744 19.2503 15.1055 18.2637L15.1074 18.2559L16.8906 3H18V1H12L11 0H7ZM3.125 3H14.875L13.123 18H4.875L3.125 3Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Picture}    >
				<View style = {noneModeStyles.style12}    >
					<View style = {noneModeStyles.style13}   >
						<Svg style={{height: 16, width: 20}} viewBox = "0 0 20 16">
							<Path fill = {"black"}     d = "M2 0C0.906937 0 0 0.906937 0 2V14C0 15.0931 0.906937 16 2 16H18C19.0931 16 20 15.0931 20 14V2C20 0.906937 19.0931 0 18 0H2ZM2 2H18V14H2V2ZM12.5 7L9 11L6.5 8.5L3.77734 12H16.25L12.5 7Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Trash}    >
				<View style = {noneModeStyles.style15}    >
					<View style = {noneModeStyles.style16}   >
						<Svg style={{height: 20, width: 16}} viewBox = "0 0 16 20">
							<Path fill = {"black"}     d = "M6 0L5 1H0V3H1V18C1 18.5222 1.19133 19.0546 1.56836 19.4316C1.94539 19.8087 2.47778 20 3 20H13C13.5222 20 14.0546 19.8087 14.4316 19.4316C14.8087 19.0546 15 18.5222 15 18V3H16V1H11L10 0H6ZM3 3H13V18H3V3ZM5 5V16H7V5H5ZM9 5V16H11V5H9Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Checkmark}    >
				<View style = {noneModeStyles.style18}    >
					<View style = {noneModeStyles.style19}   >
						<Svg style={{height: 15, width: 19}} viewBox = "0 0 19 15">
							<Path fill = {"black"}     d = "M17.5409 0L5.88863 11.6523L1.45906 7.22274L0 8.6818L5.88863 14.5704L19 1.45906L17.5409 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Google_Images}    >
				<View style = {noneModeStyles.style21}    >
					<View style = {noneModeStyles.style22}   >
						<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
							<Path fill = {"black"}     d = "M7 0C5.90455 0 5 0.904546 5 2V3H2C0.904546 3 0 3.90455 0 5V16C0 17.0955 0.904546 18 2 18H18C19.0955 18 20 17.0955 20 16V5C20 3.90455 19.0955 3 18 3H15V2C15 0.904546 14.0955 0 13 0H7ZM7 2H13V3C13 4.09545 13.9045 5 15 5H18V16H2V5H5C6.09545 5 7 4.09545 7 3V2ZM10 6C7.80271 6 6 7.80271 6 10C6 12.1973 7.80271 14 10 14C12.1973 14 14 12.1973 14 10C14 7.80271 12.1973 6 10 6ZM16 6C15.7348 6 15.4804 6.10536 15.2929 6.29289C15.1054 6.48043 15 6.73478 15 7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7C17 6.73478 16.8946 6.48043 16.7071 6.29289C16.5196 6.10536 16.2652 6 16 6ZM10 8C11.1164 8 12 8.88359 12 10C12 11.1164 11.1164 12 10 12C8.88359 12 8 11.1164 8 10C8 8.88359 8.88359 8 10 8Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Delete}    >
				<View style = {noneModeStyles.style24}    >
					<View style = {noneModeStyles.style25}   >
						<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
							<Path fill = {"black"}     d = "M1.46164 0L0 1.46164L7.53836 9L0 16.5384L1.46164 18L9 10.4616L16.5384 18L18 16.5384L10.4616 9L18 1.46164L16.5384 0L9 7.53836L1.46164 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Restart}    >
				<View style = {noneModeStyles.style27}    >
					<View style = {noneModeStyles.style28}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"black"}     d = "M0 0L2.93945 2.93945C1.12627 4.74821 0 7.24271 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0V2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18C5.589 18 2 14.411 2 10C2 7.79401 2.90048 5.79728 4.34961 4.34961L7 7V0H0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Vector}    >
				<View style = {noneModeStyles.style30}    >
					<View style = {noneModeStyles.style31}   >
						<Svg style={{height: 20, width: 18}} viewBox = "0 0 18 20">
							<Path fill = {"black"}     d = "M15 0C13.355 0 12 1.35499 12 3C12 3.19095 12.0218 3.37712 12.0566 3.55859L4.92188 7.7207C4.39854 7.27785 3.73208 7 3 7C1.35499 7 0 8.35499 0 10C0 11.645 1.35499 13 3 13C3.73208 13 4.39854 12.7221 4.92188 12.2793L12.0566 16.4395C12.0216 16.6215 12 16.8084 12 17C12 18.645 13.355 20 15 20C16.645 20 18 18.645 18 17C18 15.355 16.645 14 15 14C14.2675 14 13.6016 14.2793 13.0781 14.7227L5.94336 10.5586C5.97821 10.3771 6 10.191 6 10C6 9.80905 5.97821 9.62288 5.94336 9.44141L13.0781 5.2793C13.6015 5.72215 14.2679 6 15 6C16.645 6 18 4.64501 18 3C18 1.35499 16.645 0 15 0ZM15 2C15.5641 2 16 2.43587 16 3C16 3.56413 15.5641 4 15 4C14.4359 4 14 3.56413 14 3C14 2.43587 14.4359 2 15 2ZM3 9C3.56413 9 4 9.43587 4 10C4 10.5641 3.56413 11 3 11C2.43587 11 2 10.5641 2 10C2 9.43587 2.43587 9 3 9ZM15 16C15.5641 16 16 16.4359 16 17C16 17.5641 15.5641 18 15 18C14.4359 18 14 17.5641 14 17C14 16.4359 14.4359 16 15 16Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Settings}    >
				<View style = {noneModeStyles.style33}    >
					<View style = {noneModeStyles.style34}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"black"}     d = "M7.49414 0L7.00391 2.52344C6.17974 2.83425 5.42291 3.26993 4.75977 3.81445L2.33594 2.97852L0 7.02148L1.94141 8.70898C1.86677 9.16721 1.82812 9.59184 1.82812 10C1.82812 10.4088 1.86793 10.8326 1.94141 11.291V11.293L0 12.9805L2.33594 17.0215L4.75781 16.1875C5.42102 16.7323 6.17956 17.1656 7.00391 17.4766L7.49414 20H12.1621L12.6523 17.4766C13.477 17.1655 14.233 16.7306 14.8965 16.1855L17.3203 17.0215L19.6543 12.9805L17.7148 11.291C17.7895 10.8328 17.8281 10.4082 17.8281 10C17.8281 9.59246 17.7893 9.16837 17.7148 8.71094V8.70898L19.6562 7.01953L17.3203 2.97852L14.8984 3.8125C14.2352 3.26768 13.4767 2.83443 12.6523 2.52344L12.1621 0H7.49414ZM9.14258 2H10.5137L10.9023 4L11.9453 4.39453C12.574 4.63147 13.1388 4.95675 13.6289 5.35938L14.4922 6.06641L16.4141 5.40625L17.0996 6.5918L15.5645 7.92773L15.7402 9.02734V9.0293C15.8014 9.40423 15.8281 9.71877 15.8281 10C15.8281 10.2812 15.8014 10.5957 15.7402 10.9707L15.5625 12.0703L17.0977 13.4062L16.4121 14.5938L14.4922 13.9316L13.627 14.6406C13.1368 15.0432 12.574 15.3685 11.9453 15.6055H11.9434L10.9004 16L10.5117 18H9.14258L8.75391 16L7.71094 15.6055C7.08227 15.3685 6.51745 15.0432 6.02734 14.6406L5.16406 13.9336L3.24219 14.5938L2.55664 13.4082L4.09375 12.0703L3.91602 10.9746V10.9727C3.85574 10.5961 3.82812 10.2807 3.82812 10C3.82812 9.71877 3.85487 9.40428 3.91602 9.0293L4.09375 7.92969L2.55664 6.59375L3.24219 5.40625L5.16406 6.06836L6.02734 5.35938C6.51745 4.95675 7.08227 4.63147 7.71094 4.39453L8.75391 4L9.14258 2ZM9.82812 6C7.6316 6 5.82812 7.80348 5.82812 10C5.82812 12.1965 7.6316 14 9.82812 14C12.0246 14 13.8281 12.1965 13.8281 10C13.8281 7.80348 12.0246 6 9.82812 6ZM9.82812 8C10.9396 8 11.8281 8.88852 11.8281 10C11.8281 11.1115 10.9396 12 9.82812 12C8.71665 12 7.82812 11.1115 7.82812 10C7.82812 8.88852 8.71665 8 9.82812 8Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Document}    >
				<View style = {noneModeStyles.style36}    >
					<View style = {noneModeStyles.style37}   >
						<Svg style={{height: 20, width: 16}} viewBox = "0 0 16 20">
							<Path fill = {"black"}     d = "M2 0C0.905745 0 0 0.905745 0 2V18C0 19.0943 0.905745 20 2 20H14C15.0943 20 16 19.0943 16 18V6L10 0H2ZM2 2H9V7H14V18H2V2ZM4 10V12H12V10H4ZM4 14V16H12V14H4Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Home}    >
				<View style = {noneModeStyles.style39}    >
					<View style = {noneModeStyles.style40}   >
						<Svg style={{height: 19, width: 22}} viewBox = "0 0 22 19">
							<Path fill = {"black"}     d = "M11 0L0 9.90039H3V18.9004H10V12.9004H12V18.9004H19V9.90039H22L11 0ZM11 2.69141L17 8.0918V8.90039V16.9004H14V10.9004H8V16.9004H5V8.0918L11 2.69141Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Check_All}    >
				<View style = {noneModeStyles.style42}    >
					<View style = {noneModeStyles.style43}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"black"}     d = "M2 0C0.895 0 0 0.895 0 2V14C0 15.105 0.895 16 2 16H14C15.105 16 16 15.105 16 14V2C16 0.895 15.105 0 14 0H2ZM2 2H14V14H2V2ZM18 4V18H4V20H18C19.105 20 20 19.105 20 18V4H18ZM11.293 4.29297L7 8.58594L4.70703 6.29297L3.29297 7.70703L7 11.4141L12.707 5.70703L11.293 4.29297Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Touch_ID}    >
				<View style = {noneModeStyles.style45}    >
					<View style = {noneModeStyles.style46}   >
						<Svg style={{height: 20, width: 18}} viewBox = "0 0 18 20">
							<Path fill = {"black"}     d = "M9 0C4.04148 0 0 4.04148 0 9C0 14.4 3.14258 19.5137 3.14258 19.5137L4.85742 18.4863C4.85742 18.4863 2 13.6 2 9C2 5.12252 5.12252 2 9 2C12.8775 2 16 5.12252 16 9C16 9.56503 15.565 10 15 10C14.435 10 14 9.56503 14 9C14 6.25048 11.7495 4 9 4C6.25048 4 4 6.25048 4 9C4 15.6667 10.5527 18.8945 10.5527 18.8945L11.4473 17.1055C11.4473 17.1055 6 14.3333 6 9C6 7.33152 7.33152 6 9 6C10.6685 6 12 7.33152 12 9C12 10.645 13.355 12 15 12C16.645 12 18 10.645 18 9C18 4.04148 13.9585 0 9 0ZM8 8C8 9.72222 8.5522 11.9289 10.1113 13.7715C11.6705 15.6141 14.2619 17 18 17V15C14.7381 15 12.8295 13.8859 11.6387 12.4785C10.4478 11.0711 10 9.27778 10 8H8Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._____1_container}    >
				<View style = {noneModeStyles._____1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_____1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles.___________1_container}    >
				<View style = {noneModeStyles.___________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image___________1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles.____________1_container}    >
				<View style = {noneModeStyles.____________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image____________1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles.________1_container}    >
				<View style = {noneModeStyles.________1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image________1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles.___________1_container_2}    >
				<View style = {noneModeStyles.___________1_2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image___________1_2_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Q}   >
				Q
			</Text>
			<Text style = {noneModeStyles._F}   >
				F
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Icons

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Icons: {
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
_Typography: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 80,
	top: 254,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_ic: {
	width: 496,
	height: 677,
	overflow: "hidden",
	position: "absolute",
	left: 264,
	top: 278,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(123, 97, 255)",
	borderRadius: 5,
	},
_Edit: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 410,
	top: 826,
	},
style6: {
	position: "absolute",
	transform: [
		{translateX: 413},
		{translateY: 828},
	],
	},
style7: {
	},
_Remove: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 367,
	top: 826,
	},
style9: {
	position: "absolute",
	transform: [
		{translateX: 370},
		{translateY: 828},
	],
	},
style10: {
	},
_Picture: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 496,
	top: 714,
	},
style12: {
	position: "absolute",
	transform: [
		{translateX: 498},
		{translateY: 718},
	],
	},
style13: {
	},
_Trash: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 324,
	top: 826,
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 328},
		{translateY: 828},
	],
	},
style16: {
	},
_Checkmark: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 324,
	top: 714,
	},
style18: {
	position: "absolute",
	transform: [
		{translateX: 327.293},
		{translateY: 719.293},
	],
	},
style19: {
	},
_Google_Images: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 582,
	top: 714,
	},
style21: {
	position: "absolute",
	transform: [
		{translateX: 584},
		{translateY: 717},
	],
	},
style22: {
	},
_Delete: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 600,
	top: 334,
	},
style24: {
	position: "absolute",
	transform: [
		{translateX: 603.293},
		{translateY: 337.293},
	],
	},
style25: {
	},
_Restart: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 281,
	top: 826,
	},
style27: {
	position: "absolute",
	transform: [
		{translateX: 283},
		{translateY: 828},
	],
	},
style28: {
	},
_Vector: {
	width: 18,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 628,
	top: 716,
	},
style30: {
	position: "absolute",
	transform: [
		{translateX: 628},
		{translateY: 716},
	],
	},
style31: {
	},
_Settings: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 410,
	top: 714,
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 412.172},
		{translateY: 716},
	],
	},
style34: {
	},
_Document: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 539,
	top: 714,
	},
style36: {
	position: "absolute",
	transform: [
		{translateX: 543},
		{translateY: 716},
	],
	},
style37: {
	},
_Home: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 281,
	top: 714,
	},
style39: {
	position: "absolute",
	transform: [
		{translateX: 282},
		{translateY: 716.1},
	],
	},
style40: {
	},
_Check_All: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 453,
	top: 714,
	},
style42: {
	position: "absolute",
	transform: [
		{translateX: 455},
		{translateY: 716},
	],
	},
style43: {
	},
_Touch_ID: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 367,
	top: 714,
	},
style45: {
	position: "absolute",
	transform: [
		{translateX: 370},
		{translateY: 717},
	],
	},
style46: {
	},
_____1_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 820,
	top: 369,
	},
_____1: {
	width: "100%",
	height: "100%",
	},
___________1_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 820,
	top: 409,
	},
___________1: {
	width: "100%",
	height: "100%",
	},
____________1_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 820,
	top: 449,
	},
____________1: {
	width: "100%",
	height: "100%",
	},
________1_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 820,
	top: 329,
	},
________1: {
	width: "100%",
	height: "100%",
	},
___________1_container_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 820,
	top: 569,
	},
___________1_2: {
	width: "100%",
	height: "100%",
	},
_Q: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 826,
	top: 492,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "300",
	fontFamily: "Oxanium",
	textAlign: "left",
	},
_F: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 826,
	top: 532,
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "300",
	fontFamily: "Oxanium",
	textAlign: "left",
	},
})

