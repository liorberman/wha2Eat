import React from 'react'; 
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'; 

import colors from '../../config/colors';
import Text from '../main/Text';

function CategoryWidget({name, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>#{name}</Text>
            </View>  
        </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
    container: {
        height:30,
        backgroundColor:colors.light_green,
        borderRadius: 50,
        justifyContent:"center",
        padding:7,
        margin:5,
   },
   text: {
       color: colors.dark_blue,
   }
})

export default CategoryWidget;