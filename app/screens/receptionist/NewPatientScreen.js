import {
	View,
	Text,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { Button } from "@rneui/base";

import BottomTabNav from "../../components/BottomTabNav";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "../../styles/styles";

export default function NewPatientScreen() {
	const [patientID, setPatientID] = useState("");
	const [serialNo, setSerialNo] = useState("");
	const [hospitalID, setHospitalID] = useState("");
	const [name, setName] = useState("");
	const [dob, setDob] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [temperature, setTemperature] = useState("");
	const [pulse, setPulse] = useState("");
	const [bp, setBp] = useState("");
	const [spo2, setSpo2] = useState("");
	const [allergy, setAllergy] = useState("");

	const navigation = useNavigation();

	let windowHeight = Dimensions.get("window").height;
	let windowWidth = Dimensions.get("window").width;

	const save = () => {
		console.log("saved");
		// TODO
	};

	const takeAadharPhoto = () => {
		console.log("take patient photo");
		// TODO
	};

	const takePatientPhoto = () => {
		console.log("take aadhar photo");
		// TODO
	};

	return (
		<SafeAreaView>
			<Text style={styles.heading}>New Patient</Text>
			<ScrollView
				// style={
				// 	// {
				// 	// position: "absolute",
				// 	// width: windowWidth,
				// 	// top: windowHeight / 10,
				// 	// }
				// 	styles.scrollViewContent
				// }
				contentContainerStyle={styles.scrollViewContent}
			>
				<Text style={styles.inputTitle}>Patient ID</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setPatientID(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>Serial No.</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setSerialNo(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>Hospital ID</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setHospitalID(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>Name</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setName(value)}
					placeholder="user@example.com"
				/>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<View style={{ flex: 7 }}>
						<Text style={styles.inputTitle}>Date of Birth</Text>
						<TextInput
							style={[{ height: windowHeight / 17 }, styles.input]}
							onChangeText={(value) => setDob(value)}
							placeholder="user@example.com"
						/>
					</View>
					<View style={{ flex: 2 }}>
						<Text style={(styles.inputTitle, { fontSize: 10 })}>
							DOB Unknown
						</Text>
						<BouncyCheckbox
							onPress={(isChecked) => {
								console.log(isChecked);
							}}
						/>
					</View>
				</View>

				<Text style={styles.inputTitle}>Age</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setAge(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>Gender</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setGender(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>Height</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setHeight(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>Weight</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setWeight(value)}
					placeholder="user@example.com"
				/>
				<Button
					buttonStyle={[
						{ height: windowHeight / 17, width: "auto" },
						styles.btn,
					]}
					title="Take Patient Photo"
					onPress={takePatientPhoto}
				/>
				<Button
					buttonStyle={[
						{ height: windowHeight / 17, width: "auto" },
						styles.btn,
					]}
					title="Take Aadhar Photo"
					onPress={takeAadharPhoto}
				/>

				<Text style={styles.inputTitle}>Temperature</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setTemperature(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>Pulse</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setPulse(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>BP</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setBp(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>SPO2</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setSpo2(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>Allergy</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setAllergy(value)}
					placeholder="user@example.com"
				/>

				<Button
					title="Save"
					onPress={save}
					buttonStyle={[
						{ height: windowHeight / 17, width: windowWidth / 1.1 },
						styles.btn,
					]}
				/>
				<View style={styles.bottomSpace} />
			</ScrollView>
		</SafeAreaView>
	);
}
