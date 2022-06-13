import React from 'react';
import PopUp from '../generic/PopUp';
import AddToCart from './AddToCart';

import './ProductPopUp.css'
import './Product.css'
import Button from '../generic/Button';

const ProductPopUp = ({ productData, setOpen, cartAmount, setCartAmount }) => {
    const name = productData.name
    const img = productData.img
    const price = productData.price
    const discount = productData.discount

    const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    const localePrice = formatCurrency(price);
    const discountedPrice = price * (1 - discount);

    const popUp = (
        <div className='ProductPopUp'>
            <div className='ProductPopUp-image'><img src={img} alt={name}/></div>
            <div className='ProductPopUp-info'>
                <div className='ProductPopUp-price-container'>
                    {discount > 0
                        ? <>
                            <span className='Product-price-discount'>{formatCurrency(discountedPrice)}</span>
                            <span className='Product-price-original'>{localePrice}</span>
                            <span className='Product-discount ProductPopUp-discount'>-{discount * 100}%</span>
                          </>
                        : <span className='Product-price'>{localePrice}</span>
                    }
                </div>
                <div className='ProductPopUp-add-to-cart-container'>
                    {cartAmount > 0
                    ? <AddToCart cartAmount={cartAmount} setCartAmount={setCartAmount} size='fit' />
                    : <Button text='Adicionar' action={() => setCartAmount(1)} size='fit' />
                    }
                </div>
            </div>
        </div>
    )

    return (
        <PopUp setOpen={setOpen} title={name} content={popUp} />
    );
}
 
export default ProductPopUp;