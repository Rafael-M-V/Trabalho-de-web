import React, { useState, useEffect, useContext } from 'react';
import IconButton from '../generic/IconButton';
import Button from '../generic/Button';
import ShoppingCart from './ShoppingCart';
import UserMenu from './UserMenu';
import AdminMenu from './AdminMenu';
import LoginPopUp from './LoginPopUp';
import UserContext from '../../context/user/UserContext';

import './UserArea.css';
import { ReactComponent as CartIcon } from './icons/cart.svg';
import { ReactComponent as UserIcon } from './icons/user-avatar.svg';
import { ReactComponent as AdminIcon } from './icons/admin.svg';

const UserArea = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [openUserMenu, setOpenUserMenu] = useState(false)
    const [openAdminMenu, setOpenAdminMenu] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    const { token, role } = useContext(UserContext)

    useEffect(() => {
        if (token)
            setLoggedIn(true)
        if (role)
            setAdmin(true)
    }, [token, role])

    const onClickOpenUserMenu = () => {
        setOpenUserMenu(true)
        setOpenAdminMenu(false)
        setOpenCart(false)
    }

    const onClickOpenAdminMenu = () => {
        setOpenAdminMenu(true)
        setOpenUserMenu(false)
        setOpenCart(false)
    }

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
                <>
                    <span className={`UserArea-item ${openUserMenu ? 'UserArea-item-show' : ''}`} onClick={onClickOpenUserMenu}>
                        <IconButton>
                            <UserIcon />
                        </IconButton>
                    </span>
                    {admin &&
                        <span className={`UserArea-item ${openAdminMenu ? 'UserArea-item-show' : ''}`} onClick={onClickOpenAdminMenu}>
                            <IconButton>
                                <AdminIcon />
                            </IconButton>
                        </span>
                    }
                </>
            )
            : (
                <span className='UserArea-login-button'>
                    <Button text='Entrar' size='fit' action={() => setOpenLogin(true)}/>
                </span>
            )}
            {openCart && <ShoppingCart setOpen={setOpenCart} />}
            {openUserMenu && <UserMenu setOpen={setOpenUserMenu} />}
            {openAdminMenu && <AdminMenu setOpen={setOpenAdminMenu} />}
            {openLogin && <LoginPopUp setOpen={setOpenLogin} />}
        </div>
    );
}

export default UserArea;