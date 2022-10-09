import React from 'react';

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
            <h2>This is cart</h2>
            <h2>Order Quantity: {cart.length}</h2>
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
        </div>
    );
};

export default Cart;
/*
Conditional Rendering
1.use Element if-else
*/