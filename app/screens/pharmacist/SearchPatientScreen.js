import {
	View,
	Text,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomTabNav from "../../components/BottomTabNav";
import Card from "../../components/Card";
import { Dimensions } from "react-native";
import { Button } from "@rneui/base";

import { styles } from "../../styles/styles";

export default function SearchPatientScreen() {
	const [patientID, setPatientID] = useState("");

	let windowHeight = Dimensions.get("window").height;
	let windowWidth = Dimensions.get("window").width;

	const search = () => {
		console.log("search");
	};

	const fullSearch = () => {
		console.log("full search");
	};

	return (
		<SafeAreaView>
			<Text style={styles.heading}>Search Patient</Text>
			<ScrollView
				// style={{
				// 	position: "absolute",
				// 	width: windowWidth,
				// 	top: windowHeight / 10,
				// }}
				contentContainerStyle={styles.scrollViewContent}
			>
				<View>
					<Text style={styles.inputTitle}>Patient ID</Text>
					<TextInput
						style={[{ height: windowHeight / 17, width: "auto" }, styles.input]}
						onChangeText={(value) => setPatientID(value)}
						placeholder="123456-V"
					/>
					<Button
						buttonStyle={[
							{ height: windowHeight / 17, width: "auto" },
							styles.btn,
						]}
						title="Search"
						onPress={search}
					/>
					<Button
						buttonStyle={[
							{ height: windowHeight / 17, width: "auto" },
							styles.btn,
						]}
						title="Full Search"
						onPress={fullSearch}
					/>
					<Button
						buttonStyle={[
							{ height: windowHeight / 17, width: "auto" },
							styles.btn,
						]}
						title="Add New Diagnosis"
						onPress={search}
					/>
				</View>

				<View>
					<View>
						<View style={styles.row}>
							<Text style={styles.inputTitle}>Name:</Text>
							<Text style={[styles.displayText, { padding: 5 }]}>
								Patient's Name
							</Text>
						</View>

						<View style={styles.row}>
							<Text style={styles.inputTitle}>Patient ID:</Text>
							<Text style={[styles.displayText, { padding: 5 }]}>
								{patientID}
							</Text>
						</View>

						<View style={styles.row}>
							<Text style={styles.inputTitle}>Gender:</Text>
							<Text style={[styles.displayText, { padding: 5 }]}>M</Text>
						</View>
					</View>
					<View>
						<Text style={[styles.heading, { fontSize: 25, color: "#464444" }]}>
							Last 3 appointments
						</Text>
						<View>
							<Card tableType="view" />
							<Card tableType="view" />
							<Card tableType="view" />
						</View>
					</View>
				</View>

				<View style={styles.bottomSpace} />
			</ScrollView>
		</SafeAreaView>
	);
}
