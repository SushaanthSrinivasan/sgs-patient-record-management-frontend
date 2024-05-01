import { TouchableOpacity, Text } from "react-native";

function AppButton({ children, style, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={style}>{children}</Text>
		</TouchableOpacity>
	);
}

export default AppButton;
