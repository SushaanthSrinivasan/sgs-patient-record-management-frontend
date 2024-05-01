import { View, Text } from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import DrugPresciptionTableView from "../components/DrugPrescriptionTableView";

import { styles } from "../styles/styles";

export default function Card({ tableType }) {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "column",
				justifyContent: "space-evenly",
				paddingVertical: 5,
			}}
		>
			<View style={styles.card}>
				<View style={styles.cardHeader}>
					<Text style={[styles.displayText, { color: "white" }]}>
						5 Jun 2023 (Appt No: 5)
					</Text>
					<Text style={[styles.displayText, { color: "white" }]}>
						Dr. John Doe
					</Text>
				</View>
				<View style={styles.cardBody}>
					<View style={styles.cardInfo}>
						<View style={{ padding: 10 }}>
							<Text style={styles.titleTextCard}>
								Serial No: <Text style={styles.displayTextCard}>108</Text>
							</Text>
							<Text style={styles.titleTextCard}>
								Hospital ID: <Text style={styles.displayTextCard}>108</Text>
							</Text>
							<Text style={styles.titleTextCard}>
								Age: <Text style={styles.displayTextCard}>108</Text>
							</Text>
							<Text style={styles.titleTextCard}>
								Height: <Text style={styles.displayTextCard}>108</Text>
							</Text>
							<Text style={styles.titleTextCard}>
								Weight: <Text style={styles.displayTextCard}>108</Text>
							</Text>
							<Text style={styles.titleTextCard}>
								BMI: <Text style={styles.displayTextCard}>108</Text>
							</Text>
						</View>
						<View style={{ padding: 10 }}>
							<Text style={styles.titleTextCard}>
								Temperature: <Text style={styles.displayTextCard}>108</Text>
							</Text>
							<Text style={styles.titleTextCard}>
								Pulse: <Text style={styles.displayTextCard}>108</Text>
							</Text>
							<Text style={styles.titleTextCard}>
								BP: <Text style={styles.displayTextCard}>108</Text>
							</Text>
							<Text style={styles.titleTextCard}>
								SPO2: <Text style={styles.displayTextCard}>108</Text>
							</Text>
							<Text style={styles.titleTextCard}>
								Ideal Weight: <Text style={styles.displayTextCard}>108</Text>
							</Text>
						</View>
					</View>
					<View style={{ padding: 10 }}>
						<Text style={styles.titleTextCard}>
							Allergy: <Text style={styles.displayTextCard}>108</Text>
						</Text>
						<Text style={styles.titleTextCard}>
							Diagnosis: <Text style={styles.displayTextCard}>108</Text>
						</Text>
						<Text style={styles.titleTextCard}>
							Tests: <Text style={styles.displayTextCard}>108</Text>
						</Text>
					</View>
					<View style={{ padding: 10 }}>
						<Text style={styles.titleTextCard}>Drug Prescription:</Text>
						{tableType === "view" ? (
							<DrugPresciptionTableView />
						) : (
							<DrugPresciptionTable />
						)}
					</View>
					<View style={{ padding: 10 }}>
						<Text style={styles.titleTextCard}>
							Diet: <Text style={styles.displayTextCard}>Lorem ipsum</Text>
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
