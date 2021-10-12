import React from 'react'; 
import { View, StyleSheet, FlatList } from 'react-native'; 

import icons from '../config/icons';
import colors from '../config/colors';
import Screen  from '../components/main/Screen';
import Icon  from '../components/main/Icon';
import ListItem  from '../components/lists/ListItem';

const menuItems = [
    {
        title: "Edit Profile", 
        icon: {
            name: icons.edit,
            backgroundColor: colors.blue,
        }
    },
    {
        title: "My Recipes", 
        icon: {
            name: icons.recipes,
            backgroundColor: colors.medium_green,
        },
        targetScreen:"Messages"
    },
]

function ProfileScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Amnon AbuHatzeira" subTitle="amnon_ah@gmail.com" image={require('../assets/amnon.png')}/>
            </View>
            <View style={styles.menu}>
                <FlatList data={menuItems} keyExtractor={item=>item.title} 
                renderItem={({item})=>
                <ListItem title={item.title}
                        ImageComponent={<Icon name={item.icon.name}
                        backgroundColor={item.icon.backgroundColor}/>}
                        />
                }
                />  
            </View>
            <View style={styles.container}>
                <ListItem title="Contact Us" 
                ImageComponent={<Icon name={icons.contact_us} backgroundColor={colors.orange} iconColor={colors.white}/>}/>
                <ListItem title="Logout" 
                ImageComponent={<Icon name={icons.logout} backgroundColor={colors.light_red} iconColor={colors.white}/>}/>
            </View>
        </Screen>
   );
}

const styles = StyleSheet.create({
    container: {
        marginVertical:20,
    },
    screen: {
        backgroundColor: colors.background,
    },
    menu: {
        marginTop:20,
        flex: 1
    }
})

export default ProfileScreen;