import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { I18nManager } from 'react-native';
import { useRouter } from 'expo-router';

// Set RTL to false for Chinese layout
I18nManager.forceRTL(false);

export default function App() {
    const router = useRouter();
    const today = new Date();
    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
    const [formattedDateRange, setFormattedDateRange] = useState(""); 
    const [calendarKey, setCalendarKey] = useState(0);

    // Format the date as DD/MM/YYYY
    const formatDate = (date: Date | null) =>
        date
            ? `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
                .toString()
                .padStart(2, '0')}/${date.getFullYear()}`
            : '';
    
    // Get today's date formatted
    const todayDate = formatDate(today);

    // Effect to update formattedDateRange when selected dates change
    useEffect(() => {
        if (selectedStartDate && selectedEndDate) {
            setFormattedDateRange(`${formatDate(selectedStartDate)} - ${formatDate(selectedEndDate)}`);
        } else if (selectedStartDate) {
            setFormattedDateRange(formatDate(selectedStartDate)); // Show selected single date
        } else {
            setFormattedDateRange(todayDate); // Show today's date if nothing is selected
        }
    }, [selectedStartDate, selectedEndDate]);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.topText}>
                <Text style={styles.dateText}>{formattedDateRange}</Text>
                <Text style={styles.introText}>每次最多可以搜尋過去30天內其中8天。 (以香港時間計算）</Text>
            </View>
            <CalendarPicker
                key={calendarKey}
                allowRangeSelection={true}
                allowBackwardRangeSelect={true} // Allows selecting end date before start date
                showDayStragglers={true} // Ensures previous month's days are clickable
                todayBackgroundColor="#022f66"
                selectedDayColor="#022f66"
                selectedDayTextColor="#fff"
                selectedDayStyle={styles.selectedDay} // Apply custom circle styling
                minDate={new Date(2000, 0, 1)} // Ensure old dates are allowed
                maxDate={today} // Prevents future dates
                previousTitle="<"
                nextTitle=">"
                textStyle={{
                    color: '#000',
                    fontSize: 20, 
                    fontWeight: '500',
                }}
                disabledDatesTextStyle={{
                    color: '#bbb',
                    fontSize: 20, 
                    fontWeight: '500',
                }}
                weekdays={['日', '一', '二', '三', '四', '五', '六']}
                // months={[
                //     '一月', '二月', '三月', '四月', '五月', '六月',
                //     '七月', '八月', '九月', '十月', '十一月', '十二月'
                // ]}
                onDateChange={(date: Date, type: string) => {
                    if (type === 'START_DATE') {
                        setSelectedStartDate(date);
                        setSelectedEndDate(null); // Reset end date for single date selection
                    } else if (type === 'END_DATE') {
                        setSelectedEndDate(date);
                    }
                }}
            />
            <View style={styles.horizonLine}></View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={() => {
                        setSelectedStartDate(null); // Reset start date
                        setSelectedEndDate(null); // Reset end date
                        setFormattedDateRange(todayDate); // Reset the displayed date range to today's date
                        setCalendarKey(prevKey => prevKey + 1);
                    }}
                >
                    <Text style={styles.resetButtonText}>重置</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.okButton}
                    onPress={() => {
                        router.back(); // Navigate back to the previous screen
                        router.setParams({ selectedDateRange: formattedDateRange }); // Pass the selected date range
                    }}
                >
                    <Text style={styles.okButtonText}>確定</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {padding: 15, backgroundColor: 'white', height: '100%'},
    topText:{ marginBottom: 30 },
    dateText: {
        fontFamily: 'NotoSansTC-Medium',
        lineHeight: 24,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#022f66',
    },
    introText: { fontFamily: 'NotoSansTC-Medium', lineHeight: 20, fontSize: 14, color: 'black', marginTop: 5 },
    selectedDay: {
        backgroundColor: '#022f66',
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizonLine: { marginTop:15, borderTopWidth: 1, borderTopColor: '#bbb'},
    buttons: { marginTop: -15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
    resetButton: { width: '30%', borderColor: '#022f66', borderWidth: 1, borderRadius: 20, marginTop: 25, padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent:'center'},
    okButton: { width: '66%', backgroundColor: '#022f66', borderRadius: 20, marginTop: 25, padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent:'center'},
    resetButtonText: { fontFamily: 'NotoSansTC-Medium', lineHeight: 20, fontSize: 16, color: '#022f66', },
    okButtonText: { fontFamily: 'NotoSansTC-Medium', lineHeight: 20, fontSize: 16, color: '#fff', },
});
