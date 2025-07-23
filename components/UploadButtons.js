import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ExpoImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        marginHorizontal: 30,
    },
});

const UploadButtons = () => {
    const [image, setImage] = useState(null);

    const requestCameraPermission = async () => {
        const { status } = await ExpoImagePicker.requestCameraPermissionsAsync();
        return status === 'granted';
    };

    const requestMediaLibraryPermission = async () => {
        const { status } = await ExpoImagePicker.requestMediaLibraryPermissionsAsync();
        return status === 'granted';
    };

    const pickImageFromCamera = async () => {
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) {
            alert('Camera permission is required!');
            return;
        }
        let result = await ExpoImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [5, 7],
            quality: 1,
            cameraType: ExpoImagePicker.CameraType.back,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const pickImageFromLibrary = async () => {
        const hasPermission = await requestMediaLibraryPermission();
        if (!hasPermission) {
            alert('Media library permission is required!');
            return;
        }
        let result = await ExpoImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [5, 7],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={pickImageFromCamera}>
                <MaterialIcons name="camera-alt" size={28} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pickImageFromLibrary}>
                <MaterialIcons name="photo-library" size={28} color="grey" />
            </TouchableOpacity>
        </View>
    );
};

export default UploadButtons;