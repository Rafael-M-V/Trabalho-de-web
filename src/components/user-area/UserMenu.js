import React, { useState, useContext } from 'react';
import FloatingBox from '../generic/FloatingBox';
import ListView from '../generic/ListView';
import PopUp from '../generic/PopUp';
import UserContext from '../../context/user/UserContext';

import './UserMenu.css';

const UserMenu = ({ setOpen }) => {
    const [currentPopUp, setCurrentPopUp] = useState(-1)
    const [openPopUp, setOpenPopUp] = useState(false)
    const { setToken } = useContext(UserContext)

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