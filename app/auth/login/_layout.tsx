import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function LoginLayout() {
    return (
        <View>
            <Text>Login</Text>
            <Slot />
        </View>
    );
}