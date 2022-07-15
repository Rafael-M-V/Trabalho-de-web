import React, { useState, useEffect, useContext } from 'react';
import PopUp from '../generic/PopUp';
import Button from '../generic/Button';
import UserContext from '../../context/user/UserContext';
import api from '../../api';

import './LoginPopUp.css';

const UserData = ({ setOpen }) => {
    const [userData, setUserData] = useState({})
    const { token } = useContext(UserContext)

    useEffect(() => {
        return async () => {
            try {
                setUserData(await api.getUserData(token))
            } catch (err) {
                console.log(err)
                alert(err)
            }
        }
    }, [token])

    const onChangeName = (e) => {
        setUserData({
            name: e.target.value,
            email: userData.email,
            password: userData.password,
            address: userData.address,
            role: userData.role
        })
    }

    const onChangeEmail = (e) => {
        setUserData({
            name: userData.name,
            email: e.target.value,
            password: userData.password,
            address: userData.address,
            role: userData.role
        })
    }

    const onChangePassword = (e) => {
        setUserData({
            name: userData.name,
            email: userData.email,
            password: e.target.value,
            address: userData.address,
            role: userData.role
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <PopUp title='Meus dados' setOpen={setOpen}>
            <div className='UserData Form'>
                <form onSubmit={onSubmit}>
                    <div className='Form-item'>
                        <label htmlFor='name'>Nome</label>
                        <input id='name' name='name' type='text' value={userData?.name} onChange={onChangeName} readOnly/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='email'>E-mail</label>
                        <input id='email' name='email' type='text' value={userData?.email} onChange={onChangeEmail} readOnly/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='password'>Senha</label>
                        <input id='password' name='password' type='password' value={userData?.password} onChange={onChangePassword} readOnly/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressStreet'>Enredeço</label>
                        <input id='addressStreet' type='text' name='addressStreet' autoComplete='off' value={userData?.address?.street} readOnly/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressHouseNumber'>Número</label>
                        <input id='addressHouseNumber' type='number' name='addressHouseNumber' autoComplete='off' value={userData?.address?.houseNumber} readOnly/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressCity'>Cidade</label>
                        <input id='addressCity' type='text' name='addressCity' autoComplete='off' value={userData?.address?.city} readOnly/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressState'>Estado</label>
                        <input id='addressState' type='text' name='addressState' autoComplete='off' value={userData?.address?.state} readOnly/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressZipCode'>CEP</label>
                        <input id='addressZipCode' type='text' name='addressZipCode' autoComplete='off' value={userData?.address?.zipCode} readOnly/>
                    </div>
                    <div className='Form-item Form-button'>
                        <Button text='Atualizar' size='fit' action={onSubmit} />
                    </div>
                </form>
            </div>
        </PopUp>
    );
}
 
export default UserData;