import { ROUTES } from "@/routes";
import { Slot, useRouter } from "expo-router";
import { useEffect, useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // Prevent auto hide until fonts are ready

export default function RootLayout() {
  const [user, setUser] = useState(false); // 🔒 Replace this with real auth logic
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Inter: require("../assets/fonts/Inter_28pt-Regular.ttf"),
    InterBold: require("../assets/fonts/Inter_28pt-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (fontsLoaded && !user) {
      router.replace({ pathname: ROUTES.LOGIN });
    }
  }, [fontsLoaded, user]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'yellow'
  },
});
