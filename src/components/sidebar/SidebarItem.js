import React from 'react';

import './SidebarItem.css'

const SidebarItem = ({ name, icon, active, targetIndex, action }) => {
    return (
        // <span className={`SidebarItem ${active ? 'active' : ''}`} onClick={click}>
        <span className={`SidebarItem ${active ? 'active' : ''}`} onClick={() => action(targetIndex)}>
            {/* <span className={`SidebarItem-name ${active ? 'active' : ''}`}> */}
                {name}
            {/* </span> */}
        </span>)
    ;
}
 
export default SidebarItem;