import React, { useState, useEffect, useRef, useContext } from 'react';
import Button from '../generic/Button';
import PopUp from '../generic/PopUp';
import UserContext from '../../context/user/UserContext';

import './LoginPopUp.css';

const Login = ({ setOpen }) => {
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })
    const { setToken } = useContext(UserContext)
    const formRef = useRef()

    const onChangeEmail = (e) => {
        setLoginInfo({
            email: e.target.value,
            password: loginInfo.password
        })
    }

    const onChangePassword = (e) => {
        setLoginInfo({
            email: loginInfo.email,
            password: e.target.value
        })
    }

    const login = () => {
        if (loginInfo.email === 'admin@admin' && loginInfo.password === 'admin') {
            return { token: 'token123abc' }
        }

        alert('Usuário inválido')
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const token = login()
        if (token) {
            setToken(token)
            localStorage.setItem('acessToken', token)
            alert('Logado com sucesso')
            setOpen(false)
        }
    }

    useEffect(() => {
        const submitOnEnter = (e) => {
            if (e.key === 'Enter') {
                formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
            }
        };

        document.addEventListener('keydown', submitOnEnter)
        return () => document.removeEventListener('keydown', submitOnEnter)
    }, [])

    return (
        <PopUp title='Entrar' setOpen={setOpen}>
            <div className='LoginPopUp'>
                <form onSubmit={onSubmit} ref={formRef}>
                    <div className='LoginPopUp-form-item'>
                        <label htmlFor='email'>E-mail</label>
                        <input id='email' type='email' name='email' autoComplete='off' value={loginInfo.email} onChange={onChangeEmail} />
                    </div>
                    <div className='LoginPopUp-form-item'>
                        <label htmlFor='password'>Senha</label>
                        <input id='password' type='password' name='password' autoComplete='off' value={loginInfo.password} onChange={onChangePassword} />
                    </div>
                    <div className='LoginPopUp-form-item LoginPopUp-button'>
                        <Button text='Entrar' size='fit' action={onSubmit} />
                    </div>
                    <div className='LoginPopUp-form-item LoginPopUp-signup'>
                        Ainda não tem uma conta? <em> Cadastre-se agora </em>
                    </div>
                </form>
            </div>
        </PopUp>
    );
}
 
export default Login;