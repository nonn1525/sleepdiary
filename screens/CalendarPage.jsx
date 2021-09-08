import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    month: {
        fontSize: "30px",
    },
})

const CalendarPage = () => {
    return (
        <View>
            <Text style={styles.month}>2021/08</Text>
        </View>
    )
}
export default CalendarPage;