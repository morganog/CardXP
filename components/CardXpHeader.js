import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const headerStyles = StyleSheet.create({
    container: {
        flex: 0.2,
        paddingTop: 5,
        paddingBottom: 2,
        backgroundColor: "white",
        justifyContent: "center",   // center vertically
        alignItems: "center",       // center horizontally
    },
    Title: {
        fontSize: 28,
        fontFamily: "KronaOne-Regular",
        color: "#484C61"
    }
});

const CardXpHeader = () => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.Title}>CardXP</Text>
        </View>
    );
}

export default CardXpHeader;