import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import CardXpHeader from "../components/CardXpHeader";
import GraderButton from "../components/GraderButton";
import PreScan from "../components/PreScan";
import SettingsButton from "../components/SettingsButton";
import UploadButtons from "../components/UploadButtons";

export default function App() {
  const router = useRouter();
  const [image, setImage] = useState(null);

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
