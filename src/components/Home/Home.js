import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([]);

    const handleAddTocart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            alert('Item Already Selected')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('Succesfully added')
        }

    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddTocart={handleAddTocart}
                    >
                    </Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;