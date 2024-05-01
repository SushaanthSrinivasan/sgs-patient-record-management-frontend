import React, { Component, useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from "@rneui/base";
import { Dimensions } from "react-native";
import { styles } from "../styles/styles";

function TableComp({ tableHead }) {
	let [tableData, setTableData] = useState([
		[<Text placeholder=" " />, <TextInput placeholder=" " />],
	]);

	let windowHeight = Dimensions.get("window").height;
	let windowWidth = Dimensions.get("window").width;

	return (
		<View>
			<Table
				borderStyle={{
					borderWidth: 2,
					borderColor: "#c8e1ff",
					borderRadius: "4px",
				}}
			>
				<Row
					data={tableHead}
					textStyle={styles.tableHeaderCard}
					style={{ backgroundColor: "#9EBFFF" }}
				/>
				{tableData.map((rowData, index) => (
					<Row key={index} data={rowData} />
				))}
			</Table>

			<Button
				buttonStyle={[{ height: windowHeight / 17, width: "auto" }, styles.btn]}
				title="Update"
				onPress={() => navigation.navigate("AddStockScreen")}
			/>
		</View>
	);
}

export default TableComp;
