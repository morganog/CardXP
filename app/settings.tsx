import * as React from "react";
import { StyleSheet, View } from "react-native";
import SettingsMenu from "../components/settingsMenu";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }
})

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <SettingsMenu />
      </View>
    </>
  );
}

