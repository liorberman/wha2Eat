import React, { useEffect } from 'react'; 
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native'; 
import * as ImagePicker from 'expo-image-picker';

import colors from '../../config/colors';
import icons from '../../config/icons';
import Icon from '../main/Icon';

function ImageInput({imageUri, onChangeImage, style, continueSelecting=false}) {
    
    useEffect(() => {
        requestPermission();
    },[]);

    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted){
            Alert.alert("You need to enable gallery access!");
        }
    }

    const handlePress = () => {
       if (!imageUri || continueSelecting) {
           selectImage(); // open gallery
       }
       else {
           Alert.alert('', 'Are you sure you want to delete this image?', [
               {text:"Delete", onPress:()=> onChangeImage(null)},
               {text:"Cancel"}
           ])
       }
   }

   const selectImage = async () => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,

        });
        if (!result.cancelled){
            onChangeImage(result.uri);
        }

    } catch (error) {
        Alert.alert(error.message)
    }
}
   
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={[styles.container, style]}>
                {!imageUri && (<Icon name={icons.camera_add} iconColor={colors.medium_grey} size={80}/>)}
                {imageUri && (<Image source={{uri: imageUri}} style={styles.image}/>)}
            </View>
        </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light_grey,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        height:100,
        width:100,
        margin:7,
        overflow:"hidden"
   },
   image: {
       width:"100%",
       height: "100%",
   }
})

export default ImageInput;