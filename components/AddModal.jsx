import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddModal = ({ setModalToggle, modalToggle }) => {
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [badTime, setBadTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [wakeUpDate, setWakeUpDate] = useState("");
  const [badTimeDate, setBadTimeDate] = useState("");

  const datesplitfunc = (a) => {
    const datesplit1 = dateString.split("T");
    alert(datesplit1);
    const datesplit0 = datesplit1[1];
    const datesplit2 = datesplit0.split(".");
    alert(datesplit2);
    if (a === "wakeup") {
      setWakeUpDate(datesplit1[0]);
      setWakeUpTime(datesplit2[0]);
      setDateString("");
    } else if (a === "badtime") {
      setBadTimeDate(datesplit1[0]);
      setBadTime(datesplit2[0]);
      setDateString("");
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDateString(date.toISOString());
  };
  //   alert(wakeUpTime);
  //   alert(wakeUpDate);
  alert(date);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputcontainer}>
          <Text>寝た時間</Text>
          <Text>{badTime}</Text>
        </View>
        <View style={styles.inputcontainer}>
          {/* <Button onPress={() => showDatepicker()} title="確定" /> */}
          <Button onPress={() => showTimepicker()} title="時間を選択" />
          <Button onPress={() => datesplitfunc("badtime")} title="確定" />
        </View>
        <View style={styles.inputcontainer}>
          <Text>起きた時間</Text>
          <Text>{wakeUpTime}</Text>
        </View>
        <View style={styles.inputcontainer}>
          <Button onPress={() => showTimepicker()} title="時間を選択" />
          <Button onPress={() => datesplitfunc("wakeup")} title="確定" />
        </View>
        <Text>仮眠,昼寝</Text>
        <View style={styles.inputcontainer}>
          <TextInput style={styles.inputs} />
          <TextInput
            style={{ width: "20%", backgroundColor: "#fff", marginLeft: 30 }}
          />
          <Button onPress={() => {}} title="追加" />
        </View>
        <Text>日中の元気度</Text>
        <Text>朝の起きやすさ</Text>
        <Button onPress={() => setModalToggle(!modalToggle)} title="close" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    zIndex: 2,
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: "#A6A6A6",
  },
  inputs: {
    backgroundColor: "#fff",
    width: "50%",
    height: 40,
  },
  inputcontainer: {
    flexDirection: "row",
  },
});
