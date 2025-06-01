import { Slot } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
     <>
     <Text>Root Layout</Text>
     <Slot />
     </>
  );
}
