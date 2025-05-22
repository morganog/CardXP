import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const settingsStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: "column",
        alignItems: "left",
    },
    title: {
        fontSize: 28,
        fontFamily: "KronaOne-Regular",
        color: "#484C61",
        textAlign: "center",
        marginTop: 20,
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
];

const Separator = () => <View style={settingsStyles.separator} />;

const Menu = ({ title }) => (
    <View style={settingsStyles.innerContainer}>
        <Text style={settingsStyles.title}>{title}</Text>
    </View>
);

const SettingsMenu = () => {
    const renderItem = ({ item }) => <Menu title={item.title} />;

    return (
        <View style={settingsStyles.container}>
            <FlatList
                data={menuSettings}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Separator}>
            </FlatList>
        </View>
    );
};

export default SettingsMenu;
