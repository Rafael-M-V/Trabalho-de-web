import React from 'react';

import './Button.css'

const Button = ({ text, action, size }) => {
    return (
        <div className={size === 'standard' ? 'Button ButtonStandardSize' : 'Button ButtonFitSize'} onClick={action}>
            <span>{text}</span>
        </div>)
    ;
}
 
export default Button;