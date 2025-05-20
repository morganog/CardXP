import * as React from 'react';
import { Text, View } from 'react-native';

export default function PreScan() {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", paddingBottom: 150 }}>
            <Text style={{ color: 'rgba(72,76,97,0.8)', textAlign: 'center', fontSize: 20 }}>Scan / Upload Card</Text>
            <Text style={{ color: 'rgba(72,76,97,0.8)', textAlign: 'center', marginTop: 8, maxWidth: 300, fontSize: 14 }}>
                To start, scan your card or choose a pre-existing image from your camera-roll.
            </Text>
        </View>
    );
}