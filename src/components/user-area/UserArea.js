import React, { useState, useEffect, useContext } from 'react';
import IconButton from '../generic/IconButton';
import Button from '../generic/Button';
import ShoppingCart from './ShoppingCart';
import UserMenu from './UserMenu';
import LoginPopUp from './LoginPopUp';
import UserContext from '../../context/user/UserContext';

import './UserArea.css';
import { ReactComponent as CartIcon } from './icons/cart.svg';
import { ReactComponent as UserIcon } from './icons/user-avatar.svg';

const UserArea = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [openUserMenu, setOpenUserMenu] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    const { token } = useContext(UserContext)

    useEffect(() => {
        setLoggedIn(token)
    }, [token])

    return (
        <div className='UserArea'>
            {/* <span className={`UserArea-item ${openCart ? 'UserArea-item-show' : ''}`} onClick={() => setOpenCart(true)}> */}
            <span className={`UserArea-item ${openCart ? 'UserArea-item-show' : ''}`}>
                <IconButton>
                    <CartIcon />
                </IconButton>
            </span>
            {loggedIn
            ? (
                <span className={`UserArea-item ${openUserMenu ? 'UserArea-item-show' : ''}`} onClick={() => setOpenUserMenu(true)}>
                    <IconButton>
                        <UserIcon />
                    </IconButton>
                </span>
            )
            : (
                <span className='UserArea-login-button'>
                    <Button text='Entrar' size='fit' action={() => setOpenLogin(true)}/>
                </span>
            )}
            {openCart && <ShoppingCart setOpen={setOpenCart} />}
            {openUserMenu && <UserMenu setOpen={setOpenUserMenu} />}
            {openLogin && <LoginPopUp setOpen={setOpenLogin} />}
        </div>
    );
}

export default UserArea;