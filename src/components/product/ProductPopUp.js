import React from 'react';
import PopUp from '../generic/PopUp';
import AddToCart from './AddToCart';

import './ProductPopUp.css'
import './Product.css'
import Button from '../generic/Button';

const ProductPopUp = ({ productData, setOpen, cartAmount, setCartAmount }) => {
    const productName = productData.name
    const productImage = productData.image
    const productPrice = productData.price
    const productDiscount = productData.discount

    const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    const localePrice = formatCurrency(productPrice);
    const discountedPrice = productPrice * (1 - productDiscount);

    return (
        <PopUp setOpen={setOpen} title={productName}>
            <div className='ProductPopUp'>
                <div className='ProductPopUp-image'><img src={productImage} alt={productName}/></div>
                <div className='ProductPopUp-info'>
                    <div className='ProductPopUp-price-container'>
                        {productDiscount > 0
                            ? <>
                                <span className='Product-price-discount'>{formatCurrency(discountedPrice)}</span>
                                <span className='Product-price-original'>{localePrice}</span>
                                <span className='Product-discount ProductPopUp-discount'>-{productDiscount * 100}%</span>
                            </>
                            : <span className='Product-productPrice'>{localePrice}</span>
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
        </PopUp>
    );
}
 
export default ProductPopUp;