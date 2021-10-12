import { View, StyleSheet, TextInput,} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

function IconTextInput({icon, width = '95%', placeholder, ...otherProps}) {
       
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium_grey} style={styles.icon}/>}
            <TextInput style={styles.textInput} placeholderTextColor={colors.medium_grey} placeholder={placeholder} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.light_grey,
        borderTopLeftRadius:20,
        borderBottomRightRadius:25,
        flexDirection:"row",
        padding:10,
        margin:5,
    },
    textInput: {
        fontSize:16,
        color: colors.dark_grey,
        height:"100%", width:"100%",
        textAlign:"left",
        
    },
    icon: {
        marginRight:10
    }    
})

export default IconTextInput;