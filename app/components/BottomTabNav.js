import { View, Text } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignInScreen from "../screens/SignInScreen";
import RegisterScreen from "../screens/RegisterScreen";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles/styles";

const Tab = createBottomTabNavigator();

const BottomTabNav = (optionsList) => {
	const [tempList, setTempList] = useState([]);

	for (i = 0; i < optionsList.length; i++) {
		setTempList(
			tempList.append(
				<Tab.Screen
					name={optionsList[i].name}
					component={optionsList[i].component}
				/>
			)
		);
	}

	return (
		<SafeAreaView style={styles.bottomTab}>
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={SignInScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="home-outline" color={color} size={size} />
						),
					}}
					// onPress={() => navigation.navigate("StartScreen")}
				/>
				<Tab.Screen
					name="Profile"
					component={RegisterScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="planet-outline" color={color} size={size} />
						),
					}}
				/>
				{/* Add more screens with icons as needed */}
			</Tab.Navigator>
		</SafeAreaView>
	);
};

export default BottomTabNav;
