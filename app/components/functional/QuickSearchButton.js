import React from 'react'; 
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import icons from '../../config/icons';
import Heading from '../main/Heading';
import Text from '../main/Text';
import Button from '../main/Button';

function QuickSearchButton(props) {
    return (
    <View style={styles.container}>
        <View style={styles.heading_container}>
            <MaterialCommunityIcons name={icons.search} color={colors.white} size={40}/>
            <Heading style={styles.heading}> Quick Search </Heading>
        </View>
        <Text style={styles.text}> Search for any kind of recipe you want! </Text>
        <TextInput backgroundColor={colors.white} 
        style={styles.input} 
        numberOfLines={3}
        autoCapitalize={false}
        />
        <Button title="Go" color={colors.royale_blue} style={styles.button} textStyle={styles.button_text}/>
    </View>
   );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.dark_blue,
        borderRadius:15,
        alignItems:"center",
        width:"85%",
        elevation:20
   },
   text: {
       color: colors.light_yellow,
       fontSize: 16
   },
   heading: {
        marginLeft:30,
        fontSize:22 
   },
   input: {
       borderRadius: 20,
       width: "90%",
       margin:10
   },
   button: {
        width:"30%",
        marginTop:5,
        marginBottom:15
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

export default QuickSearchButton;