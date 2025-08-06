import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardXpHeader = () => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.Title}>CardXP</Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        flex: 0.2,
        paddingTop: 60,
        paddingBottom: 2,
        backgroundColor: "white",
        justifyContent: "center",   // center vertically
        alignSelf: "center",       // center horizontally
        position: "absolute",
    },
    Title: {
        fontSize: 28,
        fontFamily: "KronaOne-Regular",
        color: "#484C61"
    }
});

export default CardXpHeader;