import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../../config/colors';

function Button({title, color = colors.dark_blue, onPress, style, textStyle, feedback=true}) {
    if (feedback) return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}, style]} onPress={onPress}>
            <Text style={[styles.txt, textStyle]}> {title} </Text>
        </TouchableOpacity>    
    );
    else return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.button, {backgroundColor: color}, style]}>
                <Text style={[styles.txt, textStyle]}> {title} </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button:{
        borderTopLeftRadius:20,
        borderBottomRightRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:10, 
        width:"95%",
        margin:5
    },
    txt: {
        color:"white",
        fontSize:16,
        textTransform:"uppercase",
        fontWeight:"bold"
    },
})

export default Button;