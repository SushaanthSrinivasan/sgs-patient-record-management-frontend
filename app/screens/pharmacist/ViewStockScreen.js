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
import { Table, Row } from "react-native-table-component";
import BottomTabNav from "../../components/BottomTabNav";
import { Dimensions } from "react-native";

import { styles } from "../../styles/styles";

export default function SearchPatientScreen() {
	let windowHeight = Dimensions.get("window").height;
	let windowWidth = Dimensions.get("window").width;

	return (
		<SafeAreaView>
			<Text>View Stock</Text>
			<ScrollView
				style={{
					position: "absolute",
					width: windowWidth,
					top: windowHeight / 10,
				}}
			>
				<View style={styles.container}>
					<TextInput style={styles.input} placeholder="Search..." />
				</View>
				<View>
					<Table
						borderStyle={{
							borderWidth: 2,
							borderColor: "#c8e1ff",
							borderRadius: "4px",
						}}
					>
						{/* <Row data={tableHead} />
				{tableData.map((rowData, index) => (
					<Row key={index} data={rowData} />
				))} */}
						<Row data={[<Text>Medicine</Text>, <Text>Qty</Text>]}></Row>
						<Row data={[<Text>Medicine</Text>, <Text>Qty</Text>]}></Row>
						<Row data={[<Text>Medicine</Text>, <Text>Qty</Text>]}></Row>
					</Table>
				</View>
				<View style={styles.bottomSpace} />
			</ScrollView>
		</SafeAreaView>
	);
}
