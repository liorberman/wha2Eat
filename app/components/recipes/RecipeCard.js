import React from 'react'; 
import { View, StyleSheet, TouchableWithoutFeedback, } from 'react-native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import icons from '../../config/icons';
import RoundImage from '../images/RoundImage';
import Heading from '../main/Heading';
import Text from '../main/Text';
import CategoryWidget from './CategoryWidget';


function RecipeCard({name, description, categories, rating, image }) {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.main_container}>
                <View style={styles.top_container}>
                    {image && <RoundImage source={image} style={styles.image}/>}
                    <View style={styles.sub_container}>
                        <Heading> {name} </Heading>
                        <View style={styles.category_container}>
                            {categories.map((category) => (<CategoryWidget name={category.name}/>))}
                        </View>
                    </View>
                </View>
                <View style={styles.bottom_container}>
                    <MaterialCommunityIcons name={icons.star} size={30} color={colors.gold}/>
                    <Text style={styles.description_text}> {rating} </Text>
                    <Text style={styles.description_text}> {description} </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: colors.dark_blue,
        borderRadius:15,
        padding:10,
        margin:10,
   },
   top_container:{
       flexDirection:"row",
    }, 
    bottom_container: {
       flexDirection:"row", alignItems:"center"
   },
   category_container: {
       flexDirection: "row",
   },
   description_text: {
        color:colors.white, 
        flex:1
   },
   image: {
        marginRight:40, 
   }
})

export default RecipeCard;