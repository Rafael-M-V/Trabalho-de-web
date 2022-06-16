import React from 'react';
import './Product.css'

import addSign from './icons/add-sign.png'

const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

const Product = ({ name, img, price, discount }) => {
    let localePrice = formatCurrency(price);
    return (
        <div className='Product'>
            <span className='Product-add-to-cart'><img src={addSign} alt='Adicionar ao carrinho'/></span>
            <div className='Product-image'><img src={img} alt={name}/></div>
            <div className='Product-info'>
                <div className='Product-name'>{name}</div>
                {discount > 0
                    ? <>
                        <span className='Product-price-discount'>{formatCurrency(price * (1 - discount))}</span>
                        <span className='Product-price-original'>{localePrice}</span>
                        <span className='Product-discount'>-{discount * 100}%</span>
                      </>
                    : <span className='Product-price'>{localePrice}</span>
                }
            </div>
        </div>
    );
}
 
export default Product;