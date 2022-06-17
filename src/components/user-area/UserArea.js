import React, { useState } from 'react';
import IconButton from '../generic/IconButton';
import Button from '../generic/Button';

import './UserArea.css';
import { ReactComponent as CartIcon } from './icons/cart.svg';
import { ReactComponent as UserIcon } from './icons/user-avatar.svg';

const UserArea = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className='UserArea'>
            <span className='UserArea-item'>
                <IconButton>
                    <CartIcon />
                </IconButton>
            </span>
            {loggedIn
            ? (
                <span className='UserArea-item'>
                    <IconButton>
                        <UserIcon />
                    </IconButton>
                </span>
            )
            : (
                <span className='UserArea-login-button'>
                    <Button text='Entrar' size='fit' action={() => setLoggedIn(true)}/>
                </span>
            )}
        </div>
    );
}

export default UserArea;