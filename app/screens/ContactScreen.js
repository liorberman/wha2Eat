import React from 'react'; 
import { View, StyleSheet, Alert } from 'react-native'; 
import * as Yup from 'yup';

import icons from '../config/icons';
import colors from '../config/colors';
import Screen from '../components/main/Screen';
import Heading from '../components/main/Heading';
import Text from '../components/main/Text';
import Form from '../components/forms/Form';
import FormField from '../components/forms/FormField';
import SubmitButton from '../components/forms/SubmitButton';


const validationSchema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        feedback: Yup.string().required().label("Feedback")
    }
)

function ContactScreen() {
        
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Heading style={styles.heading}> Hello Amnon! </Heading>
                <View style={styles.text_container}>
                    <Text style={styles.text}> 
                        It's very important for us to hear your feedback.
                        Please feel free to share your opinion or experience about using our app, any problems 
                        you may have found, or any other subject.
                        However, please refrain from using inproper language.
                    </Text>
                </View>
                <Form initialValues={{email: '', feedback: ''}}
                    validationSchema={validationSchema}
                    onSubmit={()=>Alert.alert('Thank you for your feedback')}>
                    <FormField icon={icons.email} name="email" placeholder="Email" width={250}
                        autoCapitalize="none" autoCorrect={false} keyboardType="email-address"/>
                    <FormField icon={icons.message} name="feedback" placeholder="Your feedback here"
                        width={250} numberOfLines={8} autoCapitalize="none" autoCorrect={false}/>
                    <SubmitButton title="Submit" color={colors.royale_blue} textStyle={{color:colors.white}}/>
                </Form>
            </View>
        </Screen>
   );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor:colors.background,
   },
   container: {
        margin:10,
        alignItems:"center",
        justifyContent:"center"  
   },
   heading: {
       color: colors.dark_blue,
       fontSize:22,
   },
   text: {
        marginBottom:15,
        color:colors.light_yellow
   },
   text_container:{
        borderRadius:15,
        backgroundColor:colors.dark_blue,
        marginLeft:8,
        marginRight:8,
        marginBottom:8,
        padding:2
   },
   submit_button: {
        borderTopRightRadius:25,
        borderBottomLeftRadius:25,
        borderTopLeftRadius:25,
        width:"50%",
        margin:15,
   }
})

export default ContactScreen;