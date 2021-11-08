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
const Page_Cards  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page30}    >
			<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line_____}    >
				<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line}    >
					<View style = {noneModeStyles._Rectangle_371}    >
					</View>
					<View style = {noneModeStyles._Ellipse_1}    >
					</View>
					<View style = {noneModeStyles._Group_7}    >
						<Text style = {noneModeStyles._____}   >
							약 이름
						</Text>
						<Text style = {noneModeStyles.____}   >
							브랜드
						</Text>
					</View>
					<View style = {noneModeStyles._Alert___ic}    >
						<View style = {noneModeStyles._ic}    >
							<View style = {noneModeStyles.style10}    >
							</View>
							<View style = {noneModeStyles.style11}    >
								<View style = {noneModeStyles.style12}   >
									<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
										<Path fill = {"#B00020"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Cards}   >
				Cards
			</Text>
			<View style = {noneModeStyles._Line_6}    >
			</View>
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
			<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line______2}    >
				<View style = {noneModeStyles._Rectangle_371_2}    >
				</View>
				<View style = {noneModeStyles._Ellipse_1_2}    >
				</View>
				<View style = {noneModeStyles._Group_7_2}    >
					<Text style = {noneModeStyles.______2}   >
						약 이름
					</Text>
					<Text style = {noneModeStyles._____2}   >
						브랜드
					</Text>
				</View>
				<View style = {noneModeStyles._2__Contained___C____}    >
					<View style = {noneModeStyles._Rectangle_537}    >
					</View>
					<Text style = {noneModeStyles.___}   >
						일반
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line______3}    >
				<View style = {noneModeStyles._Rectangle_371_3}    >
				</View>
				<View style = {noneModeStyles._Ellipse_1_3}    >
				</View>
				<View style = {noneModeStyles._Group_7_3}    >
					<Text style = {noneModeStyles.______3}   >
						약 이름
					</Text>
					<Text style = {noneModeStyles._____3}   >
						브랜드
					</Text>
				</View>
				<View style = {noneModeStyles._2__Contained___B____}    >
					<View style = {noneModeStyles._Rectangle_537_2}    >
					</View>
					<Text style = {noneModeStyles.____2}   >
						건강
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___A__Rectangle___a__Left_image_two_line______4}    >
				<View style = {noneModeStyles._Rectangle_371_4}    >
				</View>
				<View style = {noneModeStyles._Ellipse_1_4}    >
				</View>
				<View style = {noneModeStyles._Group_7_4}    >
					<Text style = {noneModeStyles.______4}   >
						약 이름
					</Text>
					<Text style = {noneModeStyles._____4}   >
						브랜드
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
			<View style = {noneModeStyles._1__Cards___A__Rectangle___e__image_two_line_checkbox_inactive_}    >
				<View style = {noneModeStyles._Rectangle_371_5}    >
				</View>
				<View style = {noneModeStyles.style49}    >
					<View style = {noneModeStyles.style50}   >
						<Svg style={{height: 60, width: 60}} viewBox = "0 0 60 60">
							<Path fill = {"black"}     d = "M0 8C0 3.58172 3.58172 0 8 0H52C56.4183 0 60 3.58172 60 8V52C60 56.4183 56.4183 60 52 60H8C3.58172 60 0 56.4183 0 52V8Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Group_7_5}    >
					<Text style = {noneModeStyles.______5}   >
						약 이름
					</Text>
					<Text style = {noneModeStyles._____5}   >
						브랜드
					</Text>
				</View>
				<View style = {noneModeStyles._Navigation___ic}    >
					<View style = {noneModeStyles._ic_2}    >
						<View style = {noneModeStyles.style56}    >
							<View style = {noneModeStyles.style57}   >
								<Svg style={{height: 20, width: 13}} viewBox = "0 0 13 20">
									<Path fill = {"black"}     d = "M0 2.12L7.88 10L0 17.88L2.12 20L12.12 10L2.12 0L0 2.12Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style58}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___A__Rectangle___d__image_two_line_checkbox_active_}    >
				<View style = {noneModeStyles._Rectangle_371_6}    >
				</View>
				<View style = {noneModeStyles.style61}    >
					<View style = {noneModeStyles.style62}   >
						<Svg style={{height: 60, width: 60}} viewBox = "0 0 60 60">
							<Path fill = {"black"}     d = "M0 8C0 3.58172 3.58172 0 8 0H52C56.4183 0 60 3.58172 60 8V52C60 56.4183 56.4183 60 52 60H8C3.58172 60 0 56.4183 0 52V8Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Group_7_6}    >
					<Text style = {noneModeStyles.______6}   >
						약 이름
					</Text>
					<Text style = {noneModeStyles._____6}   >
						브랜드
					</Text>
				</View>
				<View style = {noneModeStyles._Navigation___ic_2}    >
					<View style = {noneModeStyles._ic_3}    >
						<View style = {noneModeStyles.style68}    >
							<View style = {noneModeStyles.style69}   >
								<Svg style={{height: 20, width: 13}} viewBox = "0 0 13 20">
									<Path fill = {"#00848F"}     d = "M0 2.12L7.88 10L0 17.88L2.12 20L12.12 10L2.12 0L0 2.12Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style70}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles.______7}    >
				<View style = {noneModeStyles._Rectangle_396}    >
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___a__solid}    >
					<View style = {noneModeStyles._Rectangle_394}    >
					</View>
					<Text style = {noneModeStyles.____4}   >
						answer1
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___c__line}    >
					<View style = {noneModeStyles._Rectangle_394_2}    >
					</View>
					<Text style = {noneModeStyles.____5}   >
						answer2
					</Text>
				</View>
				<Text style = {noneModeStyles.______8}   >
					질문작성
				</Text>
			</View>
			<View style = {noneModeStyles._1__Cards___pop_up___________}    >
				<View style = {noneModeStyles._Group_217}    >
					<View style = {noneModeStyles._Rectangle_539}    >
					</View>
					<Text style = {noneModeStyles.__________________________}   >
						*반드시 약 이름과 용법 용량을 확인해주세요.
					</Text>
					<Text style = {noneModeStyles.__________________________________}   >
						본 어플은{'\n'}잘못된 정보 입력으로 인한{'\n'}책임을 지지 않습니다.
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___a__solid_2}    >
					<View style = {noneModeStyles._Rectangle_394_3}    >
					</View>
					<Text style = {noneModeStyles.____6}   >
						동의하기
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___c__line_2}    >
					<View style = {noneModeStyles._Rectangle_394_4}    >
					</View>
					<Text style = {noneModeStyles.____7}   >
						비동의
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards______check_card}    >
				<View style = {noneModeStyles._Rectangle_477}    >
				</View>
				<View style = {noneModeStyles._Group_262}    >
					<Text style = {noneModeStyles.____________}   >
						어떤 약을 드셨나요?
					</Text>
					<Text style = {noneModeStyles.______}   >
						아침약 중
					</Text>
				</View>
				<Text style = {noneModeStyles._______2}   >
					전체 선택
				</Text>
				<View style = {noneModeStyles._Action___ic}    >
					<View style = {noneModeStyles._ic_4}    >
						<View style = {noneModeStyles.style99}    >
						</View>
						<View style = {noneModeStyles.style100}    >
							<View style = {noneModeStyles.style101}   >
								<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
									<Path fill = {"black"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_482}    >
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___a__solid_3}    >
					<View style = {noneModeStyles._Rectangle_394_5}    >
					</View>
					<Text style = {noneModeStyles.____8}   >
						저장
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___c__line_3}    >
					<View style = {noneModeStyles._Rectangle_394_6}    >
					</View>
					<Text style = {noneModeStyles.____9}   >
						취소
					</Text>
				</View>
				<View style = {noneModeStyles._Group_261}    >
					<View style = {noneModeStyles._Rectangle_593}    >
					</View>
					<View style = {noneModeStyles._Group_247}    >
						<Text style = {noneModeStyles.________}   >
							락토핏 유산균
						</Text>
						<View style = {noneModeStyles._Toggle___ic}    >
							<View style = {noneModeStyles._ic_5}    >
								<View style = {noneModeStyles.style115}    >
								</View>
								<View style = {noneModeStyles.style116}    >
									<View style = {noneModeStyles.style117}   >
										<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
											<Path fill = {"#8BA629"}     d = "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_248}    >
						<Text style = {noneModeStyles._______2_0}   >
							아이클리어 2.0
						</Text>
						<View style = {noneModeStyles._Toggle___ic_2}    >
							<View style = {noneModeStyles._ic_6}    >
								<View style = {noneModeStyles.style122}    >
								</View>
								<View style = {noneModeStyles.style123}    >
									<View style = {noneModeStyles.style124}   >
										<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
											<Path fill = {"#8BA629"}     d = "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._______3}   >
						전문의약품
					</Text>
				</View>
				<View style = {noneModeStyles._Group_263}    >
					<View style = {noneModeStyles._Rectangle_594}    >
					</View>
					<View style = {noneModeStyles._Group_249}    >
						<Text style = {noneModeStyles._____7}   >
							처방약
						</Text>
						<View style = {noneModeStyles._Toggle___ic_3}    >
							<View style = {noneModeStyles._ic_7}    >
								<View style = {noneModeStyles.style132}    >
								</View>
								<View style = {noneModeStyles.style133}    >
									<View style = {noneModeStyles.style134}   >
										<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
											<Path fill = {"black"}     d = "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_250}    >
						<Text style = {noneModeStyles._______4}   >
							코자엑스큐
						</Text>
						<View style = {noneModeStyles._Toggle___ic_4}    >
							<View style = {noneModeStyles._ic_8}    >
								<View style = {noneModeStyles.style139}    >
								</View>
								<View style = {noneModeStyles.style140}    >
									<View style = {noneModeStyles.style141}   >
										<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
											<Path fill = {"black"}     d = "M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles.________2}   >
						건강기능식품
					</Text>
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
								<View style = {noneModeStyles._Alert___ic_2}    >
									<View style = {noneModeStyles._ic_9}    >
										<View style = {noneModeStyles.style153}    >
											<View style = {noneModeStyles.style154}   >
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
						<Text style = {noneModeStyles._________2}   >
							락토핏 유산균
						</Text>
						<Text style = {noneModeStyles._____8}   >
							처방약
						</Text>
						<Text style = {noneModeStyles._______2_0_2}   >
							아이클리어 2.0
						</Text>
						<Text style = {noneModeStyles._______5}   >
							코자엑스큐
						</Text>
						<View style = {noneModeStyles._Action___ic_2}    >
							<View style = {noneModeStyles._ic_10}    >
								<View style = {noneModeStyles.style165}    >
								</View>
								<View style = {noneModeStyles.style166}    >
									<View style = {noneModeStyles.style167}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"#8BA629"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_3}    >
							<View style = {noneModeStyles._ic_11}    >
								<View style = {noneModeStyles.style170}    >
								</View>
								<View style = {noneModeStyles.style171}    >
									<View style = {noneModeStyles.style172}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"black"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_4}    >
							<View style = {noneModeStyles._ic_12}    >
								<View style = {noneModeStyles.style175}    >
								</View>
								<View style = {noneModeStyles.style176}    >
									<View style = {noneModeStyles.style177}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"#8BA629"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_5}    >
							<View style = {noneModeStyles._ic_13}    >
								<View style = {noneModeStyles.style180}    >
								</View>
								<View style = {noneModeStyles.style181}    >
									<View style = {noneModeStyles.style182}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"black"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
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
					<Text style = {noneModeStyles.____10}   >
						전문
					</Text>
					<Text style = {noneModeStyles._2}   >
						2
					</Text>
				</View>
				<View style = {noneModeStyles._Group_268}    >
					<View style = {noneModeStyles._Rectangle_588}    >
					</View>
					<Text style = {noneModeStyles.____11}   >
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
					<Text style = {noneModeStyles.______9}   >
						건강기능
					</Text>
				</View>
				<View style = {noneModeStyles._Group_269}    >
					<View style = {noneModeStyles._Rectangle_589}    >
					</View>
					<Text style = {noneModeStyles._0_2}   >
						0
					</Text>
					<Text style = {noneModeStyles.______10}   >
						의약외품
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards_____________2}    >
				<View style = {noneModeStyles._Group_246_2}    >
					<View style = {noneModeStyles._Group_244_2}    >
						<View style = {noneModeStyles._Group_238_3}    >
							<View style = {noneModeStyles._Group_233_2}    >
								<View style = {noneModeStyles._Rectangle_548_4}    >
								</View>
								<View style = {noneModeStyles._Rectangle_549_2}    >
								</View>
								<Text style = {noneModeStyles._06_30___08_30_2}   >
									06:30 ~ 08:30
								</Text>
								<View style = {noneModeStyles._Alert___ic_3}    >
									<View style = {noneModeStyles._ic_14}    >
										<View style = {noneModeStyles.style209}    >
											<View style = {noneModeStyles.style210}   >
												<Svg style={{height: 20, width: 16}} viewBox = "0 0 16 20">
													<Path fill = {"black"}     d = "M8 19.5C9.1 19.5 10 18.6 10 17.5H6C6 18.6 6.89 19.5 8 19.5ZM14 13.5V8.5C14 5.43 12.36 2.86 9.5 2.18V1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5V2.18C3.63 2.86 2 5.42 2 8.5V13.5L0 15.5V16.5H16V15.5L14 13.5Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Group_237_2}    >
								<View style = {noneModeStyles._Rectangle_548_5}    >
								</View>
							</View>
							<View style = {noneModeStyles._Group_238_4}    >
								<View style = {noneModeStyles._Rectangle_548_6}    >
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles._________3}   >
							락토핏 유산균
						</Text>
						<Text style = {noneModeStyles._____9}   >
							처방약
						</Text>
						<Text style = {noneModeStyles._______2_0_3}   >
							아이클리어 2.0
						</Text>
						<Text style = {noneModeStyles._______6}   >
							코자엑스큐
						</Text>
						<View style = {noneModeStyles._Action___ic_6}    >
							<View style = {noneModeStyles._ic_15}    >
								<View style = {noneModeStyles.style221}    >
								</View>
								<View style = {noneModeStyles.style222}    >
									<View style = {noneModeStyles.style223}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"#8BA629"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_7}    >
							<View style = {noneModeStyles._ic_16}    >
								<View style = {noneModeStyles.style226}    >
								</View>
								<View style = {noneModeStyles.style227}    >
									<View style = {noneModeStyles.style228}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"black"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_8}    >
							<View style = {noneModeStyles._ic_17}    >
								<View style = {noneModeStyles.style231}    >
								</View>
								<View style = {noneModeStyles.style232}    >
									<View style = {noneModeStyles.style233}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"#8BA629"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Action___ic_9}    >
							<View style = {noneModeStyles._ic_18}    >
								<View style = {noneModeStyles.style236}    >
								</View>
								<View style = {noneModeStyles.style237}    >
									<View style = {noneModeStyles.style238}   >
										<Svg style={{height: 14, width: 18}} viewBox = "0 0 18 14">
											<Path fill = {"black"}     d = "M5.72724 10.8408L1.43181 6.54542L0 7.97723L5.72724 13.7045L17.9999 1.43181L16.5681 0L5.72724 10.8408Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_267_2}    >
					<View style = {noneModeStyles._Rectangle_586_2}    >
					</View>
					<Text style = {noneModeStyles.____12}   >
						전문
					</Text>
					<Text style = {noneModeStyles._2_3}   >
						2
					</Text>
				</View>
				<View style = {noneModeStyles._Group_268_2}    >
					<View style = {noneModeStyles._Rectangle_588_2}    >
					</View>
					<Text style = {noneModeStyles.____13}   >
						일반
					</Text>
					<Text style = {noneModeStyles._0_3}   >
						0
					</Text>
				</View>
				<View style = {noneModeStyles._Group_266_2}    >
					<View style = {noneModeStyles._Rectangle_587_2}    >
					</View>
					<Text style = {noneModeStyles._2_4}   >
						2
					</Text>
					<Text style = {noneModeStyles.______11}   >
						건강기능
					</Text>
				</View>
				<View style = {noneModeStyles._Group_269_2}    >
					<View style = {noneModeStyles._Rectangle_589_2}    >
					</View>
					<Text style = {noneModeStyles._0_4}   >
						0
					</Text>
					<Text style = {noneModeStyles.______12}   >
						의약외품
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___medicine_card_________}    >
				<View style = {noneModeStyles._Group_290}    >
					<View style = {noneModeStyles._Union}    >
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_593_2}    >
				</View>
				<View style = {noneModeStyles._Rectangle_594_2}    >
				</View>
				<View style = {noneModeStyles._Rectangle_595}    >
				</View>
				<View style = {noneModeStyles._Rectangle_596}    >
				</View>
				<View style = {noneModeStyles._Rectangle_592}    >
				</View>
				<View style = {noneModeStyles._Rectangle_597}    >
				</View>
				<View style = {noneModeStyles._Rectangle_600}    >
				</View>
				<View style = {noneModeStyles._Rectangle_598}    >
				</View>
				<View style = {noneModeStyles._Rectangle_599}    >
				</View>
				<Text style = {noneModeStyles.______13}   >
					발현부위
				</Text>
				<Text style = {noneModeStyles._____10}   >
					신경계
				</Text>
				<Text style = {noneModeStyles._______7}   >
					위장관이상
				</Text>
				<Text style = {noneModeStyles._____________}   >
					피부 및{'\n'}피하조직 이상
				</Text>
				<Text style = {noneModeStyles.______14}   >
					심장이상
				</Text>
				<Text style = {noneModeStyles._________4}   >
					감각기관 이상
				</Text>
				<Text style = {noneModeStyles.___________}   >
					신장 및 방광 이상
				</Text>
				<Text style = {noneModeStyles.______15}   >
					혈관이상
				</Text>
				<Text style = {noneModeStyles._________________}   >
					호흡기계,{'\n'}흉부 및 종격 이상
				</Text>
				<Text style = {noneModeStyles.______16}   >
					발현증상
				</Text>
				<Text style = {noneModeStyles._________}   >
					어지러움, 두통
				</Text>
				<Text style = {noneModeStyles.____________________________}   >
					복부불편감, 소화불량, 구역,{'\n'}역류성식도염, 변비
				</Text>
				<Text style = {noneModeStyles._____________________}   >
					(전신성) 가려움증, 전신성 두드러기
				</Text>
				<Text style = {noneModeStyles.______17}   >
					심계항진
				</Text>
				<Text style = {noneModeStyles.____________2}   >
					어지러움, 안구충혈
				</Text>
				<Text style = {noneModeStyles.____14}   >
					빈뇨
				</Text>
				<Text style = {noneModeStyles.__________________}   >
					홍조, 기립성 저혈압, 안면홍조
				</Text>
				<Text style = {noneModeStyles.__________2}   >
					호흡곤란, 기침
				</Text>
				<Text style = {noneModeStyles._______________}   >
					전신이상 및{'\n'}투여부위 반응
				</Text>
				<Text style = {noneModeStyles.___________________________________2}   >
					무력증, 흉부불편감, 흉통, {'\n'}조기포만감, 말초부종, 오목부종
				</Text>
				<Text style = {noneModeStyles._________5}   >
					졸음, 뇌경색
				</Text>
				<View style = {noneModeStyles._Navigation___ic_3}    >
					<View style = {noneModeStyles._ic_19}    >
						<View style = {noneModeStyles.style290}    >
							<View style = {noneModeStyles.style291}   >
								<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
									<Path fill = {"black"}     d = "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style292}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___medicine_card_______active_}    >
				<View style = {noneModeStyles._Group_293}    >
					<View style = {noneModeStyles._Group_289}    >
						<View style = {noneModeStyles._Union_2}    >
						</View>
						<Text style = {noneModeStyles._____11}   >
							부작용
						</Text>
					</View>
					<View style = {noneModeStyles._Rectangle_374}    >
					</View>
					<View style = {noneModeStyles._Rectangle_590}    >
					</View>
					<View style = {noneModeStyles._Rectangle_375}    >
					</View>
					<View style = {noneModeStyles._Rectangle_591}    >
					</View>
					<Text style = {noneModeStyles.______18}   >
						발현부위
					</Text>
					<Text style = {noneModeStyles._____12}   >
						신경계
					</Text>
					<Text style = {noneModeStyles._______8}   >
						위장관이상
					</Text>
					<Text style = {noneModeStyles.______________2}   >
						피부 및{'\n'}피하조직 이상
					</Text>
					<Text style = {noneModeStyles.______19}   >
						발현증상
					</Text>
					<Text style = {noneModeStyles.__________3}   >
						어지러움, 두통
					</Text>
					<Text style = {noneModeStyles._____________________________2}   >
						복부불편감, 소화불량, 구역,{'\n'}역류성식도염, 변비
					</Text>
					<Text style = {noneModeStyles.______________________2}   >
						(전신성) 가려움증, 전신성 두드러기
					</Text>
					<Text style = {noneModeStyles.________________2}   >
						전신이상 및{'\n'}투여부위 반응
					</Text>
					<Text style = {noneModeStyles.___________________________________3}   >
						무력증, 흉부불편감, 흉통, {'\n'}조기포만감, 말초부종, 오목부종
					</Text>
					<Text style = {noneModeStyles._________6}   >
						졸음, 뇌경색
					</Text>
				</View>
				<View style = {noneModeStyles._Navigation___ic_4}    >
					<View style = {noneModeStyles._ic_20}    >
						<View style = {noneModeStyles.style315}    >
							<View style = {noneModeStyles.style316}   >
								<Svg style={{height: 12, width: 20}} viewBox = "0 0 20 12">
									<Path fill = {"black"}     d = "M18.2121 11.788L20 10.0001L9.9999 -4.37118e-07L-0.000196954 10.0001L1.7877 11.788L9.9999 3.57579L18.2121 11.788Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style317}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___medicine_card_______inactive_}    >
				<View style = {noneModeStyles._Union_3}    >
				</View>
				<Text style = {noneModeStyles._____13}   >
					부작용
				</Text>
			</View>
			<View style = {noneModeStyles._1__Cards___medicine_card________inactive_}    >
				<View style = {noneModeStyles._Union_4}    >
				</View>
				<Text style = {noneModeStyles._______9}   >
					기본 정보
				</Text>
			</View>
			<View style = {noneModeStyles._1__Cards___medicine_card_______}    >
				<View style = {noneModeStyles._Union_5}    >
				</View>
				<Text style = {noneModeStyles.______20}   >
					약 이름
				</Text>
				<Text style = {noneModeStyles._____14}   >
					브랜드
				</Text>
				<View style = {noneModeStyles._Group_132}    >
					<View style = {noneModeStyles._Rectangle_374_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_375_2}    >
					</View>
					<Text style = {noneModeStyles._______10}   >
						효과 효능
					</Text>
					<Text style = {noneModeStyles._______11}   >
						복용 방법
					</Text>
					<Text style = {noneModeStyles._______12}   >
						효과 효능
					</Text>
					<Text style = {noneModeStyles._0_____}   >
						0알 / 일
					</Text>
					<View style = {noneModeStyles._Group_287}    >
						<Text style = {noneModeStyles._______13}   >
							보관 방법
						</Text>
						<Text style = {noneModeStyles.____________1_30__}   >
							기밀용기, 실온보관(1~30℃)
						</Text>
					</View>
					<Text style = {noneModeStyles.____30_}   >
						식후 30분
					</Text>
				</View>
				<View style = {noneModeStyles._Large_Buttons}    >
					<View style = {noneModeStyles._1__Contained_A__Text_a__Large___Enabled}    >
						<View style = {noneModeStyles._Elevation}    >
						</View>
						<View style = {noneModeStyles._Container}    >
						</View>
						<View style = {noneModeStyles._Overlay}    >
						</View>
						<Text style = {noneModeStyles.____15}   >
							추가하기
						</Text>
					</View>
				</View>
				<Text style = {noneModeStyles._______14}   >
					기본 정보
				</Text>
			</View>
			<View style = {noneModeStyles._1__Cards___medicine_card___active}    >
				<View style = {noneModeStyles._Union_6}    >
				</View>
				<View style = {noneModeStyles._Group_132_2}    >
					<View style = {noneModeStyles._Rectangle_374_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_377}    >
					</View>
					<View style = {noneModeStyles._Rectangle_375_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_376}    >
					</View>
					<Text style = {noneModeStyles._______15}   >
						효과 효능
					</Text>
					<Text style = {noneModeStyles._____15}   >
						진료과
					</Text>
					<Text style = {noneModeStyles._______16}   >
						복용 방법
					</Text>
					<Text style = {noneModeStyles._______17}   >
						보관 방법
					</Text>
					<Text style = {noneModeStyles._______18}   >
						복용 기간
					</Text>
					<Text style = {noneModeStyles._______19}   >
						혈압강하제
					</Text>
					<Text style = {noneModeStyles.______21}   >
						심혈관내과
					</Text>
					<Text style = {noneModeStyles._0______2}   >
						1알 / 일
					</Text>
					<Text style = {noneModeStyles.____________1_30___2}   >
						기밀용기, 실온보관(1~30℃)
					</Text>
					<Text style = {noneModeStyles._2021_07_04_2021_08_04}   >
						2021.07.04~2021.08.04
					</Text>
					<Text style = {noneModeStyles.____30__2}   >
						식후 30분
					</Text>
				</View>
				<Text style = {noneModeStyles.________5_50mg}   >
					코자엑스큐정 5/50mg
				</Text>
				<Text style = {noneModeStyles._____16}   >
					한국오가논
				</Text>
				<Text style = {noneModeStyles._______20}   >
					기본 정보
				</Text>
				<View style = {noneModeStyles._1__Button___B__Medium___c__line_4}    >
					<View style = {noneModeStyles._Rectangle_394_7}    >
					</View>
					<Text style = {noneModeStyles.____16}   >
						수정
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___c__line_5}    >
					<View style = {noneModeStyles._Rectangle_394_8}    >
					</View>
					<Text style = {noneModeStyles.____17}   >
						삭제
					</Text>
				</View>
				<View style = {noneModeStyles._2__Contained___A_____2}    >
					<View style = {noneModeStyles._Rectangle_537_4}    >
					</View>
					<Text style = {noneModeStyles.____18}   >
						전문
					</Text>
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
						<View style = {noneModeStyles._Navigation___ic_5}    >
							<View style = {noneModeStyles._ic_21}    >
								<View style = {noneModeStyles.style384}    >
									<View style = {noneModeStyles.style385}   >
										<Svg style={{height: 8, width: 12}} viewBox = "0 0 12 8">
											<Path fill = {"black"}     d = "M10.59 7.40991L6 2.82991L1.41 7.40991L1.68141e-08 5.99991L6 -8.76665e-05L12 5.99991L10.59 7.40991Z"/>
										</Svg>
									</View>
								</View>
								<View style = {noneModeStyles.style386}    >
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_374_4}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___pop_up____________2}    >
				<View style = {noneModeStyles._Group_217_2}    >
					<View style = {noneModeStyles._Rectangle_539_2}    >
					</View>
					<Text style = {noneModeStyles.___________________________2}   >
						*다시 한 번 약 이름과 복용 방법을 확인해주세요.
					</Text>
					<Text style = {noneModeStyles.______________3}   >
						약 정보를 수정할까요?
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___a__solid_4}    >
					<View style = {noneModeStyles._Rectangle_394_9}    >
					</View>
					<Text style = {noneModeStyles.____19}   >
						수정하기
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___c__line_6}    >
					<View style = {noneModeStyles._Rectangle_394_10}    >
					</View>
					<Text style = {noneModeStyles.____20}   >
						취소
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._1__Cards___pop_up____________3}    >
				<View style = {noneModeStyles._Group_217_3}    >
					<View style = {noneModeStyles._Rectangle_539_3}    >
					</View>
					<Text style = {noneModeStyles._____________________________3}   >
						*약 정보를 삭제하면 처음부터 다시 등록해야해요.
					</Text>
					<Text style = {noneModeStyles.______________4}   >
						약 정보를 삭제할까요?
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___a__solid_5}    >
					<View style = {noneModeStyles._Rectangle_394_11}    >
					</View>
					<Text style = {noneModeStyles.____21}   >
						삭제하기
					</Text>
				</View>
				<View style = {noneModeStyles._1__Button___B__Medium___c__line_7}    >
					<View style = {noneModeStyles._Rectangle_394_12}    >
					</View>
					<Text style = {noneModeStyles.____22}   >
						취소
					</Text>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Cards

const noneModeStyles = StyleSheet.create({
_page30: {
	height: 2182,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(237, 237, 237)",
	},
_1__Cards___A__Rectangle___a__Left_image_two_line_____: {
	width: 328,
	height: 88,
	position: "absolute",
	left: 82,
	top: 211,
	},
_1__Cards___A__Rectangle___a__Left_image_two_line: {
	width: 328,
	height: 88,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 5188},
		{translateY: 1507},
	],
	},
_Rectangle_371: {
	width: 328,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Ellipse_1: {
	width: 56,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 16},
	],
	},
_Group_7: {
	width: 42,
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
style10: {
	position: "absolute",
	},
style11: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style12: {
	},
_Cards: {
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
_1__Cards___A__Rectangle___b__Left_flaticon_one_line: {
	width: 328,
	height: 64,
	position: "absolute",
	left: 82,
	top: 575,
	},
_Rectangle_345: {
	width: 328,
	height: 64,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5188},
		{translateY: 1871},
	],
	},
_______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5284},
		{translateY: 1895},
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
		{translateX: 114},
		{translateY: 595},
	],
	},
_pills__2__1: {
	width: "100%",
	height: "100%",
	},
_1__Cards___A__Rectangle___a__Left_image_two_line______2: {
	width: 328,
	height: 88,
	position: "absolute",
	left: 82,
	top: 302,
	},
_Rectangle_371_2: {
	width: 328,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5188},
		{translateY: 1598},
	],
	},
_Ellipse_1_2: {
	width: 56,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 5204},
		{translateY: 1614},
	],
	},
_Group_7_2: {
	width: 42,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 5284},
		{translateY: 1626},
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
_2__Contained___C____: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 5436},
		{translateY: 1630},
	],
	},
_Rectangle_537: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(38, 199, 217)",
	position: "absolute",
	borderRadius: 15,
	},
___: {
	width: 26.8335,
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
_1__Cards___A__Rectangle___a__Left_image_two_line______3: {
	width: 328,
	height: 88,
	position: "absolute",
	left: 82,
	top: 393,
	},
_Rectangle_371_3: {
	width: 328,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5188},
		{translateY: 1689},
	],
	},
_Ellipse_1_3: {
	width: 56,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 5204},
		{translateY: 1705},
	],
	},
_Group_7_3: {
	width: 42,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 5284},
		{translateY: 1717},
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
_2__Contained___B____: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 5436},
		{translateY: 1721},
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
	width: 26.8335,
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
	left: 82,
	top: 484,
	},
_Rectangle_371_4: {
	width: 328,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5188},
		{translateY: 1780},
	],
	},
_Ellipse_1_4: {
	width: 56,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 5204},
		{translateY: 1796},
	],
	},
_Group_7_4: {
	width: 42,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 5284},
		{translateY: 1808},
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
_2__Contained___A____: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 5436},
		{translateY: 1812},
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
	width: 26.8335,
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
_1__Cards___A__Rectangle___e__image_two_line_checkbox_inactive_: {
	width: 360,
	height: 88,
	position: "absolute",
	left: 82,
	top: 642,
	},
_Rectangle_371_5: {
	width: 360,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5188},
		{translateY: 1938},
	],
	},
style49: {
	position: "absolute",
	transform: [
		{translateX: 98},
		{translateY: 656},
	],
	},
style50: {
	},
_Group_7_5: {
	width: 42,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 5284},
		{translateY: 1965},
	],
	},
______5: {
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
_____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(0, 0, 0)",
	fontSize: 10,
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
		{translateX: 5500},
		{translateY: 1970},
	],
	},
_ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style56: {
	position: "absolute",
	transform: [
		{translateX: 5.87988},
		{translateY: 2},
	],
	},
style57: {
	},
style58: {
	position: "absolute",
	},
_1__Cards___A__Rectangle___d__image_two_line_checkbox_active_: {
	width: 360,
	height: 88,
	position: "absolute",
	left: 82,
	top: 733,
	},
_Rectangle_371_6: {
	width: 360,
	height: 88,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5188},
		{translateY: 2029},
	],
	},
style61: {
	position: "absolute",
	transform: [
		{translateX: 98},
		{translateY: 747},
	],
	},
style62: {
	},
_Group_7_6: {
	width: 42,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 5284},
		{translateY: 2056},
	],
	},
______6: {
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
_____6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(0, 0, 0)",
	fontSize: 10,
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
		{translateX: 5500},
		{translateY: 2061},
	],
	},
_ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style68: {
	position: "absolute",
	transform: [
		{translateX: 5.87988},
		{translateY: 2},
	],
	},
style69: {
	},
style70: {
	position: "absolute",
	},
______7: {
	width: 312,
	height: 168,
	position: "absolute",
	left: 80,
	top: 2005,
	},
_Rectangle_396: {
	width: 312,
	height: 168,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5186},
		{translateY: 3301},
	],
	borderRadius: 8,
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_1__Button___B__Medium___a__solid: {
	width: 128,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5206},
		{translateY: 3397},
	],
	},
_Rectangle_394: {
	width: 128,
	height: 48,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	borderRadius: 24,
	},
____4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 35.4443},
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
		{translateX: 5350},
		{translateY: 3397},
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
____5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 35.4443},
		{translateY: 16},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
______8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5312},
		{translateY: 3341},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Cards___pop_up___________: {
	width: 360,
	height: 280,
	position: "absolute",
	left: 450,
	top: 222,
	},
_Group_217: {
	width: 360,
	height: 280,
	position: "absolute",
	transform: [
		{translateX: 5556},
		{translateY: 1518},
	],
	},
_Rectangle_539: {
	width: 360,
	height: 280,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	borderRadius: 8,
	},
__________________________: {
	width: 303,
	height: 16.4706,
	position: "absolute",
	transform: [
		{translateX: 30},
		{translateY: 151},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
__________________________________: {
	width: 262,
	height: 95,
	position: "absolute",
	transform: [
		{translateX: 32},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 22,
	fontWeight: "700",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Button___B__Medium___a__solid_2: {
	width: 144,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5744},
		{translateY: 1718},
	],
	},
_Rectangle_394_3: {
	width: 144,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 24,
	},
____6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 46},
		{translateY: 16},
	],
	color: "rgb(0, 189, 211)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___c__line_2: {
	width: 144,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5584},
		{translateY: 1718},
	],
	},
_Rectangle_394_4: {
	width: 144,
	height: 48,
	position: "absolute",
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 24,
	},
____7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 53},
		{translateY: 16},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Cards______check_card: {
	width: 312,
	height: 496,
	position: "absolute",
	left: 80,
	top: 1504,
	},
_Rectangle_477: {
	width: 312,
	height: 496,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5186},
		{translateY: 2800},
	],
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
	transform: [
		{translateX: 5210},
		{translateY: 2832},
	],
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
______: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5215},
		{translateY: 3184},
	],
	color: "rgba(0, 0, 0, 0.95)",
	fontSize: 18,
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
		{translateX: 5447},
		{translateY: 3184},
	],
	},
_ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style99: {
	position: "absolute",
	},
style100: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
style101: {
	},
_Rectangle_482: {
	width: 296,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5194},
		{translateY: 3170},
	],
	},
_1__Button___B__Medium___a__solid_3: {
	width: 128,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5350},
		{translateY: 3224},
	],
	},
_Rectangle_394_5: {
	width: 128,
	height: 48,
	backgroundColor: "rgb(0, 189, 211)",
	position: "absolute",
	borderRadius: 24,
	},
____8: {
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
_1__Button___B__Medium___c__line_3: {
	width: 128,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5206},
		{translateY: 3224},
	],
	},
_Rectangle_394_6: {
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
____9: {
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
	transform: [
		{translateX: 5198},
		{translateY: 2906},
	],
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
	transform: [
		{translateX: 20},
		{translateY: 48},
	],
	},
________: {
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
_ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style115: {
	position: "absolute",
	},
style116: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style117: {
	},
_Group_248: {
	width: 119,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 20},
		{translateY: 80},
	],
	},
_______2_0: {
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
_ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style122: {
	position: "absolute",
	},
style123: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
style124: {
	},
_______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 17},
	],
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
	transform: [
		{translateX: 5198},
		{translateY: 3034},
	],
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
	transform: [
		{translateX: 21},
		{translateY: 48},
	],
	},
_____7: {
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
_ic_7: {
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
_Group_250: {
	width: 97,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 80},
	],
	},
_______4: {
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
_ic_8: {
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
________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 16},
	],
	color: "rgb(242, 133, 38)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Cards____________: {
	width: 328,
	height: 233,
	position: "absolute",
	left: 80,
	top: 1022,
	},
_Group_246: {
	width: 328,
	height: 233,
	position: "absolute",
	transform: [
		{translateX: 5186},
		{translateY: 2318},
	],
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
_Alert___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 16},
	],
	},
_ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style153: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 2.5},
	],
	},
style154: {
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
_________2: {
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
_____8: {
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
_______2_0_2: {
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
_______5: {
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
_Action___ic_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 93},
	],
	},
_ic_10: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style165: {
	position: "absolute",
	},
style166: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style167: {
	},
_Action___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 117},
	],
	},
_ic_11: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style170: {
	position: "absolute",
	},
style171: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style172: {
	},
_Action___ic_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 141},
	],
	},
_ic_12: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style175: {
	position: "absolute",
	},
style176: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style177: {
	},
_Action___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 165},
	],
	},
_ic_13: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style180: {
	position: "absolute",
	},
style181: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style182: {
	},
_Group_267: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 5200},
		{translateY: 2383},
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
____10: {
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
		{translateX: 5200},
		{translateY: 2463},
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
____11: {
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
		{translateX: 5272},
		{translateY: 2383},
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
______9: {
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
		{translateX: 5272},
		{translateY: 2463},
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
______10: {
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
_1__Cards_____________2: {
	width: 328,
	height: 233,
	position: "absolute",
	left: 80,
	top: 1263,
	},
_Group_246_2: {
	width: 328,
	height: 233,
	position: "absolute",
	transform: [
		{translateX: 5186},
		{translateY: 2559},
	],
	},
_Group_244_2: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Group_238_3: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Group_233_2: {
	width: 328,
	height: 233,
	position: "absolute",
	},
_Rectangle_548_4: {
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
_Rectangle_549_2: {
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
_06_30___08_30_2: {
	width: 84,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 180},
		{translateY: 16},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Alert___ic_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 16},
	],
	},
_ic_14: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style209: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 2.5},
	],
	},
style210: {
	},
_Group_237_2: {
	width: 164,
	height: 184,
	position: "absolute",
	transform: [
		{translateY: 49},
	],
	},
_Rectangle_548_5: {
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
_Group_238_4: {
	width: 164,
	height: 184,
	position: "absolute",
	transform: [
		{translateX: 164},
		{translateY: 49},
	],
	},
_Rectangle_548_6: {
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
_________3: {
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
_____9: {
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
_______2_0_3: {
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
_______6: {
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
_Action___ic_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 93},
	],
	},
_ic_15: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style221: {
	position: "absolute",
	},
style222: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style223: {
	},
_Action___ic_7: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 117},
	],
	},
_ic_16: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style226: {
	position: "absolute",
	},
style227: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style228: {
	},
_Action___ic_8: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 141},
	],
	},
_ic_17: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style231: {
	position: "absolute",
	},
style232: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style233: {
	},
_Action___ic_9: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 288},
		{translateY: 165},
	],
	},
_ic_18: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style236: {
	position: "absolute",
	},
style237: {
	position: "absolute",
	transform: [
		{translateX: 3.3999},
		{translateY: 5.6001},
	],
	},
style238: {
	},
_Group_267_2: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 5200},
		{translateY: 2624},
	],
	},
_Rectangle_586_2: {
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
____12: {
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
_2_3: {
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
_Group_268_2: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 5200},
		{translateY: 2704},
	],
	},
_Rectangle_588_2: {
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
____13: {
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
_0_3: {
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
_Group_266_2: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 5272},
		{translateY: 2624},
	],
	},
_Rectangle_587_2: {
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
_2_4: {
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
______11: {
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
_Group_269_2: {
	width: 64,
	height: 72,
	position: "absolute",
	transform: [
		{translateX: 5272},
		{translateY: 2704},
	],
	},
_Rectangle_589_2: {
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
_0_4: {
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
______12: {
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
_1__Cards___medicine_card_________: {
	width: 360,
	height: 557,
	position: "absolute",
	left: 449,
	top: 1559,
	},
_Group_290: {
	width: 360,
	height: 557,
	position: "absolute",
	transform: [
		{translateX: 5555},
		{translateY: 2855},
	],
	},
_Union: {
	width: 360,
	height: 557,
	position: "absolute",
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Rectangle_593_2: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5571},
		{translateY: 2911},
	],
	},
_Rectangle_594_2: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5571},
		{translateY: 3041},
	],
	},
_Rectangle_595: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5571},
		{translateY: 2976},
	],
	},
_Rectangle_596: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5571},
		{translateY: 3106},
	],
	},
_Rectangle_592: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5571},
		{translateY: 3159},
	],
	},
_Rectangle_597: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5571},
		{translateY: 3200},
	],
	},
_Rectangle_600: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5571},
		{translateY: 3335},
	],
	},
_Rectangle_598: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5571},
		{translateY: 3241},
	],
	},
_Rectangle_599: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 5571},
		{translateY: 3294},
	],
	},
______13: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 2879},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 2936},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 3066},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 3119},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______14: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 3172},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_________4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 3307},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
___________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 3348},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______15: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 3213},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 3254},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______16: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 2879},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 2920},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____________________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 3050},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 3120},
	],
	color: "rgba(0, 0, 0, 0.698)",
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
		{translateX: 5683},
		{translateY: 3168},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 3303},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____14: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 3344},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
__________________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 3209},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
__________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 3255},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5579},
		{translateY: 2993},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
___________________________________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 2985},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_________5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5683},
		{translateY: 2944},
	],
	color: "rgba(0, 0, 0, 0.698)",
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
		{translateX: 5875},
		{translateY: 2877},
	],
	},
_ic_19: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style290: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
style291: {
	},
style292: {
	position: "absolute",
	},
_1__Cards___medicine_card_______active_: {
	width: 360,
	height: 416,
	position: "absolute",
	left: 823,
	top: 222,
	},
_Group_293: {
	width: 360,
	height: 416,
	position: "absolute",
	transform: [
		{translateX: 5929},
		{translateY: 1518},
	],
	},
_Group_289: {
	width: 360,
	height: 416,
	position: "absolute",
	},
_Union_2: {
	width: 360,
	height: 416,
	position: "absolute",
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_____11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 251},
		{translateY: 24},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Rectangle_374: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 144},
	],
	},
_Rectangle_590: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 274},
	],
	},
_Rectangle_375: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 211},
	],
	},
_Rectangle_591: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 339},
	],
	},
______18: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 112},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____12: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 169},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 299},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 352},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______19: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 128},
		{translateY: 112},
	],
	color: "rgb(0, 173, 192)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
__________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 128},
		{translateY: 153},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____________________________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 128},
		{translateY: 283},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______________________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 128},
		{translateY: 353},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
________________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 226},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
___________________________________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 128},
		{translateY: 218},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_________6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 128},
		{translateY: 177},
	],
	color: "rgba(0, 0, 0, 0.698)",
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
		{translateX: 6097},
		{translateY: 1598},
	],
	},
_ic_20: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style315: {
	position: "absolute",
	transform: [
		{translateX: 2.1001},
	],
	},
style316: {
	},
style317: {
	position: "absolute",
	},
_1__Cards___medicine_card_______inactive_: {
	width: 360,
	height: 416,
	position: "absolute",
	left: 823,
	top: 650,
	},
_Union_3: {
	width: 360,
	height: 416,
	position: "absolute",
	transform: [
		{translateX: 5929},
		{translateY: 1946},
	],
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_____13: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 6180},
		{translateY: 1970},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Cards___medicine_card________inactive_: {
	width: 360,
	height: 416,
	position: "absolute",
	left: 823,
	top: 1072,
	},
_Union_4: {
	width: 360,
	height: 416,
	position: "absolute",
	transform: [
		{translateX: 5929},
		{translateY: 2368},
	],
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_______9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5992},
		{translateY: 2392},
	],
	color: "rgba(0, 0, 0, 0.35)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Cards___medicine_card_______: {
	width: 360,
	height: 416,
	position: "absolute",
	left: 823,
	top: 1500,
	},
_Union_5: {
	width: 360,
	height: 416,
	position: "absolute",
	transform: [
		{translateX: 5929},
		{translateY: 2796},
	],
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
______20: {
	width: 318,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 5953},
		{translateY: 2902},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 32,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____14: {
	width: 65,
	height: 23.9363,
	position: "absolute",
	transform: [
		{translateX: 5953},
		{translateY: 2877.93},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_132: {
	width: 328,
	height: 130,
	position: "absolute",
	transform: [
		{translateX: 5945},
		{translateY: 2958},
	],
	},
_Rectangle_374_2: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 32},
	],
	},
_Rectangle_375_2: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 97},
	],
	},
_______10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 45},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______12: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_0_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 41},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Group_287: {
	width: 237,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 106},
	],
	},
_______13: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____________1_30__: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 72},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____30_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 65},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_Large_Buttons: {
	width: 292,
	height: 48,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 5966},
		{translateY: 3124},
	],
	},
_1__Contained_A__Text_a__Large___Enabled: {
	width: 292,
	height: 48,
	position: "absolute",
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
____15: {
	width: 161,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 65},
		{translateY: 16},
	],
	color: "rgb(38, 199, 217)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_______14: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5991},
		{translateY: 2820},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Cards___medicine_card___active: {
	width: 360,
	height: 472,
	position: "absolute",
	left: 450,
	top: 1081,
	},
_Union_6: {
	width: 360,
	height: 472,
	position: "absolute",
	transform: [
		{translateX: 5556},
		{translateY: 2377},
	],
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowColor: "rgba(0, 0, 0, 0.1)",
	shadowRadius: 4,
	},
_Group_132_2: {
	width: 328,
	height: 212,
	position: "absolute",
	transform: [
		{translateX: 5572},
		{translateY: 2539},
	],
	},
_Rectangle_374_3: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 73},
	],
	},
_Rectangle_377: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 32},
	],
	},
_Rectangle_375_3: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 138},
	],
	},
_Rectangle_376: {
	width: 328,
	height: 1,
	backgroundColor: "rgba(0, 0, 0, 0.12)",
	position: "absolute",
	transform: [
		{translateY: 179},
	],
	},
_______15: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 45},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____15: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 4},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______16: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 86},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______17: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 151},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______18: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 192},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______19: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 41},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______21: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_0______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 82},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____________1_30___2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 147},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_2021_07_04_2021_08_04: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 188},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
____30__2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 80},
		{translateY: 106},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
________5_50mg: {
	width: 232,
	height: 32,
	position: "absolute",
	transform: [
		{translateX: 5580},
		{translateY: 2483},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 32,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_____16: {
	width: 65,
	height: 23.9363,
	position: "absolute",
	transform: [
		{translateX: 5580},
		{translateY: 2458.93},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_______20: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 5619},
		{translateY: 2401},
	],
	color: "rgba(0, 0, 0, 0.698)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Button___B__Medium___c__line_4: {
	width: 144,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5584},
		{translateY: 2769},
	],
	},
_Rectangle_394_7: {
	width: 144,
	height: 48,
	position: "absolute",
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(139, 166, 41)",
	borderRadius: 24,
	},
____16: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 59},
		{translateY: 16},
	],
	color: "rgb(139, 166, 41)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___c__line_5: {
	width: 144,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5744},
		{translateY: 2769},
	],
	},
_Rectangle_394_8: {
	width: 144,
	height: 48,
	position: "absolute",
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(176, 0, 32)",
	borderRadius: 24,
	},
____17: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 59},
		{translateY: 16},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_2__Contained___A_____2: {
	width: 56,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 5820},
		{translateY: 2487},
	],
	},
_Rectangle_537_4: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(242, 89, 75)",
	position: "absolute",
	borderRadius: 15,
	},
____18: {
	width: 26.8335,
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
_1__Cards___QnA_answer_: {
	width: 328,
	height: 184,
	position: "absolute",
	left: 82,
	top: 830,
	},
_Rectangle_553: {
	width: 328,
	height: 184,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 5188},
		{translateY: 2126},
	],
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
		{translateX: 5212},
		{translateY: 2190},
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
		{translateX: 5188},
		{translateY: 2138},
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
_Navigation___ic_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 264},
	],
	},
_ic_21: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
style384: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 8},
	],
	},
style385: {
	},
style386: {
	position: "absolute",
	},
_Rectangle_374_4: {
	width: 328,
	height: 1,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	transform: [
		{translateY: 35},
	],
	},
_1__Cards___pop_up____________2: {
	width: 360,
	height: 280,
	position: "absolute",
	left: 450,
	top: 510,
	},
_Group_217_2: {
	width: 360,
	height: 280,
	position: "absolute",
	transform: [
		{translateX: 5556},
		{translateY: 1806},
	],
	},
_Rectangle_539_2: {
	width: 360,
	height: 280,
	backgroundColor: "rgb(139, 166, 41)",
	position: "absolute",
	borderRadius: 8,
	},
___________________________2: {
	width: 303,
	height: 16.4706,
	position: "absolute",
	transform: [
		{translateX: 30},
		{translateY: 86},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______________3: {
	width: 262,
	height: 30,
	position: "absolute",
	transform: [
		{translateX: 32},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 22,
	fontWeight: "700",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Button___B__Medium___a__solid_4: {
	width: 144,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5744},
		{translateY: 2006},
	],
	},
_Rectangle_394_9: {
	width: 144,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 24,
	},
____19: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 46},
		{translateY: 16},
	],
	color: "rgb(139, 166, 41)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___c__line_6: {
	width: 144,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5584},
		{translateY: 2006},
	],
	},
_Rectangle_394_10: {
	width: 144,
	height: 48,
	position: "absolute",
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 24,
	},
____20: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 59},
		{translateY: 16},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Cards___pop_up____________3: {
	width: 360,
	height: 280,
	position: "absolute",
	left: 450,
	top: 798,
	},
_Group_217_3: {
	width: 360,
	height: 280,
	position: "absolute",
	transform: [
		{translateX: 5556},
		{translateY: 2094},
	],
	},
_Rectangle_539_3: {
	width: 360,
	height: 280,
	backgroundColor: "rgb(176, 0, 32)",
	position: "absolute",
	borderRadius: 8,
	},
_____________________________3: {
	width: 303,
	height: 16.4707,
	position: "absolute",
	transform: [
		{translateX: 30},
		{translateY: 86},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 16,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
______________4: {
	width: 262,
	height: 30,
	position: "absolute",
	transform: [
		{translateX: 32},
		{translateY: 48},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 22,
	fontWeight: "700",
	lineHeight: 24,
	fontFamily: "Noto Sans KR",
	textAlign: "left",
	},
_1__Button___B__Medium___a__solid_5: {
	width: 144,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5744},
		{translateY: 2294},
	],
	},
_Rectangle_394_11: {
	width: 144,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 24,
	},
____21: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 46},
		{translateY: 16},
	],
	color: "rgb(176, 0, 32)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
_1__Button___B__Medium___c__line_7: {
	width: 144,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 5584},
		{translateY: 2294},
	],
	},
_Rectangle_394_12: {
	width: 144,
	height: 48,
	position: "absolute",
	borderTopWidth: 1.5,
	borderRightWidth: 1.5,
	borderBottomWidth: 1.5,
	borderLeftWidth: 1.5,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 24,
	},
____22: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 59},
		{translateY: 16},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Noto Sans KR",
	textAlign: "center",
	},
})

