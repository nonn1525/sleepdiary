import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { View, Text } from "react-native";

export default CalendarComponent = () => {
  const [sample, setSample] = useState({
    customStyles: { text: { fontSize: 5 } },
    "2021-09-12": "\n睡眠時間:12\n起きやすさ:3\n元気度:5",
    "2021-09-13": "\n睡眠時間:13\n起きやすさ:4\n元気度:4",
  });

  return (
    <View>
      <Calendar
        monthFormat={"yyyy年 MM月"}
        markedDates={sample}
        // "2021-09-12": aa[0],
        // "2021-09-13": aa[1],
        // }
        dayComponent={({ date, state, marking }) => {
          return (
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: state === "disabled" ? "gray" : "black",
                }}
                onPress={() => alert(date.day)}
              >
                {date.day}
                {/* {marking} */}
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
