import React from 'react'; 
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/colors';
import icons from '../../config/icons';
import Text from '../main/Text';
import Icon from '../main/Icon';


function ListItem({title, subTitle, image, ImageComponent, onPress, onSwipeRightActions, style, showChevrons=false}) {
    return (
        <Swipeable renderRightActions={onSwipeRightActions}>    
           <TouchableHighlight onPress={onPress} underlayColor={colors.light_grey}>
                <View style={[styles.container, style]}>
                    {ImageComponent}
                    {image && <Image source={image} style={styles.img}/>}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title} numberOfLines={1}>{title}</Text>
                       {subTitle && <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>}
                    </View>
                    {showChevrons ? <Icon name={icons.chevron} backgroundColor={colors.white} iconColor={colors.medium_grey}/> 
                       : null}
                </View>
            </TouchableHighlight>
        </Swipeable>
   );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:colors.dark_blue,
        padding:10, 
        borderRadius:12,
    },
    img: {
        borderRadius:30,
        width:60, 
        height:60
    },
    title: {
        fontSize:16, 
        fontWeight:"bold", 
        marginLeft:10,
        color:colors.light_yellow 
    }, 
    subTitle: {
        fontSize:15, 
        color:colors.light_grey, 
        marginLeft:10, 
    },
    detailsContainer: {
        marginLeft:10, 
        flex:1
    }
})

export default ListItem;