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