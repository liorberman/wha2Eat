import React from 'react'; 
import { View, StyleSheet, ImageBackground, Image,} from 'react-native'; 

import colors from '../config/colors';
import Button from '../components/main/Button';
import defaultStyles from '../config/styles';


function WelcomeScreen() {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background5.jpg')}
        blurRadius={2}>
            <View style={styles.logo_container}>
                <Image source={require('../assets/logo_with_text.png')} style={defaultStyles.logo_medium}/>
            </View>
            <View style={styles.buttons_container}>
                <Button title="Login" color={colors.royale_blue}/>
            </View>  
            <View style={styles.buttons_container}>
                <Button title="Signup"/>
            </View>  
        </ImageBackground>
   );
}

const styles = StyleSheet.create({
    background: {
        flex:1, 
        justifyContent:"flex-end",
        alignItems:"center",
        paddingBottom:40
   },
   logo_container: {
        position: "absolute",
        top:70,
        alignItems:"center"
   },
   buttons_container: {
        padding:10, 
        width:"80%",
   },
   text: {
       color: "white",
       fontSize:20,
       fontStyle:"italic"
   }
})

export default WelcomeScreen;