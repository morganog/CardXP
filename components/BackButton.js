import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: '#484C61',
        borderRadius: 12,
        flexDirection: 'row',
        margin: 10,
        position: 'absolute',
        top: 46,
        left: 10, 
    },
    buttonText: {
        alignItems: 'center',
    },
});

const BackButton = () => {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <AntDesign style={styles.buttonText} name="left" size={20} color="white" />
        </TouchableOpacity>
    );
};
export default BackButton;