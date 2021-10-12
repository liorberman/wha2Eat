import React from 'react';

import styles from '../../config/styles';
import Text from '../main/Text';

function ErrorMessage({ error, visible }) {
    if (!visible || !error)
        return null;
    
    return (
        <Text style={styles.error_text}> {error} </Text>
    );
}


export default ErrorMessage;