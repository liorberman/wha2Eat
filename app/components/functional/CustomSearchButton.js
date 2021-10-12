import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import icons from '../../config/icons';
import colors from '../../config/colors';
import Heading from '../main/Heading';
import Text from '../main/Text';
import Button from '../main/Button';

function CustomSearchButton(props) {
    return (
        <View style={styles.container}>
            <View style={styles.heading_container}>
                <MaterialCommunityIcons name={icons.custom_search} color={colors.white} size={40}/>
                <Heading style={styles.heading}> Custom Search </Heading>
            </View>
            <Text style={styles.text}> Search for custom recipes using ANY ingredients! </Text>
            <Button title="Go" color={colors.dark_blue} style={styles.button} textStyle={styles.button_text}/>
        </View>
   );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.royale_blue,
        borderRadius:15,
        alignItems:"center",
        width:"85%",
        elevation:20,
        marginTop:40,
   },
    text: {
        color: colors.light_yellow,
        fontSize: 16,
        textAlign:"center"
    },
    heading: {
            marginLeft:30,
            fontSize:22 
    },
    button: {
        width:"30%",
        margin:15
    },
    button_text: {
        fontSize:20
    },
    heading_container: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"baseline",
        margin:10,
        padding:5
   }
})

export default CustomSearchButton;