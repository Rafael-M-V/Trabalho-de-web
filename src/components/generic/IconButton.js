import React from 'react';

import './IconButton.css'

const IconButton = ({ children, action }) => {
    return <span className='IconButton' onClick={action}>{children}</span>;
}
 
export default IconButton;