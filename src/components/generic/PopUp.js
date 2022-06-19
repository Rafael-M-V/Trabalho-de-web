import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from './IconButton';

import './PopUp.css';
import { ReactComponent as CloseIcon } from './icons/close.svg';

const PopUp = ({ children, title, setOpen, recursive = false }) => {
    const scrollFixClass = 'PopUp-hide-scrollbar-fix'
    document.body.classList.add(scrollFixClass)

    const close = () => {
        setOpen(false)
        document.body.classList.remove(scrollFixClass)
    }

    const popup = (
        <div className='PopUp'>
            <div className='PopUp-container'>
                <div className='PopUp-header'>
                    <h2>{title}</h2>
                    <span className='PopUp-close-button'>
                        <IconButton action={close}><CloseIcon /></IconButton>
                    </span>
                </div>
                <div className='PopUp-content'>
                    {children}
                </div>
            </div>
        </div>
    )

    // const ref = useRef()
    // useEffect(() => ReactDOM.findDOMNode(ref.current).focus(), [])
    // <div className='PopUp-container' tabIndex={-1} ref={ref} onBlur={close}>

    // return 
    return recursive
        ? ReactDOM.createPortal(popup, document.getElementById('root'))
        : popup
}
 
export default PopUp;