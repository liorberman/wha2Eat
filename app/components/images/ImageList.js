import React, { useRef } from 'react'; 
import { View, StyleSheet, ScrollView } from 'react-native'; 
import ImageTappable from './ImageTappable';

function ImageList({imageUris = []}) {
    
    const scrollView = useRef();
    
    return (
        <View>
            <ScrollView ref={scrollView} 
                onContentSizeChange={()=> scrollView.current.scrollToEnd()} horizontal>
                <View style={styles.container}>
                    {imageUris.map((image)=> <ImageTappable imageUri={image.uri}/>)}
                </View>
            </ScrollView>
        </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
   },
})

export default ImageList;