import React, { useState } from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import icons from '../config/icons';
import default_styles from '../config/styles';
import Screen from '../components/main/Screen';
import Heading from '../components/main/Heading';
import Text from '../components/main/Text';
import CategoryWidget from '../components/recipes/CategoryWidget';
import AllergyIndicator from '../components/recipes/AllergyIndicator';
import ImageList from '../components/images/ImageList';

const init_comments = [
    {
        user: 'Amnon Abuhatzeira',
        content: 'Wow this was so good!',
        image: require('../assets/amnon.png')
    },
    {
        user: 'Ching Chong Chang',
        content: 'Omg this was so delicious! Omg this was so delicious! Omg this was so delicious! Omg this was so delicious! Omg this was so delicious!',
        image: require('../assets/chingchong.png')
    }
]
const init_user = {
    user_id: 1,
    name: 'Amnon Abuhatzeira'
}
const init_ingredients = [
    {
        name: 'Rice',
        amount: 200,
        units: 'grams'
    },
    {
        name: 'Chicken',
        amount: 0.5,
        units: 'kg'
    },
    {
        name: 'Masala',
        amount: 40,
        units: 'grams'
    },
    {
        name: 'Tomatoes',
        amount: 2,
        units: 'units'
    }
]
const init_categories = [
    {name: "Spicy"},
    {name: "Indian"},
    {name:"Rice"}
]
const init_instructions = [
    "Cook the rice",
    "Fry the chicken with the spices",
    "Cook with the tomatoes",
    "Mix everything and stir"
]
const init_images = [
    {uri: require('../assets/chicken_masala.jpg')},
    {uri: require('../assets/chicken_masala2.jpeg')},
]
const init_title = "Chicken Masala";
const init_description = "A timeless classic from the indian cuisine!"
const init_rating = 4.7;

function RecipeScreen({recipe_id}) {
    
    const [user, setUser] = useState(init_user);
    const [title, setTitle] = useState(init_title);
    const [description, setDescription] = useState(init_description);
    const [images, setImages] = useState(init_images);
    const [comments, setComments] = useState(init_comments);
    const [ingredients, setIngredients] = useState(init_ingredients);
    const [categories, setCategories] = useState(init_categories);
    const [instructions, setInstructions] = useState(init_instructions);
    const [rating, setRating] = useState(init_rating);
    const [isVegan, setIsVegan] = useState(false);
    const [isGlutenfree, setIsGlutenfree] = useState(false);

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.heading_container}>
                    <Heading style={styles.heading}> {title} <AllergyIndicator vegan={isVegan} glutenfree={isGlutenfree}/> </Heading>
                    <View style={styles.details_container}>
                        <View style={styles.rating_container}>
                            <MaterialCommunityIcons name={icons.star} size={30} color={colors.gold}/>
                            <Text style={default_styles.light_text_white}> {rating} </Text>
                        </View>
                        <Text style={default_styles.light_text_grey}> Uploaded by: {user.name} </Text>
                    </View>
                    <Text style={default_styles.light_text_yellow}> {description} </Text>
                    <View style={styles.categories_container}>
                        {categories.map((category) => (<CategoryWidget name={category.name}/>))}
                    </View>
                </View>
                {images && <ImageList imageUris={images}/>}
                <View style={styles.middle_container}>
                
                </View>
            </View>
        </Screen>
   );
}

const styles = StyleSheet.create({
    container: {

   },
   screen: {
       backgroundColor: colors.background
   },
   heading: {
        fontSize:22
   },
   heading_container: {
        backgroundColor: colors.dark_blue,
        alignItems:"center",
        justifyContent:"center"
   },
   middle_container: {
    backgroundColor: colors.dark_blue,
    alignItems:"center",
    justifyContent:"center"
    },
   categories_container: {
       flexDirection: "row",
       margin:5,
       alignItems:"center"
   },
   details_container: {
       flexDirection:"row",
       padding:5,
       justifyContent:"center",
       alignItems:"center"
   },
    rating_container: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    save_button: {
        width:"33%"
    },
    rate_button: {
        width:"33%"
    }
})

export default RecipeScreen;