import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ExpoImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        top: 35,
        margin: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

const UploadButton = () => {
    const [image, setImage] = useState(null);

    const pickImageFromCamera = async () => {
        let result = await ExpoImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true, 
            aspect: [16, 9],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={pickImageFromCamera}>
                <MaterialIcons name="photo-library" size={28} color="grey" />
            </TouchableOpacity>
        </View>
    );
};

export default UploadButton;