import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import IconButton from '../generic/IconButton';

import './FloatingBox.css';
import { ReactComponent as CloseIcon } from './icons/close.svg'

const FloatingBox = ({ children, setOpen, fixedElementBefore, fixedElementAfter }) => {
    const ref = useRef()
    useEffect(() => ReactDOM.findDOMNode(ref.current).focus(), [])

    return (
        <div className='FloatingBox' tabIndex={-1} ref={ref} onBlur={() => setOpen(false)}>
        {/* <div className='FloatingBox'> */}
            <div className='FloatingBox-header'>
                <div className='FloatingBox-close-button'>
                    <IconButton action={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </div>
            <div className='FloatingBox-container'>
                {fixedElementBefore && <div className='FloatingBox-fixed-top'>{fixedElementBefore}</div>}
                <div className='FloatingBox-scroll-area'>
                    <div className='FloatingBox-content'>
                        {children}
                    </div>
                </div>
                {fixedElementAfter && <div className='FloatingBox-fixed-bottom'>{fixedElementAfter}</div>}
            </div>
        </div>
    );
}
 
export default FloatingBox;