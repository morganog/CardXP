import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const settingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    innerContainer: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: "column",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 22,
        fontFamily: "SpaceMono-Regular",
        color: "#484C61",
        textAlign: "left",
        marginTop: 10,
        marginBottom: 10,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: "grey",
    }
});

const menuSettings = [
    { id: "FAQ", title: "FAQ" },
    { id: "Help", title: "Help" },
    { id: "Grading Questions", title: "Grading Questions" },
    { id: "Privacy", title: "Privacy and Policy" },
    { id: "Terms", title: "Terms and Conditions" },
    { id: "Feedback", title: "Feedback" },
];

const Separator = () => <View style={settingsStyles.separator} />;

const Menu = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={settingsStyles.innerContainer}>
            <Text style={settingsStyles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const SettingsMenu = () => {
    const router = useRouter();

    const handlePress = (id) => {
        if (id === "Feedback") {
            router.push('/feedback');
        }
        // Add more navigation logic for other items if needed
    };

    const renderItem = ({ item }) => (
        <Menu
            title={item.title}
            onPress={() => handlePress(item.id)}
        />
    );

    return (
        <View style={settingsStyles.container}>
            <FlatList
                data={menuSettings}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Separator}
            />
        </View>
    );
};

export default SettingsMenu;
