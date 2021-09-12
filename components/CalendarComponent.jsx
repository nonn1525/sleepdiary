import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { View, Text, StyleSheet } from "react-native";

export default CalendarComponent = () => {
  const [sample, setSample] = useState({
    "2021-09-12": "\n睡眠時間:12\n起きやすさ:3\n元気度:5",
    "2021-09-13": "\n睡眠時間:13\n起きやすさ:4\n元気度:4",
  });

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        monthFormat={"yyyy年 MM月"}
        markedDates={sample}
        dayComponent={({ date, state, marking }) => {
          return (
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: state === "disabled" ? "gray" : "black",
                  height: 40,
                }}
                onPress={() => alert(date.day)}
              >
                {date.day}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: state === "disabled" ? "gray" : "black",
                  fontSize: 7,
                }}
              >
                {marking}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

LocaleConfig.locales.jp = {
  monthNames: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  monthNamesShort: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  dayNames: [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ],
  dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
};
LocaleConfig.defaultLocale = "jp";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#A6A6A6",
  },
  calendar: {
    marginTop: 50,
    height: 500,
  },
});
