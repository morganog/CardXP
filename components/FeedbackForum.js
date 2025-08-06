import emailjs from '@emailjs/react-native';
import * as React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

// USING EMAILJS FOR HANDLING EMAILS

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const FeedbackForum = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [firstNameError, setFirstNameError] = React.useState(false);
    const [lastNameError, setLastNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);

    const handleSubmit = () => {
        let hasError = false;
        if (!firstName.trim()) {
            setFirstNameError(true);
            hasError = true;
        } else {
            setFirstNameError(false);
        }
        if (!lastName.trim()) {
            setLastNameError(true);
            hasError = true;
        } else {
            setLastNameError(false);
        }
        if (!validateEmail(email)) {
            setEmailError(true);
            hasError = true;
        } else {
            setEmailError(false);
        }

        if (!hasError) {
            const templateParams = {
                first_name: firstName,
                last_name: lastName,
                user_email: email,
                message: message,
            };

            // Feedback Input Template
            emailjs.send(
                "service_48so5nt",
                "template_9isajny",
                templateParams,
                {
                    publicKey: "XylJWcjSNqdK_ZkIR"
                })
            
            // Feedback Submission Template
            emailjs.send(
                "service_48so5nt",
                "template_c0lxdiu",
                templateParams,
                {
                    publicKey: "XylJWcjSNqdK_ZkIR"
                }

            ).then(() => {
                alert("Feedback submitted!");
                setFirstName("");
                setLastName("");
                setEmail("");
                setMessage("");
            }).catch((err) => {
                console.error("Email send error:", err);
                alert("Something went wrong. Please try again.");
            });
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "android" ? "padding" : "height"}
        >
            <ScrollView keyboardDismissMode="on-drag">
                <Text style={styles.headingSection}>
                    CardXP Feedback Form
                </Text>
                <Text style={styles.infoSection}>
                    We value your feedback! Please share your thoughts, suggestions, or any issues you encounter while using CardXP. Your input helps us improve the app and provide a better experience for all users.
                </Text>
                <View style={styles.inputRow}>
                    <TextInput
                        value={firstName}
                        onChangeText={text => {
                            setFirstName(text);
                            if (text.trim()) setFirstNameError(false);
                        }}
                        style={[
                            styles.input,
                            firstNameError && styles.inputError
                        ]}
                        placeholder="First Name"
                    />
                </View>
                <View style={styles.inputRow}>
                    <TextInput
                        value={lastName}
                        onChangeText={text => {
                            setLastName(text);
                            if (text.trim()) setLastNameError(false);
                        }}
                        style={[
                            styles.input,
                            lastNameError && styles.inputError
                        ]}
                        placeholder="Last Name"
                    />
                </View>
                <View style={styles.inputRow}>
                    <TextInput
                        value={email}
                        onChangeText={text => {
                            setEmail(text);
                            if (validateEmail(text)) setEmailError(false);
                        }}
                        style={[
                            styles.input,
                            emailError && styles.inputError
                        ]}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                {emailError && (
                    <Text style={styles.errorText}>Invalid email</Text>
                )}
                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    style={styles.messageInput}
                    multiline={true}
                    placeholder="Type your message here..."
                    maxLength={500}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 80,
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
        flex: 1,
    },
    inputError: {
        borderColor: "red",
        backgroundColor: "#ffeaea",
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
    messageInputError: {
        borderColor: "red",
        backgroundColor: "#ffeaea",
    },
    infoSection: {
        fontSize: 16,
        color: "#484C61",
        margin: 12,
        padding: 10,
        bottom: 10,
        marginVertical: 8,
        textAlign: "center",
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
    submitButton: {
        backgroundColor: "#484C61",
        padding: 10,
        borderRadius: 8,
        paddingHorizontal: 20,
        margin: 15,
        alignItems: "center",
        width: 200,
        alignSelf: "center",
    },
    submitButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 1,
    },
    errorText: {
        color: "red",
        marginLeft: 16,
        marginTop: -8,
        marginBottom: 8,
        fontSize: 14,
    },
});

export default FeedbackForum;