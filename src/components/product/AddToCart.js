import React from 'react';

import './AddToCart.css'
import addSign from './icons/add-sign.png'
import minusSign from './icons/minus-sign.png'

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
            <span className='AddToCart-increase' onClick={cartDecreaseAmount}>
                <img src={minusSign} alt='Adicionar ao carrinho'/>
            </span>
            <span className='AddToCart-amount' onClick={(e) => e.stopPropagation()}>{cartAmount}</span>
            <span className='AddToCart-decrease' onClick={cartIncreaseAmount}>
                <img src={addSign} alt='Adicionar ao carrinho'/>
            </span>
        </div>
    );
}
 
export default AddToCart;