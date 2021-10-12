import React from 'react'; 
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import icons from '../../config/icons';
import colors from '../../config/colors';

function AllergyIndicator({vegan=false, glutenfree=false}) {
    
    const informAboutAllergens = () => {
        const message = "";
        vegan? message += "This recipe is vegan!\n" : null;
        glutenfree? message += "This recipe is gluten-free!" : null;
        if (message != "") {
            Alert.alert(message);
        }
    }
    
    if (vegan || glutenfree) 
    return ( 
        <TouchableWithoutFeedback onPress={informAboutAllergens}>
            <View style={styles.container}>
                {vegan && <MaterialCommunityIcons name={icons.vegan} size={25} color={colors.dark_green}/>}
                {glutenfree && <MaterialCommunityIcons name={icons.gluten_free} size={25} color={colors.orange}/>}
            </View>
        </TouchableWithoutFeedback>
    );
    return null;
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        margin:2
   },
})

export default AllergyIndicator;