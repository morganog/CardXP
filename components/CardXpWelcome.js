import { Text, View } from "react-native";

const CardXpWelcome = () => {
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f2f2f2"
            }}
        >
            <Text style={{color: 'white', fontSize: 30}}>CardXP</Text>
            <Text style={{color: "white", fontSize: 26}}>Scanner & Grader</Text>
        </View>
    );
};

export default CardXpWelcome;
// This component is a simple welcome screen for the CardXP app. It displays the app name and tagline in a centered view with a light gray background.