import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: -1,
		// flexGrow: 1,
		// padding: 20,
		// padding
		// backgroundColor: "#ffffff",
	},

	scrollViewContent: {
		flexGrow: 1,
		// justifyContent: "center",
		// alignItems: "center",
		padding: 10,
	},

	heading: {
		fontSize: 35,
		color: "#2A73FF",
		fontFamily: "DMSansBold",
	},

	inputTitle: {
		fontSize: 20,
		color: "#2A73FF",
		fontFamily: "DMSansBold",
	},

	displayText: {
		fontSize: 18,
		color: "#646464",
		fontFamily: "DMSansSemiBold",
	},

	text: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#333333",
	},

	titleTextCard: {
		fontSize: 18,
		color: "#2A73FF",
		fontFamily: "DMSansSemiBold",
	},

	displayTextCard: {
		fontSize: 18,
		color: "#646464",
		fontFamily: "DMSansSemiBold",
	},

	tableHeaderCard: {
		fontFamily: "DMSansBold",
		color: "black",
		fontSize: 10,
	},

	tableBodyCard: {
		fontFamily: "DMSansBold",
		// color: "#364A70",
		color: "red",
		fontSize: 10,
	},

	bottomTab: {
		position: "absolute",
		width: "100%",
		bottom: 0,
	},

	bottomSpace: {
		height: 100,
	},

	growTextBox: {
		width: "90%",
		padding: 2,
	},

	bottomNavContainer: {
		flexGrow: 1,
		justifyContent: "space-between",
	},

	bottomNav: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 56,
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#ccc",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},

	test: {
		borderColor: "red",
		borderWidth: 1,
	},

	btn: {
		backgroundColor: "#2B73FF",
		margin: 5,
		borderRadius: 5,
	},

	dropdown: {
		backgroundColor: "#C9DBFF",
	},

	input: {
		backgroundColor: "#C9DBFF",
		borderRadius: 5,
		paddingLeft: 15,
	},

	inputMultiline: {
		backgroundColor: "#C9DBFF",
		borderRadius: 5,
		padding: 15,
		textAlignVertical: "top",
	},

	inputTable: {
		backgroundColor: "#C9DBFF",
		borderRadius: 10,
		padding: 15,
	},

	row: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		// justifyContent: "space-eve",
	},

	card: {
		// backgroundColor: "#DEE9FF",
		// padding: 10,
		borderRadius: 10,
	},

	cardHeader: {
		backgroundColor: "#2A73FF",
		padding: 10,
		marginHorizontal: -5,
		// marginTop: -5,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	cardBody: {
		backgroundColor: "#DEE9FF",
		marginLeft: -4.5,
		marginRight: -4.5,
		// paddingBottom: 4.5,
		borderColor: "#2A73FF",
		borderWidth: 2,
		borderTopWidth: 0,
		// borderRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},

	cardInfo: {
		flexDirection: "row",
		// alignItems: "center",
		justifyContent: "space-between",
	},
});
