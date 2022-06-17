import React from 'react';

import './IconButton.css'

const IconButton = (props) => {
    const action = props.action
    return <span className='IconButton' onClick={action}>{props.children}</span>;
}
 
export default IconButton;