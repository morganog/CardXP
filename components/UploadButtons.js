import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ExpoImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

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
            aspect: [2, 3],
            quality: 1,
            cameraType: ExpoImagePicker.CameraType.back,
        });
        if (!result.canceled) {
            await saveImage(result.assets[0].uri);
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
            aspect: [2, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const saveImage = async (image) => {
        try {
            // upload image
            setImage(image);
            setModalVisible(false)
        } catch (error) {
            throw error;
        }
    };

    const removeImage = async () => {
        saveImage(null);
    };

    return (
        <View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={pickImageFromCamera}>
                    <MaterialIcons name="camera-alt" size={28} color="grey" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={pickImageFromLibrary}>
                    <MaterialIcons name="photo-library" size={28} color="grey" />
                </TouchableOpacity>
            </View>
            {image && (
                <View>
                    <Image
                        source={{ uri: image }}
                        style={styles.uploadedImage}
                        resizeMode="contain"
                    />
                    <TouchableOpacity style={styles.deleteButton} onPress={removeImage}>
                        <MaterialIcons name="delete" size={38} color="grey" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 450,
        marginHorizontal: 30,
        position: 'absolute',
    },
    deleteButton: {
        position: 'absolute',
        alignSelf: 'center',
        top: 685,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: 'grey',
        zIndex: 2,
    },
    uploadedImage: {
        alignSelf: 'center',
        width: 540,
        height: 540,
        top: 130,
        borderRadius: 12,
        zIndex: 2,
    },
});

export default UploadButtons;