import * as React from 'react';
import { Text, View } from 'react-native';

export default function CardXpHeader() {
    return (
        <View style={{ flex: 0.2, backgroundColor: "transparent"}}>
            <Text style={{ fontSize: 30, fontFamily: "KronaOne-Regular.tsx", color: "#484C61", fontWeight: "bold" }}>CardXP</Text>
        </View>
    );
}