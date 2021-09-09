import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CalendarComponent from "../components/CalendarComponent";

// const styles = StyleSheet.create({
//     month: {
//         fontSize: "30px",
//     },
// })

const CalendarScreen = () => {
  return (
    <View>
      <CalendarComponent />
    </View>
  );
};
export default CalendarScreen;
