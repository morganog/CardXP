import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: '#484C61',
        borderRadius: 12,
        flexDirection: 'row',
        margin: 10,
        objectFit: 'contain',
        position: 'absolute',
        top: 40,
        left: 10,

    },
    buttonText: {
        color: 'white',
        alignItems: 'center'

    },
});

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <AntDesign style={styles.buttonText} name="left" size={24} color="black" />
        </TouchableOpacity>
    );
};
export default BackButton;