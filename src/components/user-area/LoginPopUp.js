import React, { useState, useEffect, useRef, useContext } from 'react';
import Button from '../generic/Button';
import PopUp from '../generic/PopUp';
import UserContext from '../../context/user/UserContext';
import api from '../../api';

import './Form.css'
import './LoginPopUp.css';

const Login = ({ setOpen }) => {
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })
    const [signUp, setSignUp] = useState(false)
    const { setToken } = useContext(UserContext)
    const formRef = useRef()

    const [signUpInfoName, setSignUpInfoName] = useState('')
    const [signUpInfoEmail, setSignUpInfoEmail] = useState('')
    const [signUpInfoPassword, setSignUpInfoPassword] = useState('')
    const [signUpInfoAddressStreet, setSignUpInfoAddressStreet] = useState('')
    const [signUpInfoAddressHouseNumber, setSignUpInfoAddressHouseNumber] = useState('')
    const [signUpInfoAddressCity, setSignUpInfoAddressCity] = useState('')
    const [signUpInfoAddressState, setSignUpInfoAddressState] = useState('')
    const [signUpInfoAddressZipCode, setSignUpInfoAddressZipCode] = useState('')

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

    const onLoginSubmit = async (e) => {
        e.preventDefault()

        if (loginInfo.email === '' || loginInfo.password === '') {
            return alert('Preencha os campos de e-mail e senha')
        }

        try {
            const { token } = await api.login(loginInfo.email, loginInfo.password)
            // console.log(token)
            setToken(token)
            localStorage.setItem('acessToken', token)
            alert('Logado com sucesso')
            setOpen(false)
        } catch (err) {
            if (err.response.status === 403 || err.response.status === 404) {
                return alert('Usuário e/ou senha inválido(s)')
            }
            alert(err)
        }
    }

    const validateFormEmptyFields = function(data) {
        let valid = true

        Object.values(data).forEach(d1 => {
            if (d1 && typeof d1 === 'object') {
                Object.values(d1).forEach(d2 => {
                    if (d2 === '') {
                        valid = false
                        return
                    }
                })
            }

            if (d1 === '') {
                console.log('d1 empty')
                valid = false
                return
            }
        })

        return valid
    }

    const onSignUpSubmit = async (e) => {
        e.preventDefault()

        const signUpInfo = {
            name: signUpInfoName.trim(),
            email: signUpInfoEmail.trim(),
            password: signUpInfoPassword.trim(),
            address: {
                street: signUpInfoAddressStreet.trim(),
                houseNumber: signUpInfoAddressHouseNumber,
                city: signUpInfoAddressCity.trim(),
                state: signUpInfoAddressState.trim(),
                zipCode: signUpInfoAddressZipCode.trim()
            },
            role: 'customer'
        }

        if (!validateFormEmptyFields(signUpInfo)) {
            return alert('Por favor, preencha todos os dados')
        }

        try {
            await api.signUp(signUpInfo)
            alert('Usuário registrado com sucesso. Tente fazer o login')
            setSignUp(false)
        } catch (err) {
            if (err.response.status === 400) {
                return alert('O e-mail fornecido já está em uso')
            }
            alert('Erro: falha no registro.' + err)
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
        <PopUp title={`${signUp ? 'Cadastrar-se' : 'Entrar'}`} setOpen={setOpen}>
            {signUp ?
            (
            <div className='LoginPopUp Form'>
                <form onSubmit={onSignUpSubmit} ref={formRef}>
                    <div className='Form-item'>
                        <label htmlFor='name'>Nome</label>
                        <input id='name' type='text' name='name' autoComplete='off' value={signUpInfoName} onChange={e => setSignUpInfoName(e.target.value)} autoFocus/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='email'>E-mail</label>
                        <input id='email' type='email' name='email' autoComplete='off' value={signUpInfoEmail} onChange={e => setSignUpInfoEmail(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='password'>Senha</label>
                        <input id='password' type='password' name='password' autoComplete='off' value={signUpInfoPassword} onChange={e => setSignUpInfoPassword(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressStreet'>Enredeço</label>
                        <input id='addressStreet' type='text' name='addressStreet' autoComplete='off' value={signUpInfoAddressStreet} onChange={e => setSignUpInfoAddressStreet(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressHouseNumber'>Número</label>
                        <input id='addressHouseNumber' type='number' name='addressHouseNumber' autoComplete='off' value={signUpInfoAddressHouseNumber} onChange={e => setSignUpInfoAddressHouseNumber(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressCity'>Cidade</label>
                        <input id='addressCity' type='text' name='addressCity' autoComplete='off' value={signUpInfoAddressCity} onChange={e => setSignUpInfoAddressCity(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressState'>Estado</label>
                        <input id='addressState' type='text' name='addressState' autoComplete='off' value={signUpInfoAddressState} onChange={e => setSignUpInfoAddressState(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='addressZipCode'>CEP</label>
                        <input id='addressZipCode' type='text' name='addressZipCode' autoComplete='off' value={signUpInfoAddressZipCode} onChange={e => setSignUpInfoAddressZipCode(e.target.value)}/>
                    </div>
                    <div className='Form-item Form-button'>
                        <Button text='Cadastrar' size='fit' action={onSignUpSubmit} />
                    </div>
                    <div className='Form-item LoginPopUp-signup'>
                        Já tem uma conta? <em onClick={(e) => setSignUp(false)}> Entre aqui </em>
                    </div>
                </form>
            </div>
            )
            :
            (
            <div className='LoginPopUp Form'>
                <form onSubmit={onLoginSubmit} ref={formRef}>
                    <div className='Form-item'>
                        <label htmlFor='email'>E-mail</label>
                        <input id='email' type='email' name='email' autoComplete='off' value={loginInfo.email} onChange={onChangeEmail} autoFocus/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='password'>Senha</label>
                        <input id='password' type='password' name='password' autoComplete='off' value={loginInfo.password} onChange={onChangePassword}/>
                    </div>
                    <div className='Form-item Form-button'>
                        <Button text='Entrar' size='fit' action={onLoginSubmit} />
                    </div>
                    <div className='Form-item LoginPopUp-signup'>
                        Ainda não tem uma conta? <em onClick={(e) => setSignUp(true)}> Cadastre-se agora </em>
                    </div>
                </form>
            </div>
            )}
        </PopUp>
    );
}
 
export default Login;