import { useRouter } from "expo-router";
import * as React from "react";
import { StyleSheet, View, } from "react-native";
import CardXpHeader from "../components/CardXpHeader";
import PreScan from "../components/PreScan";
import SettingsButton from "../components/SettingsButton";
import UploadButton from "../components/UploadButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  links: {
    padding: 50,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CardXpHeader />
      <SettingsButton />
      <PreScan />
      <UploadButton />
    </View>
  );
}
