import React from 'react'; 
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'; 

import colors from '../../config/colors';
import Text from '../main/Text';

function IngredientWidget({name, amount, units, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.heading}>{name}</Text>
                <Text style={styles.info}> {amount} {units}</Text>
            </View>  
        </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
    container: {
        height:30,
        backgroundColor:colors.dark_orange,
        borderRadius: 50,
        justifyContent:"center",
        padding:7,
        margin:5,
   },
   heading: {
       color: colors.white,
       fontSize:14
   },
   info: {
       color: colors.white,
       fontSize: 11
   }

})

export default IngredientWidget;