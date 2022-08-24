/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Page/HomeScreen";
import SettingsScreen from "./Page/SettingsScreen";
import TestScreen from "./Page/TestScreen";

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
				<Tab.Screen name="Test" component={TestScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});

export default App;
