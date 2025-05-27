import * as React from "react";
import { StyleSheet, View } from "react-native";
import CardXpHeader from "../components/CardXpHeader";
import FeedbackForum from "../components/FeedbackForum";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});


export default function App() {
  return (
    <View
      style={styles.container}>
      <CardXpHeader />
      <FeedbackForum />
      </View>
    );
  }