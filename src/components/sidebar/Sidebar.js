import React from 'react';

import './Sidebar.css';

const Sidebar = ({ children }) => {
    return (
        <nav className='Sidebar'>
            {children}
        </nav>
    )
}
 
export default Sidebar;