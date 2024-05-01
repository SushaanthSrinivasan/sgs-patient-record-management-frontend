import {
	View,
	Text,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/base";

import BottomTabNav from "../../components/BottomTabNav";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Dimensions } from "react-native";

import { styles } from "../../styles/styles";
import { SearchBarDefault } from "@rneui/base/dist/SearchBar/SearchBar-default";

export default function NewPatientScreen() {
	const [drug, setDrug] = useState("");
	const [hospitalID, setHospitalID] = useState("");
	const [quantityOrdered, setQuantityOrdered] = useState(0);
	const [quantityReceived, setQuantityReceived] = useState(0);
	const [ratePerUnit, setRatePerUnit] = useState(0);
	const [Supplier, setSupplier] = useState("");
	const [invoiceNumber, setInvoiceNumber] = useState("");
	const [Date, setDate] = useState("");
	const [paymentDetails, setPaymentDetails] = useState("");

	const [used, setUsed] = useState(0);
	const [reason, setReason] = useState("");

	let windowHeight = Dimensions.get("window").height;
	let windowWidth = Dimensions.get("window").width;

	const updateAlarmThreshold = () => {
		console.log("Update alarm threshold");
	};

	const addStock = () => {
		console.log("Add stock");
	};

	const removeStock = () => {
		console.log("remove stock");
	};

	const search = () => {
		console.log("search");
	};

	return (
		<SafeAreaView>
			<Text style={styles.heading}>Add Stock</Text>
			<ScrollView
				// style={{
				// 	position: "absolute",
				// 	width: windowWidth,
				// 	top: windowHeight / 10,
				// }}
				contentContainerStyle={styles.scrollViewContent}
			>
				<Text style={styles.inputTitle}>Drug</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setDrug(value)}
					placeholder="Aspirin"
				/>

				<Button
					buttonStyle={[
						{ height: windowHeight / 17, width: "auto" },
						styles.btn,
					]}
					title="Search"
					onPress={SearchBarDefault}
				/>

				<Text style={styles.inputTitle}>Hospital ID</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setHospitalID(value)}
					placeholder="1"
				/>

				<Text style={styles.inputTitle}>Quantity Ordered</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setQuantityOrdered(value)}
					placeholder="20"
				/>

				<Text style={styles.inputTitle}>Quantity Received</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setQuantityReceived(value)}
					placeholder="15"
				/>

				<Text style={styles.inputTitle}>Supplier</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setSupplier(value)}
					placeholder="Medicals"
				/>

				<Text style={styles.inputTitle}>Invoice No.</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setInvoiceNumber(value)}
					placeholder="ABCDEF"
				/>

				<Text style={styles.inputTitle}>Date</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setDate(value)}
					placeholder="12/10/23"
				/>

				<Text style={styles.inputTitle}>Payment Details</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setPaymentDetails(value)}
					placeholder="Aspirin Order"
				/>

				<Button
					buttonStyle={[
						{ height: windowHeight / 17, width: "auto" },
						styles.btn,
					]}
					title="Add Stock"
					onPress={addStock}
				/>

				<Text style={styles.heading}>Remove Stock</Text>
				<Text style={styles.inputTitle}>Used</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setUsed(value)}
					placeholder="user@example.com"
				/>

				<Text style={styles.inputTitle}>Reason</Text>
				<TextInput
					style={[{ height: windowHeight / 17 }, styles.input]}
					onChangeText={(value) => setReason(value)}
					placeholder="user@example.com"
				/>

				<Button
					buttonStyle={[
						{ height: windowHeight / 17, width: "auto" },
						styles.btn,
					]}
					title="Remove Stock"
					onPress={removeStock}
				/>
				<Button
					buttonStyle={[
						{ height: windowHeight / 17, width: "auto" },
						styles.btn,
					]}
					title="Update Alarm Threshold"
					onPress={updateAlarmThreshold}
				/>
				<View style={styles.bottomSpace} />
			</ScrollView>
		</SafeAreaView>
	);
}
