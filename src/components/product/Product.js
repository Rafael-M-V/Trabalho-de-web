import React, { useState } from 'react';
import ProductPopUp from './ProductPopUp';

import './Product.css'
import addSign from './icons/add-sign.png'
import AddToCart from './AddToCart';

const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

const Product = ({ ...props }) => {
    const [open, setOpen] = useState(false)

    const name = props.name
    const img = props.img
    const price = props.price
    const discount = props.discount

    const openPopUp = (e) => {
        if (!open) {
            setOpen(true)
        }
    }

    const [cartAmount, setCartAmount] = useState(0)

    const addToCart = (e) => {
        e.stopPropagation()
        setCartAmount(cartAmount + 1)
    }

    const localePrice = formatCurrency(price);
    const discountedPrice = price * (1 - discount);

    return (
        <>
            <div className='Product' onClick={openPopUp}>
                <span className='Product-add-to-cart-container'>
                    {cartAmount === 0
                        ? <span className='Product-add-to-cart' onClick={addToCart}>
                            <img src={addSign} alt='Adicionar ao carrinho'/>
                        </span>
                        : <AddToCart cartAmount={cartAmount} setCartAmount={setCartAmount} size='standard'/>
                    }
                </span>
                <div className='Product-image'><img src={img} alt={name}/></div>
                <div className='Product-info'>
                    <div className='Product-name'>{name}</div>
                    <div className='Product-price-container'>
                        {discount > 0
                            ? <>
                                  <span className='Product-price-discount'>{formatCurrency(discountedPrice)}</span>
                                  <span className='Product-price-original'>{localePrice}</span>
                                  <span className='Product-discount'>-{discount * 100}%</span>
                              </>
                            : <span className='Product-price'>{localePrice}</span>
                        }
                    </div>
                </div>
            </div>
            {open && <ProductPopUp setOpen={setOpen} productData={props} cartAmount={cartAmount} setCartAmount={setCartAmount} />}
        </>
    );
}
 
export default Product;