import { ROUTES } from "@/routes";
import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RootLayout() {
  const [user, setUser] = useState(true);
  const router = useRouter();

  useEffect(()=>{
    if(!user){
      router.push({pathname: ROUTES.LOGIN});
    }
  },[user]);


  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    borderWidth: 2,
    borderColor: 'red',
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  }
});
