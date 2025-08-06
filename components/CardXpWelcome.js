import { StyleSheet, Text, View } from "react-native";

const CardXpWelcome = () => {
    return (
        <View style={welcomeStyle.container}>
            <Text style={welcomeStyle.title}>CardXP</Text>
            <Text style={welcomeStyle.tagline}>Scanner & Grader</Text>
        </View>
    );
};

const welcomeStyle = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2"
    },
    title: {
        color: 'white',
        fontSize: 30
    },
    tagline: {
        color: "white",
        fontSize: 26
    }
});

export default CardXpWelcome;