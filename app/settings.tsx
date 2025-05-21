import * as React from "react";
import { ScrollView, View } from "react-native";
import Footer from "../components/Footer";

<View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", padding: 10, backgroundColor: "white" }}>
  <ScrollView
    style={{
      paddingHorizontal: 40,
      paddingVertical: 40,
      backgroundColor: "white"
    }}>
    ...
  </ScrollView>
</View>

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", padding: 10, backgroundColor: "white" }}>
      <Footer />
    </View>
  );
}

