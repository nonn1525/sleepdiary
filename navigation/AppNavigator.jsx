import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarScreen from "../screens/CalendarScreen";
import GraphScreen from "../screens/GraphScreen";
import React from "react";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const GraphStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Graph"
        component={GraphScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CalendarTab" component={CalendarStack} />
        <Tab.Screen name="GraphTab" component={GraphStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
