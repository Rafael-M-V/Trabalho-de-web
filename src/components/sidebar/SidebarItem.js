import React from 'react';

import './SidebarItem.css'

const SidebarItem = ({ name, icon, active, targetIndex, action }) => {
    return (
        <span className={`SidebarItem ${active ? 'active' : ''}`} onClick={() => action(targetIndex)} onKeyDown={(e) => e.key === 'Enter' && action(targetIndex)} tabIndex='0'>
            {name}
        </span>)
    ;
}
 
export default SidebarItem;