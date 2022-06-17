import React, { useState } from 'react';
import ProductPopUp from './ProductPopUp';
import AddToCart from './AddToCart';
import IconButton from '../generic/IconButton';

import './Product.css';
import { ReactComponent as AddSign} from './icons/svg/min/add-sign.svg';

const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

const Product = ({ ...props }) => {
    const [open, setOpen] = useState(false)

    const name = props.name
    const image = props.image
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
            <article className='Product' onClick={openPopUp}>
                <span className='Product-add-to-cart-container'>
                    {cartAmount === 0
                        ? (
                            <div className='Product-add-to-cart'>
                                <IconButton action={addToCart}><AddSign /></IconButton>
                            </div>
                        )
                        : <AddToCart cartAmount={cartAmount} setCartAmount={setCartAmount} size='standard'/>
                    }
                </span>
                <div className='Product-image'><img src={image} alt={name}/></div>
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
            </article>
            {open && <ProductPopUp setOpen={setOpen} productData={props} cartAmount={cartAmount} setCartAmount={setCartAmount} />}
        </>
    );
}
 
export default Product;