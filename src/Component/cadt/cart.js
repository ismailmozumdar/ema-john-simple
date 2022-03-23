import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>caurd-Information</h4>
            <p>select item: {cart.length}</p>
        </div>
    );
};

export default Cart;