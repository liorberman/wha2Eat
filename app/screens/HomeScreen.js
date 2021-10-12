import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 

import colors from '../config/colors';
import Button from '../components/main/Button';
import Screen from '../components/main/Screen';
import QuickSearchButton from '../components/functional/QuickSearchButton';
import CustomSearchButton from '../components/functional/CustomSearchButton';

function HomeScreen(props) {
    return (
        <Screen style={styles.screen}>
            <QuickSearchButton/>
            <CustomSearchButton/>
        </Screen>
   );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor:colors.background,
        alignItems:"center",
        paddingTop:"20%"
   }
})

export default HomeScreen;