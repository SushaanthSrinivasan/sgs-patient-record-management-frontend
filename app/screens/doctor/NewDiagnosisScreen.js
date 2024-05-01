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
import DrugPresciptionTable from "../../components/DrugPrescriptionTableEdit";

import { styles } from "../../styles/styles";

export default function NewDiagnosisScreen() {
	const [patientID, setPatientID] = useState("");
	const [Diagnosis, setDiagnosis] = useState("");
	const [Tests, setTests] = useState("");

	let windowHeight = Dimensions.get("window").height;
	let windowWidth = Dimensions.get("window").width;

	const search = () => {
		console.log("search");
	};

	const fullSearch = () => {
		console.log("full search");
	};

	const addMedicine = () => {
		console.log("add medicine");
	};

	return (
		<SafeAreaView>
			<Text style={styles.heading}>New Diagnosis</Text>
			<ScrollView
				// style={{
				// 	position: "absolute",
				// 	width: windowWidth,
				// 	top: windowHeight / 10,
				// }}
				contentContainerStyle={styles.scrollViewContent}
			>
				{/* <View>
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
				</View> */}
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
						<Text style={styles.inputTitle}>Diagnosis:</Text>
						<TextInput
							style={[{ height: windowHeight / 7 }, styles.inputMultiline]}
							onChangeText={(value) => setDiagnosis(value)}
							multiline={true}
							placeholder="user@example.com"
						/>

						<Text style={styles.inputTitle}>Tests:</Text>
						<TextInput
							style={[{ height: windowHeight / 7 }, styles.inputMultiline]}
							onChangeText={(value) => setTests(value)}
							placeholder="user@example.com"
						/>

						<Text style={styles.inputTitle}>Diet:</Text>
						<TextInput
							style={[{ height: windowHeight / 10 }, styles.inputMultiline]}
							onChangeText={(value) => setTests(value)}
							placeholder="user@example.com"
						/>
					</View>
					<View style={{ padding: 12 }}>
						<Text style={styles.titleTextCard}>Drug Prescription:</Text>
						<Button
							buttonStyle={[
								{ height: windowHeight / 17, width: "auto" },
								styles.btn,
							]}
							title="Add Medicine"
							onPress={addMedicine}
						/>
						<DrugPresciptionTable />
					</View>
				</View>

				<View style={styles.bottomSpace} />
			</ScrollView>
		</SafeAreaView>
	);
}
