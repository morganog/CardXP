import * as React from "react";
import { StyleSheet, View } from "react-native";
import BackButton from "../components/BackButton";
import SettingsMenu from "../components/settingsMenu";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 30,
    backgroundColor: "white",
  }
})

export default function App() {
  return (
    <View style={styles.container}>
      <BackButton />
      <SettingsMenu />
    </View>
  );
}

