import React from 'react';
import { useFormikContext } from 'formik';

import IconTextInput from '../main/IconTextInput';
import ErrorMessage from './ErrorMessage';


function FormField({name, width, ...props}) {
    
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    
    return (
        <>
            <IconTextInput 
            onChangeText={handleChange(name)} 
            onBlur={()=>setFieldTouched(name)}
            width={width}
            {...props}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default FormField;