import React from 'react';

import './Button.css'

const Button = ({ text, action, size }) => {
    return (
        <div className={size === 'standard' ? 'Button ButtonStandardSize' : 'Button ButtonFitSize'} onClick={action}>
            {text}
        </div>)
    ;
}
 
export default Button;