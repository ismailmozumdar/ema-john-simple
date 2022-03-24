import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    let total =0;
    let shipping =0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tex = parseFloat((total * 0.1).toFixed(2))
    const GrantTotal = total + shipping + tex;
    return (
        <div className='cart'>
            <h4>caurd-Information</h4>
            <p>select item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tex: ${tex}</p>
            <h4>Grant Total: ${GrantTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;