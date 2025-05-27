import * as React from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "#484C61",
        backgroundColor: "#f2f2f2",
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "#484C61",
        backgroundColor: "#f2f2f2",
    },
    infoSection: {
        fontSize: 16,
        color: "#484C61",
        margin: 12,
        padding: 10,
        bottom: 10,
        marginVertical: 8,
        textAlign: "justify",
        backgroundColor: "#f2f2f2",
    },
    headingSection: {
        fontSize: 26,
        color: "#484C61",
        margin: 12,
        padding: 20,
        bottom: 10,
        marginVertical: 8,
        textAlign: "center",
        fontWeight: "bold",
    },
});


const FeedbackForum = () => {
    const [firstName, onChangeFirstName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [message, onChangeMessage] = React.useState("");

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "android" ? "padding" : "height"}
        >
            <ScrollView keyboardDismissMode="on-drag">
                <Text style={styles.headingSection}>
                    CardXP Feedback Forum
                </Text>
                <Text style={styles.infoSection}>
                    We value your feedback! Please share your thoughts, suggestions, or any issues you encounter while using CardXP. Your input helps us improve the app and provide a better experience for all users.
                </Text>
                <TextInput
                    value={firstName}
                    onChangeText={onChangeFirstName}
                    style={styles.input}
                    placeholder="First Name"
                    onFocus={() => Alert.alert("First Name is focused")}
                />
                <TextInput
                    value={email}
                    onChangeText={onChangeEmail}
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput
                    value={message}
                    onChangeText={onChangeMessage}
                    style={styles.messageInput}
                    multiline={true}
                    placeholder="Type your message here..."
                    maxLength={500}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default FeedbackForum;



