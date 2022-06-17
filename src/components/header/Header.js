import React from 'react';

import './Header.css';

const Header = (props) => {
    return (
        <header className='Header'>
            {props.children}
            <div>
            </div>
        </header>
    );
}
 
export default Header;