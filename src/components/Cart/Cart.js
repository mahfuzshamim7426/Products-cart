import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please Select Your Item</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <p>wow! You have selected One item</p>
            <h5>Please buy More Items</h5>
        </div>
    }
    else {
        message = <p>Thanks For Buying</p>
    }
    return (
        <div>
            <h2 className={cart.length === 2 ? 'Orange' : 'Blue'}>Order Summary</h2>
            <h2 className={`bold ${cart.length == 2 ? 'Green' : 'Yellow'}`}>Order Quantity: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Added 3 items</p> : <p>You can Add More items</p>}
            <p>and operator</p>
            {cart.length === 2 && <p>Added 2 items</p>}
            <p>Or operator</p>
            {cart.length === 4 || <p>this is not 4 items</p>}
        </div>
    );
};

export default Cart;
/*
Conditional Rendering
1.use Element in variable adn then use if-else to set values
2.ternary operation conditions ? true:false.
3.&& Operator(if conditions is true)
4.|| operator (if conditions is false)
*/