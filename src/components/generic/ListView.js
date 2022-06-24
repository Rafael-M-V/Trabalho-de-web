import React from 'react';

import './ListView.css';

const ListView = ({ children, direction }) => {
    return (
        <div className={`ListView ${direction === 'column' ? 'ListView-column' : direction === 'row' ? 'ListView-row' : ''}`}>
            {children}
        </div>
    );
}
 
export default ListView;