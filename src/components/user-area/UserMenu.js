import React, { useState } from 'react';
import FloatingBox from '../generic/FloatingBox';
import ListView from '../generic/ListView';
import PopUp from '../generic/PopUp';

import './UserMenu.css';

const UserMenu = ({ setOpen }) => {
    const [currentPopUp, setCurrentPopUp] = useState(-1)
    const [openPopUp, setOpenPopUp] = useState(false)

    const popUps = [
        {
            title: 'Minhas compras',
            popUp: <PopUp title={'Minhas compras'} setOpen={setOpenPopUp}>Suas compras</PopUp>
        },
        {
            title: 'Meus dados',
            popUp: <PopUp title={'Meus dados'} setOpen={setOpenPopUp}>Seus dados</PopUp>
        },
        {
            title: 'Meus meios de pagamento',
            popUp: <PopUp title={'Meus meios de pagamento'} setOpen={setOpenPopUp}>Seus meios de pagamento</PopUp>
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