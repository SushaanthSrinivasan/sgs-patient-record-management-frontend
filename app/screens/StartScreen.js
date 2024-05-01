import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Button } from "@rneui/base";

// import AppButton from "../components/AppButton";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../assets/images";
import { styles } from "../styles/styles";
import { Dimensions } from "react-native";

function StartScreen() {
	let height = Dimensions.get("window").height;
	let width = Dimensions.get("window").width;

	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={images.firstImage}
					resizeMode="cover"
					style={styles.container}
				>
					<View
						style={{
							top: height / 1.675,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text style={styles.heading}>SGS Charitable Clinic</Text>
						<Image
							source={images.sgsLogo}
							style={{
								height: width / 3.0,
								width: width / 3.15,
							}}
						/>
					</View>
					<View style={{ flex: 1 }}>
						<View
							style={{
								top: height / 1.6,
								alignItems: "center",
							}}
						>
							<Button
								buttonStyle={[
									{ height: height / 17, width: width / 1.1 },
									styles.btn,
								]}
								title="Sign In"
								onPress={() => navigation.navigate("SignIn")}
							/>
							<Button
								buttonStyle={[
									{ height: height / 17, width: width / 1.1 },
									styles.btn,
								]}
								title="Register"
								onPress={() => navigation.navigate("Register")}
							/>
						</View>
					</View>
				</ImageBackground>
			</View>
		</SafeAreaView>
	);
}

export default StartScreen;

// function StartScreen(props) {
// 	const navigation = useNavigation();

// 	return (
// 		<View style={(styles.container, styles.test)}>
// 			<ImageBackground
// 				source={images.firstImage}
// 				resizeMode="cover"
// 				style={(styles.container, styles.bgImage)}
// 			>
// 				<Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
// 				<Button
// 					title="Register"
// 					onPress={() => navigation.navigate("Register")}
// 				/>
// 			</ImageBackground>
// 		</View>
// 	);
// }

// export default StartScreen;
