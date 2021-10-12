import React from 'react';
import {  StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import colors from '../../config/colors';
import Button from '../main/Button';

function SubmitButton({title, style, color=colors.black, textStyle}) {
    
    const {handleSubmit} = useFormikContext();

    return (
        <Button title={title} color={color} style={[styles.button, style]} 
        textStyle={[styles.text, textStyle]}
        onPress={handleSubmit}/>
    );
}

const styles = StyleSheet.create({
    button: {
       margin:5,
       width:"40%",
       borderTopLeftRadius:15,
       borderTopRightRadius:15,
       borderBottomLeftRadius:15,
       borderBottomRightRadius:15  
    },
    text: {
        color: colors.light_yellow
    }
})

export default SubmitButton;