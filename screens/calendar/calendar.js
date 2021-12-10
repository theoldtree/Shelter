import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Svg, Path } from "react-native-svg";
import { LocaleConfig } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

export default function DaySelctor({ onPress }) {

    LocaleConfig.locales['fr'] = {
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'fr';

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.cancelButton,{alignItems:'flex-end', marginEnd: 20}]}
                    onPress={onPress}
                >
                    <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity>
                <Calendar
                    onDayPress={(day) => { console.log('selected day', day) }}
                    monthFormat={'yyyy년  MM월'}
                    hideExtraDays={false}
                    hideDayNames={false}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    disableAllTouchEventsForDisabledDays={true}
                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: 'white',
                        todayBackgroundColor: "rgb(38, 199, 217)",
                        dayTextColor: 'black',
                        textDisabledColor: '#d9e1e8',
                        arrowColor: 'black',
                        monthTextColor: 'black',
                        indicatorColor: 'black',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'Noto Sans KR',
                        textDayHeaderFontFamily: 'Noto Sans KR',
                        textDayFontWeight: '300',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 12,
                        textMonthFontSize: 18,
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontSize: 12,
                        'stylesheet.calendar.header': {
                          dayTextAtIndex0: {
                            color: 'red'
                          },
                          dayTextAtIndex6: {
                            color: "rgb(38, 199, 217)"
                          },
                        }
                      }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 3,
        marginLeft: 18,
        width: 328,
        height: 300,
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowRadius: 2,
    },
    cancelButton: {
        transform: [
            { translateX: 6 },
            { translateY: 8 },
        ],
    }
})