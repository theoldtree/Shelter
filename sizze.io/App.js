import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_first_page from "./pages/Page_first_page/Page_first_page.js";
import Page_12 from "./pages/Page_12/Page_12.js";
import Page_24 from "./pages/Page_24/Page_24.js";
import Page_15 from "./pages/Page_15/Page_15.js";
import Page_13 from "./pages/Page_13/Page_13.js";
import Page_16 from "./pages/Page_16/Page_16.js";
import Page_14 from "./pages/Page_14/Page_14.js";
import Page_etc from "./pages/Page_etc/Page_etc.js";
import Page_Icons from "./pages/Page_Icons/Page_Icons.js";
import Page_Text_Fields from "./pages/Page_Text_Fields/Page_Text_Fields.js";
import Page_Selection_Controls from "./pages/Page_Selection_Controls/Page_Selection_Controls.js";
import Page_Menu from "./pages/Page_Menu/Page_Menu.js";
import Page_Main_Banners from "./pages/Page_Main_Banners/Page_Main_Banners.js";
import Page_Lists from "./pages/Page_Lists/Page_Lists.js";
import Page_Search_Fields from "./pages/Page_Search_Fields/Page_Search_Fields.js";
import Page_Dividers from "./pages/Page_Dividers/Page_Dividers.js";
import Page_Tabs from "./pages/Page_Tabs/Page_Tabs.js";
import Page_Data_Tables from "./pages/Page_Data_Tables/Page_Data_Tables.js";
import Page_Drawers from "./pages/Page_Drawers/Page_Drawers.js";
import Page_Date_Picker from "./pages/Page_Date_Picker/Page_Date_Picker.js";
import Page_Chips from "./pages/Page_Chips/Page_Chips.js";
import Page_Buttons from "./pages/Page_Buttons/Page_Buttons.js";
import Page_Bottom_Navigation from "./pages/Page_Bottom_Navigation/Page_Bottom_Navigation.js";
import Page_36_____________2 from "./pages/Page_36_____________2/Page_36_____________2.js";
import Page_35_____________2 from "./pages/Page_35_____________2/Page_35_____________2.js";
import Page_30_____________ from "./pages/Page_30_____________/Page_30_____________.js";
import Page_29_____________ from "./pages/Page_29_____________/Page_29_____________.js";
import Page_28_____________ from "./pages/Page_28_____________/Page_28_____________.js";
import Page_34_____________ from "./pages/Page_34_____________/Page_34_____________.js";
import Page_32__________________________ from "./pages/Page_32__________________________/Page_32__________________________.js";
import Page_Cards from "./pages/Page_Cards/Page_Cards.js";
import Page_23____________ from "./pages/Page_23____________/Page_23____________.js";
import Page_31______________________________ from "./pages/Page_31______________________________/Page_31______________________________.js";
import Page_18___________________ from "./pages/Page_18___________________/Page_18___________________.js";
import Page_19________________X_ from "./pages/Page_19________________X_/Page_19________________X_.js";
import Page_22________________O____ from "./pages/Page_22________________O____/Page_22________________O____.js";
import Page_21________________O____ from "./pages/Page_21________________O____/Page_21________________O____.js";
import Page_20________________O____ from "./pages/Page_20________________O____/Page_20________________O____.js";
import Page_25 from "./pages/Page_25/Page_25.js";
import Page_17 from "./pages/Page_17/Page_17.js";
import Page_43 from "./pages/Page_43/Page_43.js";
import Page_44 from "./pages/Page_44/Page_44.js";
import Page_42 from "./pages/Page_42/Page_42.js";
import Page_33 from "./pages/Page_33/Page_33.js";
import Page_41 from "./pages/Page_41/Page_41.js";
import Page_40 from "./pages/Page_40/Page_40.js";
import Page_39 from "./pages/Page_39/Page_39.js";
import Page_38 from "./pages/Page_38/Page_38.js";
import Page_11 from "./pages/Page_11/Page_11.js";
import Page_10 from "./pages/Page_10/Page_10.js";
import Page_9 from "./pages/Page_9/Page_9.js";
import Page_37 from "./pages/Page_37/Page_37.js";
import Page_4 from "./pages/Page_4/Page_4.js";
import Page_1 from "./pages/Page_1/Page_1.js";
import Page_2 from "./pages/Page_2/Page_2.js";
import Page_7 from "./pages/Page_7/Page_7.js";
import Page_6 from "./pages/Page_6/Page_6.js";
import Page_5 from "./pages/Page_5/Page_5.js";
import Page_8 from "./pages/Page_8/Page_8.js";
import Page_3 from "./pages/Page_3/Page_3.js";
import Page_App_Bars from "./pages/Page_App_Bars/Page_App_Bars.js";
const Tab = createBottomTabNavigator();
const Page_first_pageStackNavigator = createStackNavigator();
const ScreenForPage_first_page = () => {
	return (
		<Page_first_pageStackNavigator.Navigator>
			<Page_first_pageStackNavigator.Screen
				name = "Page_first_page"
				component = {Page_first_page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_first_pageStackNavigator.Navigator>
	)
};
const Page_12StackNavigator = createStackNavigator();
const ScreenForPage_12 = () => {
	return (
		<Page_12StackNavigator.Navigator>
			<Page_12StackNavigator.Screen
				name = "Page_12"
				component = {Page_12}
				options = {{
					headerShown: false
				}}
			/>
		</Page_12StackNavigator.Navigator>
	)
};
const Page_24StackNavigator = createStackNavigator();
const ScreenForPage_24 = () => {
	return (
		<Page_24StackNavigator.Navigator>
			<Page_24StackNavigator.Screen
				name = "Page_24"
				component = {Page_24}
				options = {{
					headerShown: false
				}}
			/>
		</Page_24StackNavigator.Navigator>
	)
};
const Page_15StackNavigator = createStackNavigator();
const ScreenForPage_15 = () => {
	return (
		<Page_15StackNavigator.Navigator>
			<Page_15StackNavigator.Screen
				name = "Page_15"
				component = {Page_15}
				options = {{
					headerShown: false
				}}
			/>
		</Page_15StackNavigator.Navigator>
	)
};
const Page_13StackNavigator = createStackNavigator();
const ScreenForPage_13 = () => {
	return (
		<Page_13StackNavigator.Navigator>
			<Page_13StackNavigator.Screen
				name = "Page_13"
				component = {Page_13}
				options = {{
					headerShown: false
				}}
			/>
		</Page_13StackNavigator.Navigator>
	)
};
const Page_16StackNavigator = createStackNavigator();
const ScreenForPage_16 = () => {
	return (
		<Page_16StackNavigator.Navigator>
			<Page_16StackNavigator.Screen
				name = "Page_16"
				component = {Page_16}
				options = {{
					headerShown: false
				}}
			/>
		</Page_16StackNavigator.Navigator>
	)
};
const Page_14StackNavigator = createStackNavigator();
const ScreenForPage_14 = () => {
	return (
		<Page_14StackNavigator.Navigator>
			<Page_14StackNavigator.Screen
				name = "Page_14"
				component = {Page_14}
				options = {{
					headerShown: false
				}}
			/>
		</Page_14StackNavigator.Navigator>
	)
};
const Page_etcStackNavigator = createStackNavigator();
const ScreenForPage_etc = () => {
	return (
		<Page_etcStackNavigator.Navigator>
			<Page_etcStackNavigator.Screen
				name = "Page_etc"
				component = {Page_etc}
				options = {{
					headerShown: false
				}}
			/>
		</Page_etcStackNavigator.Navigator>
	)
};
const Page_IconsStackNavigator = createStackNavigator();
const ScreenForPage_Icons = () => {
	return (
		<Page_IconsStackNavigator.Navigator>
			<Page_IconsStackNavigator.Screen
				name = "Page_Icons"
				component = {Page_Icons}
				options = {{
					headerShown: false
				}}
			/>
		</Page_IconsStackNavigator.Navigator>
	)
};
const Page_Text_FieldsStackNavigator = createStackNavigator();
const ScreenForPage_Text_Fields = () => {
	return (
		<Page_Text_FieldsStackNavigator.Navigator>
			<Page_Text_FieldsStackNavigator.Screen
				name = "Page_Text_Fields"
				component = {Page_Text_Fields}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Text_FieldsStackNavigator.Navigator>
	)
};
const Page_Selection_ControlsStackNavigator = createStackNavigator();
const ScreenForPage_Selection_Controls = () => {
	return (
		<Page_Selection_ControlsStackNavigator.Navigator>
			<Page_Selection_ControlsStackNavigator.Screen
				name = "Page_Selection_Controls"
				component = {Page_Selection_Controls}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Selection_ControlsStackNavigator.Navigator>
	)
};
const Page_MenuStackNavigator = createStackNavigator();
const ScreenForPage_Menu = () => {
	return (
		<Page_MenuStackNavigator.Navigator>
			<Page_MenuStackNavigator.Screen
				name = "Page_Menu"
				component = {Page_Menu}
				options = {{
					headerShown: false
				}}
			/>
		</Page_MenuStackNavigator.Navigator>
	)
};
const Page_Main_BannersStackNavigator = createStackNavigator();
const ScreenForPage_Main_Banners = () => {
	return (
		<Page_Main_BannersStackNavigator.Navigator>
			<Page_Main_BannersStackNavigator.Screen
				name = "Page_Main_Banners"
				component = {Page_Main_Banners}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Main_BannersStackNavigator.Navigator>
	)
};
const Page_ListsStackNavigator = createStackNavigator();
const ScreenForPage_Lists = () => {
	return (
		<Page_ListsStackNavigator.Navigator>
			<Page_ListsStackNavigator.Screen
				name = "Page_Lists"
				component = {Page_Lists}
				options = {{
					headerShown: false
				}}
			/>
		</Page_ListsStackNavigator.Navigator>
	)
};
const Page_Search_FieldsStackNavigator = createStackNavigator();
const ScreenForPage_Search_Fields = () => {
	return (
		<Page_Search_FieldsStackNavigator.Navigator>
			<Page_Search_FieldsStackNavigator.Screen
				name = "Page_Search_Fields"
				component = {Page_Search_Fields}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Search_FieldsStackNavigator.Navigator>
	)
};
const Page_DividersStackNavigator = createStackNavigator();
const ScreenForPage_Dividers = () => {
	return (
		<Page_DividersStackNavigator.Navigator>
			<Page_DividersStackNavigator.Screen
				name = "Page_Dividers"
				component = {Page_Dividers}
				options = {{
					headerShown: false
				}}
			/>
		</Page_DividersStackNavigator.Navigator>
	)
};
const Page_TabsStackNavigator = createStackNavigator();
const ScreenForPage_Tabs = () => {
	return (
		<Page_TabsStackNavigator.Navigator>
			<Page_TabsStackNavigator.Screen
				name = "Page_Tabs"
				component = {Page_Tabs}
				options = {{
					headerShown: false
				}}
			/>
		</Page_TabsStackNavigator.Navigator>
	)
};
const Page_Data_TablesStackNavigator = createStackNavigator();
const ScreenForPage_Data_Tables = () => {
	return (
		<Page_Data_TablesStackNavigator.Navigator>
			<Page_Data_TablesStackNavigator.Screen
				name = "Page_Data_Tables"
				component = {Page_Data_Tables}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Data_TablesStackNavigator.Navigator>
	)
};
const Page_DrawersStackNavigator = createStackNavigator();
const ScreenForPage_Drawers = () => {
	return (
		<Page_DrawersStackNavigator.Navigator>
			<Page_DrawersStackNavigator.Screen
				name = "Page_Drawers"
				component = {Page_Drawers}
				options = {{
					headerShown: false
				}}
			/>
		</Page_DrawersStackNavigator.Navigator>
	)
};
const Page_Date_PickerStackNavigator = createStackNavigator();
const ScreenForPage_Date_Picker = () => {
	return (
		<Page_Date_PickerStackNavigator.Navigator>
			<Page_Date_PickerStackNavigator.Screen
				name = "Page_Date_Picker"
				component = {Page_Date_Picker}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Date_PickerStackNavigator.Navigator>
	)
};
const Page_ChipsStackNavigator = createStackNavigator();
const ScreenForPage_Chips = () => {
	return (
		<Page_ChipsStackNavigator.Navigator>
			<Page_ChipsStackNavigator.Screen
				name = "Page_Chips"
				component = {Page_Chips}
				options = {{
					headerShown: false
				}}
			/>
		</Page_ChipsStackNavigator.Navigator>
	)
};
const Page_ButtonsStackNavigator = createStackNavigator();
const ScreenForPage_Buttons = () => {
	return (
		<Page_ButtonsStackNavigator.Navigator>
			<Page_ButtonsStackNavigator.Screen
				name = "Page_Buttons"
				component = {Page_Buttons}
				options = {{
					headerShown: false
				}}
			/>
		</Page_ButtonsStackNavigator.Navigator>
	)
};
const Page_Bottom_NavigationStackNavigator = createStackNavigator();
const ScreenForPage_Bottom_Navigation = () => {
	return (
		<Page_Bottom_NavigationStackNavigator.Navigator>
			<Page_Bottom_NavigationStackNavigator.Screen
				name = "Page_Bottom_Navigation"
				component = {Page_Bottom_Navigation}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Bottom_NavigationStackNavigator.Navigator>
	)
};
const Page_36_____________2StackNavigator = createStackNavigator();
const ScreenForPage_36_____________2 = () => {
	return (
		<Page_36_____________2StackNavigator.Navigator>
			<Page_36_____________2StackNavigator.Screen
				name = "Page_36_____________2"
				component = {Page_36_____________2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_36_____________2StackNavigator.Navigator>
	)
};
const Page_35_____________2StackNavigator = createStackNavigator();
const ScreenForPage_35_____________2 = () => {
	return (
		<Page_35_____________2StackNavigator.Navigator>
			<Page_35_____________2StackNavigator.Screen
				name = "Page_35_____________2"
				component = {Page_35_____________2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_35_____________2StackNavigator.Navigator>
	)
};
const Page_30_____________StackNavigator = createStackNavigator();
const ScreenForPage_30_____________ = () => {
	return (
		<Page_30_____________StackNavigator.Navigator>
			<Page_30_____________StackNavigator.Screen
				name = "Page_30_____________"
				component = {Page_30_____________}
				options = {{
					headerShown: false
				}}
			/>
		</Page_30_____________StackNavigator.Navigator>
	)
};
const Page_29_____________StackNavigator = createStackNavigator();
const ScreenForPage_29_____________ = () => {
	return (
		<Page_29_____________StackNavigator.Navigator>
			<Page_29_____________StackNavigator.Screen
				name = "Page_29_____________"
				component = {Page_29_____________}
				options = {{
					headerShown: false
				}}
			/>
		</Page_29_____________StackNavigator.Navigator>
	)
};
const Page_28_____________StackNavigator = createStackNavigator();
const ScreenForPage_28_____________ = () => {
	return (
		<Page_28_____________StackNavigator.Navigator>
			<Page_28_____________StackNavigator.Screen
				name = "Page_28_____________"
				component = {Page_28_____________}
				options = {{
					headerShown: false
				}}
			/>
		</Page_28_____________StackNavigator.Navigator>
	)
};
const Page_34_____________StackNavigator = createStackNavigator();
const ScreenForPage_34_____________ = () => {
	return (
		<Page_34_____________StackNavigator.Navigator>
			<Page_34_____________StackNavigator.Screen
				name = "Page_34_____________"
				component = {Page_34_____________}
				options = {{
					headerShown: false
				}}
			/>
		</Page_34_____________StackNavigator.Navigator>
	)
};
const Page_32__________________________StackNavigator = createStackNavigator();
const ScreenForPage_32__________________________ = () => {
	return (
		<Page_32__________________________StackNavigator.Navigator>
			<Page_32__________________________StackNavigator.Screen
				name = "Page_32__________________________"
				component = {Page_32__________________________}
				options = {{
					headerShown: false
				}}
			/>
		</Page_32__________________________StackNavigator.Navigator>
	)
};
const Page_CardsStackNavigator = createStackNavigator();
const ScreenForPage_Cards = () => {
	return (
		<Page_CardsStackNavigator.Navigator>
			<Page_CardsStackNavigator.Screen
				name = "Page_Cards"
				component = {Page_Cards}
				options = {{
					headerShown: false
				}}
			/>
		</Page_CardsStackNavigator.Navigator>
	)
};
const Page_23____________StackNavigator = createStackNavigator();
const ScreenForPage_23____________ = () => {
	return (
		<Page_23____________StackNavigator.Navigator>
			<Page_23____________StackNavigator.Screen
				name = "Page_23____________"
				component = {Page_23____________}
				options = {{
					headerShown: false
				}}
			/>
		</Page_23____________StackNavigator.Navigator>
	)
};
const Page_31______________________________StackNavigator = createStackNavigator();
const ScreenForPage_31______________________________ = () => {
	return (
		<Page_31______________________________StackNavigator.Navigator>
			<Page_31______________________________StackNavigator.Screen
				name = "Page_31______________________________"
				component = {Page_31______________________________}
				options = {{
					headerShown: false
				}}
			/>
		</Page_31______________________________StackNavigator.Navigator>
	)
};
const Page_18___________________StackNavigator = createStackNavigator();
const ScreenForPage_18___________________ = () => {
	return (
		<Page_18___________________StackNavigator.Navigator>
			<Page_18___________________StackNavigator.Screen
				name = "Page_18___________________"
				component = {Page_18___________________}
				options = {{
					headerShown: false
				}}
			/>
		</Page_18___________________StackNavigator.Navigator>
	)
};
const Page_19________________X_StackNavigator = createStackNavigator();
const ScreenForPage_19________________X_ = () => {
	return (
		<Page_19________________X_StackNavigator.Navigator>
			<Page_19________________X_StackNavigator.Screen
				name = "Page_19________________X_"
				component = {Page_19________________X_}
				options = {{
					headerShown: false
				}}
			/>
		</Page_19________________X_StackNavigator.Navigator>
	)
};
const Page_22________________O____StackNavigator = createStackNavigator();
const ScreenForPage_22________________O____ = () => {
	return (
		<Page_22________________O____StackNavigator.Navigator>
			<Page_22________________O____StackNavigator.Screen
				name = "Page_22________________O____"
				component = {Page_22________________O____}
				options = {{
					headerShown: false
				}}
			/>
		</Page_22________________O____StackNavigator.Navigator>
	)
};
const Page_21________________O____StackNavigator = createStackNavigator();
const ScreenForPage_21________________O____ = () => {
	return (
		<Page_21________________O____StackNavigator.Navigator>
			<Page_21________________O____StackNavigator.Screen
				name = "Page_21________________O____"
				component = {Page_21________________O____}
				options = {{
					headerShown: false
				}}
			/>
		</Page_21________________O____StackNavigator.Navigator>
	)
};
const Page_20________________O____StackNavigator = createStackNavigator();
const ScreenForPage_20________________O____ = () => {
	return (
		<Page_20________________O____StackNavigator.Navigator>
			<Page_20________________O____StackNavigator.Screen
				name = "Page_20________________O____"
				component = {Page_20________________O____}
				options = {{
					headerShown: false
				}}
			/>
		</Page_20________________O____StackNavigator.Navigator>
	)
};
const Page_25StackNavigator = createStackNavigator();
const ScreenForPage_25 = () => {
	return (
		<Page_25StackNavigator.Navigator>
			<Page_25StackNavigator.Screen
				name = "Page_25"
				component = {Page_25}
				options = {{
					headerShown: false
				}}
			/>
		</Page_25StackNavigator.Navigator>
	)
};
const Page_17StackNavigator = createStackNavigator();
const ScreenForPage_17 = () => {
	return (
		<Page_17StackNavigator.Navigator>
			<Page_17StackNavigator.Screen
				name = "Page_17"
				component = {Page_17}
				options = {{
					headerShown: false
				}}
			/>
		</Page_17StackNavigator.Navigator>
	)
};
const Page_43StackNavigator = createStackNavigator();
const ScreenForPage_43 = () => {
	return (
		<Page_43StackNavigator.Navigator>
			<Page_43StackNavigator.Screen
				name = "Page_43"
				component = {Page_43}
				options = {{
					headerShown: false
				}}
			/>
		</Page_43StackNavigator.Navigator>
	)
};
const Page_44StackNavigator = createStackNavigator();
const ScreenForPage_44 = () => {
	return (
		<Page_44StackNavigator.Navigator>
			<Page_44StackNavigator.Screen
				name = "Page_44"
				component = {Page_44}
				options = {{
					headerShown: false
				}}
			/>
		</Page_44StackNavigator.Navigator>
	)
};
const Page_42StackNavigator = createStackNavigator();
const ScreenForPage_42 = () => {
	return (
		<Page_42StackNavigator.Navigator>
			<Page_42StackNavigator.Screen
				name = "Page_42"
				component = {Page_42}
				options = {{
					headerShown: false
				}}
			/>
		</Page_42StackNavigator.Navigator>
	)
};
const Page_33StackNavigator = createStackNavigator();
const ScreenForPage_33 = () => {
	return (
		<Page_33StackNavigator.Navigator>
			<Page_33StackNavigator.Screen
				name = "Page_33"
				component = {Page_33}
				options = {{
					headerShown: false
				}}
			/>
		</Page_33StackNavigator.Navigator>
	)
};
const Page_41StackNavigator = createStackNavigator();
const ScreenForPage_41 = () => {
	return (
		<Page_41StackNavigator.Navigator>
			<Page_41StackNavigator.Screen
				name = "Page_41"
				component = {Page_41}
				options = {{
					headerShown: false
				}}
			/>
		</Page_41StackNavigator.Navigator>
	)
};
const Page_40StackNavigator = createStackNavigator();
const ScreenForPage_40 = () => {
	return (
		<Page_40StackNavigator.Navigator>
			<Page_40StackNavigator.Screen
				name = "Page_40"
				component = {Page_40}
				options = {{
					headerShown: false
				}}
			/>
		</Page_40StackNavigator.Navigator>
	)
};
const Page_39StackNavigator = createStackNavigator();
const ScreenForPage_39 = () => {
	return (
		<Page_39StackNavigator.Navigator>
			<Page_39StackNavigator.Screen
				name = "Page_39"
				component = {Page_39}
				options = {{
					headerShown: false
				}}
			/>
		</Page_39StackNavigator.Navigator>
	)
};
const Page_38StackNavigator = createStackNavigator();
const ScreenForPage_38 = () => {
	return (
		<Page_38StackNavigator.Navigator>
			<Page_38StackNavigator.Screen
				name = "Page_38"
				component = {Page_38}
				options = {{
					headerShown: false
				}}
			/>
		</Page_38StackNavigator.Navigator>
	)
};
const Page_11StackNavigator = createStackNavigator();
const ScreenForPage_11 = () => {
	return (
		<Page_11StackNavigator.Navigator>
			<Page_11StackNavigator.Screen
				name = "Page_11"
				component = {Page_11}
				options = {{
					headerShown: false
				}}
			/>
		</Page_11StackNavigator.Navigator>
	)
};
const Page_10StackNavigator = createStackNavigator();
const ScreenForPage_10 = () => {
	return (
		<Page_10StackNavigator.Navigator>
			<Page_10StackNavigator.Screen
				name = "Page_10"
				component = {Page_10}
				options = {{
					headerShown: false
				}}
			/>
		</Page_10StackNavigator.Navigator>
	)
};
const Page_9StackNavigator = createStackNavigator();
const ScreenForPage_9 = () => {
	return (
		<Page_9StackNavigator.Navigator>
			<Page_9StackNavigator.Screen
				name = "Page_9"
				component = {Page_9}
				options = {{
					headerShown: false
				}}
			/>
		</Page_9StackNavigator.Navigator>
	)
};
const Page_37StackNavigator = createStackNavigator();
const ScreenForPage_37 = () => {
	return (
		<Page_37StackNavigator.Navigator>
			<Page_37StackNavigator.Screen
				name = "Page_37"
				component = {Page_37}
				options = {{
					headerShown: false
				}}
			/>
		</Page_37StackNavigator.Navigator>
	)
};
const Page_4StackNavigator = createStackNavigator();
const ScreenForPage_4 = () => {
	return (
		<Page_4StackNavigator.Navigator>
			<Page_4StackNavigator.Screen
				name = "Page_4"
				component = {Page_4}
				options = {{
					headerShown: false
				}}
			/>
		</Page_4StackNavigator.Navigator>
	)
};
const Page_1StackNavigator = createStackNavigator();
const ScreenForPage_1 = () => {
	return (
		<Page_1StackNavigator.Navigator>
			<Page_1StackNavigator.Screen
				name = "Page_1"
				component = {Page_1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_1StackNavigator.Navigator>
	)
};
const Page_2StackNavigator = createStackNavigator();
const ScreenForPage_2 = () => {
	return (
		<Page_2StackNavigator.Navigator>
			<Page_2StackNavigator.Screen
				name = "Page_2"
				component = {Page_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_2StackNavigator.Navigator>
	)
};
const Page_7StackNavigator = createStackNavigator();
const ScreenForPage_7 = () => {
	return (
		<Page_7StackNavigator.Navigator>
			<Page_7StackNavigator.Screen
				name = "Page_7"
				component = {Page_7}
				options = {{
					headerShown: false
				}}
			/>
		</Page_7StackNavigator.Navigator>
	)
};
const Page_6StackNavigator = createStackNavigator();
const ScreenForPage_6 = () => {
	return (
		<Page_6StackNavigator.Navigator>
			<Page_6StackNavigator.Screen
				name = "Page_6"
				component = {Page_6}
				options = {{
					headerShown: false
				}}
			/>
		</Page_6StackNavigator.Navigator>
	)
};
const Page_5StackNavigator = createStackNavigator();
const ScreenForPage_5 = () => {
	return (
		<Page_5StackNavigator.Navigator>
			<Page_5StackNavigator.Screen
				name = "Page_5"
				component = {Page_5}
				options = {{
					headerShown: false
				}}
			/>
		</Page_5StackNavigator.Navigator>
	)
};
const Page_8StackNavigator = createStackNavigator();
const ScreenForPage_8 = () => {
	return (
		<Page_8StackNavigator.Navigator>
			<Page_8StackNavigator.Screen
				name = "Page_8"
				component = {Page_8}
				options = {{
					headerShown: false
				}}
			/>
		</Page_8StackNavigator.Navigator>
	)
};
const Page_3StackNavigator = createStackNavigator();
const ScreenForPage_3 = () => {
	return (
		<Page_3StackNavigator.Navigator>
			<Page_3StackNavigator.Screen
				name = "Page_3"
				component = {Page_3}
				options = {{
					headerShown: false
				}}
			/>
		</Page_3StackNavigator.Navigator>
	)
};
const Page_App_BarsStackNavigator = createStackNavigator();
const ScreenForPage_App_Bars = () => {
	return (
		<Page_App_BarsStackNavigator.Navigator>
			<Page_App_BarsStackNavigator.Screen
				name = "Page_App_Bars"
				component = {Page_App_Bars}
				options = {{
					headerShown: false
				}}
			/>
		</Page_App_BarsStackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	const [isPage10Open, setIsPage10Open] = useState(false)
	const zIndexPage10 = useRef(2)
	const [isPage11Open, setIsPage11Open] = useState(false)
	const zIndexPage11 = useRef(2)
	const [isPage12Open, setIsPage12Open] = useState(false)
	const zIndexPage12 = useRef(2)
	const [isPage13Open, setIsPage13Open] = useState(false)
	const zIndexPage13 = useRef(2)
	const [isPage14Open, setIsPage14Open] = useState(false)
	const zIndexPage14 = useRef(2)
	const [isPage15Open, setIsPage15Open] = useState(false)
	const zIndexPage15 = useRef(2)
	const [isPage16Open, setIsPage16Open] = useState(false)
	const zIndexPage16 = useRef(2)
	const [isPage17Open, setIsPage17Open] = useState(false)
	const zIndexPage17 = useRef(2)
	const [isPage18Open, setIsPage18Open] = useState(false)
	const zIndexPage18 = useRef(2)
	const [isPage19Open, setIsPage19Open] = useState(false)
	const zIndexPage19 = useRef(2)
	const [isPage20Open, setIsPage20Open] = useState(false)
	const zIndexPage20 = useRef(2)
	const [isPage21Open, setIsPage21Open] = useState(false)
	const zIndexPage21 = useRef(2)
	const [isPage22Open, setIsPage22Open] = useState(false)
	const zIndexPage22 = useRef(2)
	const [isPage23Open, setIsPage23Open] = useState(false)
	const zIndexPage23 = useRef(2)
	const [isPage24Open, setIsPage24Open] = useState(false)
	const zIndexPage24 = useRef(2)
	const [isPage25Open, setIsPage25Open] = useState(false)
	const zIndexPage25 = useRef(2)
	const [isPage26Open, setIsPage26Open] = useState(false)
	const zIndexPage26 = useRef(2)
	const [isPage27Open, setIsPage27Open] = useState(false)
	const zIndexPage27 = useRef(2)
	const [isPage28Open, setIsPage28Open] = useState(false)
	const zIndexPage28 = useRef(2)
	const [isPage29Open, setIsPage29Open] = useState(false)
	const zIndexPage29 = useRef(2)
	const [isPage30Open, setIsPage30Open] = useState(false)
	const zIndexPage30 = useRef(2)
	const [isPage31Open, setIsPage31Open] = useState(false)
	const zIndexPage31 = useRef(2)
	const [isPage32Open, setIsPage32Open] = useState(false)
	const zIndexPage32 = useRef(2)
	const [isPage33Open, setIsPage33Open] = useState(false)
	const zIndexPage33 = useRef(2)
	const [isPage34Open, setIsPage34Open] = useState(false)
	const zIndexPage34 = useRef(2)
	const [isPage35Open, setIsPage35Open] = useState(false)
	const zIndexPage35 = useRef(2)
	const [isPage36Open, setIsPage36Open] = useState(false)
	const zIndexPage36 = useRef(2)
	const [isPage37Open, setIsPage37Open] = useState(false)
	const zIndexPage37 = useRef(2)
	const [isPage38Open, setIsPage38Open] = useState(false)
	const zIndexPage38 = useRef(2)
	const [isPage39Open, setIsPage39Open] = useState(false)
	const zIndexPage39 = useRef(2)
	const [isPage40Open, setIsPage40Open] = useState(false)
	const zIndexPage40 = useRef(2)
	const [isPage41Open, setIsPage41Open] = useState(false)
	const zIndexPage41 = useRef(2)
	const [isPage42Open, setIsPage42Open] = useState(false)
	const zIndexPage42 = useRef(2)
	const [isPage43Open, setIsPage43Open] = useState(false)
	const zIndexPage43 = useRef(2)
	const [isPage44Open, setIsPage44Open] = useState(false)
	const zIndexPage44 = useRef(2)
	const [isPage45Open, setIsPage45Open] = useState(false)
	const zIndexPage45 = useRef(2)
	const [isPage46Open, setIsPage46Open] = useState(false)
	const zIndexPage46 = useRef(2)
	const [isPage47Open, setIsPage47Open] = useState(false)
	const zIndexPage47 = useRef(2)
	const [isPage48Open, setIsPage48Open] = useState(false)
	const zIndexPage48 = useRef(2)
	const [isPage49Open, setIsPage49Open] = useState(false)
	const zIndexPage49 = useRef(2)
	const [isPage50Open, setIsPage50Open] = useState(false)
	const zIndexPage50 = useRef(2)
	const [isPage51Open, setIsPage51Open] = useState(false)
	const zIndexPage51 = useRef(2)
	const [isPage52Open, setIsPage52Open] = useState(false)
	const zIndexPage52 = useRef(2)
	const [isPage53Open, setIsPage53Open] = useState(false)
	const zIndexPage53 = useRef(2)
	const [isPage54Open, setIsPage54Open] = useState(false)
	const zIndexPage54 = useRef(2)
	const [isPage55Open, setIsPage55Open] = useState(false)
	const zIndexPage55 = useRef(2)
	const [isPage56Open, setIsPage56Open] = useState(false)
	const zIndexPage56 = useRef(2)
	const [isPage57Open, setIsPage57Open] = useState(false)
	const zIndexPage57 = useRef(2)
	const [isPage58Open, setIsPage58Open] = useState(false)
	const zIndexPage58 = useRef(2)
	const [isPage59Open, setIsPage59Open] = useState(false)
	const zIndexPage59 = useRef(2)
	const [isPage60Open, setIsPage60Open] = useState(false)
	const zIndexPage60 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_first_page"
							component = {ScreenForPage_first_page}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_12"
							component = {ScreenForPage_12}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_24"
							component = {ScreenForPage_24}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_15"
							component = {ScreenForPage_15}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_13"
							component = {ScreenForPage_13}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_16"
							component = {ScreenForPage_16}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_14"
							component = {ScreenForPage_14}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_etc"
							component = {ScreenForPage_etc}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Icons"
							component = {ScreenForPage_Icons}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Text_Fields"
							component = {ScreenForPage_Text_Fields}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Selection_Controls"
							component = {ScreenForPage_Selection_Controls}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Menu"
							component = {ScreenForPage_Menu}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Main_Banners"
							component = {ScreenForPage_Main_Banners}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Lists"
							component = {ScreenForPage_Lists}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Search_Fields"
							component = {ScreenForPage_Search_Fields}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Dividers"
							component = {ScreenForPage_Dividers}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Tabs"
							component = {ScreenForPage_Tabs}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Data_Tables"
							component = {ScreenForPage_Data_Tables}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Drawers"
							component = {ScreenForPage_Drawers}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Date_Picker"
							component = {ScreenForPage_Date_Picker}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Chips"
							component = {ScreenForPage_Chips}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Buttons"
							component = {ScreenForPage_Buttons}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Bottom_Navigation"
							component = {ScreenForPage_Bottom_Navigation}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_36_____________2"
							component = {ScreenForPage_36_____________2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_35_____________2"
							component = {ScreenForPage_35_____________2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_30_____________"
							component = {ScreenForPage_30_____________}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_29_____________"
							component = {ScreenForPage_29_____________}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_28_____________"
							component = {ScreenForPage_28_____________}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_34_____________"
							component = {ScreenForPage_34_____________}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_32__________________________"
							component = {ScreenForPage_32__________________________}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Cards"
							component = {ScreenForPage_Cards}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_23____________"
							component = {ScreenForPage_23____________}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_31______________________________"
							component = {ScreenForPage_31______________________________}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_18___________________"
							component = {ScreenForPage_18___________________}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_19________________X_"
							component = {ScreenForPage_19________________X_}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_22________________O____"
							component = {ScreenForPage_22________________O____}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_21________________O____"
							component = {ScreenForPage_21________________O____}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_20________________O____"
							component = {ScreenForPage_20________________O____}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_25"
							component = {ScreenForPage_25}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_17"
							component = {ScreenForPage_17}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_43"
							component = {ScreenForPage_43}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_44"
							component = {ScreenForPage_44}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_42"
							component = {ScreenForPage_42}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_33"
							component = {ScreenForPage_33}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_41"
							component = {ScreenForPage_41}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_40"
							component = {ScreenForPage_40}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_39"
							component = {ScreenForPage_39}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_38"
							component = {ScreenForPage_38}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_11"
							component = {ScreenForPage_11}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_10"
							component = {ScreenForPage_10}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_9"
							component = {ScreenForPage_9}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_37"
							component = {ScreenForPage_37}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_4"
							component = {ScreenForPage_4}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_1"
							component = {ScreenForPage_1}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_2"
							component = {ScreenForPage_2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_7"
							component = {ScreenForPage_7}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_6"
							component = {ScreenForPage_6}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_5"
							component = {ScreenForPage_5}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_8"
							component = {ScreenForPage_8}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_3"
							component = {ScreenForPage_3}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_App_Bars"
							component = {ScreenForPage_App_Bars}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

