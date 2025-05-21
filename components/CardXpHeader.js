import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const headerStyles = StyleSheet.create({
    container: {
        flex: 0.2,
        paddingBottom: 20,
        backgroundColor: "white",
        justifyContent: "center",   // center vertically
        alignItems: "center",       // center horizontally
    },
    text: {
        fontSize: 28,
        fontFamily: "KronaOne-Regular",
        color: "#484C61",
    }
});

const CardXpHeader = () => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.text}>CardXP</Text>
        </View>
    );
}

export default CardXpHeader;