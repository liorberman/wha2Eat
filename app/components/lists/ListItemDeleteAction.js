import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback,} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../../config/colors';
import icons from '../../config/icons';

function ListItemDeleteAction({onPress}) {
    return (
       <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={icons.trashcan} size={30} color={colors.white}/>
            </View>
       </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.error,
        width:70,
        borderRadius:12,
        justifyContent:"center",
        alignItems:"center",
        margin:5
    },
})

export default ListItemDeleteAction;