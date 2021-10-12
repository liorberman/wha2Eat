import React from 'react'; 
import { View, StyleSheet, Image } from 'react-native'; 

function RoundImage({source, size=60, style}) {
    return (
        <View style={[styles.container, style]}>
            <Image source={source} style={{width:size, height:size, borderRadius:size/2}}/>
        </View>
   );
}

const styles = StyleSheet.create({
    container: {
        overflow:"hidden",
        margin:5,
   },
})

export default RoundImage;