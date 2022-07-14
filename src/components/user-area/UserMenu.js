import React, { useState, useContext, useEffect } from 'react';
import FloatingBox from '../generic/FloatingBox';
import ListView from '../generic/ListView';
import UserContext from '../../context/user/UserContext';
import UserData from './UserData';

import './UserMenu.css';

const UserMenu = ({ setOpen }) => {
    const [currentPopUp, setCurrentPopUp] = useState(-1)
    const [openPopUp, setOpenPopUp] = useState(false)
    const { setToken } = useContext(UserContext)

    const popUps = [
        {
            title: 'Meus dados',
            popUp: <UserData setOpen={setOpenPopUp} />
        }
    ]

    const logout = () => {
        setToken(null)
        localStorage.removeItem('acessToken')
        setOpen(false)
    }

    return (
        <FloatingBox setOpen={setOpen}>
            <div className='UserMenu'>
                <ListView direction='column'>
                    {popUps.map((p, i) => <span key={i} className='UserMenu-item' onClick={() => { setCurrentPopUp(i); setOpenPopUp(true) }}>{p.title}</span>)}
                    <span className='UserMenu-item' onClick={logout}>Sair</span>
                </ListView>
            </div>
            {openPopUp && popUps[currentPopUp].popUp}
        </FloatingBox>
    );
}
 
export default UserMenu;