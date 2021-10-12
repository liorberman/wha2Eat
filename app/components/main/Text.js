import React from 'react';
import { Text as TXT } from 'react-native';

import styles from '../../config/styles';

function Text({children, style, ...props}) {
    return (
        <TXT style={[styles.simple_text, style]} {...props}>
            {children}
        </TXT>
    );
}


export default Text;