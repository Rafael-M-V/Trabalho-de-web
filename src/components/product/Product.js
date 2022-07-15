import React, { useEffect, useState } from 'react';
import ProductPopUp from './ProductPopUp';
import AddToCart from './AddToCart';
import IconButton from '../generic/IconButton';

import './Product.css';
import { ReactComponent as AddSign} from './icons/add-sign.svg';

export const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

export const mapProduct = (p) => <Product key={p._id} id={p._id} name={p.name} image={p.image} price={p.price} discount={p.discount}/>

const Product = ({ ...props }) => {
    const id = props.id
    const name = props.name
    const image = props.image
    const price = props.price
    const discount = props.discount

    const [open, setOpen] = useState(false)
    const [cartAmount, setCartAmount] = useState(0)
    const [mounting, setMounting] = useState(true)

    const updateCartAmount = () => {
        const localCart = JSON.parse(localStorage.getItem('cart'))

        if (localCart && localCart.length > 0) {
            const newCart = [...localCart]
            const item = newCart.find(item => item._id === id)
            if (item) {
                setCartAmount(item.amount)
            } else {
                setCartAmount(0)
            }
        } else {
            setCartAmount(0)
        }
    }

    useEffect(() => {
        setMounting(false)
        updateCartAmount()
        window.addEventListener('storage', updateCartAmount)
        return () => window.removeEventListener('storage', updateCartAmount)
    }, [])

    useEffect(() => {
        if (mounting) return

        const localCart = JSON.parse(localStorage.getItem('cart'))

        if (localCart) {
            let newCart = [...localCart]

            let product = newCart.find(item => item._id === id)

            if (product) {
                product.amount = cartAmount
            } else {
                newCart.push({ id: id, amount: 1 })
            }

            localStorage.setItem('cart', JSON.stringify(newCart))
        }

        window.dispatchEvent(new Event('storage'))
    }, [cartAmount])

    const addToCart = (e) => {
        e.stopPropagation()
        setCartAmount(cartAmount + 1)
    }

    const openPopUp = (e) => {
        if (!open) {
            setOpen(true)
        }
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
                                <IconButton action={addToCart}>
                                    <AddSign />
                                </IconButton>
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