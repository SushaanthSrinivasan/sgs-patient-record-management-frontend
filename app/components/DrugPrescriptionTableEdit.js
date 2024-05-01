import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "../styles/styles";

function TableComp() {
	const tableHead = [
		"S.No",
		"Medicine & Strength",
		"M",
		"A",
		"E",
		"N",
		"Relation to food",
		"Days",
		"No.given",
	];

	let [tableData, setTableData] = useState([
		[
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
		],
		[
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
			<TextInput style={styles.inputTable}>Hi</TextInput>,
		],
	]);

	let rows = tableData.map((rowData, index) => (
		<Row data={rowData} key={index} />
	));

	return (
		<View>
			<Table
				borderStyle={{
					borderWidth: 2,
					borderColor: "#2A73FF",
				}}
				style={{ fontFamily: "DMSansBold" }}
			>
				<Row
					data={tableHead}
					textStyle={styles.tableHeaderCard}
					style={{ backgroundColor: "#9EBFFF" }}
				/>
				{rows}
			</Table>
		</View>
	);
}

export default TableComp;
