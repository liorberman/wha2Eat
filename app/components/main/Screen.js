import React from 'react';
import { SafeAreaView, StyleSheet,} from 'react-native';
import Constants from 'expo-constants';
import colors from '../../config/colors';

function Screen({children, style}) {
    return (
       <SafeAreaView style={[styles.screen, style]}>          
            {children}         
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {   
        height:"100%", width:"100%",
        paddingTop: Constants.statusBarHeight+10,
        backgroundColor: colors.background, 
    },
    view: {
        flex:1,
    }
})

export default Screen;