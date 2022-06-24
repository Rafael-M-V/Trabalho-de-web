import React from 'react';
import IconButton from '../generic/IconButton';

import './AddToCart.css'
import { ReactComponent as AddIcon } from './icons/add-sign.svg'
import { ReactComponent as MinusIcon } from './icons/minus-sign.svg'

const AddToCart = ({ cartAmount, setCartAmount, size }) => {
    const cartDecreaseAmount = (e) => {
        e.stopPropagation()
        if (cartAmount > 0) {
            setCartAmount(cartAmount - 1);
        }
    }

    const cartIncreaseAmount = (e) => {
        e.stopPropagation()
        setCartAmount(cartAmount + 1);
    }

    return (
        <div className={size === 'standard' ? 'AddToCart AddToCartStandardSize' : 'AddToCart AddToCartFitSize'}>
            <span className='AddToCart-increase'>
                <IconButton action={cartDecreaseAmount}><MinusIcon /></IconButton>
            </span>
            <span className='AddToCart-amount' onClick={(e) => e.stopPropagation()}>{cartAmount}</span>
            <span className='AddToCart-decrease'>
                <IconButton action={cartIncreaseAmount}><AddIcon /></IconButton>
            </span>
        </div>
    );
}
 
export default AddToCart;