import React, { useState } from 'react';
import FloatingBox from '../generic/FloatingBox';
import ListView from '../generic/ListView';
import ManageProduct from './ManageProduct';

import './UserMenu.css';

const UserMenu = ({ setOpen }) => {
    const [currentPopUp, setCurrentPopUp] = useState(-1)
    const [openPopUp, setOpenPopUp] = useState(false)

    const popUps = [
        {
            title: 'Gerenciar produtos',
            popUp: <ManageProduct setOpen={setOpenPopUp} />
        }
    ]

    return (
        <FloatingBox setOpen={setOpen}>
            <div className='UserMenu'>
                <ListView direction='column'>
                    {popUps.map((p, i) => <span key={i} className='UserMenu-item' onClick={() => { setCurrentPopUp(i); setOpenPopUp(true) }}>{p.title}</span>)}
                </ListView>
            </div>
            {openPopUp && popUps[currentPopUp].popUp}
        </FloatingBox>
    );
}
 
export default UserMenu;