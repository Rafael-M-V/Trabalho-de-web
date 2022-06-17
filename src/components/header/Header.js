import React from 'react';

import './Header.css'

// import l from '../product/icons/left-arrow.png'

const Header = (props) => {
    return (
        <header className='Header'>
            {props.children}
            <div>
                {/* <span><img src={l} width='38px'/></span>
                <span><img src={l} width='38px'/></span>
                <span><img src={l} width='38px'/></span> */}
            </div>
        </header>
    );
}
 
export default Header;