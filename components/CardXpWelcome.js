import { StyleSheet, Text, View } from "react-native";

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

const CardXpWelcome = () => {
    return (
        <View style={welcomeStyle.container}>
            <Text style={welcomeStyle.title}>CardXP</Text>
            <Text style={welcomeStyle.tagline}>Scanner & Grader</Text>
        </View>
    );
};

export default CardXpWelcome;
// This component is a simple welcome screen for the CardXP app. It displays the app name and tagline in a centered view with a light gray background.