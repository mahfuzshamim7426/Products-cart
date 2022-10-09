import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>This is cart</h2>
            <h2>Order Quantity: {cart.length}</h2>
        </div>
    );
};

export default Cart;