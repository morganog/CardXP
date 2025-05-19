import * as React from "react";
import { View } from "react-native";

import CardXpHeader from "../components/CardXpHeader";
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" , padding: 10 }}>
      <CardXpHeader /> 
    </View>
  )
}