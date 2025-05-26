import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    input: {
        height: 40
    }
})

export default function FeedbackForum() {
    const [firstName, onChangeFirstName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [message, onChangeMessage] = React.useState("");


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingSection}>
                CardXP Feedback Forum
            </Text>
            <Text style={styles.infoSection}>
                We value your feedback! Please share your thoughts, suggestions, or any issues you encounter while using CardXP. Your input helps us improve the app and provide a better experience for all users.
            </Text>
            <TextInput 
                value={firstName}
                onChangeText={onChangeFirstName}
                styles={styles.input} 
            />
            <TextInput 
                value={email}
                onChangeText={onChangeEmail}
                styles={styles.input} 
            />
            <TextInput 
                value={message}
                onChangeText={onChangeMessage}
                styles={styles.input} 
            />
        </ScrollView>
    );
}



