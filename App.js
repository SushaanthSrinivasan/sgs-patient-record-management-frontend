import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "./app/screens/StartScreen";
import SignInScreen from "./app/screens/SignInScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import NewPatientScreen from "./app/screens/receptionist/NewPatientScreen";
import SearchPatientScreenR from "./app/screens/receptionist/SearchPatientScreen";
import SearchPatientScreenD from "./app/screens/doctor/SearchPatientScreen";
import ReviewPatientScreen from "./app/screens/receptionist/ReviewPatientScreen";
import NewDiagnosisScreen from "./app/screens/doctor/NewDiagnosisScreen";
import AddStockScreen from "./app/screens/pharmacist/AddStockScreen";
import SearchPatientScreenP from "./app/screens/pharmacist/SearchPatientScreen";
import UpdateStockScreen from "./app/screens/pharmacist/UpdateStockScreen";
import ViewStockScreen from "./app/screens/pharmacist/ViewStockScreen";

import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		DMSansThin: require("./assets/fonts/DMSans-Thin.ttf"),
		DMSansExtraLight: require("./assets/fonts/DMSans-ExtraLight.ttf"),
		DMSansLight: require("./assets/fonts/DMSans-Light.ttf"),
		DMSansRegular: require("./assets/fonts/DMSans-Regular.ttf"),
		DMSansSemiBold: require("./assets/fonts/DMSans-SemiBold.ttf"),
		DMSansBold: require("./assets/fonts/DMSans-Bold.ttf"),
		DMSansExtraBold: require("./assets/fonts/DMSans-ExtraBold.ttf"),
		DMSansBlack: require("./assets/fonts/DMSans-Black.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) await SplashScreen.hideAsync();
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) return null;

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Start"
				screenOptions={{
					headerShown: false,
				}}
				onLayout={onLayoutRootView}
			>
				{/* <Stack.Screen name="Start" component={StartScreen} /> */}
				{/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
				{/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
				{/* <Stack.Screen
					name="NewPatientReceptionist"
					component={NewPatientScreen}
				/> */}
				{/* <Stack.Screen
					name="ReviewPatientReceptionist"
					component={ReviewPatientScreen}
				/> */}
				{/* <Stack.Screen
					name="SearchPatientReceptionist"
					component={SearchPatientScreenR}
				/> */}
				{/* <Stack.Screen
					name="SearchPatientDoctor"
					component={SearchPatientScreenD}
				/> */}
				{/* <Stack.Screen
					name="NewDiagnosisScreen"
					component={NewDiagnosisScreen}
				/> */}

				{/* <Stack.Screen name="AddStockScreen" component={AddStockScreen} /> */}

				{/* <Stack.Screen
					name="SearchPatientScreenP"
					component={SearchPatientScreenP}
				/> */}

				<Stack.Screen name="UpdateStockScreenP" component={UpdateStockScreen} />

				{/* <Stack.Screen name="ViewStockScreenP" component={ViewStockScreen} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
