import React from 'react';
import IconButton from './IconButton';
import { ReactComponent as CloseIcon } from './icons/svg/min/close.svg';

import './PopUp.css';

const PopUp = (props) => {
    const title = props.title
    const setOpen = props.setOpen

    const scrollFixClass = 'PopUp-hide-scrollbar-fix'
    document.body.classList.add(scrollFixClass)

    const close = () => {
        setOpen(false)
        document.body.classList.remove(scrollFixClass)
    }

    return (
        <div className='PopUp'>
            <div className='PopUp-container'>
                <div className='PopUp-header'>
                    <h2>{title}</h2>
                    <span className='PopUp-close-button'>
                        <IconButton action={close}><CloseIcon /></IconButton>
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