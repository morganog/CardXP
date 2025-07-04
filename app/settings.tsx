import CardXpHeader from "@/components/CardXpHeader";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import BackButton from "../components/BackButton";
import SettingsMenu from "../components/settingsMenu";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
  },
  list: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    width: "100%",
  },
  cardXpHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 35,
    right: 50,
    width: "150%", 
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.cardXpHeaderWrapper}>
          <CardXpHeader />
        </View>
        <BackButton />
      </View>
      <View style={styles.list}>
        <SettingsMenu />
      </View>
    </View>
  );
}

