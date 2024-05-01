import React, { useState } from "react";
import {
	ImageBackground,
	View,
	Text,
	TextInput,
	Alert,
	Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import { images } from "../../assets/images";
import { Dimensions } from "react-native";
import { Button } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";
function SignInScreen(props) {
	const [selectedValue, setSelectedValue] = useState("Doctor");
	const [emailId, setEmailId] = useState("");
	const [password, setPassword] = useState("");
	const navigation = useNavigation();

	let height = Dimensions.get("window").height;
	let width = Dimensions.get("window").width;

	const signIn = () => {
		console.log(selectedValue);
		console.log(emailId);
		console.log(password);

		navigation.navigate("NewPatientReceptionist");

		if (
			selectedValue.toLowerCase() == "doctor" &&
			emailId == "test@gmail.com" &&
			password == "1234"
		) {
			Alert.alert("Login Successful", "Alert message", [
				{
					text: "OK",
					onPress: () => console.log("OK Pressed"),
				},
			]);
		} else {
			Alert.alert("Login Failed", "Alert message", [
				{
					text: "OK",
					onPress: () => console.log("OK Pressed"),
				},
			]);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={images.signInImage}
					resizeMode="cover"
					style={styles.container}
				>
					<View style={{ left: width / 20 }}>
						<View
							style={{
								top: height / 3,
								justifyContent: "center",
								width: width / 1.1,
							}}
						>
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text style={styles.heading}>Welcome Back!</Text>
								<Image
									source={images.sgsLogo}
									style={{
										height: width / 3.0,
										width: width / 3.15,
									}}
								/>
							</View>
							<View>
								<Text style={styles.inputTitle}>Role</Text>
								<Picker
									style={styles.dropdown}
									selectedValue={selectedValue}
									onValueChange={(itemValue) => setSelectedValue(itemValue)}
								>
									<Picker.Item label="Doctor" value="doctor" />
									<Picker.Item label="Nurse" value="nurse" />
									<Picker.Item label="Pharmacist" value="pharmacist" />
									<Picker.Item label="Receptionist" value="receptionist" />
								</Picker>

								<Text style={styles.inputTitle}>Email</Text>
								<TextInput
									style={[{ height: height / 17 }, styles.input]}
									onChangeText={(value) => setEmailId(value)}
									placeholder="user@example.com"
								/>
								<Text style={styles.inputTitle}>Password</Text>
								<TextInput
									style={[{ height: height / 17 }, styles.input]}
									onChangeText={(value) => setPassword(value)}
									placeholder="Your password"
								/>
								<View
									style={{
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Button
										buttonStyle={[
											{ height: height / 17, width: width / 1.1 },
											styles.btn,
										]}
										title="Sign In"
										onPress={signIn}
									/>
								</View>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>
		</SafeAreaView>
	);
}

export default SignInScreen;
