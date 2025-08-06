import { useRouter } from "expo-router";
import * as React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import CardXpHeader from "../components/CardXpHeader";
import GraderButton from "../components/GraderButton";
import PreScan from "../components/PreScan";
import SettingsButton from "../components/SettingsButton";
import UploadButtons from "../components/UploadButtons";

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
    <SafeAreaView style={styles.container}>
      <CardXpHeader />
      <SettingsButton />
      <PreScan />
      <GraderButton />
      <UploadButtons />
    </SafeAreaView>
  );
}
