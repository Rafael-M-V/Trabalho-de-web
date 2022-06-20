import React, { useState, useEffect } from 'react';
import FloatingBox from '../generic/FloatingBox';
import ListView from '../generic/ListView';
import PaymentPopUp from './PaymentPopUp';
import { mapShoppingCartItem } from './ShoppingCartItem';
import { formatCurrency } from '../product/Product';

import './ShoppingCart.css';
import productsData from '../../ProductsData';
import Button from '../generic/Button';

const ShoppingCart = ({ setOpen }) => {

    const [cart, setCart] = useState([])
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    const [cartEmpty, setCartEmpty] = useState(true)
    const [openPaymentPopUp, setOpenPaymentPopUp] = useState(false)

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart'))
        if (localCart) {
            setCart(localCart)
        }
    }, [])

    useEffect(() => {
        if (cart.length > 0) {
            // console.log(JSON.stringify(cart))
            localStorage.setItem('cart', JSON.stringify(cart.filter(item => item.amount > 0)))
            let products = cart.map(item => {
                let p = productsData.find(i => i.id === item.id)
                return {id: p.id, price: p.price, discount: p.discount, amount: item.amount}
            })
            setCartTotalPrice(products.reduce((acc, i) => acc + (i.amount * i.price * (1 - i.discount)), 0))
        } else {
            setCartTotalPrice(0)
        }

        setCartEmpty(cart.length === 0 || cart.filter(item => item.amount > 0).length === 0)

        window.dispatchEvent(new Event('storage'))
        // console.log(cart)
    }, [cart])

    const cleanCart = () => {
        if (cart.length === 0) {
            return
        }

        setCart([])
        // console.log(cart)
        localStorage.setItem('cart', JSON.stringify([]))
        setCartEmpty(true)
        window.dispatchEvent(new Event('storage'))
    }

    const summary = (
        <div className='ShoppingCart-summary'>
            <span className='ShoppingCart-summary-item ShoppingCart-total-price'>
                <span>Total: </span>
                <span>{formatCurrency(cartTotalPrice)}</span>
            </span>
            <span className='ShoppingCart-summary-item ShoppingCart-pay-button'>
                <Button text='Finalizar compra' action={() => setOpenPaymentPopUp(true)} size='fit' />
            </span>
            <span className='ShoppingCart-summary-item ShoppingCart-pay-button'>
                <Button text='Limpar carrinho' action={cleanCart} size='fit' />
            </span>
        </div>
    )

    return (
        <FloatingBox setOpen={setOpen} fixedElementAfter={!cartEmpty && summary} onFocus={() => setCart(JSON.parse(localStorage.getItem('cart')))}>
            <div className='ShoppingCart'>
                {!cartEmpty
                ? (
                    <ListView direction='column'>
                        {cart.map((item) => mapShoppingCartItem(item, cart, setCart))}
                    </ListView>
                )
                : (
                    <div className='ShoppingCart-message-empty'><h3>Seu carrinho está vazio!</h3></div>
                )}
            </div>
            {openPaymentPopUp && <PaymentPopUp setOpen={setOpenPaymentPopUp} totalPrice={cartTotalPrice} cart={cart} setCart={setCart} />}
        </FloatingBox>
    )
}
 
export default ShoppingCart;