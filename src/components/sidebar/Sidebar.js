import React from 'react';

import './Sidebar.css'

const Sidebar = (props) => {
    return <nav className='Sidebar'>{props.children} </nav>
}
 
export default Sidebar;