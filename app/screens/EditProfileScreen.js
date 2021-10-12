import React, { useState } from 'react'; 
import { View, StyleSheet, Alert } from 'react-native';
import * as Yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(Yup) // extend yup

import colors from '../config/colors';
import icons from '../config/icons';
import Screen from '../components/main/Screen';
import ImageInput from '../components/images/ImageInput';
import ListItem from '../components/lists/ListItem';
import Button from '../components/main/Button';
import Form from '../components/forms/Form';
import FormField from '../components/forms/FormField';
import SubmitButton from '../components/forms/SubmitButton';

function EditProfileScreen() {
    
    const [profilePicture, setProfilePicture] = useState(null);
    const [changeUsernameVisible, setChangeUsernameVisible] = useState(false);
    const [changePasswordVisible, setChangePasswordVisible] = useState(false);

    const validationSchema = Yup.object().shape(
        {
            new_username: Yup.string().required().min(4).label("Username"),
            password: Yup.string()
            .min(8, 'Password must be 8 characters or longer')
            .minLowercase(1, 'Password must contain a lowercase letter')
            .minUppercase(1, 'Password must contain an uppercase letter')
            .minNumbers(1, 'Password must contain a number')
            .required().label("Password"),
            password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must be the same')
        }
    )

    const handleImageDelete = () => (
        Alert.alert('', 'Are you sure you want to remove your profile image?', [
            {text:"Remove", onPress:()=> setProfilePicture(null)},
            {text:"Cancel"}
        ])
    )
    
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.image_container}>
                    <ImageInput imageUri={profilePicture} 
                    onChangeImage={(image)=> setProfilePicture(image)} 
                    continueSelecting={true}
                    style={styles.profile_picture}/>
                    <View style={styles.sub_container}>
                        <View style={styles.details_container}>
                            <ListItem title="Amnon AbuHatzeira" subTitle="amnon_ah@gmail.com"/>                   
                        </View>
                        <Button title="Remove Picture" 
                        color={colors.light_red} 
                        style={styles.delete_button}
                        onPress={handleImageDelete}
                        feedback={false}/>
                    </View>
                </View>

                <Button title={changeUsernameVisible ? "Cancel" : "Change Username"} 
                color={colors.royale_blue} 
                onPress={()=>setChangeUsernameVisible(!changeUsernameVisible)}/>

                {changeUsernameVisible && 
                    <View style={styles.form}>
                        <Form
                        initialValues={{new_username:''}}
                        validationSchema={validationSchema}
                        onSubmit={values=>console.log(values)}>
                            <FormField icon={icons.user} name="new_username" placeholder="New Username" 
                            width={250} autoCapitalize="none" autoCorrect={false}/>
                            <SubmitButton title="Submit"/>
                        </Form>    
                    </View>
                }

                <Button title={changePasswordVisible ? "Cancel" : "Change Password"} 
                onPress={()=>setChangePasswordVisible(!changePasswordVisible)}/>

                {changePasswordVisible &&
                <View style={styles.form}>
                    <Form 
                    initialValues={{password:'', password_confirmation:''}}
                    validationSchema={validationSchema}
                    onSubmit={values=>console.log(values)}>
                        <FormField icon={icons.password} name="password" placeholder="Password"
                        width={250} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}/>
                        <FormField icon={icons.confirm_password} name="password_confirmation" placeholder="Confirm Password"
                        width={250} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}/>
                        <SubmitButton title="Submit"/>
                    </Form>
                </View>
                }

                       
            </View>
        </Screen>

   );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.background,
        alignContent:"center",
    },
    container: {
        padding:5
    },
   delete_button: {
    height:35,
    width:"80%",   
    borderRadius:15
   },
   image_container: {
        flexDirection:"row",
        marginBottom:40
   },
   buttons_container: {
        marginTop:40, 
   },
   profile_picture: {
       borderRadius:120,
       
   },
   details_container: {
       flex:1
   },
   sub_container: {
       flex:1,
   },
   form: {
       alignItems:"center",
       justifyContent:"center",
       margin:10
   }
})

export default EditProfileScreen;