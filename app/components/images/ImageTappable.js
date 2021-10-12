import React from 'react'; 
import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'; 

function ImageTappable({imageUri, style}) {
    
    const handlePress = () => {

    };
    
    if (imageUri) return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={[styles.container, style]}>
                <Image source={imageUri} style={styles.image}/>           
            </View>
        </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
    container: {
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

export default ImageTappable;