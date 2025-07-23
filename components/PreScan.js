import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const preScanStyle = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        paddingTop: 350,
    },
    title: {
        color: 'rgba(72,76,97,0.8)',
        textAlign: 'center',
        fontSize: 20,
    },
    subText: {
        color: 'rgba(72,76,97,0.8)',
        textAlign: 'center',
        marginTop: 8,
        maxWidth: 300,
        fontSize: 14,
    },
});

export default function PreScan() {
    return (
        <View style={preScanStyle.container}>
            <Text style={preScanStyle.title}>Scan / Upload Card</Text>
            <Text style={preScanStyle.subText}>
                To start, scan your card or choose a pre-existing image from your camera roll.
            </Text>
        </View>
    );
}