import React from 'react';
import UserArea from '../user-area/UserArea';

import './Header.css';

const Header = (props) => {
    return (
        <header className='Header'>
            {props.children}
            <UserArea />
        </header>
    );
}
 
export default Header;