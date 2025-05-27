import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: 'transparent', 
        flexDirection: 'row',
        margin: 10,
        position: 'absolute',
        top: 45,
        right: 10, // Changed to right for settings button
    },
    buttonText: {
        alignItems: 'center',
    },
});

const SettingsButton = () => {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.button} onPress={() => router.push('/settings')}>
            <FontAwesome5 name="grip-lines" size={24} color="#484C61" />        
        </TouchableOpacity>
    );
}
export default SettingsButton;