import BackButton from "@/components/BackButton";
import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import FeedbackForum from "../components/FeedbackForum";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  feedback: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    width: "100%",
  },
  backButton: {
    position: "absolute",
    zIndex: 1,
    top: 10,
  }
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButton}>
        <BackButton />
      </View>
      <View style={styles.feedback}>
        <FeedbackForum />
      </View>
    </SafeAreaView>
  );
}