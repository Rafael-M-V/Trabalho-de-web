import React from 'react';
import PopUp from '../generic/PopUp';
import ListView from '../generic/ListView';
import { mapShoppingCartItemReadOnlyRecursive } from './ShoppingCartItem';
import { formatCurrency } from '../product/Product';
import { ReactComponent as CreditCardIcon } from './icons/user-avatar.svg'

import './PaymentPopUp.css';
import IconButton from '../generic/IconButton';

const PaymentPopUp = ({ children, setOpen, totalPrice, cart, setCart }) => {
    return (
        <PopUp title='Finalizar compra' setOpen={setOpen}>
            <div className='PaymentPopUp'>
                <div className='PaymentPopUp-cart'>
                    <ListView direction='column'>
                        {cart.map((item) => mapShoppingCartItemReadOnlyRecursive(item, cart, setCart))}
                    </ListView>
                </div>
                <span className='PaymentPopUp-price-total'>Total: {formatCurrency(totalPrice)}</span>
                <div className='PaymentPopUp-select-mean'>
                    <h3>Selecione o meio de pagamento:</h3>
                    <div className='PaymentPopUp-select-mean-container'>
                        <span className='PaymentPopUp-select-mean-item'>
                            <IconButton>
                                <CreditCardIcon />
                            </IconButton>
                        </span>
                        <span className='PaymentPopUp-select-mean-item'>
                            <IconButton>
                                <CreditCardIcon />
                            </IconButton>
                        </span>
                        <span className='PaymentPopUp-select-mean-item'>
                            <IconButton>
                                <CreditCardIcon />
                            </IconButton>
                        </span>
                    </div>
                </div>
            </div>
        </PopUp>
    );
}
 
export default PaymentPopUp;