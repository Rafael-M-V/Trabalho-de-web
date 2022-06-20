import React, { useState, useEffect } from 'react';
import AddToCart from '../product/AddToCart';
import ProductPopUp from '../product/ProductPopUp';
import productsData from '../../ProductsData';
import { formatCurrency } from '../product/Product';

import './ShoppingCartItem.css'

export const mapShoppingCartItem = (item, cart, setCart) => <ShoppingCartItem key={item.id} id={item.id} originalAmount={item.amount} cart={cart} setCart={setCart} />
export const mapShoppingCartItemReadOnlyRecursive = (item, cart, setCart) => <ShoppingCartItem key={item.id} id={item.id} originalAmount={item.amount} cart={cart} setCart={setCart} readOnly={true} popUpRecursive={true} />

const ShoppingCartItem = ({ id, originalAmount, cart, setCart, readOnly = false, popUpRecursive = false }) => {
    const product = productsData.find(item => item.id === id)
    const name = product.name
    const image = product.image
    const price = product.price
    const discount = product.discount

    const [amount, setAmount] = useState(originalAmount)
    const [openPopUp, setOpenPopUp] = useState(false)
    
    useEffect(() => {
        let newCart = [...cart]
        newCart.find(i => i.id === id).amount = amount
        setCart(newCart)
    }, [amount])
    
    return amount > 0 && (
        <>
        <div className={`ShoppingCartItem ${readOnly ? 'ShoppingCartItem-read-only' : ''}`} onClick={() => setOpenPopUp(true)}>
            <span className='ShoppingCartItem-image'><img src={image} alt={name}/></span>
            <span className='ShoppingCartItem-text'>{name}</span>
            {readOnly && <span>{amount}</span>}
            <span className='ShoppingCartItem-text'>{formatCurrency(price * (1 - discount))}</span>
            {!readOnly && <AddToCart cartAmount={amount} setCartAmount={setAmount} size='standard'/>}
        </div>
        {openPopUp && !readOnly && <ProductPopUp setOpen={setOpenPopUp} productData={product} cartAmount={amount} setCartAmount={setAmount} recursive={popUpRecursive} />}
        </>
    );
}
 
export default ShoppingCartItem;