import {Platform} from 'react-native';

import colors from './colors';

export default {
    colors,
    logo_small: {
        width:100, 
        height:100, 
        margin:10, 
        alignSelf:"center",
    },
    logo_medium: {
        width:200, 
        height:220, 
        margin:10,
        alignSelf:"center",
    },
    logo_big: {
        width:250, 
        height:270, 
        margin:10, 
        alignSelf:"center",
    },
    simple_text: {
        fontSize:16, 
        color: colors.dark_grey,
        textAlign:"center",
        fontFamily: Platform.OS === "android"? "Roboto" : "Avenir",     
    }, 
    light_text_white: {
        fontSize:16, 
        color: colors.white,
        textAlign:"center",
        fontFamily: Platform.OS === "android"? "Roboto" : "Avenir",
    },
    light_text_grey: {
        fontSize:16, 
        color: colors.light_grey,
        textAlign:"center",
        fontFamily: Platform.OS === "android"? "Roboto" : "Avenir",
    },
    light_text_yellow: {
        fontSize:16, 
        color: colors.light_yellow,
        textAlign:"center",
        fontFamily: Platform.OS === "android"? "Roboto" : "Avenir",
    },
    error_text: {
        fontSize:15, 
        color: colors.error,
        fontFamily: Platform.OS === "android"? "Roboto" : "Avenir", 
        fontWeight: "bold"    
    },
    heading_text: {
        fontSize:18,
        color: colors.white,
        fontFamily: Platform.OS === "android"? "Roboto" : "Avenir", 
        fontWeight: "bold",
        fontStyle:"italic",
        margin:5
    }
}