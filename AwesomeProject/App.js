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
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";

const App: () => Node = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar barStyle={"dark-content"} />
			<View style={{
				width: 100,
				height: 100,
				backgroundColor: 'red'
			}}>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default App;
