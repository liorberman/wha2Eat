import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

function Icon({name, size = 40, backgroundColor, iconColor="#fff"}) {
    return (
        <View style={{
            width: size, height: size, borderRadius: size/2, backgroundColor: backgroundColor,
            justifyContent:"center", alignItems:"center"
        }}>
            <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor}/>
        </View>
    );
}


export default Icon;