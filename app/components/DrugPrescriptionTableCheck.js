import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function TableComp() {
	const tableHead = [
		"",
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
			<BouncyCheckbox
				onPress={(isChecked) => {
					console.log(isChecked);
				}}
			/>,
			<Text placeholder=" "></Text>,
			<Text placeholder=" "></Text>,
			<Text placeholder=" "></Text>,
			<Text placeholder=" "></Text>,
			<Text placeholder=" "></Text>,
			<Text placeholder=" "></Text>,
			<Text placeholder=" "></Text>,
			<Text placeholder=" "></Text>,
			<Text placeholder=" "></Text>,
		],
	]);

	return (
		<View>
			<Table
				borderStyle={{
					borderWidth: 2,
					borderColor: "#c8e1ff",
					borderRadius: "4px",
				}}
			>
				<Row data={tableHead} />
				{tableData.map((rowData, index) => (
					<Row key={index} data={rowData} />
				))}
			</Table>
		</View>
	);
}

export default TableComp;
