import { Calendar } from "react-native-calendars";
import React from "react";

const CalendarComponent = () => {
  const task01 = {
    key: "task01",
    startingDay: true,
    endingDay: true,
    color: "blue",
  };
  const task02 = {
    key: "task02",
    startingDay: true,
    endingDay: true,
    color: "red",
  };
  const task03 = {
    key: "task03",
    startingDay: true,
    endingDay: true,
    color: "green",
  };
  return (
    <Calendar
      monthFormat={"yyyy年 MM月"}
      onDayPress={(day) => {
        alert("day is", day);
      }}
      markedDates={{
        "2020-11-11": { periods: [task01, task02] },
        "2021-09-09": { periods: [task02, task01, task03] },
      }}
      markingType={"multi-period"}
      style={{
        borderWidth: 3,
        borderColor: "skyblue",
        height: 500,
      }}
    />
  );
};

export default CalendarComponent;
