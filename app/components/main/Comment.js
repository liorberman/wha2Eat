import React from 'react'; 
import { StyleSheet } from 'react-native'; 

import colors from '../../config/colors';
import ListItem from '../lists/ListItem';

function Comment({user, content, image}) {
    return (
        <ListItem title={user} subTitle={content} image={image} style={styles.container}/>
   );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background
   },
})

export default Comment;