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
import {image_Ellipse_11_3_link} from './assets/imageLinks.js'
const Page_Main_Banners  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page12}    >
			<Text style = {noneModeStyles._Main_Banners}   >
				Main Banners
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._1__Profile_Banner__B__Right_Image}    >
				<View style = {noneModeStyles._Rectangle_208}    >
				</View>
				<View style = {noneModeStyles._Ellipse_11}    >
				</View>
				<Text style = {noneModeStyles._________________________________}   >
					정영호님, 고생하셨어요!{'\n'}마사지로 피로를 풀어 보시겠어요?
				</Text>
			</View>
			<View style = {noneModeStyles._1__Profile_Banner__A__Left_Image}    >
				<View style = {noneModeStyles._Rectangle_208_2}    >
				</View>
				<View style = {noneModeStyles._Ellipse_11_2}    >
				</View>
				<Text style = {noneModeStyles.______}   >
					정영호 님
				</Text>
			</View>
			<View style = {noneModeStyles._1__Profile_Banner__B__Right_Image_2}    >
				<View style = {noneModeStyles._Rectangle_208_3}    >
				</View>
				<View style = {noneModeStyles._Ellipse_11_container}    >
					<View style = {noneModeStyles._Ellipse_11_3}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_11_3_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles.__________________________________2}   >
					정영호님, 고생하셨어요!{'\n'}마사지로 피로를 풀어 보시겠어요?
				</Text>
			</View>
			<View style = {noneModeStyles._2__Event___A__Right_Image}    >
				<View style = {noneModeStyles._Rectangle_239}    >
				</View>
				<Text style = {noneModeStyles.__________________________________3}   >
					누구보다 불안한 마음을 아니까,{'\n'}안심업소를 사용해 보세요!
				</Text>
				<View style = {noneModeStyles._Image_2_Illust__A__Outline}    >
					<View style = {noneModeStyles._Group}    >
						<View style = {noneModeStyles.style21}    >
							<View style = {noneModeStyles.style22}   >
								<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
									<Path fill = {"black"}     d = "M0.31902 0.173891C-0.231138 0.70083 -0.0652167 1.65455 0.781852 1.87012C1.62674 2.08351 2.1114 1.34317 1.97823 0.763974C1.84505 0.184776 0.770936 -0.259419 0.31902 0.173891Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style23}    >
							<View style = {noneModeStyles.style24}   >
								<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
									<Path fill = {"black"}     d = "M0.319021 0.175209C-0.231137 0.702151 -0.0652178 1.65369 0.781851 1.87143C1.62674 2.08482 2.1114 1.3445 1.97823 0.765295C1.84505 0.183917 0.770936 -0.26028 0.319021 0.175209Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style25}    >
							<View style = {noneModeStyles.style26}   >
								<Svg style={{height: 4, width: 4}} viewBox = "0 0 4 4">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.577145 3.06355C1.11072 3.56083 2.14113 3.60445 2.65721 2.80182C3.19953 1.95906 2.87764 0.824913 2.19361 0.577145"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style27}    >
							<View style = {noneModeStyles.style28}   >
								<Svg style={{height: 29, width: 24}} viewBox = "0 0 24 29">
									<Path fill = {"none"}   stroke = {"black"}  d = "M20.1288 0.500877C20.1288 0.500877 18.8003 9.19578 15.0897 13.6977C11.3807 18.1996 5.55365 23.8114 2.81019 24.8593C0.0667196 25.9072 0.159332 27.4184 1.08546 26.9248C2.01311 26.4311 0.560149 27.3245 1.02321 27.588C1.48628 27.85 1.78082 27.1883 1.9205 27.2958C2.06017 27.4033 1.11735 27.7425 1.55004 28.0044C1.98274 28.2664 2.16797 27.6955 2.41544 27.7425C2.66292 27.7879 1.82788 28.1438 2.1209 28.3588C2.41544 28.5738 2.86333 28.6207 3.63611 27.9121C4.4089 27.2034 23.9305 16.5051 23.4674 4.84984"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style29}    >
							<View style = {noneModeStyles.style30}   >
								<Svg style={{height: 6, width: 7}} viewBox = "0 0 7 6">
									<Path fill = {"black"}     d = "M1.16426 6.00024C1.16426 6.00024 -1.24877 3.70669 0.873002 1.31857C2.99477 -1.06955 5.80236 0.357579 6.16643 1.17163C6.52881 1.98569 7.22139 3.59184 6.47293 5.0156C6.47123 5.0156 3.84653 4.67782 1.16426 6.00024Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style31}    >
							<View style = {noneModeStyles.style32}   >
								<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
									<Path fill = {"black"}     d = "M0 4.12954C0 4.12954 0.756967 6.49694 1.84264 7.65069C2.92831 8.80286 3.99028 6.79326 4.37587 6.13127C4.76147 5.46928 3.82118 4.93654 4.37587 5.11307C4.93056 5.2896 5.20869 5.39835 5.82027 4.45108C6.43185 3.50381 7.34053 3.61414 7.53332 3.3257C7.72612 3.03726 7.33105 0.00630465 4.89263 0C4.89421 0 1.50445 0.723456 0 4.12954Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style33}    >
							<View style = {noneModeStyles.style34}   >
								<Svg style={{height: 12, width: 3}} viewBox = "0 0 3 12">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.682102 0.503875C0.682102 0.503875 -0.269425 8.23933 2.22471 11.4962"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style35}    >
							<View style = {noneModeStyles.style36}   >
								<Svg style={{height: 2, width: 7}} viewBox = "0 0 7 2">
									<Path fill = {"black"}     d = "M0 0.477261C0 0.477261 3.49744 2.24462 6.99988 0.706483C6.99988 0.706483 3.63734 -0.717042 0 0.477261Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style37}    >
							<View style = {noneModeStyles.style38}   >
								<Svg style={{height: 7, width: 2}} viewBox = "0 0 2 7">
									<Path fill = {"black"}     d = "M1.48385 1.43434C1.48385 1.43434 1.18001 6.95673 0.146936 7.00003C0.146936 7.00003 -0.445125 3.15392 0.747679 0.883664C1.94222 -1.38659 1.48385 1.43434 1.48385 1.43434Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style39}    >
							<View style = {noneModeStyles.style40}   >
								<Svg style={{height: 12, width: 14}} viewBox = "0 0 14 12">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.529864 2.69083C0.529864 2.69083 5.72884 10.1268 9.81638 11.2354C11.7212 11.7528 10.2083 10.452 9.98021 10.1268C9.75214 9.80005 10.5456 10.5513 11.2121 10.7788C11.8786 11.0063 11.0274 9.96345 10.9294 9.53894C10.8314 9.11444 11.877 10.8413 12.1388 10.5818C12.4006 10.3223 11.5173 9.14808 11.877 9.14808C12.2368 9.14808 12.9884 10.1268 13.4462 9.63666C13.9039 9.14808 7.6899 6.99513 3.8529 0.529864"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style41}    >
							<View style = {noneModeStyles.style42}   >
								<Svg style={{height: 9, width: 9}} viewBox = "0 0 9 9">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.509629 8.49596C0.509629 8.49596 0.00413002 2.0529 8.42961 0.503827"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style43}    >
							<View style = {noneModeStyles.style44}   >
								<Svg style={{height: 6, width: 11}} viewBox = "0 0 11 6">
									<Path fill = {"none"}   stroke = {"black"}  d = "M10.4903 0.509476C10.4903 0.509476 4.09382 3.15411 0.509476 5.2658"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style45}    >
							<View style = {noneModeStyles.style46}   >
								<Svg style={{height: 20, width: 70}} viewBox = "0 0 70 20">
									<Path fill = {"none"}   stroke = {"black"}  d = "M12.7561 18.7474C9.50257 20.335 1.69445 19.7795 0.671836 13.3821C-0.350782 6.98477 3.36686 3.73979 8.38712 3.46204C13.4074 3.18429 13.7787 5.96484 16.6594 6.79961C19.5416 7.63438 21.1668 1.24914 26.6056 0.959252C26.6056 0.959252 50.6812 -1.07759 69.0244 3.44686"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style47}    >
							<View style = {noneModeStyles.style48}   >
								<Svg style={{height: 3, width: 45}} viewBox = "0 0 45 3">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.507168 1.91438C0.507168 1.91438 16.1954 -1.25185 44.4928 1.91438"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style49}    >
							<View style = {noneModeStyles.style50}   >
								<Svg style={{height: 39, width: 34}} viewBox = "0 0 34 39">
									<Path fill = {"none"}   stroke = {"black"}  d = "M33.4927 38.4779C33.0022 25.033 23.9077 19.8858 21.964 18.3106C21.8548 18.2216 21.7671 18.145 21.7056 18.0775C20.5554 16.8229 22.0808 15.9195 23.3972 14.8888C24.712 13.8581 28.2812 8.8305 25.2763 3.55287C22.27 -1.72475 13.1586 0.647955 11.1857 4.67711C9.21269 8.70627 9.96467 10.8597 11.1857 13.3903C12.4067 15.9195 12.4482 17.2845 11.0919 17.8873C10.9688 17.9425 10.8427 18.0238 10.7151 18.1296C9.46489 19.171 8.02707 22.5683 6.48621 26.1895C4.59628 30.6297 2.55103 35.4073 0.507322 36.599"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style51}    >
							<View style = {noneModeStyles.style52}   >
								<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.604981 0.509453C0.43357 0.989992 0.413496 1.70002 1.23349 1.95261C2.05039 2.20366 2.34225 1.60453 2.4905 0.97613"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style53}    >
							<View style = {noneModeStyles.style54}   >
								<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.660465 0.521518C0.466026 1.00713 0.352206 1.67721 1.19161 1.93421C2.02786 2.19121 2.35035 1.67721 2.47839 1.10015"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style55}    >
							<View style = {noneModeStyles.style56}   >
								<Svg style={{height: 3, width: 4}} viewBox = "0 0 4 3">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.529575 0.529575C0.529575 1.22602 1.05128 1.59746 1.73832 1.75596C2.56341 1.94808 3.2376 1.64229 3.47036 1.06752"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style57}    >
							<View style = {noneModeStyles.style58}   >
								<Svg style={{height: 10, width: 8}} viewBox = "0 0 8 10">
									<Path fill = {"black"}     d = "M0.918026 0C-1.95889 0 2.78448 0.198105 3.45444 3.50929C4.09604 6.67896 4.28836 8.72762 7.64607 9.93197C7.64607 9.93197 8.84413 5.79221 6.83108 3.25301C4.57053 0.39621 2.94212 0 0.918026 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style59}    >
							<View style = {noneModeStyles.style60}   >
								<Svg style={{height: 7, width: 10}} viewBox = "0 0 10 7">
									<Path fill = {"black"}     d = "M9.56176 1.29349C9.56176 1.29349 7.99665 0.437051 5.79106 1.8227C3.58546 3.20991 2.52741 6.78597 0 6.33661C0 6.33661 0.370475 3.07056 3.03446 1.58314C5.69844 0.0957288 7.78158 -0.031093 8.78784 0.00491816C9.79409 0.042495 10.4958 1.68022 9.56176 1.29349Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style61}    >
							<View style = {noneModeStyles.style62}   >
								<Svg style={{height: 9, width: 16}} viewBox = "0 0 16 9">
									<Path fill = {"black"}     d = "M0.183019 4.46345C0.183019 4.46345 1.97738 0.549162 6.88902 0.0679358C11.8007 -0.41329 15.1481 1.65315 15.7379 6.55191C16.3276 11.4507 15.7379 6.68087 15.7379 6.68087C15.7379 6.68087 15.9428 8.3337 14.3692 6.99539C12.7956 5.65551 12.6001 2.26176 8.65343 1.55722C4.70677 0.852681 3.00386 1.81356 1.84809 3.60636C0.692315 5.39917 -0.455573 5.16013 0.183019 4.46345Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style63}    >
							<View style = {noneModeStyles.style64}   >
								<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
									<Path fill = {"black"}     d = "M0.223345 1.34907C1.3004 0.734551 2.16268 -0.752487 3.91074 0.465602C5.6588 1.68369 6.08994 4.16678 4.94076 4.93141C3.79159 5.69604 2.64242 6.41219 1.34901 5.71949C0.0555974 5.02523 -0.279909 1.63522 0.223345 1.34907Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style65}    >
							<View style = {noneModeStyles.style66}   >
								<Svg style={{height: 15, width: 7}} viewBox = "0 0 7 15">
									<Path fill = {"none"}   stroke = {"black"}  d = "M6.10791 0.512222C6.0132 2.78241 3.6827 11.9406 0.512222 14.488"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style67}    >
							<View style = {noneModeStyles.style68}   >
								<Svg style={{height: 13, width: 7}} viewBox = "0 0 7 13">
									<Path fill = {"none"}   stroke = {"black"}  d = "M6.33842 0.508791C6.24435 2.07467 3.81688 10.3178 0.508791 12.4913"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style69}    >
							<View style = {noneModeStyles.style70}   >
								<Svg style={{height: 4, width: 8}} viewBox = "0 0 8 4">
									<Path fill = {"black"}   stroke = {"black"}  d = "M7.47412 3.36671C6.95442 2.24419 5.98039 0.371196 5.1052 0.581073C4.22842 0.790949 4.9426 2.37933 4.55363 1.60184C4.16465 0.824339 3.88249 0.333037 3.35323 0.598563C2.73788 0.907017 3.67844 2.6067 3.18584 1.89439C2.69484 1.18208 2.66455 0.784589 1.97747 1.00083C1.14691 1.26317 2.22935 2.69892 1.90414 2.25214C1.57893 1.80376 1.36372 1.23932 0.773883 1.60343C0.0915845 2.02477 1.03373 3.29834 1.03373 3.29834L7.47412 3.36671Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style71}    >
							<View style = {noneModeStyles.style72}   >
								<Svg style={{height: 4, width: 8}} viewBox = "0 0 8 4">
									<Path fill = {"black"}   stroke = {"black"}  d = "M7.45838 3.14892C6.89868 2.04203 5.98238 0.309921 5.11085 0.550757C4.23932 0.791593 5.0117 2.35942 4.59433 1.59385C4.17695 0.828278 3.87631 0.345009 3.355 0.630504C2.74892 0.960657 3.75158 2.63216 3.23346 1.93517C2.71534 1.23818 2.67056 0.839442 1.99093 1.08187C1.16898 1.37375 2.30436 2.7757 1.96215 2.33869C1.62153 1.90167 1.38486 1.34185 0.805974 1.72782C0.137536 2.17441 0.882732 3.47269 0.882732 3.47269L7.45838 3.14892Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style73}    >
							<View style = {noneModeStyles.style74}   >
								<Svg style={{height: 10, width: 9}} viewBox = "0 0 9 10">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.5309 9.46895C0.5309 9.46895 4.12918 3.34898 5.2283 0.996006C6.32742 -1.35697 8.4838 5.89295 7.99459 7.87997"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style75}    >
							<View style = {noneModeStyles.style76}   >
								<Svg style={{height: 4, width: 12}} viewBox = "0 0 12 4">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.512085 0.512085C0.512085 0.512085 4.58976 6.15664 11.4878 0.939375"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style77}    >
							<View style = {noneModeStyles.style78}   >
								<Svg style={{height: 3, width: 6}} viewBox = "0 0 6 3">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.526614 0.526614C0.526614 0.526614 4.61941 0.658755 5.47341 1.84962"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style79}    >
							<View style = {noneModeStyles.style80}   >
								<Svg style={{height: 3, width: 6}} viewBox = "0 0 6 3">
									<Path fill = {"none"}   stroke = {"black"}  d = "M5.33844 2.47931C4.23821 1.32213 0.520766 0.520766 0.520766 0.520766"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style81}    >
							<View style = {noneModeStyles.style82}   >
								<Svg style={{height: 3, width: 2}} viewBox = "0 0 2 3">
									<Path fill = {"none"}   stroke = {"black"}  d = "M1.4799 2.00245C1.27341 1.45223 0.756424 0.765236 0.519995 0.519995"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style83}    >
							<View style = {noneModeStyles.style84}   >
								<Svg style={{height: 2, width: 3}} viewBox = "0 0 3 2">
									<Path fill = {"none"}   stroke = {"black"}  d = "M2.44401 0.694539C1.8376 0.526533 0.917878 0.538293 0.555716 0.588694"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style85}    >
							<View style = {noneModeStyles.style86}   >
								<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
									<Path fill = {"none"}   stroke = {"black"}  d = "M2.43092 1.85278C1.69944 1.0802 1.03523 0.746382 0.56943 0.569152"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Main_Banners

const noneModeStyles = StyleSheet.create({
_page12: {
	height: 1600,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_Main_Banners: {
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
_1__Profile_Banner__B__Right_Image: {
	width: 360,
	height: 88,
	position: "absolute",
	left: 80,
	top: 244,
	},
_Rectangle_208: {
	width: 360,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 2146},
		{translateY: 3987},
	],
	},
_Ellipse_11: {
	width: 48,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 2442},
		{translateY: 4007},
	],
	},
_________________________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 2162},
		{translateY: 4007},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Profile_Banner__A__Left_Image: {
	width: 360,
	height: 88,
	position: "absolute",
	left: 526,
	top: 244,
	},
_Rectangle_208_2: {
	width: 360,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 2592},
		{translateY: 3987},
	],
	},
_Ellipse_11_2: {
	width: 48,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 2608},
		{translateY: 4007},
	],
	},
______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 2672},
		{translateY: 4019},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Profile_Banner__B__Right_Image_2: {
	width: 360,
	height: 88,
	position: "absolute",
	left: 80,
	top: 357,
	},
_Rectangle_208_3: {
	width: 360,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Ellipse_11_container: {
	width: 48,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 296},
		{translateY: 20},
	],
	},
_Ellipse_11_3: {
	width: "100%",
	height: "100%",
	},
__________________________________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 20},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2__Event___A__Right_Image: {
	width: 328,
	height: 120,
	position: "absolute",
	left: 96,
	top: 485,
	},
_Rectangle_239: {
	width: 328,
	height: 120,
	backgroundColor: "rgb(235, 227, 200)",
	position: "absolute",
	transform: [
		{translateX: 2162},
		{translateY: 4228},
	],
	borderRadius: 8,
	},
__________________________________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 2178},
		{translateY: 4284},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Image_2_Illust__A__Outline: {
	width: 74,
	height: 77,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 2400},
		{translateY: 4244},
	],
	},
_Group: {
	width: 73.2588,
	height: 76.6299,
	position: "absolute",
	transform: [
		{translateX: 0.371094},
		{translateY: -0.000488281},
	],
	},
style21: {
	position: "absolute",
	transform: [
		{translateX: 14.304},
		{translateY: 43.5806},
	],
	},
style22: {
	},
style23: {
	position: "absolute",
	transform: [
		{translateX: 10.2786},
		{translateY: 49.981},
	],
	},
style24: {
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 13.2842},
		{translateY: 47.0811},
	],
	},
style26: {
	},
style27: {
	position: "absolute",
	transform: [
		{translateX: 9.198},
		{translateY: 41.7222},
	],
	},
style28: {
	},
style29: {
	position: "absolute",
	transform: [
		{translateX: 7.89355},
		{translateY: 34.792},
	],
	},
style30: {
	},
style31: {
	position: "absolute",
	transform: [
		{translateX: 5.68359},
		{translateY: 39.7437},
	],
	},
style32: {
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 9.79395},
		{translateY: 54.7295},
	],
	},
style34: {
	},
style35: {
	position: "absolute",
	transform: [
		{translateX: 10.3772},
		{translateY: 39.3096},
	],
	},
style36: {
	},
style37: {
	position: "absolute",
	transform: [
		{translateX: 5.03076},
		{translateY: 42.9326},
	],
	},
style38: {
	},
style39: {
	position: "absolute",
	transform: [
		{translateX: 13.2842},
		{translateY: 66.4146},
	],
	},
style40: {
	},
style41: {
	position: "absolute",
	transform: [
		{translateX: 15.4336},
		{translateY: 55.4492},
	],
	},
style42: {
	},
style43: {
	position: "absolute",
	transform: [
		{translateY: 58.7129},
	],
	},
style44: {
	},
style45: {
	position: "absolute",
	transform: [
		{translateX: 5.01367},
		{translateY: 36.377},
	],
	},
style46: {
	},
style47: {
	position: "absolute",
	transform: [
		{translateX: 29.1555},
		{translateY: 53.3423},
	],
	},
style48: {
	},
style49: {
	position: "absolute",
	transform: [
		{translateX: 36.4136},
		{translateY: 0.952148},
	],
	},
style50: {
	},
style51: {
	position: "absolute",
	transform: [
		{translateX: 55.2053},
		{translateY: 7.92871},
	],
	},
style52: {
	},
style53: {
	position: "absolute",
	transform: [
		{translateX: 48.9324},
		{translateY: 7.07178},
	],
	},
style54: {
	},
style55: {
	position: "absolute",
	transform: [
		{translateX: 51.0327},
		{translateY: 9.66406},
	],
	},
style56: {
	},
style57: {
	position: "absolute",
	transform: [
		{translateX: 54.3228},
		{translateY: 0.954102},
	],
	},
style58: {
	},
style59: {
	position: "absolute",
	transform: [
		{translateX: 46.4573},
		{translateY: 0.354004},
	],
	},
style60: {
	},
style61: {
	position: "absolute",
	transform: [
		{translateX: 46.8877},
	],
	},
style62: {
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 60.5605},
		{translateY: 2.13184},
	],
	},
style64: {
	},
style65: {
	position: "absolute",
	transform: [
		{translateX: 47.9548},
		{translateY: 22.7334},
	],
	},
style66: {
	},
style67: {
	position: "absolute",
	transform: [
		{translateX: 52.4395},
		{translateY: 24.7949},
	],
	},
style68: {
	},
style69: {
	position: "absolute",
	transform: [
		{translateX: 42.5356},
		{translateY: 33.7461},
	],
	},
style70: {
	},
style71: {
	position: "absolute",
	transform: [
		{translateX: 31.3845},
		{translateY: 33.9873},
	],
	},
style72: {
	},
style73: {
	position: "absolute",
	transform: [
		{translateX: 43.2366},
		{translateY: 26.2671},
	],
	},
style74: {
	},
style75: {
	position: "absolute",
	transform: [
		{translateX: 46.8438},
		{translateY: 18.084},
	],
	},
style76: {
	},
style77: {
	position: "absolute",
	transform: [
		{translateX: 52.3848},
		{translateY: 27.6416},
	],
	},
style78: {
	},
style79: {
	position: "absolute",
	transform: [
		{translateX: 42.3027},
		{translateY: 26.2661},
	],
	},
style80: {
	},
style81: {
	position: "absolute",
	transform: [
		{translateX: 30.7119},
		{translateY: 30.6831},
	],
	},
style82: {
	},
style83: {
	position: "absolute",
	transform: [
		{translateX: 26.9458},
		{translateY: 34.2935},
	],
	},
style84: {
	},
style85: {
	position: "absolute",
	transform: [
		{translateX: 28.3462},
		{translateY: 31.96},
	],
	},
style86: {
	},
})

