import {
	View,
	Text,
	TextInput,
	Button,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StockTable from "../../components/StockTable";
import { Dimensions } from "react-native";

import { styles } from "../../styles/styles";

export default function SearchPatientScreen() {
	const tableHead = ["Medicine", "Threshold"];

	let windowHeight = Dimensions.get("window").height;
	let windowWidth = Dimensions.get("window").width;

	return (
		<SafeAreaView>
			<Text style={styles.heading}>View and Update Threshold</Text>
			{/* <ScrollView style={styles.container}> */}
			{/* <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}> */}
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View>
					<Text style={styles.inputTitle}>Medicine</Text>
					<TextInput
						style={[{ height: windowHeight / 17, width: "auto" }, styles.input]}
						placeholder="Search..."
					/>
				</View>
				<View>
					<StockTable tableHead={tableHead} />
				</View>
				<View style={styles.bottomSpace} />
			</ScrollView>
		</SafeAreaView>
	);
}
