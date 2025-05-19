import * as React from 'react';
import { Text, View } from 'react-native';

export default function CardXpHeader() {
    return (
        <View style={{ flex: 0.2, backgroundColor: "white"}}>
            <Text style={{ padding: 1, fontSize: 28, fontFamily: "KronaOne-Regular", color: "#484C61" }}>CardXP</Text>
        </View>
    );
}