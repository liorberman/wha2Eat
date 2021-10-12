import React from 'react'; 
import { Text } from 'react-native'; 

import styles from '../../config/styles';

function Heading({children, style, ...props}) {
    return (
        <Text style={[styles.heading_text, style]} {...props}>
            {children}
        </Text>
   );
}


export default Heading;