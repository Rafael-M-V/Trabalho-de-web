import React from 'react';

import './PopUp.css'
import closeSign from './icons/close.png'

const PopUp = (props) => {
    const title = props.title
    const setOpen = props.setOpen
    
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '10px';

    const close = () => {
        setOpen(false)
        document.body.style.overflow = 'unset'
        document.body.style.paddingRight = '0'
    }

    return (
        <div className='PopUp'>
            <div className='PopUp-container'>
                <div className='PopUp-header'>
                    <h2>{title}</h2>
                    <span className='PopUp-close-button' onClick={close}>
                        <img src={closeSign} alt='Fechar'/>
                    </span>
                </div>
                <div className='PopUp-content'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
 
export default PopUp;